import { Animated, ImageSourcePropType, TouchableOpacity } from "react-native";
import styles from "@components/atoms/button/IconButton/iconButton.styles";

export type IconButtonProps = {
  handler: () => void;
  icon: ImageSourcePropType;
  color: string;
  width: Animated.Value;
  height: Animated.Value;
};

export function IconButton({
  icon,
  handler,
  color,
  width,
  height,
}: Readonly<IconButtonProps>) {
  return (
    <TouchableOpacity onPress={handler} style={{ zIndex: 100 }}>
      <Animated.View style={styles(width, height, color).iconButton}>
        <Animated.Image source={icon} style={styles(width, height).iconImage} />
      </Animated.View>
    </TouchableOpacity>
  );
}
