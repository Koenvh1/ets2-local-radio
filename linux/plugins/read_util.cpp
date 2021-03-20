/**
 * @brief Utility that will output the value of the position in the shared memory.
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/mman.h>
#include <unistd.h>
#include <fcntl.h>

// SDK

#include "scssdk_telemetry.h"
#include "eurotrucks2/scssdk_eut2.h"
#include "eurotrucks2/scssdk_telemetry_eut2.h"
#include "amtrucks/scssdk_ats.h"
#include "amtrucks/scssdk_telemetry_ats.h"


static char shm_name[] = "/ets2radiolinux";

void print_position(scs_value_dplacement_t placement) {
    scs_value_dvector_t pos = placement.position;
    fprintf(stdout, "%f,%f,%f\n", pos.x, pos.y, pos.z);
	fflush(stdout);
}

int main() {
	// We only need one page of memory
	size_t MAP_SIZE = getpagesize();

	// Open shared memory
	int handle = shm_open(shm_name, O_RDONLY, S_IRUSR);
	if (handle < 0) {
		fprintf(stderr, "ERR Could not open shared memory\n");
		return 1;
	}

	void* mapped_region = mmap(
		0,
		MAP_SIZE,
		PROT_READ,
		MAP_SHARED,
		handle,
		0
	);

	if (mapped_region == MAP_FAILED) {
		fprintf(stderr, "ERR Could not mmap shared memory\n");
		return 1;
	}

    scs_value_dplacement_t current;
    memset(&current, 0, sizeof(scs_value_dplacement_t));
    while (1) {
        memcpy(&current, mapped_region, MAP_SIZE);
        print_position(current);
        usleep(500000);
    }

    return 0;
}