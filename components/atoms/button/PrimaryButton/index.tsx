import { type ButtonProps, TouchableOpacity } from "react-native";
import { HeadingText } from "@components/atoms/text/HeadingText";
import styles from "@components/atoms/button/PrimaryButton/primaryButton.styles";

export type PrimaryButtonProps = ButtonProps & {
  title: string;
  handler: () => void;
};

export function PrimaryButton({ title, handler }: PrimaryButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonPrimary} onPress={handler}>
      <HeadingText type="h5" color="white" fontWeight="bold">
        {title}
      </HeadingText>
    </TouchableOpacity>
  );
}
