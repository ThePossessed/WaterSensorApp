import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "Firebase/FirebaseConfig";

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button
        onPress={() => {
          FIREBASE_AUTH.signOut();
        }}
        title="Logout"
      />
    </SafeAreaView>
  );
};

export default Home;
