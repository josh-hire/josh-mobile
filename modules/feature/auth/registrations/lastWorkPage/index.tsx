import LastWorkHeader from "@modules/feature/auth/registrations/lastWorkPage/LastWorkHeader";
import LastWorkForm from "@components/molecules/form/LastWorkForm";
import { View } from "react-native";
import styles from "@styles/global.styles";

export default function LastWorkPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <LastWorkHeader />
        <LastWorkForm />
      </View>
    </View>
  );
}
