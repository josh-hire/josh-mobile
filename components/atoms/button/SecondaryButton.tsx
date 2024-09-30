import { ButtonProps, Image, StyleSheet, TouchableOpacity } from "react-native";
import { HeadingText } from "../text/HeadingText";
import { Assets } from "@/constants/Assets";

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
      <Image source={Assets.icons.plus01}></Image>
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
