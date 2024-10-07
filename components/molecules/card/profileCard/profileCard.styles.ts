import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerProfile: {
        flexDirection: "row",
        gap: 16
    },
    photoProfile: {
        width: 40,
        height: 40,
        objectFit: "cover",
        borderRadius: 200
    }
});

export default styles;