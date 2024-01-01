/**
 * @file scssdk.h
 *
 * @brief Common SDK types and structures.
 */
#ifndef SCSSDK_H
#define SCSSDK_H

#define SCSSDK_HEADER extern "C" {
#define SCSSDK_FOOTER }

SCSSDK_HEADER

// Types used trough the SDK.

#if defined(_MSC_VER)

typedef unsigned __int8         scs_u8_t;
typedef unsigned __int16        scs_u16_t;
typedef signed __int32          scs_s32_t;
typedef unsigned __int32        scs_u32_t;
typedef unsigned __int64        scs_u64_t;
typedef signed __int64          scs_s64_t;
typedef float                   scs_float_t;
typedef double                  scs_double_t;
typedef const char *            scs_string_t;
#define SCSAPIFUNC              __stdcall

#if defined(_WIN64)
#define SCS_ARCHITECTURE_x64
#else
#define SCS_ARCHITECTURE_x86
#endif

#define SCS_PF_U64 "I64u"
#define SCS_PF_S64 "I64d"

#elif defined(__GNUG__)

#include <stdint.h>
typedef uint8_t                 scs_u8_t;
typedef uint16_t                scs_u16_t;
typedef int32_t                 scs_s32_t;
typedef uint32_t                scs_u32_t;
typedef uint64_t                scs_u64_t;
typedef int64_t                 scs_s64_t;
typedef float                   scs_float_t;
typedef double                  scs_double_t;
typedef const char *            scs_string_t;
#define SCSAPIFUNC

#if defined(__x86_64__)
#define SCS_ARCHITECTURE_x64
#define SCS_PF_U64 "lu"
#define SCS_PF_S64 "ld"
#elif defined(__i386__)
#define SCS_ARCHITECTURE_x86
#define SCS_PF_U64 "llu"
#define SCS_PF_S64 "lld"
#else
#error "Unknown architecture."
#endif

#else
#error "Unknown compiler."
#endif

const scs_u32_t SCS_U32_NIL = static_cast<scs_u32_t>(-1);

/**
 * @brief Type of value provided during callback registration and passed back
 * to the callback.
 */
typedef void                    *scs_context_t;

/**
 * @brief Timestamp value.
 *
 * Value is expressed in microseconds.
 */
typedef scs_u64_t               scs_timestamp_t;

// Common return codes.

typedef scs_s32_t scs_result_t;
const scs_result_t SCS_RESULT_ok                        =  0; // Operation succeeded.
const scs_result_t SCS_RESULT_unsupported               = -1; // Operation or specified parameters are not supported. (e.g. the plugin does not support the requested version of the API)
const scs_result_t SCS_RESULT_invalid_parameter         = -2; // Specified parameter is not valid (e.g. null value of callback, invalid combination of flags).
const scs_result_t SCS_RESULT_already_registered        = -3; // There is already a registered conflicting object (e.g. callback for the specified event/channel, input device with the same name).
const scs_result_t SCS_RESULT_not_found                 = -4; // Specified item (e.g. channel) was not found.
const scs_result_t SCS_RESULT_unsupported_type          = -5; // Specified value type is not supported (e.g. channel does not provide that value type).
const scs_result_t SCS_RESULT_not_now                   = -6; // Action (event/callback registration) is not allowed in the current state. Indicates incorrect use of the api.
const scs_result_t SCS_RESULT_generic_error             = -7; // Error not covered by other existing code.

// Function definition macros.

#define SCSAPI_RESULT                           scs_result_t SCSAPIFUNC
#define SCSAPI_VOID                             void SCSAPIFUNC

#define SCSAPI_RESULT_FPTR(function_name)       scs_result_t (SCSAPIFUNC *function_name)
#define SCSAPI_VOID_FPTR(function_name)         void (SCSAPIFUNC *function_name)

// Compile time checks.

#define SCS_CONCAT2(prefix, suffix)             prefix##suffix
#define SCS_CONCAT(prefix, suffix)              SCS_CONCAT2(prefix, suffix)
#define scs_static_check(expr)                  typedef int SCS_CONCAT(some_requirement_failed_at_, __LINE__)[(expr) ? 1 : -1]

#if defined(SCS_ARCHITECTURE_x86)
#define scs_check_size(structure, expected_32, expected_64)     scs_static_check(sizeof(structure) == expected_32)
#elif defined(SCS_ARCHITECTURE_x64)
#define scs_check_size(structure, expected_32, expected_64)     scs_static_check(sizeof(structure) == expected_64)
#endif

// Types of messages printed to log.

typedef scs_s32_t scs_log_type_t;
const scs_log_type_t SCS_LOG_TYPE_message       = 0;
const scs_log_type_t SCS_LOG_TYPE_warning       = 1;
const scs_log_type_t SCS_LOG_TYPE_error         = 2;

// Version support.

#define SCS_MAKE_VERSION(major, minor) (((major) << 16) | (minor))
#define SCS_GET_MAJOR_VERSION(version) (((version) >> 16) & 0xffff)
#define SCS_GET_MINOR_VERSION(version) ((version) & 0xffff)

/**
 * @brief Logs specified message to the game log.
 *
 * @param type Type of message. Controls generated prefixes and colors in console.
 * @param message Message to log.
 */
typedef SCSAPI_VOID_FPTR(scs_log_t)(const scs_log_type_t type, const scs_string_t message);

// Common initialization structures.

/**
 * @brief Initialization parameters common to most APIs provided
 * by the SDK.
 */
struct scs_sdk_init_params_v100_t
{
        /**
         * @brief Name of the game for display purposes.
         *
         * This is UTF8 encoded string containing name of the game
         * for display to the user. The exact format is not defined,
         * might be changed between versions and should be not parsed.
         *
         * This pointer will be never NULL.
         */
        scs_string_t                            game_name;

        /**
         * @brief Identification of the game.
         *
         * If the library wants to identify the game to do any
         * per-game configuration, this is the field which should
         * be used.
         *
         * This string contains only following characters:
         * @li lower-cased letters
         * @li digits
         * @li underscore
         *
         * This pointer will be never NULL.
         */
        scs_string_t                            game_id;

        /**
         * @brief Version of the game for purpose of the specific api
         * which is being initialized.
         *
         * Does NOT match the patch level of the game.
         */
        scs_u32_t                               game_version;

#ifdef SCS_ARCHITECTURE_x64
        /**
         * @brief Explicit alignment for the 64 bit pointer.
         */
        scs_u32_t                               _padding;
#endif

        /**
         * @brief Function used to write messages to the game log.
         *
         * Each message is printed on a separate line.
         *
         * This pointer will be never NULL.
         */
        scs_log_t                               log;
};

scs_check_size(scs_sdk_init_params_v100_t, 16, 32);

SCSSDK_FOOTER

#endif // SCSSDK_H

/* eof */
