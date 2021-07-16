/**
 * @brief This plugin hooks into the telemetry API for ETS2, and writes it to a shm file.
 */

#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <stdarg.h>
#include <string.h>
#include <sys/mman.h>
#include <unistd.h>
#include <fcntl.h>

#include "defs.h"

#define UNUSED(x)

/**
 * @brief Tracking of paused state of the game.
 */
bool output_paused = true;

/**
 * @brief Useful telemetry data.
 */
telemetry_state_t telemetry;

/**
 * @brief Time since last mmap
 */
scs_timestamp_t elapsed = 0;
scs_timestamp_t last_timestamp = -1;
static scs_timestamp_t update_interval = 5e5;	// every 0.5s

/**
 * @brief Opaque pointer to use for mmap
 */
void* mapped_region = NULL;
size_t MAP_SIZE = -1;

/**
 * @brief Function writing message to the game internal log.
 */
scs_log_t game_log = NULL;

// Handling of individual events.

SCSAPI_VOID telemetry_frame_start(const scs_event_t UNUSED(event), const void *const event_info, const scs_context_t UNUSED(context))
{
	const struct scs_telemetry_frame_start_t* const info = static_cast<const scs_telemetry_frame_start_t *>(event_info);

	if (last_timestamp == static_cast<scs_timestamp_t>(-1)) {
		last_timestamp = 0;
	}

	// The timer might be sometimes restarted (e.g. after load) while
	// we want to provide continuous time on our output.
	if (info->flags & SCS_TELEMETRY_FRAME_START_FLAG_timer_restart) {
		last_timestamp = 0;
	}

	elapsed += info->paused_simulation_time - last_timestamp;
	last_timestamp = info->paused_simulation_time;
}

SCSAPI_VOID telemetry_frame_end(const scs_event_t UNUSED(event), const void *const UNUSED(event_info), const scs_context_t UNUSED(context))
{
	if (output_paused) {
		return;
	}

	// We only copy once per interval, to prevent loads of unneccessary writes
	if (elapsed < update_interval) {
		return;
	}

	elapsed -= update_interval;

	// Copy telemetry data, after zeroing dest
	memset(mapped_region, 0, MAP_SIZE);
	memcpy(mapped_region, &telemetry, sizeof(telemetry));
}

SCSAPI_VOID telemetry_pause(const scs_event_t event, const void *const UNUSED(event_info), const scs_context_t UNUSED(context))
{
	output_paused = (event == SCS_TELEMETRY_EVENT_paused);
}

// Handling of individual channels.

SCSAPI_VOID telemetry_store_dplacement(const scs_string_t name, const scs_u32_t index, const scs_value_t *const value, const scs_context_t context)
{
	if (!context) {
		game_log(SCS_LOG_TYPE_error, "Local radio: no context!");
		return;
	}
	if (!value) {
		game_log(SCS_LOG_TYPE_error, "Local radio: no value!");
		return;
	}
	if (value->type != SCS_VALUE_TYPE_dplacement) {
		game_log(SCS_LOG_TYPE_error, "Local radio: value wrong type!");
		return;
	}

	scs_value_dplacement_t *const placement = static_cast<scs_value_dplacement_t *>(context);
	*placement = value->value_dplacement;
}

SCSAPI_VOID telemetry_store_bool(const scs_string_t name, const scs_u32_t index, const scs_value_t *const value, const scs_context_t context)
{
	if (!context) {
		game_log(SCS_LOG_TYPE_error, "Local radio: no context!");
		return;
	}
	if (!value) {
		game_log(SCS_LOG_TYPE_error, "Local radio: no value!");
		return;
	}
	if (value->type != SCS_VALUE_TYPE_bool) {
		game_log(SCS_LOG_TYPE_error, "Local radio: value wrong type!");
		return;
	}

	scs_value_bool_t *const setting = static_cast<scs_value_bool_t *>(context);
	*setting = value->value_bool;
}


/**
 * @brief Telemetry API initialization function.
 * 
 * ENTRY POINT.
 *
 * See scssdk_telemetry.h
 */
SCSAPI_RESULT scs_telemetry_init(const scs_u32_t version, const scs_telemetry_init_params_t *const params)
{
	// We currently support only one version.

	if (version != SCS_TELEMETRY_VERSION_CURRENT) {
		return SCS_RESULT_unsupported;
	}

	const scs_telemetry_init_params_v101_t *const version_params = static_cast<const scs_telemetry_init_params_v101_t *>(params);

	// Remember the function we will use for logging.
	game_log = version_params->common.log;
	game_log(SCS_LOG_TYPE_message, "Local radio: begin initialization");

	// Check application version. Note that this example uses fairly basic channels which are likely to be supported
	// by any future SCS trucking game however more advanced application might want to at least warn the user if there
	// is game or version they do not support.
	if (strcmp(version_params->common.game_id, SCS_GAME_ID_EUT2) == 0) {

		// Below the minimum version there might be some missing features (only minor change) or
		// incompatible values (major change).

		const scs_u32_t MINIMAL_VERSION = SCS_TELEMETRY_EUT2_GAME_VERSION_1_00;
		if (version_params->common.game_version < MINIMAL_VERSION) {
			// Might behave incorrectly
		}

		// Future versions are fine as long the major version is not changed.

		const scs_u32_t IMPLEMENTED_VERSION = SCS_TELEMETRY_EUT2_GAME_VERSION_CURRENT;
		if (SCS_GET_MAJOR_VERSION(version_params->common.game_version) > SCS_GET_MAJOR_VERSION(IMPLEMENTED_VERSION)) {
			// Might behave incorrectly
		}
	}
	else if (strcmp(version_params->common.game_id, SCS_GAME_ID_ATS) == 0) {

		// Below the minimum version there might be some missing features (only minor change) or
		// incompatible values (major change).

		const scs_u32_t MINIMAL_VERSION = SCS_TELEMETRY_ATS_GAME_VERSION_1_00;
		if (version_params->common.game_version < MINIMAL_VERSION) {
			// Might behave incorrectly
		}

		// Future versions are fine as long the major version is not changed.

		const scs_u32_t IMPLEMENTED_VERSION = SCS_TELEMETRY_ATS_GAME_VERSION_CURRENT;
		if (SCS_GET_MAJOR_VERSION(version_params->common.game_version) > SCS_GET_MAJOR_VERSION(IMPLEMENTED_VERSION)) {
			// Might behave incorrectly
		}
	}
	else {
		// Unsupported game
	}

	// Register for events. Note that failure to register those basic events
	// likely indicates invalid usage of the api or some critical problem. As the
	// example requires all of them, we can not continue if the registration fails.

	const bool events_registered =
		(version_params->register_for_event(SCS_TELEMETRY_EVENT_frame_start, telemetry_frame_start, NULL) == SCS_RESULT_ok) &&
		(version_params->register_for_event(SCS_TELEMETRY_EVENT_frame_end, telemetry_frame_end, NULL) == SCS_RESULT_ok) &&
		(version_params->register_for_event(SCS_TELEMETRY_EVENT_paused, telemetry_pause, NULL) == SCS_RESULT_ok) &&
		(version_params->register_for_event(SCS_TELEMETRY_EVENT_started, telemetry_pause, NULL) == SCS_RESULT_ok)
	;
	if (! events_registered) {

		// Registrations created by unsuccessfull initialization are
		// cleared automatically so we can simply exit.

		version_params->common.log(SCS_LOG_TYPE_error, "Local radio: unable to register event callbacks");
		return SCS_RESULT_generic_error;
	}

	// Register for channels. The channel might be missing if the game does not support
	// it (SCS_RESULT_not_found) or if does not support the requested type
	// (SCS_RESULT_unsupported_type). For purpose of this example we ignore the failues
	// so the unsupported channels will remain at theirs default value.
	version_params->register_for_channel(SCS_TELEMETRY_TRUCK_CHANNEL_world_placement, SCS_U32_NIL, SCS_VALUE_TYPE_dplacement, SCS_TELEMETRY_CHANNEL_FLAG_none, telemetry_store_dplacement, &telemetry.world_position);
	version_params->register_for_channel(SCS_TELEMETRY_TRUCK_CHANNEL_electric_enabled, SCS_U32_NIL, SCS_VALUE_TYPE_bool, SCS_TELEMETRY_CHANNEL_FLAG_none, telemetry_store_bool, &telemetry.electricity);

	// Set the structure with defaults.
	memset(&telemetry, 0, sizeof(telemetry));

	// We only need one page of memory
	MAP_SIZE = getpagesize() * NUM_PAGES;

	// Open shared memory
	int handle = shm_open(shm_name, O_RDWR | O_CREAT | O_TRUNC, S_IRUSR | S_IWUSR);
	if (handle < 0) {
		game_log(SCS_LOG_TYPE_error, "Local radio: could not open shared memory");
		return SCS_RESULT_generic_error;
	}

	if (ftruncate(handle, MAP_SIZE) < 0) {
		game_log(SCS_LOG_TYPE_error, "Local radio: could not truncate shared memery");
		return SCS_RESULT_generic_error;
	}

	mapped_region = mmap(
		0,
		MAP_SIZE,
		PROT_READ | PROT_WRITE,
		MAP_SHARED,
		handle,
		0
	);

	if (mapped_region == MAP_FAILED) {
		game_log(SCS_LOG_TYPE_error, "Local radio: could not mmap shared memory");
		return SCS_RESULT_generic_error;
	}

	game_log(SCS_LOG_TYPE_message, "Local radio: initialized successfully");

	// Initially the game is paused.
	output_paused = true;
	return SCS_RESULT_ok;
}

/**
 * @brief Telemetry API deinitialization function.
 *
 * See scssdk_telemetry.h
 */
SCSAPI_VOID scs_telemetry_shutdown(void)
{
	// Any cleanup needed. The registrations will be removed automatically
	// so there is no need to do that manually.
	game_log(SCS_LOG_TYPE_message, "Local radio: shutdown");

	game_log = NULL;
	shm_unlink(shm_name);
	mapped_region = NULL;
}

// Cleanup

void __attribute__ ((destructor)) unload(void)
{
	scs_telemetry_shutdown();
}
