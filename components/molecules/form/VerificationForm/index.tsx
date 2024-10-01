import { PrimaryButton } from "@components/atoms/button/PrimaryButton";
import { HeadingText } from "@components/atoms/text/HeadingText";
import CountdownTimer from "@components/atoms/text/CountdownTimer";
import OtpInputForm from "@components/atoms/input/OtpInputForm";
import { Colors } from "@constants/Colors";
import { Link } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import ErrorBox from "@components/atoms/error/ErrorBox";
import styles from "@components/molecules/form/VerificationForm/verificationForm.styles";

export default function VerificationForm() {
  const [otpCode, setOtpCode] = useState<string>("");
  const [isPinReady, setIsPinReady] = useState<boolean>(false);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const maximumCodeLength: number = 6;

  return (
    <View style={styles.container}>
      {isExpired ? (
        <ErrorBox error={"Times up, please resend OTP code"} />
      ) : (
        <View />
      )}
      <View style={styles.containerForm}>
        <OtpInputForm
          otpCode={otpCode}
          setOtpCode={setOtpCode}
          maximumLength={maximumCodeLength}
          setIsPinReady={setIsPinReady}
          isExpired={isExpired}
        />
        <CountdownTimer
          onExpired={() => {
            setIsExpired(true);
            setOtpCode("");
          }}
        />
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
    </View>
  );
}
