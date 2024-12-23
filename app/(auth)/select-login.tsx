import { Colors } from "@constants/Colors";
import SelectLoginPage from "@modules/feature/auth/selectLoginPage";
import { Stack } from "expo-router";
import React from "react";

export default function SelectLoginScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          contentStyle: { backgroundColor: Colors.general.background },
          headerShown: false,
        }}
      />
      <SelectLoginPage />
    </>
  );
}
