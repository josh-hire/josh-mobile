import { Colors } from "@constants/Colors";
import VerificationPage from "@modules/feature/auth/verificationPage";
import { Stack } from "expo-router";
import React from "react";

export default function VerificationScreen() {
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
      <VerificationPage />
    </>
  );
}
