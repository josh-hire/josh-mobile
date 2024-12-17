import { Stack } from "expo-router";
import HomePage from "@modules/feature/main/homePage";
import { Colors } from "@constants/Colors";
import React from "react";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.general.background },
        }}
      />
      <HomePage />
    </>
  );
}
