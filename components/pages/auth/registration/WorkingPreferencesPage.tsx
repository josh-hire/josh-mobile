import { StyleSheet, View } from "react-native";

import WorkPreferencesHeader from "@/components/organisms/header/WorkPreferencesHeader";
import WorkPreferencesForm from "@/components/templates/form/WorkPreferencesForm";

export default function WorkPreferencesPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <WorkPreferencesHeader />
        <WorkPreferencesForm />
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
