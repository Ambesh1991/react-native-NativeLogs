
# react-native-react-native-native-logs

## Getting started

`$ npm install react-native-native-logs --save`

### Mostly automatic installation

`$ react-native link react-native-native-logs`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-native-logs` and add `RNReactNativeNativeLogs.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeNativeLogs.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.ReactNativeNativeLogsPackage;` to the imports at the top of the file
  - Add `new ReactNativeNativeLogsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  include ':react-native-native-logs'
project(':react-native-native-logs').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-native-logs/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-native-logs')
  	```




## Usage
```javascript
import RNReactNativeNativeLogs from 'react-native-native-logs';

// TODO: What to do with the module?
RNReactNativeNativeLogs;
```
  