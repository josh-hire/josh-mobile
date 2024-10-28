import { Text, type TextProps } from "react-native";
import styles from "@components/atoms/text/HeadingText/headingText.styles";

export type HeadingTextProps = TextProps & {
  lightColor?: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "paragraph" | "label";
  fontWeight?: "regular" | "bold";
  textAlign?: "center" | "left" | "justify";
  color?: string;
};

export function HeadingText({
  style,
  lightColor,
  type = "h3",
  fontWeight = "regular",
  color = "black",
  textAlign = "left",
  ...rest
}: HeadingTextProps) {
  return (
    <Text
      style={[
        { color, fontWeight, textAlign },
        type === "h1" ? styles.heading1 : undefined,
        type === "h2" ? styles.heading2 : undefined,
        type === "h3" ? styles.heading3 : undefined,
        type === "h4" ? styles.heading4 : undefined,
        type === "h5" ? styles.heading5 : undefined,
        type === "h6" ? styles.heading6 : undefined,
        type === "paragraph" ? styles.paragraph : undefined,
        type === "label" ? styles.label : undefined,
        style,
      ]}
      {...rest}
    />
  );
}
