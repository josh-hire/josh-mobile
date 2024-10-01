import { View } from "react-native";
import styles from "@modules/feature/auth/registrations/skillPossesedPage/skillPossesed.styles";
import ProgressStep from "@components/atoms/step/ProgressStep";

export default function SkillPossesedFooter() {
  return (
    <View style={styles.containerFooter}>
      <ProgressStep n={5} position={3}></ProgressStep>
    </View>
  );
}
