#if LOGGING
#include <windows.h>
#include <string>
#include <ctime>
#include "log.hpp"
#include <fstream>

// About: How to
// For what is this class?
// It is used to log to file.
// Normally it is not activated. That saves resources and
// the dll size is a lot smaller.
// To use this the simplest way is to use compiler preamble.
// Add the word 'LOGGING' to your compile preamble and this function
// and every code with the compiler '#if LOGGING' and at the end '#endif' will compile, too.
// This was implemented to make it hopefully easier to fix bugs.

// Function: Logger
// used to log to file, usage: add LOGGING to preamble to activate it globally in cpp, but use it with care not full tested yet and not many features 
// also it rise dll size and may have impacted on the system (loading time, etc.)
namespace logger {


    namespace {
        // Function: s2ws
        // convert string to wchar (wstring)
        auto s2ws(const std::string& s) -> std::wstring {
            const auto slength = static_cast<int>(s.length()) + 1;
            const auto len = MultiByteToWideChar(CP_ACP, 0, s.c_str(), slength, nullptr, 0);
            const auto buf = new wchar_t[len];
            MultiByteToWideChar(CP_ACP, 0, s.c_str(), slength, buf, len);
            std::wstring r(buf);
            delete[] buf;
            return r;
        }

        // Function: time_stamp
        // current time to string
        auto time_stamp() -> std::string {
            const auto now = std::time(nullptr);
            char cstr[256]{};
            return std::strftime(cstr, sizeof(cstr), "%Y%m%d_%H%M%S", std::localtime(&now)) ? cstr : "";
        }

        // Function: exe_path
        // get current path
        auto exe_path() -> std::string {
            char buffer[248];
            GetModuleFileNameA(nullptr, buffer, 248);
            const auto pos = std::string(buffer).find_last_of("\\/");
            return std::string(buffer).substr(0, pos);
        }

        // Function: path_to_session_log_file
        // get the path to the current log file
        auto path_to_session_log_file() -> std::string {
            if (CreateDirectoryA((exe_path() + "/tmp/").c_str(), nullptr) || ERROR_ALREADY_EXISTS == GetLastError()) {
                if (CreateDirectoryA((exe_path() + "/tmp/log/").c_str(), nullptr) || ERROR_ALREADY_EXISTS ==
                    GetLastError()) {
                    static const auto log_dir = exe_path() + "/tmp/log/";
                    static const std::string log_file_name = "log.txt";
                    return log_dir + time_stamp() + '_' + log_file_name;
                }
                return "";
            }
            return "";

        }

        // Function: directory_exists
        // check if a directory exists
        auto directory_exists(const LPCTSTR sz_path) -> BOOL {
            const auto dw_attrib = GetFileAttributes(sz_path);

            return (dw_attrib != INVALID_FILE_ATTRIBUTES &&
                (dw_attrib & FILE_ATTRIBUTE_DIRECTORY));
        }


    }

    // Const: path
    // the path to the current log file
    const std::string path = path_to_session_log_file();
    // handle: out
    // stream to file
    std::ofstream out = std::ofstream(path);
    // Function: flush
    // flush the memory 
    void flush() { out.flush(); }
}

#endif
