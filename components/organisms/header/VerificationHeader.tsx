import { HeadingText } from "@/components/atoms/text/HeadingText";
import { StyleSheet, View } from "react-native";

export default function VerificationHeader() {
  return (
    <View style={styles.container}>
      <HeadingText type="h1" fontWeight="bold" textAlign="center">
        Enter your Verification Code
      </HeadingText>
      <View style={styles.smallContainer}>
        <HeadingText type="h6" textAlign="center">
          We sent a verification code to example@gmail.com
        </HeadingText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    smallContainer: {
      paddingHorizontal: 12,
      justifyContent: "center",
      alignItems: "center",
    },
  });