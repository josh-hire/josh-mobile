import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { HeadingText } from "../text/HeadingText";

export default function SecondaryButton() {
  return (
    <TouchableOpacity style={styles.secondaryButton}>
      <Image source={require("../../../assets/icons/plus-01.png")}></Image>
      <HeadingText type="h5">Add Job Title</HeadingText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  secondaryButton: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    gap: 12,
    flexDirection: "row",
  },
});
