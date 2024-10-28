import { Stack } from "expo-router";
import ProfilePage from "@modules/feature/profile/profilePage";

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
