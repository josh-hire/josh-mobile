import { StyleSheet, View } from "react-native";

import SkillPossesedHeader from "@/components/organisms/header/SkillPossesedHeader";
import SkillPossesedForm from "@/components/templates/form/SkillPossesedForm";

export default function SkillPossesedPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <SkillPossesedHeader />
        <SkillPossesedForm />
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
