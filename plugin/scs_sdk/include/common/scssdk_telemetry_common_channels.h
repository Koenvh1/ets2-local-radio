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
 * @brief Offset from the game_time simulated in the local economy to the
 * game time of the Convoy multiplayer server.
 *
 * The value of this channel can change frequently during the Convoy
 * session. For example when the user enters the desktop, the local
 * economy time stops however the multiplayer time continues to run
 * so the value will start to change.
 *
 * Represented in in-game minutes. Set to 0 when multiplayer is not active.
 *
 * Type: s32
 */
#define SCS_TELEMETRY_CHANNEL_multiplayer_time_offset           "multiplayer.time.offset"

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
