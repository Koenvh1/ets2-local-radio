/**
 * @file scssdk_telemetry_ats.h
 *
 * @brief ATS telemetry specific constants.
 */
#ifndef SCSSDK_TELEMETRY_ATS_H
#define SCSSDK_TELEMETRY_ATS_H

#include "../scssdk.h"
#include "../common/scssdk_telemetry_common_configs.h"
#include "../common/scssdk_telemetry_common_channels.h"
#include "../common/scssdk_telemetry_truck_common_channels.h"
#include "../common/scssdk_telemetry_trailer_common_channels.h"
#include "../common/scssdk_telemetry_job_common_channels.h"

SCSSDK_HEADER

/**
 * @name Value used in the scs_sdk_init_params_t::game_version
 *
 * Changes in the major version indicate incompatible changes (e.g. changed interpretation
 * of the channel value). Change of major version is highly discouraged, creation of
 * alternative channel is preferred solution if necessary.
 * Changes in the minor version indicate compatible changes (e.g. added channel, more supported
 * value types). Removal of channel is also compatible change however it is recommended
 * to keep the channel with some default value.
 *
 * Changes:
 * 1.00 - initial version - corresponds to 1.12 in ETS2
 * 1.01 - added support for multiple trailers (doubles, triples), trailer ownership support,
 *        gameplay events support added
 * 1.02 - added planned_distance_km to active job info
 * 1.03 - added support for 'avoid_inspection', 'illegal_border_crossing' and 'hard_shoulder_violation' offence type in 'player.fined' gameplay event
 * 1.04 - added differential lock, lift axle and hazard warning channels
 * 1.05 - added multiplayer time offset and trailer body wear channel, fixed trailer chassis wear channel
 */
//@{
#define SCS_TELEMETRY_ATS_GAME_VERSION_1_00             SCS_MAKE_VERSION(1, 0)
#define SCS_TELEMETRY_ATS_GAME_VERSION_1_01             SCS_MAKE_VERSION(1, 1)
#define SCS_TELEMETRY_ATS_GAME_VERSION_1_02             SCS_MAKE_VERSION(1, 2) // Patch 1.36
#define SCS_TELEMETRY_ATS_GAME_VERSION_1_03             SCS_MAKE_VERSION(1, 3) // Patch 1.36
#define SCS_TELEMETRY_ATS_GAME_VERSION_1_04             SCS_MAKE_VERSION(1, 4) // Patch 1.41
#define SCS_TELEMETRY_ATS_GAME_VERSION_1_05             SCS_MAKE_VERSION(1, 5) // Patch 1.45
#define SCS_TELEMETRY_ATS_GAME_VERSION_CURRENT          SCS_TELEMETRY_ATS_GAME_VERSION_1_05
//@}

// Game specific units.
//
// @li The game uses US Dolars as internal currency provided
//     by the telemetry unless documented otherwise.

// Channels defined in scssdk_telemetry_common_channels.h,
// scssdk_telemetry_job_common_channels.h,
// scssdk_telemetry_truck_common_channels.h and
// scssdk_telemetry_trailer_common_channels.h are supported
// with following exceptions and limitations as of v1.00:
//
// @li Adblue related channels are not supported.
// @li The fuel_average_consumption is currently mostly static and depends
//     on presence of the trailer and skills of the driver instead
//     of the workload of the engine.
// @li Rolling rotation of trailer wheels is determined from linear
//     movement.
// @li The pressures, temperatures and voltages are not simulated.
//     They are very loosely approximated.

// Configurations defined in scssdk_telemetry_common_configs.h are
// supported with following exceptions and limitations as of v1.00:
//
// @li The localized strings are not updated when different in-game
//     language is selected.

SCSSDK_FOOTER

#endif // SCSSDK_TELEMETRY_ATS_H

/* eof */
