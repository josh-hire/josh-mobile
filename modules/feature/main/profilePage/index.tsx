import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/main/profilePage/profile.styles";
import ProfileHeader from "./profileHeader";
import ProfileProfessional from "./profileProfessional";
import ProfileAccount from "./profileAccount";

export default function ProfilePage() {
  return (
    <SafeAreaView style={[globalStyles.screen, styles.screenBackground]}>
      <ProfileHeader />
      <ProfileProfessional />
      <ProfileAccount />
    </SafeAreaView>
  );
}
