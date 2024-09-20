import { StyleSheet, View } from "react-native";
import ForgotPasswordHeader from "../organisms/header/ForgotPasswordHeader";
import ForgotPAsswordForm from "../templates/form/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <ForgotPasswordHeader />
        <ForgotPAsswordForm />
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
    gap: 48
  }
});
