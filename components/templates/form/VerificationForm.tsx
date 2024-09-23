import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { HeadingText } from "@/components/atoms/text/HeadingText";
import OtpInputForm from "@/components/molecules/form/OtpInputForm";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function VerificationForm() {
  const [otpCode, setOtpCode] = useState<string>("");
  const [isPinReady, setIsPinReady] = useState<boolean>(false);
  const maximumCodeLength: number = 6;

  return (
    <View style={styles.container}>
      <OtpInputForm
        otpCode={otpCode}
        setOtpCode={setOtpCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}
      />
      <HeadingText type="h5" fontWeight="bold">
        01:00
      </HeadingText>
      <View style={styles.primaryButton}>
        <PrimaryButton title="Verify" handler={() => {}} />
      </View>
      <View style={styles.resendContainer}>
        <HeadingText type="h6" color={Colors.neutral.n04}>
          Didn't get OTP Code?
        </HeadingText>
        <Link href="/(auth)/reset-password">
          <HeadingText type="h6" color={Colors.primary.p04}>
            Resend Code
          </HeadingText>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  primaryButton: {
    width: "100%",
  },
  resendContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
