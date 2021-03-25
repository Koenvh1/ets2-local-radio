/**
 * @brief This provides dummy data to the shared memory.
 */

#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <stdarg.h>
#include <string.h>
#include <sys/mman.h>
#include <unistd.h>
#include <fcntl.h>

#include "defs.h"

/**
 * @brief Useful telemetry data.
 */
telemetry_state_t telemetry;

/**
 * @brief Opaque pointer to use for mmap
 */
void* mapped_region = NULL;
size_t MAP_SIZE = -1;


int main()
{
	memset(&telemetry, 0, sizeof(telemetry));
	MAP_SIZE = getpagesize();

	// Open shared memory
	int handle = shm_open(shm_name, O_RDWR | O_CREAT | O_TRUNC, S_IRUSR | S_IWUSR);
	if (handle < 0) {
		fprintf(stderr, "Local radio: could not open shared memory");
		return 1;
	}

	if (ftruncate(handle, MAP_SIZE) < 0) {
		fprintf(stderr, "Local radio: could not truncate shared memory");
		return 1;
	}

	mapped_region = mmap(
		0,
		MAP_SIZE,
		PROT_READ | PROT_WRITE,
		MAP_SHARED,
		handle,
		0
	);

	if (mapped_region == MAP_FAILED) {
		fprintf(stderr, "Local radio: could not mmap shared memory");
		return 1;
	}

    telemetry_state_t telemetry;
    memset(&telemetry, 0, sizeof(telemetry_state_t));
    telemetry.electricity = { 1 };

    char buf[128];
    while (1) {
        printf("Enter location (x,y,z): ");
        fgets(buf, 128, stdin);

        char numBuf[32];
        int offset = 0;
        double coords[3];
        int onCoord = 0;
        char current;
        for (int i = 0; i < 128; ++i) {
            current = buf[i];
            if (current == '\x00') {
                break;
            }

            if (current == ',' || current == '\n') {
                numBuf[i - offset] = '\x00';
                coords[onCoord] = strtod(numBuf, NULL);

                onCoord++;
                offset = i + 1;

                if (onCoord > 2) {
                    break;
                } 

                continue;
            }

            numBuf[i - offset] = current;
        }

        telemetry.world_position.position = {
            coords[0],
            coords[1],
            coords[2],
        };

        memcpy(mapped_region, &telemetry, sizeof(telemetry_state_t));
    }

    return 0;
}

void __attribute__ ((destructor)) unload(void)
{
	shm_unlink(shm_name);
}
