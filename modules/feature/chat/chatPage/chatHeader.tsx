import ProfilePhoto from "@components/atoms/chat/profile";
import { Assets } from "@constants/Assets";
import styles from "@modules/feature/chat/chatPage/chat.styles";
import { HeadingText } from "@components/atoms/text/HeadingText";
import { Image, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export default function ChatHeader() {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={Assets.icons.arrowBackWhite} />
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <ProfilePhoto url={Assets.images.telkomselLogo} size={48} />
        <View>
          <HeadingText type="h5" color="white" fontWeight="bold">
            Mohammad Dafa
          </HeadingText>
          <HeadingText type="label" color="white">
            From Telkomsel
          </HeadingText>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity>
          <Image source={Assets.icons.video} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Assets.icons.dot_vertical} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
