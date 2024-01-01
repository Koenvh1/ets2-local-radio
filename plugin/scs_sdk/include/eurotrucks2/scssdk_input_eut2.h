/**
 * @file scssdk_input_eut2.h
 *
 * @brief ETS2 input specific constants.
 */
#ifndef SCSSDK_INPUT_EUT2_H
#define SCSSDK_INPUT_EUT2_H

#include "../scssdk.h"

SCSSDK_HEADER

/**
 * @name Value used in the scs_sdk_init_params_t::game_version
 *
 * Changes in the major version indicate incompatible changes.
 * Changes in the minor version indicate compatible changes (e.g. added more types)
 *
 * Changes:
 * 1.00 - initial version
 */
//@{
#define SCS_INPUT_EUT2_GAME_VERSION_1_00             SCS_MAKE_VERSION(1, 0)
#define SCS_INPUT_EUT2_GAME_VERSION_CURRENT          SCS_INPUT_EUT2_GAME_VERSION_1_00
//@}

SCSSDK_FOOTER

#endif // SCSSDK_INPUT_EUT2_H

/* eof */
