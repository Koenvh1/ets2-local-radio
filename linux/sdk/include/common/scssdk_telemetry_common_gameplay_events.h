/**
 * @file scssdk_telemetry_common_gameplay_events.h
 *
 * @brief Telemetry specific gameplay events which might be used by more than one game.
 */
#ifndef SCSSDK_TELEMETRY_COMMON_GAMEPLAY_EVENTS_H
#define SCSSDK_TELEMETRY_COMMON_GAMEPLAY_EVENTS_H

#include "../scssdk.h"

SCSSDK_HEADER

/**
 * @brief Event called when job is cancelled.
 *
 * Attributes:
 * @li cancel_penalty
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_job_cancelled               "job.cancelled"

/**
 * @brief Event called when job is delivered.
 *
 * Attributes:
 * @li revenue
 * @li earned_xp
 * @li cargo_damage
 * @li distance_km
 * @li delivery_time
 * @li autopark_used
 * @li autoload_used
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_job_delivered               "job.delivered"

/**
 * @brief Event called when player gets fined.
 *
 * Attributes:
 * @li fine_offence
 * @li fine_amount
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_player_fined                "player.fined"

/**
 * @brief Event called when player pays for a tollgate.
 *
 * Attributes:
 * @li pay_amount
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_player_tollgate_paid        "player.tollgate.paid"

/**
 * @brief Event called when player uses a ferry.
 *
 * Attributes:
 * @li pay_amount
 * @li source_name
 * @li target_name
 * @li source_id
 * @li target_id
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_player_use_ferry           "player.use.ferry"

/**
 * @brief Event called when player uses a train.
 *
 * Attributes:
 * @li pay_amount
 * @li source_name
 * @li target_name
 * @li source_id
 * @li target_id
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_player_use_train           "player.use.train"

// Attributes

/**
 * @brief The penalty for cancelling the job in native game currency. (Can be 0)
 *
 * Type: s64
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_cancel_penalty    "cancel.penalty"

/**
 * @brief The job revenue in native game currency.
 *
 * Type: s64
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_revenue           "revenue"

/**
 * @brief How much XP player received for the job.
 *
 * Type: s32
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_earned_xp         "earned.xp"

/**
 * @brief Total cargo damage. (Range <0.0, 1.0>)
 *
 * Type: float
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_cargo_damage      "cargo.damage"

/**
 * @brief The real distance in km on the job.
 *
 * Type: float
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_distance_km       "distance.km"

/**
 * @brief Total time spend on the job in game minutes.
 *
 * Type: u32
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_delivery_time     "delivery.time"

/**
 * @brief Was auto parking used on this job?
 *
 * Type: bool
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_auto_park_used    "auto.park.used"

/**
 * @brief Was auto loading used on this job? (always @c true for non cargo market jobs)
 *
 * Type: bool
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_auto_load_used    "auto.load.used"

/**
 * @brief Fine offence type.
 *
 * Possible values:
 * @li crash
 * @li avoid_sleeping
 * @li wrong_way
 * @li speeding_camera
 * @li no_lights
 * @li red_signal
 * @li speeding
 * @li avoid_weighing
 * @li illegal_trailer
 * @li avoid_inspection
 * @li illegal_border_crossing
 * @li hard_shoulder_violation
 * @li damaged_vehicle_usage
 * @li generic
 *
 * Type: string
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_fine_offence      "fine.offence"

/**
 * @brief Fine offence amount in native game currency.
 *
 * Type: s64
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_fine_amount       "fine.amount"

/**
 * @brief How much player was charged for this action (in native game currency)
 *
 * Type: s64
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_pay_amount        "pay.amount"

/**
 * @brief The name of the transportation source.
 *
 * Type: string
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_source_name       "source.name"

/**
 * @brief The name of the transportation target.
 *
 * Type: string
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_target_name       "target.name"

/**
 * @brief The id of the transportation source.
 *
 * Type: string
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_source_id         "source.id"

/**
 * @brief The id of the transportation target.
 *
 * Type: string
 */
#define SCS_TELEMETRY_GAMEPLAY_EVENT_ATTRIBUTE_target_id         "target.id"

SCSSDK_FOOTER

#endif // SCSSDK_TELEMETRY_COMMON_GAMEPLAY_EVENTS_H

/* eof */
