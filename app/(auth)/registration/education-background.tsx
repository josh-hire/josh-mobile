import EducationBackgroundPage from "@modules/feature/auth/registrations/educationBackgroundPage";
import { Colors } from "@constants/Colors";
import { Stack } from "expo-router";

export default function EducationBackground() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          contentStyle: { backgroundColor: Colors.general.background },
          headerBackButtonMenuEnabled: false,
          headerTitle: "",
        }}
      />
      <EducationBackgroundPage />
    </>
  );
}
