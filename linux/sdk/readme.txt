========== Introduction ==========

This SDK provides information and APIs necessary for interaction between a third party software and the Euro Truck Simulator 2 (ETS2),  American Truck Simulator (ATS) and possible other future games from SCS Software. At this time the only supported API is telemetry output. In the future additional APIs might be implemented.

========== Plugin modules ==========

The plugins are implemented as a dynamically loaded libraries (DLL on Windows, SO on Linux) which MUST export set of functions required by the APIs they want to use. The game loads all plugins found by combination of following methods:

1) By gathering all libraries from "plugins" subdirectory of the directory containing the game binary (e.g. /bin/win_x86/plugins).
2) (Windows only) By processing all string values stored in registry key "HKEY_LOCAL_MACHINE\SOFTWARE\SCS Software\<GAME_NAME>\Plugins" (GAME_NAME is "Euro Truck Simulator 2" for ETS2 and "American Truck Simulator" for ATS). When targeting 32bit version of the game on 64bit OS, the registry key is stored in "HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\SCS Software\<GAME_NAME>\Plugins". The data of those values are interpreted as paths to the libraries, one path per value. The names of the values are not relevant however it is recommended to use something identifying your product to avoid possible conflicts. When installing your product you can create this value including all the keys in the path if they do not exist yet to allow the game to find the plugin even if the user installs the game latter. When uninstalling your product you should remove the value. The keys can be removed if and only if they are empty.

If one plugin is specified more than once, the behavior is undefined. When the game wants to activate specific API, it will call the initialization function for that API in all plugins which export the required set of functions for that API. When the game wants to deactivate specific API, it will call the de-initialization function in all plugins which indicated success during the initialization and which export that function. Once all APIs are de-initialized, the game might unload the plugins. The plugins MUST be written with assumption that the initialization/de-initialization cycle might happen several times for single load/unload cycle and that there might be several load/unload cycles per lifetime of the game process.

The ETS2/ATS provides several console commands to manipulate the APIs to simplify development. Note that those commands work only if there was at least one telemetry plugin during the startup as otherwise the game might skip initializations which are only necessary when the API is active. The commands are:

sdk reinit
Does de-initialize/initialize cycle for all APIs on all plugins. Useful if the plugin is loading some configuration from file during initialization.

sdk unload
De-initializes all APIs and unloads all plugins. Useful if you want to build a new version of the plugin. Use "sdk reload" to load the new plugin.

sdk reload
De-initializes all APIs, unloads all plugins, reloads all plugins and initializes the APIs.

========== Calling conventions and threading ==========

The APIs are not thread safe. The game calls all functions inside the plugin from single thread (main thread) and all calls back to the game (e.g. to register telemetry channel callback) MUST happen only on that thread and only while the plugin code runs as result of direct call from the game (e.g. during execution of callback registered previously as opposed to window message handler running as result of game processing its message loop). Some API functions might have additional limitations on situations in which they can be called.

The general flow is that the plugin's initialization function registers callback functions to be called in various situations and the game the calls them back as necessary. For some APIs it is possible to modify the registrations latter when the game calls one from the callbacks. Check documentation of specific API for more information about relevant limitations.

========== Versioning ==========

To provide compatibility with the future changes of the API there is a version negotiation mechanism. The API initialization function in the plugin is provided with suggested version of the API. If it returns SCS_RESULT_unsupported, the game will try next lower version it supports until the initialization succeeds, fails with other return code or until the game runs out of supported API versions.

The API version number is composed from major and minor components. Major version is increased when there is incompatible change. The minor version is increased when there is a backwards compatible change (e.g. addition of event or value type if it does not change the layout of the scs_value_t structure for existing types).

In addition to the API version, the initialization parameter contains identification of the game and API-specific game version (e.g. there might be one version for telemetry API and different one for some future API). This information is mainly intended to be used to allow customization of the plugin behavior for specific game. As with the APi version there are both major and minor components however there are several differences. There is no negotiation mechanism and the game supports exactly one game version. Removal of telemetry channel is considered a backward compatible change as the plugin is notified about that by failure of the callback registration and can assume default value.

========== Telemetry API ==========
Telemetry API provides output of various dynamic (e.g. truck speed) or semi-dynamic (e.g. truck parameters) information. Telemetry supports two kinds of callbacks:

-- Events
Global callbacks called to indicate specific phase of processing (e.g. start/end of telemetry per frame data) or to notify about change in semi-dynamic data (e.g. changed truck parameters because user switched to a different truck). The event callbacks are provided with id of the event, pointer to event-specific structure with additional information and context information specified during callback registration. It is possible to register channel callbacks from within event callback. This is useful when configuration events (e.g. truck change) are received.

-- Channels
Associated with individual sources of telemetry information (e.g. position, speed, rpm). The callback is called when value in corresponding source is changed or is assumed to be changed (e.g. for some inputs the game assumes that the value is changing most of the time anyway and will not filter the calls). The callback is provided with identification of the channel, its new value and context information specified during callback registration. Some sources can provide the value in more than one format (e.g. as double or float). In that case the callback will receive value in the format specified during callback registration.

Note that the game might contain additional channels and configurations with "dev." prefix which are not documented. They are used for development purposes or contain unrealistic values and might be changed or removed at any time so the plugins should ignore them. If you would need information provided by those objects, please let us know.

===== Scale ETS2/ATS

The map scale varies depending on situation (e.g. it is different in cities than in other parts of the map and different in UK than in the continental Europe). To maintain the apparent distances, the game scales delta applied to the time-of-day and to the distance driven (e.g. odometer) by factor derived from the current situation. The current value of the scale is provided trough the SCS_TELEMETRY_CHANNEL_local_scale channel.

===== Timing ETS2/ATS

The rendering time advances by variable steps depending on effective FPS. This time controls the animations and processing of inputs happens at start of each rendering frame. The physics tries to run with a fixed step staying at most one step ahead of the current rendering time. Each physics step is considered a frame for telemetry purposes. For rendering purposes the physically simulated position and orientation is interpolated from two surrounding physics steps.
