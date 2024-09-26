import WorkPreferencesPage from "@/components/pages/auth/registration/WorkingPreferencesPage";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function WorkPreferences() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          contentStyle: { backgroundColor: Colors.general.background },
          headerBackButtonMenuEnabled: false,
          headerTitle: ''
        }}
      />
      <WorkPreferencesPage />
    </>
  );
}
