import EducationBackgroundPage from "@/components/pages/auth/registration/EducationBackgroundPage";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function EducationBackground() {
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
      <EducationBackgroundPage />
    </>
  );
}
