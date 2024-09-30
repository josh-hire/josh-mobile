import { useAuthStore } from "@/store/useAuthStore";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function AppLayout() {
  const { checkLoginStatus, token } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkLoginAndFont = async () => {
      const loggedIn = await checkLoginStatus();
      console.log(loggedIn)
      setIsLoggedIn(loggedIn);
      setLoading(false);
    };
    
    checkLoginAndFont();
  }, []);
  
  if(loading) {
    return <ActivityIndicator />
  }
  
  return <Redirect href={isLoggedIn ? "/(tabs)/home" : "/(auth)/login"} />;
}
