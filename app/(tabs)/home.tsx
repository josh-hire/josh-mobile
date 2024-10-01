import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { useAuthStore } from "@/store/useAuthStore";
import { router } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  const { clearToken, token, checkLoginStatus } = useAuthStore();

  return (
    <View>
      <HeadingText>Home</HeadingText>
      <PrimaryButton
        title="Token"
        handler={async () => {
          console.log(token)
          console.log(await checkLoginStatus())
        }}
      ></PrimaryButton>
      <PrimaryButton
        title="Logout"
        handler={() => {
          clearToken();
          router.replace('/(auth)/login')
          console.log('here')
        }}
      ></PrimaryButton>
    </View>
  );
}
