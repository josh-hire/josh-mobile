import { HeadingText } from "@components/atoms/text/HeadingText";
import { Colors } from "@constants/Colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";

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

const styles = StyleSheet.create({
  TagsCard: {
    backgroundColor: Colors.neutral.n01,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    height: 33,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});
