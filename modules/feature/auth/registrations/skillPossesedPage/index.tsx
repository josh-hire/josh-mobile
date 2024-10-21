import { View } from "react-native";
import SkillPossesedHeader from "@modules/feature/auth/registrations/skillPossesedPage/SkillPossesedHeader";
import SkillPossesedForm from "@components/molecules/form/SkillPossesedForm";
import styles from "@styles/global.styles";
import SkillPossesedFooter from "@modules/feature/auth/registrations/skillPossesedPage/SkillPossesedFooter";

export default function SkillPossesedPage() {
  return (
    <View style={styles.screen}>
      <View style={styles.stepContainer}>
        <SkillPossesedHeader />
        <SkillPossesedForm />
      </View>
      <SkillPossesedFooter />
    </View>
  );
}
