import { View } from "react-native";

import { HeadingText } from "@components/atoms/text/HeadingText";
import styles from "@modules/feature/auth/selectRegisterPage/selectRegist.styles";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";

export default function SelectRegisterBody() {
  return (
    <View>
      <View style={styles.rounded} />
      <View style={styles.bodyContainer}>
        <HeadingText type="h4" textAlign="center" fontWeight="bold">
          Take the first step to new opportunities! Choose your role
        </HeadingText>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Sign Up Jobseeker"
            handler={() => {}}
          ></PrimaryButton>
        </View>
      </View>
    </View>
  );
}
