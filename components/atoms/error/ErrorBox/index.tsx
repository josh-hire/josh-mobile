import { View } from "react-native";
import { HeadingText } from "../../text/HeadingText";
import styles from "@components/atoms/error/ErrorBox/errorBox.styles";

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
