import { HeadingText } from "@/components/atoms/text/HeadingText";
import { StyleSheet, View } from "react-native";

export default function ProfessionalInformationHeader() {
  return (
    <View style={styles.container}>
      <HeadingText type="h2" fontWeight="bold">
        What position are you aiming for ?
      </HeadingText>
      <HeadingText type="h6">we will help you in finding job</HeadingText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
