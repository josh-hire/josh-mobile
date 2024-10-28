import { HeadingText } from "@components/atoms/text/HeadingText";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/profile/profilePage/profile.styles";
import { Assets } from "@/constants/Assets";

export default function ProfileAccount() {
  return (
    <View style={styles.sectionContainer}>
      <HeadingText type="h5" color="white" fontWeight="bold">
        Account
      </HeadingText>
      <View style={styles.optionContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.optionButton}>
          <HeadingText type="h6" color="white">
            Setting
          </HeadingText>
          <Image source={Assets.icons.chevronRight}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.optionButton}>
          <HeadingText type="h6" color="white">
            Logout
          </HeadingText>
          <Image source={Assets.icons.chevronRight}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}
