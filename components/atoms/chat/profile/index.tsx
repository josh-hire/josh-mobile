import { Image, ImageSourcePropType } from "react-native";
import styles from "@/components/atoms/chat/profile/profile.styles";

interface ProfilePhotoProps {
  url: ImageSourcePropType;
  size: number;
}

export default function ProfilePhoto({ url, size }: Readonly<ProfilePhotoProps>) {
  return <Image source={url} style={styles(size).profileImage} />;
}
