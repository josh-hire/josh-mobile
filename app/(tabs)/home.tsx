import { Stack } from "expo-router";
import HomePage from "@/modules/feature/main/homePage";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.secondary.s08 },
        }}
      />
      <HomePage />
    </>
  );
}
