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

all: ets2-telemetry-lin.so read_util

ets2-telemetry-lin.so: plugin.cpp $(SDK_HEADERS)
	g++ -O2 -o $@ -fPIC -Wall --shared -Wl,-soname,$@ $(SDK_INCLUDES) plugin.cpp -lrt

read_util: read_util.cpp $(SDK_HEADERS)
	g++ -O2 -o $@ -Wall $(SDK_INCLUDES) read_util.cpp -lrt

.PHONY: clean
clean:
	@rm -f -- *.so read_util
