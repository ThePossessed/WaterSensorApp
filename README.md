# Water Sensor App

On root directory, run:

```
yarn install
```

to install dependencies in all project

# App development:

## ios development:

To install dependencies to the native app from React Native:

```
cd ios

// For intel Macs
pod install --repo-update

// For m1 Macs
arch -x86_64 pod install --repo-update
```

In XCode, build the project. This will build the app in the emulator, but the backend will not be running.
Then, run

```
npm start
```

to start the app, i.e. the built app will run properly. Select options in according to the instruction on the console to run on proper environment.

## Android development

Open the project in Android studio, wait for dependencies to be downloaded.

Run

```
npm start
```

to start the app. Then, build the app in Android Studio.
