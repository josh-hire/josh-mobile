import { Colors } from "@constants/Colors";
import LoginPage from "@modules/feature/auth/loginRecruiterPage";
import { Stack } from "expo-router";

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: Colors.general.background },
          headerBackButtonMenuEnabled: false,
          headerTitle: "",
        }}
      />
      <LoginPage />
    </>
  );
}
