import { Stack } from "expo-router";
import { Colors } from "@constants/Colors";
import SettingPage from "@modules/feature/profile/settingPage";
import React from "react";

export default function SettingScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Setting",
          headerShadowVisible: false,
          headerTintColor: Colors.neutral.n00,
          headerTitleStyle: {
            color: Colors.neutral.n00,
          },
          headerStyle: {
            backgroundColor: Colors.general.background,
          },
        }}
      />
      <SettingPage />
    </>
  );
}
