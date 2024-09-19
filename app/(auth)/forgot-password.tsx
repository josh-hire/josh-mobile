import { ThemedTextInput } from "@/components/atoms/input/ThemedTextInput";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <HeadingText type="h4">Forgot Your Password?</HeadingText>
      </View>
      <ThemedTextInput
        onChangeText={setEmail}
        placeholder="Input your email"
        type="email"
        text={email}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});
