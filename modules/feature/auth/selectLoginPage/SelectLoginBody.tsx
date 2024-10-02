import { View } from "react-native";

import { HeadingText } from "@components/atoms/text/HeadingText";
import styles from "@modules/feature/auth/selectLoginPage/selectLogin.styles";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";

export default function SelectLoginBody() {
  return (
    <View>
      <View style={styles.rounded} />
      <View style={styles.bodyContainer}>
        <HeadingText type="h4" textAlign="center" fontWeight="bold">
          Take the first step to new opportunities! Choose your role
        </HeadingText>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Sign In Recruiter"
            handler={() => {}}
          ></PrimaryButton>
          <HeadingText type="h4" textAlign="center" fontWeight="bold">
            Or
          </HeadingText>
          <PrimaryButton
            title="Sign In Jobseeker"
            handler={() => {}}
          ></PrimaryButton>
        </View>
      </View>
    </View>
  );
}
