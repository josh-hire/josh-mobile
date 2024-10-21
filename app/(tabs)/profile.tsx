import { Stack } from "expo-router";
import ProfilePage from "@/modules/feature/main/profilePage";

export default function ProfileScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <ProfilePage />
    </>
  );
}
