SDK_HEADERS=\
	../sdk/include/*.h \
	../sdk/include/common/*.h \
	../sdk/include/amtrucks/*.h \
	../sdk/include/eurotrucks2/*.h

SDK_INCLUDES=\
	-I../sdk/include \
	-I../sdk/include/common/ \
	-I../sdk/include/amtrucks/ \
	-I../sdk/include/eurotrucks2

all: telemetry.so read_util

telemetry.so: telemetry_mem.cpp $(SDK_HEADERS)
	g++ -o $@ -fPIC -Wall --shared -Wl,-soname,$@ $(SDK_INCLUDES) telemetry_mem.cpp -lrt

read_util: read_util.cpp $(SDK_HEADERS)
	g++ -o $@ -Wall $(SDK_INCLUDES) read_util.cpp -lrt

.PHONY: clean
clean:
	@rm -f -- *.so read_util
