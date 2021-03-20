#ifndef __DEFS__
#define __DEFS__

// SDK
#include "scssdk_telemetry.h"
#include "eurotrucks2/scssdk_eut2.h"
#include "eurotrucks2/scssdk_telemetry_eut2.h"
#include "amtrucks/scssdk_ats.h"
#include "amtrucks/scssdk_telemetry_ats.h"

const char shm_name[] = "/ets2radiolinux";
const int NUM_PAGES = 1;

typedef struct telemetry_state_t
{
	scs_value_dplacement_t world_position;
	scs_value_bool_t electricity;
} telemetry_state_t;

#endif /* __DEFS__ */
