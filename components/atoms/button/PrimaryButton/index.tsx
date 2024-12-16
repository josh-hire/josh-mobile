import { type ButtonProps, TouchableOpacity } from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import styles from "@components/atoms/button/PrimaryButton/primaryButton.styles";
import { Colors } from "@constants/Colors";

export type PrimaryButtonProps = ButtonProps & {
  title: string;
  handler: () => void;
  color?: string;
  isDisabled?: boolean;
};

export function PrimaryButton({
  title,
  handler,
  color = Colors.secondary.s04,
  isDisabled = false,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonPrimary,
        { backgroundColor: isDisabled ? Colors.neutral.n02 : color },
      ]}
      onPress={handler}
      disabled={isDisabled}
    >
      <HeadingText type="h5" color="white" fontWeight="bold">
        {title}
      </HeadingText>
    </TouchableOpacity>
  );
}
