import { Stack } from "expo-router";
import { Colors } from "@constants/Colors";
import SettingSuccessChangePasswordPage from "@modules/feature/profile/settingPage/successChangePasswordPage";

export default function SuccessChangePasswordScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: Colors.secondary.s08,
          },
        }}
      />
      <SettingSuccessChangePasswordPage />
    </>
  );
}
