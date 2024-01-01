using System;
using System.IO.MemoryMappedFiles;
using SCSSdkClient.Object;

namespace SCSSdkClient {

    /// <summary>
    ///     Manage the shared memory
    /// </summary>
    public class SharedMemory {

        /// <summary>
        ///     size of the shared memory in bytes
        /// </summary>
        private const uint defaultMapSize = 32 * 1024;

        /// <summary>
        ///     holds the byte to object convert class
        /// </summary>
        private readonly SCSSdkConvert _sdkconvert = new SCSSdkConvert();

        /// <summary>
        ///     memory mapped file
        /// </summary>
        private MemoryMappedFile _memoryMappedHandle;

        /// <summary>
        ///     memory mapped view accessor
        /// </summary>
        private MemoryMappedViewAccessor _memoryMappedView;

        /// <summary>
        ///     Could we create a memory view on the memory map
        /// </summary>
        public bool Hooked { get; private set; }

        /// <summary>
        ///     if we can't create a memory view hold the exception
        /// </summary>
        public Exception HookException { get; private set; }

        /// <summary>
        ///     raw byte data of the memory map
        /// </summary>
        public byte[] RawData { get; private set; }

        /// <summary>
        ///     create/connect to a shared memory file
        /// </summary>
        /// <param name="map">Map location string</param>
        public void Connect(string map) => Connect(map, defaultMapSize);

        /// <summary>
        ///     create/connect to a shared memory file
        /// </summary>
        /// <param name="map">map location string</param>
        /// <param name="mapSize">size of the map</param>
        public void Connect(string map, uint mapSize) {
            if (Hooked) {
                Disconnect();
            }

            // Reset any errors
            HookException = null;

            try {
                RawData = new byte[mapSize];

                // Open the map and create a "memory view" at the begin (byte 0)
                _memoryMappedHandle = MemoryMappedFile.CreateOrOpen(map, mapSize, MemoryMappedFileAccess.ReadWrite);
                _memoryMappedView = _memoryMappedHandle.CreateViewAccessor(0, mapSize);

                // Mark as a success.
                Hooked = true;
            } catch (Exception e) {
                // We were unable to hook onto the map.
                Hooked = false;
                HookException = e;
            }
        }

        /// <summary>
        ///     close the memory view and handle
        /// </summary>
        public void Disconnect() {
            Hooked = false;

            _memoryMappedView.Dispose();
            _memoryMappedHandle.Dispose();
        }

        /// <summary>
        ///     read data from memory and update object
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public SCSTelemetry Update<T>() {
            Update();

            // Convert the data to our object.
            return ToObject<T>(RawData);
        }

        /// <summary>
        ///     reread data from memory view
        /// </summary>
        public void Update() {
            if (!Hooked || _memoryMappedView == null) {
                return;
            }

            // Re-read data from the view.
            _memoryMappedView.ReadArray(0, RawData, 0, RawData.Length);
        }

        /// <summary>
        ///     Cast a set of bytes to a managed C# object.
        /// </summary>
        /// <typeparam name="T">Managed C# object type</typeparam>
        /// <param name="structureDataBytes">Bytes array</param>
        /// <returns>Managed object from given bytes</returns>
        protected SCSTelemetry ToObject<T>(byte[] structureDataBytes) => _sdkconvert.Convert(structureDataBytes);
    }
}
