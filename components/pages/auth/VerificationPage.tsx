import { StyleSheet, View } from "react-native";
import VerificationHeader from "../../organisms/header/VerificationHeader";
import VerificationForm from "../../templates/form/VerificationForm";

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

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 36,
    height: "100%",
    backgroundColor: "white",
  },
  stepContainer: {
    gap: 48,
  },
});
