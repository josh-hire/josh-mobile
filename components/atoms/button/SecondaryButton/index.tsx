import { ButtonProps, Image, TouchableOpacity, View } from "react-native";
import { HeadingText } from "../../text/HeadingText";
import { Assets } from "@constants/Assets";
import styles from "@components/atoms/button/SecondaryButton/secondaryButton.styles";

export type SecondaryButtonProps = ButtonProps & {
  title: string;
  handler: () => void;
  color?: string;
  position?: string;
  showIcon?: boolean;
};

export default function SecondaryButton({
  title,
  handler,
  color = "white",
  position = "left",
  showIcon = true,
}: SecondaryButtonProps) {
  return (
    <TouchableOpacity style={styles(color).secondaryButton} onPress={handler}>
      {showIcon && position === "left" ? (
        <Image
          source={
            color === "white" ? Assets.icons.plus01White : Assets.icons.plus01
          }
        ></Image>
      ) : (
        <View></View>
      )}
      <HeadingText type="h5" color={color}>
        {title}
      </HeadingText>
      {showIcon && position === "right" ? (
        <Image
          source={
            color === "white" ? Assets.icons.plus01White : Assets.icons.plus01
          }
        ></Image>
      ) : (
        <View></View>
      )}
    </TouchableOpacity>
  );
}
