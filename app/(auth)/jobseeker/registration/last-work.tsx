import LastWorkPage from "@modules/feature/auth/registrations/lastWorkPage";
import { Colors } from "@constants/Colors";
import { Stack } from "expo-router";
import React from "react";

export default function LastWork() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTintColor: Colors.neutral.n00,
          headerTransparent: true,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: Colors.general.background },
          headerBackButtonMenuEnabled: false,
          headerTitle: "",
        }}
      />
      <LastWorkPage />
    </>
  );
}
