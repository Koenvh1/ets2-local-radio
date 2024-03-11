/**
 * @file scssdk_input_event.h
 *
 * @brief Input SDK - events.
 */
#ifndef SCSSDK_INPUT_EVENT_H
#define SCSSDK_INPUT_EVENT_H

#include "scssdk.h"
#include "scssdk_value.h"
#include "scssdk_input_event.h"

SCSSDK_HEADER

/**
 * @brief Information about a input event.
 */
struct scs_input_event_t
{
        /**
         * @brief Zero-based index of input this event is for.
         */
        scs_u32_t       input_index;

        /**
         * @brief The event value.
         *
         * Must use the value type corresponding to the value_type the input was registered with.
         */
        union {
                scs_value_bool_t        value_bool;
                scs_value_float_t       value_float;
                float                   _sizing_for_future_extensions[6];
        };
};
scs_check_size(scs_input_event_t, 28, 28);

/**
 * @brief Indicates that this is the first call of this callback for the current device in the current frame.
 */
const scs_u32_t SCS_INPUT_EVENT_CALLBACK_FLAG_first_in_frame            = 0x00000001;

/**
 * @brief Indicates that this is the first call of this callback after device became active.
 *
 * When this flag is set, the first_in_frame flag will be set as well.
 */
const scs_u32_t SCS_INPUT_EVENT_CALLBACK_FLAG_first_after_activation    = 0x00000002;

/**
 * @brief Type of function called to retrieve next event from the input device
 *
 * This function is called on the main thread and must be quick. In each frame where the
 * device is active, this function will be called repeatedly until it returns SCS_RESULT_not_found.
 *
 * @param[out] event_info Store the event info here. Ignored if the function returns anything other than SCS_RESULT_ok.
 * @param flags Combination of relevant SCS_INPUT_EVENT_CALLBACK_FLAG_* flags.
 * @param context Context information passed during device registration.
 * @return SCS_RESULT_ok when event was retrieved, SCS_RESULT_not_found when there was no event. Any other value
 *         will disconnect the device and prevent future related callbacks.
 */
typedef SCSAPI_RESULT_FPTR(scs_input_event_callback_t)(scs_input_event_t *const event_info, const scs_u32_t flags, const scs_context_t context);

SCSSDK_FOOTER

#endif // SCSSDK_INPUT_EVENT_H

/* eof */
