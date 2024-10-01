import { View } from "react-native";
import VerificationHeader from "@modules/feature/auth/verificationPage/VerificationHeader";
import VerificationForm from "@components/molecules/form/VerificationForm";
import styles from "@styles/global.styles";

export default function VerificationPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <VerificationHeader />
        <VerificationForm />
      </View>
    </View>
  );
}
