import globalStyles from "@styles/global.styles";
import styles from "@modules/feature/profile/settingPage/setting.styles";
import ProfileSetting from "@modules/feature/profile/settingPage/profileSetting";
import { View } from "react-native";

export default function SettingPage() {
  return (
    <View style={[globalStyles.screen, styles.screenBackground]}>
      <ProfileSetting />
    </View>
  );
}
