/**
 * @file scssdk_telemetry_common_channels.h
 *
 * @brief Telemetry specific channels which might be used by more than one game.
 */
#ifndef SCSSDK_TELEMETRY_COMMON_CHANNELS_H
#define SCSSDK_TELEMETRY_COMMON_CHANNELS_H

#include "../scssdk.h"

SCSSDK_HEADER

/**
 * @brief Scale applied to distance and time to compensate
 * for the scale of the map (e.g. 1s of real time corresponds to local_scale
 * seconds of simulated game time).
 *
 * Games which use real 1:1 maps will not provide this
 * channel.
 *
 * Type: float
 */
#define SCS_TELEMETRY_CHANNEL_local_scale                       "local.scale"

/**
 * @brief Absolute in-game time.
 *
 * Represented in number of in-game minutes since beginning (i.e. 00:00)
 * of the first in-game day.
 *
 * Type: u32
 */
#define SCS_TELEMETRY_CHANNEL_game_time                         "game.time"

/**
 * @brief Time until next rest stop.
 *
 * When the fatique simulation is disabled, the behavior of this channel
 * is implementation dependent. The game might provide the value which would
 * apply if it was enabled or provide no value at all.
 *
 * Represented in in-game minutes.
 *
 * Type: s32
 */
#define SCS_TELEMETRY_CHANNEL_next_rest_stop                    "rest.stop"

SCSSDK_FOOTER

#endif // SCSSDK_TELEMETRY_COMMON_CHANNELS_H

/* eof */
