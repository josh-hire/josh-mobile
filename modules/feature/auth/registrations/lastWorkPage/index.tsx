import LastWorkHeader from "@modules/feature/auth/registrations/lastWorkPage/LastWorkHeader";
import LastWorkForm from "@components/molecules/form/LastWorkForm";
import { View } from "react-native";
import styles from "@styles/global.styles";
import LastWorkFooter from "@modules/feature/auth/registrations/lastWorkPage/LastWorkFooter";

export default function LastWorkPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <LastWorkHeader />
        <LastWorkForm />
      </View>
      <LastWorkFooter />
    </View>
  );
}
