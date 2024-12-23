import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Listings = (userdata: { data: string; index: number }) => {
  return (
    <View
      style={
        {
          // flex: 1,
          // flexDirection: "row", // Arrange children in rows
          // flexWrap: "wrap", // Allow wrapping to the next row
          // justifyContent: "center", // Adjust alignment for rows
          // backgroundColor: "red",
        }
      }
    >
      <Text
        style={{
          width: 150,
          height: 100,
          backgroundColor: "lightblue",
          margin: 5,
          justifyContent: "center", // Center text vertically
          alignItems: "center", // Center text horizontally
          textAlign: "center", // Center text horizontally
        }}
      >
        <Text></Text>
        <Text>{userdata.data}</Text>
      </Text>
    </View>
  );
};

export default Listings;
