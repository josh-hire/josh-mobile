import { View } from "react-native";
import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/main/personalInfoPage/personalInfo.styles";
import ProfileChat from "@components/atoms/chat/profile";
import { Assets } from "@constants/Assets";
import PersonalInfoForm from "@components/molecules/form/PersonalInfoForm";

export default function PersonalInfoProfilePage() {
  return (
    <View style={[[globalStyles.screen, styles.screenBackground]]}>
      <ProfileChat url={Assets.images.telkomselLogo} size={120} />
      <PersonalInfoForm />
    </View>
  );
}
