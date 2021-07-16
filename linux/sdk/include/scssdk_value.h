/**
 * @file scssdk_value.h
 *
 * @brief Structures representing varying type values in the SDK.
 */
#ifndef SCSSDK_VALUE_H
#define SCSSDK_VALUE_H

#include "scssdk.h"

SCSSDK_HEADER

typedef scs_u32_t scs_value_type_t;
const scs_value_type_t SCS_VALUE_TYPE_INVALID           = 0;
const scs_value_type_t SCS_VALUE_TYPE_bool              = 1;
const scs_value_type_t SCS_VALUE_TYPE_s32               = 2;
const scs_value_type_t SCS_VALUE_TYPE_u32               = 3;
const scs_value_type_t SCS_VALUE_TYPE_u64               = 4;
const scs_value_type_t SCS_VALUE_TYPE_float             = 5;
const scs_value_type_t SCS_VALUE_TYPE_double            = 6;
const scs_value_type_t SCS_VALUE_TYPE_fvector           = 7;
const scs_value_type_t SCS_VALUE_TYPE_dvector           = 8;
const scs_value_type_t SCS_VALUE_TYPE_euler             = 9;
const scs_value_type_t SCS_VALUE_TYPE_fplacement        = 10;
const scs_value_type_t SCS_VALUE_TYPE_dplacement        = 11;
const scs_value_type_t SCS_VALUE_TYPE_string            = 12;
const scs_value_type_t SCS_VALUE_TYPE_s64               = 13;
const scs_value_type_t SCS_VALUE_TYPE_LAST              = SCS_VALUE_TYPE_s64;

/**
 * @name Simple data types.
 */
//@{
struct scs_value_bool_t
{
        scs_u8_t value; //< Nonzero value is true, zero false.
};

struct scs_value_s32_t
{
        scs_s32_t value;
};

struct scs_value_u32_t
{
        scs_u32_t value;
};

struct scs_value_u64_t
{
        scs_u64_t value;
};

struct scs_value_s64_t
{
        scs_s64_t value;
};

struct scs_value_float_t
{
        scs_float_t value;
};

struct scs_value_double_t
{
        scs_double_t value;
};
//@}

/**
 * @brief String value.
 *
 * The provided value is UTF8 encoded however in some documented
 * cases only limited ASCII compatible subset might be present.
 *
 * The pointer is never NULL.
 */
struct scs_value_string_t
{
        scs_string_t value;
};

/**
 * @name Vector types.
 *
 * In local space the X points to right, Y up and Z backwards.
 * In world space the X points to east, Y up and Z south.
 */
//@{
struct scs_value_fvector_t
{
        scs_float_t x;
        scs_float_t y;
        scs_float_t z;
};

struct scs_value_dvector_t
{
        scs_double_t x;
        scs_double_t y;
        scs_double_t z;
};
//@}

/**
 * @brief Orientation of object.
 */
struct scs_value_euler_t
{
        /**
         * @brief Heading.
         *
         * Stored in unit range where <0,1) corresponds to <0,360).
         *
         * The angle is measured counterclockwise in horizontal plane when looking
         * from top where 0 corresponds to forward (north), 0.25 to left (west),
         * 0.5 to backward (south) and 0.75 to right (east).
         */
        scs_float_t heading;

        /**
         * @brief Pitch
         *
         * Stored in unit range where <-0.25,0.25> corresponds to <-90,90>.
         *
         * The pitch angle is zero when in horizontal direction,
         * with positive values pointing up (0.25 directly to zenith),
         * and negative values pointing down (-0.25 directly to nadir).
         */
        scs_float_t pitch;

        /**
         * @brief Roll
         *
         * Stored in unit range where <-0.5,0.5> corresponds to <-180,180>.
         *
         * The angle is measured in counterclockwise when looking in direction of
         * the roll axis.
         */
        scs_float_t roll;
};

/**
 * @name Combination of position and orientation.
 */
//@{
struct scs_value_fplacement_t
{
        scs_value_fvector_t     position;
        scs_value_euler_t       orientation;
};

struct scs_value_dplacement_t
{
        scs_value_dvector_t     position;
        scs_value_euler_t       orientation;
        scs_u32_t               _padding; // Explicit padding.
};
//@}

/**
 * @brief Varying type storage for values.
 */
struct scs_value_t
{
        /**
         * @brief Type of the value.
         */
        scs_value_type_t        type;

        /**
         * @brief Explicit alignment for the union.
         */
        scs_u32_t               _padding;

        /**
         * @brief Storage.
         */
        union {
                scs_value_bool_t        value_bool;
                scs_value_s32_t         value_s32;
                scs_value_u32_t         value_u32;
                scs_value_u64_t         value_u64;
                scs_value_s64_t         value_s64;
                scs_value_float_t       value_float;
                scs_value_double_t      value_double;
                scs_value_fvector_t     value_fvector;
                scs_value_dvector_t     value_dvector;
                scs_value_euler_t       value_euler;
                scs_value_fplacement_t  value_fplacement;
                scs_value_dplacement_t  value_dplacement;
                scs_value_string_t      value_string;
        };
};

scs_check_size(scs_value_s32_t, 4, 4);
scs_check_size(scs_value_u32_t, 4, 4);
scs_check_size(scs_value_u64_t, 8, 8);
scs_check_size(scs_value_s64_t, 8, 8);
scs_check_size(scs_value_float_t, 4, 4);
scs_check_size(scs_value_double_t, 8, 8);
scs_check_size(scs_value_fvector_t, 12, 12);
scs_check_size(scs_value_dvector_t, 24, 24);
scs_check_size(scs_value_fplacement_t, 24, 24);
scs_check_size(scs_value_dplacement_t, 40, 40);
scs_check_size(scs_value_string_t, 4, 8);
scs_check_size(scs_value_t, 48, 48);

/**
 * @brief Combination of value and its name.
 */
struct scs_named_value_t
{
        /**
         * @brief Name of this value.
         *
         * ASCII subset of UTF-8.
         */
        scs_string_t    name;

        /**
         * @brief Zero-based index of the value for array-like values.
         *
         * For non-array values it is set to SCS_U32_NIL.
         */
        scs_u32_t       index;

#ifdef SCS_ARCHITECTURE_x64
        /**
         * @brief Explicit 8-byte alignment for the value part.
         */
        scs_u32_t       _padding;
#endif

        /**
         * @brief The value itself.
         */
        scs_value_t     value;
};

scs_check_size(scs_named_value_t, 56, 64);

SCSSDK_FOOTER

#endif // SCSSDK_VALUE_H

/* eof */
