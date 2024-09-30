import LastWorkPage from "@modules/feature/auth/registrations/lastWorkPage";
import { Colors } from "@constants/Colors";
import { Stack } from "expo-router";

export default function LastWork() {
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
      <LastWorkPage />
    </>
  );
}
