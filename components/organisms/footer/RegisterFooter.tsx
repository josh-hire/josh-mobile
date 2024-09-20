import { HeadingText } from "@/components/atoms/text/HeadingText";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RegisterFooter() {
  return (
    <View style={styles.haveAccountContainer}>
      <HeadingText type="h6" fontWeight="bold">
        Already Have An Account?
      </HeadingText>
      <Link href="/(auth)/index">
        <HeadingText type="h6" color="red" fontWeight="bold">
          Sign In
        </HeadingText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
    haveAccountContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
    },
  });