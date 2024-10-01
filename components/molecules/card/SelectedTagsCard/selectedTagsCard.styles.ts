import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

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

export default styles;