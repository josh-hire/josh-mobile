import { Colors } from "@/constants/Colors";
import { type ButtonProps, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { HeadingText } from "../text/HeadingText";

export type PrimaryButtonProps = ButtonProps & {
  title: string;
  handler: () => void;
};

export function PrimaryButton({ title, handler }: PrimaryButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonPrimary} onPress={handler}>
      <HeadingText type="h5" color="white" fontWeight="bold">{title}</HeadingText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: Colors.primary.p05,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 8,
    height: 40,
  },
});
