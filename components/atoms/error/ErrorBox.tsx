import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";
import { HeadingText } from "../text/HeadingText";

export type ErrorBoxProps = {
  error: string;
};

export default function ErrorBox({ error }: ErrorBoxProps) {
  return (
    <View style={styles.errorBox}>
      <HeadingText type="h6" color="white" fontWeight="bold">
        {error}
      </HeadingText>
    </View>
  );
}

const styles = StyleSheet.create({
  errorBox: {
    backgroundColor: Colors.tertiary.t02,
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
    height: 53,
  },
});
