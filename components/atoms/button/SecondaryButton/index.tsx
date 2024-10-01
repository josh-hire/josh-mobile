import { ButtonProps, Image, TouchableOpacity } from "react-native";
import { HeadingText } from "../../text/HeadingText";
import { Assets } from "@constants/Assets";
import styles from "@components/atoms/button/SecondaryButton/secondaryButton.styles";

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
