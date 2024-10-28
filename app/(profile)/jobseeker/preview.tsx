import { Stack } from "expo-router";
import { Colors } from "@constants/Colors";
import ProfilePreviewPage from "@modules/feature/profile/previewPage";

export default function ProfilePreviewScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Preview",
          headerShadowVisible: false,
          headerTintColor: Colors.neutral.n00,
          headerTitleStyle: {
            color: Colors.neutral.n00,
          },
          headerStyle: {
            backgroundColor: Colors.secondary.s08,
          },
        }}
      />
      <ProfilePreviewPage />
    </>
  );
}