import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_DB } from "Firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Listings from "./Listings";

const Home = (user: { username: string }) => {
  const [userSensor, setUserSensor] = useState<Array<string>>([]);

  useEffect(() => {
    const docRef = doc(FIREBASE_DB, "users", user.username);

    getDoc(docRef).then((docSnap) => {
      const currentUserSensor = docSnap.data()?.sensorID;
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data()?.sensorID);
        setUserSensor(currentUserSensor);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        flexDirection: "row", // Arrange children in rows
        justifyContent: "space-around", // Center content vertically
        alignItems: "center", // Center content horizontally
        // backgroundColor: "yellow",
        flexWrap: "wrap", // Allow wrapping to the next row
      }}
    >
      {userSensor.map((sensor, index) => (
        <Listings key={index} data={sensor} index={index} />
      ))}
    </SafeAreaView>
  );
};

export default Home;
