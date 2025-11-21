# guided-access-checker



`guided-access-checker` is a React Native/Expo module that allows you to:

- Check if Guided Access mode is enabled on an iOS device.
- Subscribe to real-time Guided Access status changes (native event listening).

This module is useful to adapt your app's interface or behavior when the user enables or disables Guided Access.


## ⚠️ Web Support

If you add this module to an Expo project with web support, make sure to install the following dependencies:

```sh
npx expo install react-dom react-native-web @expo/metro-runtime
```

This ensures the dummy web implementation works correctly and prevents import errors.

# API documentation

## Main features

- `isGuidedAccessActive() : Promise<boolean>`:
	Checks if Guided Access is currently enabled.
- `addGuidedAccessChangeListener(listener)`:
	Subscribes to Guided Access status changes. The listener receives an object `{ isActive: boolean }` on each change.

## Usage example

```tsx
import { isGuidedAccessActive, addGuidedAccessChangeListener } from 'guided-access-checker';

// Check current status
const isActive = await isGuidedAccessActive();
console.log('Guided Access active?', isActive);

// Subscribe to changes
const subscription = addGuidedAccessChangeListener((event) => {
	console.log('New Guided Access status:', event.isActive);
});

// ...later, to unsubscribe:
subscription.remove();
```

# API documentation

- [Documentation for the latest stable release](https://docs.expo.dev/versions/latest/sdk/meepha.com#readme/)
- [Documentation for the main branch](https://docs.expo.dev/versions/unversioned/sdk/meepha.com#readme/)

# Installation in managed Expo projects

For [managed](https://docs.expo.dev/archive/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install guided-access-checker
```

### Configure for Android




### Configure for iOS

Run `npx pod-install` after installing the npm package.

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide]( https://github.com/expo/expo#contributing).
