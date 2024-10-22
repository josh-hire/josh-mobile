import { Stack } from "expo-router";
import PersonalInfoProfilePage from "@modules/feature/main/personalInfoPage";
import { Colors } from "@constants/Colors";

export default function PersonalInformationScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Personal Information",
          headerShadowVisible: false,
          headerTitleStyle: {
            color: Colors.neutral.n00,
          },
          headerTintColor: Colors.neutral.n00,
          headerStyle: {
            backgroundColor: Colors.secondary.s08,
          },
        }}
      />
      <PersonalInfoProfilePage />
    </>
  );
}
