import EducationBackgroundPage from "@modules/feature/auth/registrations/educationBackgroundPage";
import { Colors } from "@constants/Colors";
import { Stack } from "expo-router";
import React from "react";

export default function EducationBackground() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colors.general.background },
          headerBackButtonMenuEnabled: false,
          headerTitle: "",
        }}
      />
      <EducationBackgroundPage />
    </>
  );
}
