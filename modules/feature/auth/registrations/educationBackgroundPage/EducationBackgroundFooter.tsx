import { View } from "react-native";
import styles from "@modules/feature/auth/registrations/educationBackgroundPage/educationBackground.styles";
import ProgressStep from "@components/atoms/step/ProgressStep";

export default function EducationBackgroundFooter() {
  return (
    <View style={styles.containerFooter}>
      <ProgressStep n={5} position={5}></ProgressStep>
    </View>
  );
}
