import { Colors } from "@constants/Colors";
import LoginPage from "@modules/feature/auth/loginPage";
import { Stack } from "expo-router";
import React from "react";

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTransparent: true,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: Colors.general.background },
          headerBackButtonMenuEnabled: false,
          headerTitle: "",
        }}
      />
      <LoginPage />
    </>
  );
}
