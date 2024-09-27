import EducationBackgroundHeader from "@/components/organisms/header/EducationBackgroundHeader";
import EducationBackgroundForm from "@/components/templates/form/EducationBackgroundForm";
import { StyleSheet, View } from "react-native";


export default function EducationBackgroundPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <EducationBackgroundHeader />
        <EducationBackgroundForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 36,
    height: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  stepContainer: {
    gap: 42,
    marginBottom: 8,
  },
});
