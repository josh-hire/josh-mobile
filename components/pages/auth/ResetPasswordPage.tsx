import { StyleSheet, View } from "react-native";
import ResetPasswordHeader from "../../organisms/header/ResetPasswordHeader";
import ResetPasswordForm from "../../molecules/form/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <ResetPasswordHeader />
        <ResetPasswordForm />
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
