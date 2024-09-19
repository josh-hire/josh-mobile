import OtpInputForm from "@/components/molecules/form/OtpInputForm";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VerificationScreen() {
  const [otpCode, setOtpCode] = useState<string>("");
  const [isPinReady, setIsPinReady] = useState<boolean>(false);
  const maximumCodeLength: number = 6;

  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <HeadingText type="h4">Verification</HeadingText>
      </View>
      <View style={styles.container}>
        <OtpInputForm
          otpCode={otpCode}
          setOtpCode={setOtpCode}
          maximumLength={maximumCodeLength}
          setIsPinReady={setIsPinReady}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  container: {
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
});
