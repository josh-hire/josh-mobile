import { HeadingText } from "@components/atoms/text/HeadingText";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "@modules/feature/main/profilePage/profile.styles";
import { Assets } from "@constants/Assets";
import { router } from "expo-router";

export default function ProfileProfessional() {
  return (
    <View style={styles.sectionContainer}>
      <HeadingText type="h5" color="white" fontWeight="bold">
        Profile and Professional
      </HeadingText>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          onPress={() => {
            router.push("/(profile)/jobseeker/personal-info");
          }}
          style={styles.optionButton}
        >
          <HeadingText type="h6" color="white">
            Personal Information
          </HeadingText>
          <Image source={Assets.icons.chevronRight}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/(profile)/jobseeker/professional-info");
          }}
          style={styles.optionButton}
        >
          <HeadingText type="h6" color="white">
            Professional Information
          </HeadingText>
          <Image source={Assets.icons.chevronRight}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/(profile)/jobseeker/upload-cv");
          }}
          style={styles.optionBottomButton}
        >
          <HeadingText type="h6" color="white">
            Upload CV
          </HeadingText>
          <Image source={Assets.icons.chevronRight}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}
