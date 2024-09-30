import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/auth/registrations/workingPreferencesPage/workingPreferences.styles"

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
