import { StatusBar } from "expo-status-bar";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "Firebase/FirebaseConfig";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
  Pressable,
  Animated,
  Alert,
} from "react-native";

// const animatedLogin = new Animated.Value(1);
// const animatedRegister = new Animated.Value(2);

export default function Login() {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const auth = FIREBASE_AUTH;

  async function login(username: string, password: string) {
    if (username && password) {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          username,
          password
        );
        console.log(response);
        Alert.alert("Login Successful");
      } catch (error: any) {
        console.log(error);
        console.log("Login Failed: " + error.message);
        Alert.alert("Login Failed");
      }
    }
  }

  async function register(username: string, password: string) {
    if (username && password) {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          username,
          password
        );
        console.log(response);
        Alert.alert("Register Successful");
      } catch (error: any) {
        console.log(error);
        console.log("Register Failed: " + error.message);
        Alert.alert("Register Failed");
      }
    }
  }

  // const fadeInLogin = () => {
  //   Animated.timing(animatedLogin, {
  //     toValue: 0.4,
  //     duration: 100,
  //     useNativeDriver: true,
  //   }).start();
  // };
  // const fadeOutLogin = () => {
  //   Animated.timing(animatedLogin, {
  //     toValue: 1,
  //     duration: 200,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const fadeInRegister = () => {
  //   Animated.timing(animatedRegister, {
  //     toValue: 0.4,
  //     duration: 100,
  //     useNativeDriver: true,
  //   }).start();
  // };
  // const fadeOutRegister = () => {
  //   Animated.timing(animatedRegister, {
  //     toValue: 1,
  //     duration: 200,
  //     useNativeDriver: true,
  //   }).start();
  // };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Enter Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="Enter Password"
      />
      {/* <Animated.View style={styles.loginBox}>
        <Pressable
          style={styles.login}
          onPress={() => login(username, password)}
          onPressIn={fadeInLogin}
          onPressOut={fadeOutLogin}
        >
          <Text style={styles.textLogin}>Login</Text>
        </Pressable>
      </Animated.View>
      <Animated.View style={styles.registerBox}>
        <Pressable
          style={styles.login}
          onPress={() => register(username, password)}
          onPressIn={fadeInRegister}
          onPressOut={fadeOutRegister}
        >
          <Text style={styles.textLogin}>Register</Text>
        </Pressable>
      </Animated.View> */}
      <Button title="Login" onPress={() => login(username, password)} />
      <Button title="Register" onPress={() => register(username, password)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  // loginBox: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: 40,
  //   margin: 12,
  //   padding: 10,
  //   opacity: animatedLogin,
  // },
  // registerBox: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: 40,
  //   margin: 12,
  //   padding: 10,
  //   opacity: animatedRegister,
  // },
  login: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "25%",
    backgroundColor: "red",
  },
  textLogin: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
