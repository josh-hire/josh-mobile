import { type ButtonProps, TouchableOpacity } from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import styles from "@components/atoms/button/TextButton/textButton.styles";
import { Colors } from "@constants/Colors";

export type PrimaryButtonProps = ButtonProps & {
  title: string;
  handler: () => void;
  isFocused: boolean;
};

export function TextButton({ title, handler, isFocused }: PrimaryButtonProps) {
  return (
    <TouchableOpacity onPress={handler} style={styles.button}>
      <HeadingText
        type="h6"
        color={isFocused ? Colors.neutral.n00 : Colors.neutral.n01}
        fontWeight={isFocused ? "bold" : "regular"}
      >
        {title}
      </HeadingText>
    </TouchableOpacity>
  );
}
