import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Assets } from "@constants/Assets";
import { Colors } from "@constants/Colors";
import { Stack, useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          contentStyle: { backgroundColor: Colors.general.background },
          headerBackButtonMenuEnabled: false,
          headerShown: false,
        }}
      />
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image source={Assets.illustrations.notFound} />
        </View>
        <View style={styles.textContainer}>
          <HeadingText type="h2" fontWeight="bold" textAlign="center">
            Page Not Found
          </HeadingText>
          <HeadingText
            style={styles.paragraghText}
            type="h6"
            textAlign="center"
          >
            Sorry, we couldn't find the page you were looking for. Please go
            back to the homepage!
          </HeadingText>
        </View>
        <PrimaryButton
          title="Back to home"
          handler={() => {
            router.replace("/(tabs)/home");
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 36,
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    gap: 48,
  },
  imageContainer: {
    alignSelf: "center",
  },
  textContainer: {
    gap: 12,
  },
  paragraghText: {
    paddingHorizontal: 32,
  },
});
