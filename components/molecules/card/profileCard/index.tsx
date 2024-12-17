import { Image, TouchableOpacity, View } from "react-native";
import styles from "./profileCard.styles";
import { Assets } from "@constants/Assets";
import { Dispatch, SetStateAction } from "react";

interface ProfileCardProps {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ProfileCard({
  setIsVisible,
}: Readonly<ProfileCardProps>) {
  return (
    <View style={styles.containerProfile}>
      <Image style={styles.photoProfile} source={Assets.images.job}></Image>
      <Image source={Assets.logos.logo2} />
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Image source={Assets.icons.filter} style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
}
