import { Colors } from "@constants/Colors";
import SuccessForgotPassword from "@modules/feature/auth/resetPasswords/successForgotPasswordPage";
import { Stack } from "expo-router";
import React from "react";

export default function ForgotPasswordScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          contentStyle: { backgroundColor: Colors.general.background },
          headerShown: false,
        }}
      />
      <SuccessForgotPassword />
    </>
  );
}
