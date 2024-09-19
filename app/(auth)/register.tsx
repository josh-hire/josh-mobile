import { StyleSheet, View } from "react-native";

import { ThemedTextInput } from "@/components/atoms/input/ThemedTextInput";
import { useState } from "react";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { Link } from "expo-router";
import { HeadingText } from "@/components/atoms/text/HeadingText";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <View style={styles.titleContainer}>
        <HeadingText type="h4">Register!</HeadingText>
      </View>
      <View style={styles.stepContainer}>
        <ThemedTextInput
          onChangeText={setUsername}
          placeholder="Input your email"
          type="text"
          text={username}
        />
        <ThemedTextInput
          onChangeText={setUsername}
          placeholder="Input your name"
          type="text"
          text={username}
        />
        <ThemedTextInput
          onChangeText={setUsername}
          placeholder="Input your phone number"
          type="text"
          text={username}
        />
        <ThemedTextInput
          onChangeText={setUsername}
          placeholder="Input your address"
          type="text"
          text={username}
        />
        <ThemedTextInput
          onChangeText={setPassword}
          placeholder="Input your password"
          type="password"
          text={password}
        />
        <View style={styles.stepContainer}>
          <PrimaryButton handler={() => {}} title="Register" link="/(tabs)/home" />
          <Link href="/(auth)/login">
            <HeadingText type="h4">Already Have An Account?</HeadingText>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
