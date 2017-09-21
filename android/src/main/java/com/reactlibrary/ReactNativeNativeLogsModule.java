
package com.reactlibrary;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class ReactNativeNativeLogsModule extends ReactContextBaseJavaModule {

  private final String LOG_LEVEL_INFO="info";
  private final String LOG_LEVEL_ERROR="error";
  private final String LOG_LEVEL_DEBUG="debug";
  private final ReactApplicationContext reactContext;

  public ReactNativeNativeLogsModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @ReactMethod
  public void logError(String logTag,String logMessage){
        Log.e(logTag,logMessage);
  }

  @ReactMethod
  public void logDebug(String logTag,String logMessage){
        Log.d(logTag,logMessage);
  }

  @ReactMethod
  public void logInfo(String logTag,String logMessage){
    Log.i(logTag,logMessage);
  }

  @ReactMethod
  public void logVerbose(String logTag,String logMessage){
    Log.v(logTag,logMessage);
  }

  @ReactMethod
  public void logWarn(String logTag,String logMessage){
    Log.w(logTag,logMessage);
  }


  @Override
  public String getName() {
    return "RNReactNativeNativeLogs";
  }
}