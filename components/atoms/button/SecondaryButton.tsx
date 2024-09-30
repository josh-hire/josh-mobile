import { ButtonProps, Image, StyleSheet, TouchableOpacity } from "react-native";
import { HeadingText } from "../text/HeadingText";

export type SecondaryButtonProps = ButtonProps & {
  title: string;
  handler: () => void;
};

export default function SecondaryButton({
  title,
  handler,
}: SecondaryButtonProps) {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={handler}>
      <Image source={require("../../../assets/icons/plus-01.png")}></Image>
      <HeadingText type="h5">{title}</HeadingText>
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
