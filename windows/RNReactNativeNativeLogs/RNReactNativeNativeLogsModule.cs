using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace React.Native.Native.Logs.RNReactNativeNativeLogs
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeNativeLogsModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeNativeLogsModule"/>.
        /// </summary>
        internal RNReactNativeNativeLogsModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeNativeLogs";
            }
        }
    }
}
