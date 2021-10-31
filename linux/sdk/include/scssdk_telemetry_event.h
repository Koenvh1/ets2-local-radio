/**
 * @file scssdk_telemetry_event.h
 *
 * @brief Telemetry SDK - events.
 */
#ifndef SCSSDK_TELEMETRY_EVENT_H
#define SCSSDK_TELEMETRY_EVENT_H

#include "scssdk.h"

SCSSDK_HEADER

typedef scs_u32_t scs_event_t;

/**
 * @name Telemetry event types.
 */
//@{

/**
 * @brief Used to mark invalid value of event type.
 */
const scs_event_t SCS_TELEMETRY_EVENT_invalid      = 0;

/**
 * @brief Generated before any telemetry data for current frame.
 *
 * The event_info parameter for this event points to
 * scs_telemetry_frame_start_t structure.
 */
const scs_event_t SCS_TELEMETRY_EVENT_frame_start  = 1;

/**
 * @brief Generated after all telemetry data for current frame.
 */
const scs_event_t SCS_TELEMETRY_EVENT_frame_end    = 2;

/**
 * @brief Indicates that the game entered paused state (e.g. menu)
 *
 * If the recipient generates some form of force feedback effects,
 * it should probably stop them until SCS_TELEMETRY_EVENT_started
 * event is received.
 *
 * After sending this event, the game stop sending telemetry data
 * unless specified otherwise in description of specific telemetry.
 * The frame start and event events are still generated.
 */
const scs_event_t SCS_TELEMETRY_EVENT_paused       = 3;

/**
 * @brief Indicates that the player is now driving.
 */
const scs_event_t SCS_TELEMETRY_EVENT_started      = 4;

/**
 * @brief Provides set of attributes which change only
 * in special situations (e.g. parameters of the vehicle).
 *
 * The event_info parameter for this event points to
 * scs_telemetry_configuration_t structure.
 *
 * The initial configuration info is delivered to the plugin
 * after its scs_telemetry_init() function succeeds and before
 * any other callback is called. If the the plugin is interested
 * in the configuration info, it must register for this event
 * during its initialization call to ensure that it does
 * not miss it. Future changes in configuration are
 * delivered as described in the event sequence below.
 */
const scs_event_t SCS_TELEMETRY_EVENT_configuration = 5;

/**
 * @brief An event called when a gameplay event such as job finish happens.
 *
 * The event_info parameter for this event points to scs_telemetry_gameplay_event_t structure.
 */
const scs_event_t SCS_TELEMETRY_EVENT_gameplay     = 6;

//@}

// Sequence of events during frame.
//
// @li Optionally one or more CONFIGURATION events if the configuration changed.
// @li Optionally one from PAUSED or STARTED if there was change since last frame.
// @li FRAME_START
// @li Optionally one or more GAMEPLAY events.
// @li Channel callbacks
// @li FRAME_END

/**
 * @brief Indicates that timers providing the frame timing info
 * were restarted since last frame.
 *
 * When timer is restarted, it will start counting from zero.
 */
const scs_u32_t SCS_TELEMETRY_FRAME_START_FLAG_timer_restart    = 0x00000001;

/**
 * @brief Parameters the for SCS_TELEMETRY_EVENT_frame_start event callback.
 */
struct scs_telemetry_frame_start_t
{
        /**
         * @brief Additional information about this event.
         *
         * Combination of SCS_TELEMETRY_FRAME_START_FLAG_* values.
         */
        scs_u32_t               flags;

        /**
         * @brief Explicit alignment for the 64 bit timestamps.
         */
        scs_u32_t               _padding;

        /**
         * @brief Time controlling the visualization.
         *
         * Its step changes depending on rendering FPS.
         */
        scs_timestamp_t         render_time;

        /**
         * @brief Time controlling the physical simulation.
         *
         * Usually changes with fixed size steps so it oscilates
         * around the render time. This value changes even if the
         * physics simulation is currently paused.
         */
        scs_timestamp_t         simulation_time;

        /**
         * @brief Similar to simulation time however it stops
         * when the physics simulation is paused.
         */
        scs_timestamp_t         paused_simulation_time;
};

scs_check_size(scs_telemetry_frame_start_t, 32, 32);

/**
 * @brief Parameters for the SCS_TELEMETRY_EVENT_configuration event callback.
 */
struct scs_telemetry_configuration_t
{
        /**
         * @brief Set of logically grouped configuration parameters this
         * event describes (e.g. truck configuration, trailer configuration).
         *
         * See SCS_TELEMETRY_CONFIGURATION_ID_* constants for the game in question.
         *
         * This pointer will be never NULL.
         */
        scs_string_t             id;

        /**
         * @brief Array of individual attributes.
         *
         * The array is terminated by entry whose name pointer is set to NULL.
         *
         * Names of the attributes are the SCS_TELEMETRY_CONFIG_ATTRIBUTE_* constants
         * for the game in question.
         *
         * This pointer will be never NULL.
         */
        const scs_named_value_t *attributes;
};

scs_check_size(scs_telemetry_configuration_t, 8, 16);

/**
 * @brief Parameters for the SCS_TELEMETRY_EVENT_gameplay event callback.
 */
struct scs_telemetry_gameplay_event_t
{
        /**
         * @brief The event id.
         *
         * The event ID name - check SCS_TELEMETRY_GAMEPLAY_EVENT_* for possible names.
         */
        scs_string_t             id;

        /**
         * @brief Array of individual attributes.
         *
         * The array is terminated by entry whose name pointer is set to NULL.
         *
         * Names of the attributes are the SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_* constants
         * for the game in question.
         *
         * This pointer will be never NULL.
         */
        const scs_named_value_t *attributes;
};

scs_check_size(scs_telemetry_gameplay_event_t, 8, 16);

/**
 * @brief Type of function registered to be called for event.
 *
 * @param event Event in question. Allows use of single callback with  more than one event.
 * @param event_info Structure with additional event information about the event.
 * @param context Context information passed during callback registration.
 */
typedef SCSAPI_VOID_FPTR(scs_telemetry_event_callback_t)(const scs_event_t event, const void *const event_info, const scs_context_t context);

/**
 * @brief Registers callback to be called when specified event happens.
 *
 * At most one callback can be registered for each event.
 *
 * This funtion can be called from scs_telemetry_init or from within any
 * event callback other than the callback for the event itself.
 *
 * @param event Event to register for.
 * @param callback Callback to register.
 * @param context Context value passed to the callback.
 * @return SCS_RESULT_ok on successful registration. Error code otherwise.
 */
typedef SCSAPI_RESULT_FPTR(scs_telemetry_register_for_event_t)(const scs_event_t event, const scs_telemetry_event_callback_t callback, const scs_context_t context);

/**
 * @brief Unregisters callback registered for specified event.
 *
 * This function can be called from scs_telemetry_shutdown, scs_telemetry_init
 * or from within any event callback. Including callback of the event itself.
 * Any event left registered after scs_telemetry_shutdown ends will
 * be unregistered automatically.
 *
 * @param event Event to unregister from.
 * @return SCS_RESULT_ok on successful unregistration. Error code otherwise.
 */
typedef SCSAPI_RESULT_FPTR(scs_telemetry_unregister_from_event_t)(const scs_event_t event);

SCSSDK_FOOTER

#endif // SCSSDK_TELEMETRY_EVENT_H

/* eof */
