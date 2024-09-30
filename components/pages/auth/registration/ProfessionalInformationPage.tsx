import { StyleSheet, View } from "react-native";

import ProfessionalInformationHeader from "@/components/organisms/header/ProfessionalInformationHeader";
import ProfessionalInformationForm from "@/components/molecules/form/ProfessionalInformationForm";

export default function ProfessionalInformationPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <ProfessionalInformationHeader />
        <ProfessionalInformationForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 12,
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
