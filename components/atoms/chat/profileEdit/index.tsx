import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "@components/atoms/chat/profileEdit/profileEdit.styles";
import { Assets } from "@constants/Assets";

interface ProfileEditPhotoProps {
  url: ImageSourcePropType;
  size: number;
  handler: () => void;
}

export default function ProfileEditPhoto({
  url,
  size,
  handler
}: Readonly<ProfileEditPhotoProps>) {
  return (
    <View>
      <Image source={url} style={styles(size).profileImage} />
      <TouchableOpacity style={styles(size).editContainer} onPress={handler}>
        <Image source={Assets.icons.edit} style={styles(size).editImage} />
      </TouchableOpacity>
    </View>
  );
}
