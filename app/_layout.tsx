import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(auth)/index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    TelkomselBatik: require("../assets/fonts/TelkomselBatikSans-Regular.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(auth)/index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)/forgot-password"
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            contentStyle: { backgroundColor: Colors.general.background },
          }}
        />
        <Stack.Screen
          name="(auth)/verification"
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            contentStyle: { backgroundColor: Colors.general.background },
          }}
        />
        <Stack.Screen
          name="(auth)/reset-password"
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            contentStyle: { backgroundColor: Colors.general.background },
          }}
        />
        <Stack.Screen name="(tabs)/home" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}