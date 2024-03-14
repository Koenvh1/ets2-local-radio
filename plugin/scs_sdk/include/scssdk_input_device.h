/**
 * @file scssdk_input_device.h
 *
 * @brief Input SDK - devices.
 */
#ifndef SCSSDK_INPUT_DEVICE_H
#define SCSSDK_INPUT_DEVICE_H

#include "scssdk.h"
#include "scssdk_value.h"
#include "scssdk_input_event.h"

SCSSDK_HEADER

/**
 * @name Types of input devices.
 */
//@{

typedef scs_u32_t scs_input_device_type_t;
const scs_input_device_type_t SCS_INPUT_DEVICE_TYPE_INVALID             = 0;

/**
 * @brief Generic device bindable in the game UI.
 */
const scs_input_device_type_t SCS_INPUT_DEVICE_TYPE_generic             = 1;

/**
 * @brief Semantical device.
 *
 * The inputs of this device map directly to mixes with the same
 * name the same way the Steam Input works. No binding UI is
 * supported. This allows the device to work without user having
 * to do any configuration however it also means that if the
 * game mixes change, the user will be unable to adjust the binding
 * and a plugin update will be required.
 *
 * Note that only subset of mixes are supported. If mix expression
 * in a fresh controls.sii references something like "semantical.<mixname>?0",
 * then semantical input is likely supported for that mix.
 */
const scs_input_device_type_t SCS_INPUT_DEVICE_TYPE_semantical          = 2;

//@}

/**
 * @brief Maximal number of inputs allowed on a single device.
 */
const scs_u32_t SCS_INPUT_MAX_INPUT_COUNT = 400;

/**
 * @brief Information about a single input of the input device.
 */
struct scs_input_device_input_t
{
        /**
         * @brief Name of this input used in the configuration file
         *
         * This string can contain only the following characters:
         * @li lower-cased english letters
         * @li digits
         * @li underscore
         */
        scs_string_t            name;

        /**
         * @brief Name of the input shown to the user.
         *
         * Currently only the following characters are allowed:
         * @li English letters
         * @li digits
         * @li underscore
         * @li space
         * @li dot
         */
        scs_string_t            display_name;

        /**
         * @brief Type of the value provided by this input.
         *
         * Only the following value types are supported:
         * @li SCS_VALUE_TYPE_bool
         * @li SCS_VALUE_TYPE_float
         */
        scs_value_type_t        value_type;

#ifdef SCS_ARCHITECTURE_x64
        /**
         * @brief Explicit 8-byte alignment for structure size.
         */
        scs_u32_t               _padding;
#endif
};
scs_check_size(scs_input_device_input_t, 12, 24);

/**
 * @brief Type of function called to notify about changes in device activity state
 *
 * @param active Nonzero if the device is active and processing events.
 * @param context Context information passed during device registration.
 */
typedef SCSAPI_VOID_FPTR(scs_input_active_callback_t)(const scs_u8_t active, const scs_context_t context);

/**
 * @brief Input device.
 */
struct scs_input_device_t
{
        /**
         * @brief Name of this device used in the configuration file
         *
         * Must be unique among all input plugins.
         *
         * This string can contain only the following characters:
         * @li lower-cased English letters
         * @li digits
         * @li underscore
         */
        scs_string_t                    name;

        /**
         * @brief Name of the device shown to the user.
         *
         * Currently only the following characters are allowed:
         * @li English letters
         * @li digits
         * @li underscore
         * @li space
         * @li dot
         */
        scs_string_t                    display_name;

        /**
         * @brief Type of this device.
         */
        scs_input_device_type_t         type;

        /**
         * @brief Number of inputs in the inputs array.
         *
         * There must be at least one input.
         */
        scs_u32_t                       input_count;

        /**
         * @brief Individual inputs.
         */
        const scs_input_device_input_t  *inputs;

        /**
         * @brief Context value to provide to the callbacks.
         */
        scs_context_t                   callback_context;

        /**
         * @brief Callback called when device activity state changes
         *
         * Optional
         */
        scs_input_active_callback_t      input_active_callback;

        /**
         * @brief Callback to call to retrieve input events.
         *
         * Only called when the device is active.
         *
         * Required
         */
        scs_input_event_callback_t      input_event_callback;
};
scs_check_size(scs_input_device_t, 32, 56);

/**
 * @brief Registers a input device
 *
 * This function can be only called from scs_input_init. Devices are automatically unregistered before
 * calling scs_input_shutdown.
 *
 * @param device_info Information about the device. The structure is fully processed during the call.
 * @return SCS_RESULT_ok on successful registration. Error code otherwise.
 */
typedef SCSAPI_RESULT_FPTR(scs_input_register_device_t)(const scs_input_device_t *const device_info);

SCSSDK_FOOTER

#endif // SCSSDK_INPUT_DEVICE_H

/* eof */
