import LastWorkHeader from "@/components/organisms/header/LastWorkHeader";
import LastWorkForm from "@/components/molecules/form/LastWorkForm";
import { StyleSheet, View } from "react-native";


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
