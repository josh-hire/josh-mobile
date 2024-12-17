import { Stack } from "expo-router";
import ProfilePage from "@modules/feature/profile/profilePage";
import React from "react";

export default function ProfileScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <ProfilePage />
    </>
  );
}
