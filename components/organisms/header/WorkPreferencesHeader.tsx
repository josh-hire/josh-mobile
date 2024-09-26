import { HeadingText } from "@/components/atoms/text/HeadingText";
import { StyleSheet, View } from "react-native";

export default function WorkPreferencesHeader() {
  return (
    <View style={styles.container}>
      <HeadingText type="h2" textAlign="center" fontWeight="bold">
        Work Preferences
      </HeadingText>
      <HeadingText type="h6" textAlign="center">Key to Finding Your Ideal Job</HeadingText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
