import { View } from "react-native";
import VerificationHeader from "@modules/feature/auth/verificationPage/VerificationHeader";
import VerificationForm from "@components/molecules/form/VerificationForm";
import styles from "@styles/global.styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VerificationPage() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.stepContainer}>
        <VerificationHeader />
        <VerificationForm />
      </View>
    </SafeAreaView>
  );
}
