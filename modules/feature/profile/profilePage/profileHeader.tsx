import { HeadingText } from "@components/atoms/text/HeadingText";
import ProfilePhoto from "@components/atoms/chat/profile";
import { Assets } from "@constants/Assets";
import { View } from "react-native";
import styles from "@modules/feature/profile/profilePage/profile.styles";

export default function ProfileHeader() {
  return (
    <View style={styles.headerContainer}>
      <ProfilePhoto url={Assets.images.telkomselLogo} size={120} />
      <HeadingText type="h5" color="white" fontWeight="bold">
        Afgansyah Putra
      </HeadingText>
      <HeadingText type="label" color="white">
        Afgan@gmail.com
      </HeadingText>
      <HeadingText type="label" color="white">
        +6282126125922
      </HeadingText>
    </View>
  );
}
