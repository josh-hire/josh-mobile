import { HeadingText } from "@components/atoms/text/HeadingText";
import { Colors } from "@constants/Colors";
import { TouchableOpacity, View } from "react-native";
import styles from "@components/molecules/card/TagsCard/tagsCard.styles";

interface TagsCard {
  title: string;
  onTap: () => void;
}

export default function TagsCard({ title, onTap }: TagsCard) {
  return (
    <TouchableOpacity onPress={onTap}>
      <View style={styles.TagsCard}>
        <HeadingText type="h6" color={Colors.neutral.n09}>
          {title}
        </HeadingText>
      </View>
    </TouchableOpacity>
  );
}
