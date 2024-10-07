import { Stack } from "expo-router";
import HomePage from "@/modules/feature/main/homePage";

export default function ChatScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <HomePage />
    </>
  );
}
