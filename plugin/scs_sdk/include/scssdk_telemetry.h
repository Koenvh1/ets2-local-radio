/**
 * @file scssdk_telemetry.h
 *
 * @brief Telemetry SDK.
 */
#ifndef SCSSDK_TELEMETRY_H
#define SCSSDK_TELEMETRY_H

#include "scssdk.h"
#include "scssdk_value.h"
#include "scssdk_telemetry_event.h"
#include "scssdk_telemetry_channel.h"

SCSSDK_HEADER

/**
 * @name Versions of the telemetry SDK
 *
 * Changes in the major version indicate incompatible changes in the API.
 * Changes in the minor version indicate additions (e.g. more events, defined
 * types as long layout of existing fields in scs_value_t does not change).
 *
 * 1.01 version - added s64 type support, added gameplay events
 */
//@{
#define SCS_TELEMETRY_VERSION_1_00              SCS_MAKE_VERSION(1, 0)
#define SCS_TELEMETRY_VERSION_1_01              SCS_MAKE_VERSION(1, 1)
#define SCS_TELEMETRY_VERSION_CURRENT           SCS_TELEMETRY_VERSION_1_01
//@}

// Structures used to pass additional data to the initialization function.

/**
 * @brief Common ancestor to all structures providing parameters to the telemetry
 * initialization.
 */
struct scs_telemetry_init_params_t
{
        void    method_indicating_this_is_not_a_c_struct(void);
};

/**
 * @brief Initialization parameters for the 1.00 version of the telemetry API.
 */
struct scs_telemetry_init_params_v100_t : public scs_telemetry_init_params_t
{
        /**
         * @brief Common initialization parameters.
         */
        scs_sdk_init_params_v100_t              common;

        /**
         * @name Functions used to handle registration of event callbacks.
         */
        //@{
        scs_telemetry_register_for_event_t      register_for_event;
        scs_telemetry_unregister_from_event_t   unregister_from_event;
        //@}

        /**
         * @name Functions used to handle registration of telemetry callbacks.
         */
        //@{
        scs_telemetry_register_for_channel_t    register_for_channel;
        scs_telemetry_unregister_from_channel_t unregister_from_channel;
        //@}
};
scs_check_size(scs_telemetry_init_params_v100_t, 32, 64);

/**
 * @brief Initialization parameters for the 1.01 version of the telemetry API.
 */
typedef scs_telemetry_init_params_v100_t scs_telemetry_init_params_v101_t;

// Functions which should be exported by the dynamic library serving as
// recipient of the telemetry.

/**
 * @brief Initializes telemetry support.
 *
 * This function must be provided by the library if it wants to support telemetry API.
 *
 * The engine will call this function with API versions it supports starting from the latest
 * until the function returns SCS_RESULT_ok or error other than SCS_RESULT_unsupported or it
 * runs out of supported versions.
 *
 * At the time this function is called, the telemetry is in the paused state.
 *
 * @param version Version of the API to initialize.
 * @param params Structure with additional initialization data specific to the specified API version.
 * @return SCS_RESULT_ok if version is supported and library was initialized. Error code otherwise.
 */
SCSAPI_RESULT   scs_telemetry_init              (const scs_u32_t version, const scs_telemetry_init_params_t *const params);

/**
 * @brief Shuts down the telemetry support.
 *
 * The engine will call this function if available and if the scs_telemetry_init indicated
 * success.
 */
SCSAPI_VOID     scs_telemetry_shutdown          (void);

SCSSDK_FOOTER

#endif // SCSSDK_TELEMETRY_H

/* eof */
