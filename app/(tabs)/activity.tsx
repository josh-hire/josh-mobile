import { Stack } from "expo-router";
import ActivityLIstPage from "@modules/feature/activity/activityListPage";

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
