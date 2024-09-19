import { Colors } from "@/constants/Colors";
import { Href } from "expo-router";
import { type ButtonProps, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";

export type PrimaryButtonProps = ButtonProps & {
  title: string;
  link: Href<string | object>;
  handler: () => void;
};

export function PrimaryButton({ title, link, handler }: PrimaryButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonPrimary} onPress={handler}>
      <Text style={styles.buttonPrimaryText}>{title}</Text>
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
  buttonPrimaryText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'TelkomselBatik'
  }
});
