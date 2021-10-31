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

CLEANABLE=*.so read_util dummy

all: ets2-telemetry-lin.so read_util dummy

ets2-telemetry-lin.so: plugin.cpp $(SDK_HEADERS) defs.h
	g++ -O2 -o $@ -fPIC -Wall --shared -Wl,-soname,$@ $(SDK_INCLUDES) plugin.cpp -lrt

read_util: read_util.cpp $(SDK_HEADERS) defs.h
	g++ -O2 -o $@ -Wall $(SDK_INCLUDES) read_util.cpp -lrt

dummy: dummy.cpp $(SDK_HEADERS) defs.h
	g++ -O2 -o $@ -Wall $(SDK_INCLUDES) dummy.cpp -lrt

.PHONY: clean
clean:
	@rm -f -- $(CLEANABLE)
