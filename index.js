
import { NativeModules ,Platform} from 'react-native';

const { RNReactNativeNativeLogs } = NativeModules;

export const LOG_LEVEL = {
    INFO: 'info',
    ERROR: 'error',
    VERBOSE: 'verbose',
    WARN: 'warn'
}
function setErrorPrototype(){
	var config = {
  configurable: true,
  value: function() {
    var alt = {};
    var storeKey = function(key) {
      alt[key] = this[key];
    };
    Object.getOwnPropertyNames(this).forEach(storeKey, this);
    return alt;
  }
};
Object.defineProperty(Error.prototype, 'toJSON', config);
}
setErrorPrototype()

const NativeLogs = {};

NativeLogs.log = (logLevel, logTag, logMessage) => {

    if(!logMessage){
        return
    }
    if (__DEV__) {
             console.info(logTag, logMessage);
    }
    //Added temp check for iOS
    if(Platform.OS==='ios'){
        return;
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
