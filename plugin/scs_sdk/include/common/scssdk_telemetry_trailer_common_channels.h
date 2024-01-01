/**
 * @file scssdk_telemetry_trailer_common_channels.h
 *
 * @brief Trailer telemetry specific constants for channels.
 *
 * See scssdk_telemetry_truck_common_channels.h for more info.
 */
#ifndef SCSSDK_TELEMETRY_TRAILER_COMMON_CHANNELS_H
#define SCSSDK_TELEMETRY_TRAILER_COMMON_CHANNELS_H

#include "../scssdk.h"

SCSSDK_HEADER

/**
 * Telemetry SDK supports multiple trailers.
 *
 * To get information about more trailers replace "trailer." with "trailer.[index].".
 * Connected state for trailers would be:
 *
 * First trailer: "trailer.0.connected"
 * Second trailer: "trailer.1.connected"
 * ...
 * Six-th trailer: "trailer.5.connected"
 * etc
 *
 * Maximum number of trailers that can be reported by telemetry SDK
 * is defined by @c SCS_TELEMETRY_trailers_count.
 */

/**
 * @brief Is the trailer connected to the truck?
 *
 * Type: bool
 */
#define SCS_TELEMETRY_TRAILER_CHANNEL_connected                         "trailer.connected"

/**
 * @brief How much is the cargo damaged that is loaded to this trailer in <0.0, 1.0> range.
 *
 * Type: float
 */
#define SCS_TELEMETRY_TRAILER_CHANNEL_cargo_damage                      "trailer.cargo.damage"

/**
 * @name Channels similar to the truck ones
 *
 * See scssdk_telemetry_truck_common_channels.h for description of
 * corresponding truck channels
 */
//@{
#define SCS_TELEMETRY_TRAILER_CHANNEL_world_placement                   "trailer.world.placement"
#define SCS_TELEMETRY_TRAILER_CHANNEL_local_linear_velocity             "trailer.velocity.linear"
#define SCS_TELEMETRY_TRAILER_CHANNEL_local_angular_velocity            "trailer.velocity.angular"
#define SCS_TELEMETRY_TRAILER_CHANNEL_local_linear_acceleration         "trailer.acceleration.linear"
#define SCS_TELEMETRY_TRAILER_CHANNEL_local_angular_acceleration        "trailer.acceleration.angular"

// Damage.

#define SCS_TELEMETRY_TRAILER_CHANNEL_wear_body                         "trailer.wear.body"
#define SCS_TELEMETRY_TRAILER_CHANNEL_wear_chassis                      "trailer.wear.chassis"
#define SCS_TELEMETRY_TRAILER_CHANNEL_wear_wheels                       "trailer.wear.wheels"

// Wheels.

#define SCS_TELEMETRY_TRAILER_CHANNEL_wheel_susp_deflection             "trailer.wheel.suspension.deflection"
#define SCS_TELEMETRY_TRAILER_CHANNEL_wheel_on_ground                   "trailer.wheel.on_ground"
#define SCS_TELEMETRY_TRAILER_CHANNEL_wheel_substance                   "trailer.wheel.substance"
#define SCS_TELEMETRY_TRAILER_CHANNEL_wheel_velocity                    "trailer.wheel.angular_velocity"
#define SCS_TELEMETRY_TRAILER_CHANNEL_wheel_steering                    "trailer.wheel.steering"
#define SCS_TELEMETRY_TRAILER_CHANNEL_wheel_rotation                    "trailer.wheel.rotation"
#define SCS_TELEMETRY_TRAILER_CHANNEL_wheel_lift                        "trailer.wheel.lift"
#define SCS_TELEMETRY_TRAILER_CHANNEL_wheel_lift_offset                 "trailer.wheel.lift.offset"
//@}

SCSSDK_FOOTER

#endif // SCSSDK_TELEMETRY_TRAILER_COMMON_CHANNELS_H

/* eof */
