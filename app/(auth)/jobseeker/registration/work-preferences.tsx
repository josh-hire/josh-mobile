import WorkPreferencesPage from "@modules/feature/auth/registrations/workingPreferencesPage";
import { Colors } from "@constants/Colors";
import { Stack } from "expo-router";
import React from "react";

export default function WorkPreferences() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShadowVisible: false,
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colors.general.background },
          headerBackButtonMenuEnabled: false,
          headerTitle: "",
        }}
      />
      <WorkPreferencesPage />
    </>
  );
}
