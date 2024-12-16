import { ButtonProps, Image, TouchableOpacity, View } from "react-native";
import { HeadingText } from "../../text/HeadingText";
import { Assets } from "@constants/Assets";
import styles from "@components/atoms/button/SecondaryButton/secondaryButton.styles";

export type SecondaryButtonProps = ButtonProps & {
  title: string;
  handler: () => void;
  color?: string;
  position?: string;
};

export default function SecondaryButton({
  title,
  handler,
  color = "white",
  position = "left",
}: SecondaryButtonProps) {
  return (
    <TouchableOpacity style={styles(color).secondaryButton} onPress={handler}>
      {position === "left" ? (
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
      {position === "right" ? (
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
