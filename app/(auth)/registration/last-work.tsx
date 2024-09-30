import LastWorkPage from "@/components/pages/auth/registration/LastWorkPage";
import { Colors } from "@/constants/Colors";
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
