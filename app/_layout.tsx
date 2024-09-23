import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { ActivityIndicator, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(auth)/index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  const { checkLoginStatus, token } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loaded] = useFonts({
    TelkomselBatik: require("../assets/fonts/TelkomselBatikSans-Regular.otf"),
  });

  useEffect(() => {
    const checkLoginAndFont = async () => {
      if (loaded) {
        const loggedIn = await checkLoginStatus();
        setIsLoggedIn(loggedIn); // Set status login
        setLoading(false);

        await SplashScreen.hideAsync();
      }
    };

    checkLoginAndFont();
  }, [loaded]);

  if (!loaded || loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {isLoggedIn ? (
          <Stack>
            <Stack.Screen name="(tabs)/home" options={{ headerShown: false }} />
          </Stack>
        ) : (
          <Stack>
            <Stack.Screen
              name="(auth)/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/register"
              options={{ headerShown: false }}
            />
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
            <Stack.Screen name="+not-found" />
          </Stack>
        )}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
