import SelectRegisterPage from "@modules/feature/auth/selectRegisterPage";
import { Colors } from "@constants/Colors";
import { Stack } from "expo-router";
import React from "react";

export default function SelectRegisterScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          contentStyle: { backgroundColor: Colors.general.background },
          headerShown: false
        }}
      />
      <SelectRegisterPage />
    </>
  );
}
