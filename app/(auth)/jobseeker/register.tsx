import { Colors } from "@constants/Colors";
import RegisterPage from "@modules/feature/auth/registrations/registrationPage";
import { Stack } from "expo-router";
import React from "react";

export default function RegisterScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          contentStyle: { backgroundColor: Colors.general.background },
          headerBackButtonMenuEnabled: false,
          headerTitle: "",
          headerShown: false,
        }}
      />
      <RegisterPage />
    </>
  );
}
