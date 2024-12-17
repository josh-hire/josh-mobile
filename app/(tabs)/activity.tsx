import { Stack } from "expo-router";
import ActivityLIstPage from "@modules/feature/activity/activityListPage";
import React from "react";

export default function ActivityScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <ActivityLIstPage />
    </>
  );
}
