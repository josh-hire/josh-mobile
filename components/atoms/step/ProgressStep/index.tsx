import { View } from "react-native";
import styles from "@components/atoms/step/ProgressStep/progressStep.styles";

interface ProgressStepProps {
  position: number;
  n: number;
}

export default function ProgressStep({ position, n }: ProgressStepProps) {
  return (
    <View style={styles.container}>
      {[...Array(n)].map((elementInArray, index) => (
        <View key={index}>
          <View style={index < position ? styles.activeStep : styles.notActiveStep}></View>
        </View>
      ))}
    </View>
  );
}
