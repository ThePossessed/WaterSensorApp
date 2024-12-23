import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Listings from "Screens/Main/Home/Main";
import Settings from "Screens/Main/Settings/Settings";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { FIREBASE_AUTH } from "Firebase/FirebaseConfig";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function InsideLayout(user: { username: string }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        children={() => <Listings username={user.username} />}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        children={() => <Settings />}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user?.email);
      setUser(user?.email ?? null);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen
            name="InsideLayout"
            children={() => <InsideLayout username={user} />}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            children={() => <Login />}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
