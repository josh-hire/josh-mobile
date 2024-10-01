import { HeadingText } from "@components/atoms/text/HeadingText";
import { Assets } from "@constants/Assets";
import { Colors } from "@constants/Colors";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface SelectedTagsCardProps {
  title: string;
  onTap: () => void;
}

export default function SelectedTagsCard({ title, onTap }: SelectedTagsCardProps) {
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

const styles = StyleSheet.create({
  SelectedTagsCard: {
    backgroundColor: Colors.secondary.s05,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    height: 33,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});
