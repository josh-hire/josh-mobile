import { HeadingText } from "@/components/atoms/text/HeadingText";
import { StyleSheet, View } from "react-native";

export default function ResetPassword() {
  return (
    <View style={styles.container}>
      <HeadingText type="h1" fontWeight="bold" textAlign="center">
        Set new password
      </HeadingText>
      <View style={styles.smallContainer}>
        <HeadingText type="h6" textAlign="center">
          your new password must be different from previous used passwords
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
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
