/**
 * @file scssdk_telemetry_channel.h
 *
 * @brief Telemetry SDK - channels.
 */
#ifndef SCSSDK_TELEMETRY_CHANNEL_H
#define SCSSDK_TELEMETRY_CHANNEL_H

#include "scssdk.h"
#include "scssdk_value.h"

SCSSDK_HEADER

/**
 * @name Telemetry channel flags.
 */
//@{

/**
 * @brief No specific flags.
 */
const scs_u32_t SCS_TELEMETRY_CHANNEL_FLAG_none         = 0x00000000;

/**
 * @brief Call the callback even if the value did not change.
 *
 * The default behavior is to only call the callback if the
 * value changes. Note that there might be some special situations
 * where the callback might be called even if the value did not
 * change and this flag is not present. For example when the
 * provider of the channel value is reconfigured or when the value
 * changes so frequently that filtering would be only waste of time.
 *
 * Note that even this flag does not guarantee that the
 * callback will be called. For example it might be not called
 * when the value is currently unavailable and the
 * SCS_TELEMETRY_CHANNEL_FLAG_no_value flag was not provided.
 */
const scs_u32_t SCS_TELEMETRY_CHANNEL_FLAG_each_frame   = 0x00000001;

/**
 * @brief Call the callback even if the value is currently
 * unavailable.
 *
 * By default the callback is only called when the value is
 * available. If this flag is specified, the callback will be
 * called even when the value is unavailable. In that case
 * the value parameter of the callback will be set to NULL.
 */
const scs_u32_t SCS_TELEMETRY_CHANNEL_FLAG_no_value     = 0x00000002;

//@}

/**
 * @brief Type of function registered to be called with value of single telemetry channel.
 *
 * @param name Name of the channel. Intended for debugging purposes only.
 * @param index Index of entry for array-like channels.
 * @param value Current value of the channel. Will use the type provided during the registration.
 *        Will be NULL if and only if the SCS_TELEMETRY_CHANNEL_FLAG_no_value flag was specified
 *        during registration and the value is currently unavailable.
 * @param context Context information passed during callback registration.
 */
typedef SCSAPI_VOID_FPTR(scs_telemetry_channel_callback_t)(const scs_string_t name, const scs_u32_t index, const scs_value_t *const value, const scs_context_t context);

/**
 * @brief Registers callback to be called with value of specified telemetry channel.
 *
 * At most one callback can be registered for each combination of channel name, index and type.
 *
 * Note that order in which the registered callbacks are called is undefined.
 *
 * This funtion can be called from scs_telemetry_init or from within any
 * event (NOT channel) callback.
 *
 * @param name Name of channel to register to.
 * @param index Index of entry for array-like channels. Set to SCS_U32_NIL for normal channels.
 * @param type Desired type of the value. Only some types are supported (see documentation of specific channel). If the channel can not be returned using that type a SCS_RESULT_unsupported_type will be returned.
 * @param flags Flags controlling delivery of the channel.
 * @param callback Callback to register.
 * @param context Context value passed to the callback.
 * @return SCS_RESULT_ok on successful registration. Error code otherwise.
 */
typedef SCSAPI_RESULT_FPTR(scs_telemetry_register_for_channel_t)(const scs_string_t name, const scs_u32_t index, const scs_value_type_t type, const scs_u32_t flags, const scs_telemetry_channel_callback_t callback, const scs_context_t context);

/**
 * @brief Unregisters callback registered for specified telemetry channel.
 *
 * This function can be called from scs_telemetry_shutdown, scs_telemetry_init
 * or from within any event (NOT channel) callback. Any channel left registered
 * after scs_telemetry_shutdown ends will be unregistered automatically.
 *
 * @param name Name of channel to register from.
 * @param index Index of entry for array-like channels. Set to SCS_U32_NIL for normal channels.
 * @param type Type of value to unregister from.
 * @return SCS_RESULT_ok on successful unregistration. Error code otherwise.
 */
typedef SCSAPI_RESULT_FPTR(scs_telemetry_unregister_from_channel_t)(const scs_string_t name, const scs_u32_t index, const scs_value_type_t type);

SCSSDK_FOOTER

#endif // SCSSDK_TELEMETRY_CHANNEL_H

/* eof */
