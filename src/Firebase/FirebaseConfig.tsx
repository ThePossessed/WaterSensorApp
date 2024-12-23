import firebase, { FirebaseOptions, initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Platform } from "react-native";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your secondary Firebase project credentials for Android...
const androidCredentials: FirebaseOptions = {
  appId: "1:1088896724954:android:7eb9dbd0936112581d5ae3",
  apiKey: "AIzaSyBsC7FVoJW7whnF40j-S0yMh89FK_wbIpw",
  databaseURL: "https://ricardotest-b12ea-default-rtdb.firebaseio.com",
  storageBucket: "ricardotest-b12ea.appspot.com",
  messagingSenderId: "1088896724954",
  projectId: "ricardotest-b12ea",
};

// Your secondary Firebase project credentials for iOS...
const iosCredentials: FirebaseOptions = {
  appId: "1:1088896724954:ios:3439220ed53ba0121d5ae3",
  apiKey: "AIzaSyC6gEvxY0YWNz6Af8Jg77zGOpzRTiw7h24",
  databaseURL: "https://ricardotest-b12ea-default-rtdb.firebaseio.com",
  storageBucket: "ricardotest-b12ea.appspot.com",
  messagingSenderId: "1088896724954",
  projectId: "ricardotest-b12ea",
};

// Select the relevant credentials
var credentials: FirebaseOptions | undefined = Platform.select({
  android: androidCredentials,
  ios: iosCredentials,
});
if (credentials === undefined) {
  credentials = androidCredentials;
}

export const FIREBASE_APP = initializeApp(credentials);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
