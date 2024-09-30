import SkillPossesedPage from "@/components/pages/auth/registration/SkillPossesedPage";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function SkillPossesed() {
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
      <SkillPossesedPage />
    </>
  );
}
