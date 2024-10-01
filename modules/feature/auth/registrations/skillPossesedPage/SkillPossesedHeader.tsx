import { HeadingText } from "@components/atoms/text/HeadingText";
import { View } from "react-native";
import styles from "@modules/feature/auth/registrations/skillPossesedPage/skillPossesed.styles"

export default function SkillPossesedHeader() {
  return (
    <View style={styles.container}>
      <HeadingText type="h2" fontWeight="bold" textAlign="center">
        Skill Possesed
      </HeadingText>
      <HeadingText type="h6" textAlign="center">What key skills can you offer to the company?</HeadingText>
    </View>
  );
}
