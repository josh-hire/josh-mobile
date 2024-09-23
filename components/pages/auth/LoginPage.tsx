import { StyleSheet, View } from "react-native";

import LoginForm from "@/components/templates/form/LoginForm";
import LoginFooter from "@/components/organisms/footer/LoginFooter";
import LoginHeader from "../../organisms/header/LoginHeader";

export default function LoginPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <LoginHeader />
        <LoginForm />
      </View>
      <LoginFooter />
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
