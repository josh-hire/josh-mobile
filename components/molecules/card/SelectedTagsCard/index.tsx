import { HeadingText } from "@components/atoms/text/HeadingText";
import { Assets } from "@constants/Assets";
import { Colors } from "@constants/Colors";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "@components/molecules/card/SelectedTagsCard/selectedTagsCard.styles";

interface SelectedTagsCardProps {
  title: string;
  onTap: () => void;
}

export default function SelectedTagsCard({
  title,
  onTap,
}: SelectedTagsCardProps) {
  return (
    <TouchableOpacity onPress={onTap}>
      <View style={styles.SelectedTagsCard}>
        <HeadingText type="h6" color={Colors.neutral.n00}>
          {title}
        </HeadingText>
        <Image source={Assets.icons.x02}></Image>
      </View>
    </TouchableOpacity>
  );
}
