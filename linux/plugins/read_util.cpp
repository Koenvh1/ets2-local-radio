/**
 * @brief Utility that will output the value of the position in the shared memory.
 * 
 * Return codes:
 *   0: ok - exited normally (currently not reachable)
 *   1: error - could not open shared memory
 *   2: error - failed to mmap shared memory
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/mman.h>
#include <unistd.h>
#include <fcntl.h>

#include "defs.h"

// SDK

#include "scssdk_telemetry.h"
#include "eurotrucks2/scssdk_eut2.h"
#include "eurotrucks2/scssdk_telemetry_eut2.h"
#include "amtrucks/scssdk_ats.h"
#include "amtrucks/scssdk_telemetry_ats.h"

#define ERR_COULD_NOT_OPEN_MEMORY 1
#define ERR_MMAP_FAILED 2

void print_info(telemetry_state_t info) {
    scs_value_dvector_t pos = info.world_position.position;
    int elec = info.electricity.value > 0 ? 1 : 0;
    fprintf(stdout, "INFO %f,%f,%f;%d\n", pos.x, pos.y, pos.z, elec);
    fflush(stdout);
}

int main() {
	// We only need one page of memory
	size_t MAP_SIZE = getpagesize() * NUM_PAGES;

	// Open shared memory
	int handle = shm_open(shm_name, O_RDONLY, S_IRUSR);
	if (handle < 0) {
		fprintf(stderr, "ERR Could not open shared memory\n");
		return ERR_COULD_NOT_OPEN_MEMORY;
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
		return ERR_MMAP_FAILED;
	}

	telemetry_state_t telemetry;
    memset(&telemetry, 0, sizeof(telemetry_state_t));
    while (1) {
        memcpy(&telemetry, mapped_region, sizeof(telemetry_state_t));
        print_info(telemetry);
        usleep(500000);
    }

    return 0;
}