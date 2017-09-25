
import { NativeModules } from 'react-native';

const { RNReactNativeNativeLogs } = NativeModules;

export const LOG_LEVEL = {
    INFO: 'info',
    ERROR: 'error',
    VERBOSE: 'verbose',
    WARN: 'warn'
}
const NativeLogs = {};

NativeLogs.log = (logLevel, logTag, logMessage) => {
    if (__DEV__) {
        if (logLevel === LOG_LEVEL.INFO) {
            console.info(logTag, logMessage);
        } else if (logLevel === LOG_LEVEL.WARN) {
            console.warn(logTag, logMessage);
        }
       else if (logLevel === LOG_LEVEL.ERROR) {
            console.error(logTag, logMessage);
        }
        else{
             console.info(logTag, logMessage);
        }
    }
    switch (logLevel) {
        case LOG_LEVEL.INFO:
            RNReactNativeNativeLogs.logInfo(logTag, JSON.stringify(logMessage));
            break;
        case LOG_LEVEL.ERROR:
            RNReactNativeNativeLogs.logError(logTag, JSON.stringify(logMessage));
            break;
        case LOG_LEVEL.WARN:
            RNReactNativeNativeLogs.logWarn(logTag, JSON.stringify(logMessage));
            break;
        case LOG_LEVEL.VERBOSE:
            RNReactNativeNativeLogs.logVerbose(logTag, JSON.stringify(logMessage));
            break;

    }
}
export default NativeLogs;
