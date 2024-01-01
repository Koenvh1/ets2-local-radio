#if LOGGING
#ifndef LOGGER
#define LOGGER
#include <string>
#include <fstream>

namespace logger
{
    extern const std::string path ;
    extern std::ofstream out ;
    void flush() ;
}



#endif 
#endif