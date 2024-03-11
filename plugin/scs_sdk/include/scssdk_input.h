/**
 * @file scssdk_input.h
 *
 * @brief Input SDK.
 */
#ifndef SCSSDK_INPUT_H
#define SCSSDK_INPUT_H

#include "scssdk.h"
#include "scssdk_value.h"
#include "scssdk_input_device.h"

SCSSDK_HEADER

/**
 * @name Versions of the input SDK
 *
 * Changes in the major version indicate incompatible changes in the API.
 * Changes in the minor version indicate additions.
 */
//@{
#define SCS_INPUT_VERSION_1_00              SCS_MAKE_VERSION(1, 0)
#define SCS_INPUT_VERSION_CURRENT           SCS_INPUT_VERSION_1_00
//@}

// Structures used to pass additional data to the initialization function.

/**
 * @brief Common ancestor to all structures providing parameters to the input
 * initialization.
 */
struct scs_input_init_params_t
{
        void    method_indicating_this_is_not_a_c_struct(void);
};

/**
 * @brief Initialization parameters for the 1.00 version of the input API.
 */
struct scs_input_init_params_v100_t : public scs_input_init_params_t
{
        /**
         * @brief Common initialization parameters.
         */
        scs_sdk_init_params_v100_t              common;

        /**
         * @name Function used to register input device.
         */
        scs_input_register_device_t             register_device;
};
scs_check_size(scs_input_init_params_v100_t, 20, 40);

// Functions which should be exported by the dynamic library serving as
// recipient of the input.

/**
 * @brief Initializes input support.
 *
 * This function must be provided by the library if it wants to support input API.
 *
 * The engine will call this function with API versions it supports starting from the latest
 * until the function returns SCS_RESULT_ok or error other than SCS_RESULT_unsupported or it
 * runs out of supported versions.
 *
 * @param version Version of the API to initialize.
 * @param params Structure with additional initialization data specific to the specified API version.
 * @return SCS_RESULT_ok if version is supported and library was initialized. Error code otherwise.
 */
SCSAPI_RESULT   scs_input_init                  (const scs_u32_t version, const scs_input_init_params_t *const params);

/**
 * @brief Shuts down the input support.
 *
 * The engine will call this function if available and if the scs_input_init indicated
 * success.
 */
SCSAPI_VOID     scs_input_shutdown              (void);

SCSSDK_FOOTER

#endif // SCSSDK_INPUT_H

/* eof */
