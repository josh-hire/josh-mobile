import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "@modules/feature/auth/selectLoginPage/selectLogin.styles";
import SelectLoginHeader from "@modules/feature/auth/selectLoginPage/SelectLoginHeader";
import SelectLoginBody from "@modules/feature/auth/selectLoginPage/SelectLoginBody";
import SelectLoginFooter from "@modules/feature/auth/selectLoginPage/SelectLoginFooter";

export default function SelectLoginPage() {
  return (
    <SafeAreaView style={styles.page}>
      <View>
        <SelectLoginHeader />
        <SelectLoginBody />
      </View>
      <SelectLoginFooter />
    </SafeAreaView>
  );
}
