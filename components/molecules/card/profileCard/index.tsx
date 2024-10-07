import { HeadingText } from "@/components/atoms/text/HeadingText";
import { Image, View } from "react-native";
import styles from "./profileCard.styles";
import { Assets } from "@/constants/Assets";

interface ProfileCardProps {
  name: string;
}

export default function ProfileCard({ name }: Readonly<ProfileCardProps>) {
  return (
    <View style={styles.containerProfile}>
      <Image style={styles.photoProfile} source={Assets.images.job}></Image>
      <View>
        <HeadingText type="h6" fontWeight="bold" color="white">
          Good Morning!
        </HeadingText>
        <HeadingText type="h6" fontWeight="bold" color="white">
          {name}
        </HeadingText>
      </View>
    </View>
  );
}
