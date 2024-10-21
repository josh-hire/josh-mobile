import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "@modules/feature/auth/selectRegisterPage/selectRegist.styles";
import SelectRegisterHeader from "@modules/feature/auth/selectRegisterPage/SelectRegisterHeader";
import SelectRegisterBody from "@modules/feature/auth/selectRegisterPage/SelectRegisterBody";
import SelectRegisterFooter from "@modules/feature/auth/selectRegisterPage/SelectRegisterFooter";

export default function SelectRegisterPage() {
  return (
    <SafeAreaView style={styles.page}>
      <View>
        <SelectRegisterHeader />
        <SelectRegisterBody />
      </View>
      <SelectRegisterFooter />
    </SafeAreaView>
  );
}
