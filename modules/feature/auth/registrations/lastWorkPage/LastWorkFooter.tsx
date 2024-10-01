import { View } from "react-native";
import styles from "@modules/feature/auth/registrations/lastWorkPage/lastWork.styles";
import ProgressStep from "@components/atoms/step/ProgressStep";

export default function LastWorkFooter() {
  return (
    <View style={styles.containerFooter}>
      <ProgressStep n={5} position={4}></ProgressStep>
    </View>
  );
}
