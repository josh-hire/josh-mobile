import { type ButtonProps, TouchableOpacity } from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import styles from "@components/atoms/button/PrimaryButton/primaryButton.styles";
import { Colors } from "@constants/Colors";

export type PrimaryButtonProps = ButtonProps & {
  title: string;
  handler: () => void;
  color?: string;
};

export function PrimaryButton({
  title,
  handler,
  color = Colors.primary.p05,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.buttonPrimary, { backgroundColor: color }]}
      onPress={handler}
    >
      <HeadingText type="h5" color="white" fontWeight="bold">
        {title}
      </HeadingText>
    </TouchableOpacity>
  );
}
