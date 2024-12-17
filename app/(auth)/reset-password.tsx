import { Colors } from "@constants/Colors";
import ResetPasswordPage from "@modules/feature/auth/resetPasswords/resetPasswordPage";
import { Stack } from "expo-router";
import React from "react";

export default function ForgotPasswordScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShadowVisible: false,
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colors.general.background },
          headerTitle: "",
        }}
      />
      <ResetPasswordPage />
    </>
  );
}
