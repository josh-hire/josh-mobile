import { View } from "react-native";
import styles from "@modules/feature/auth/registrations/professionalInformationPage/professionalInfo.styles";
import ProgressStep from "@components/atoms/step/ProgressStep";

export default function ProfessionalInformationFooter() {
  return (
    <View style={styles.containerFooter}>
      <ProgressStep n={5} position={1}></ProgressStep>
    </View>
  );
}
