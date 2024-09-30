import { StyleSheet, View } from "react-native";

import RegisterHeader from "../../organisms/header/RegisterHeader";
import RegisterFooter from "../../organisms/footer/RegisterFooter";
import RegisterForm from "../../molecules/form/RegisterForm";

export default function RegisterPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <RegisterHeader />
        <RegisterForm />
      </View>
      <RegisterFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 16,
    padding: 36,
    height: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  stepContainer: {
    gap: 20,
    marginBottom: 8,
  },
});
