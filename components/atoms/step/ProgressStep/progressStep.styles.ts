import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    activeStep: {
        height: 5,
        borderRadius: 30,
        width: 60,
        backgroundColor: Colors.neutral.n00
    },
    notActiveStep: {
        height: 5,
        borderRadius: 30,
        width: 60,
        borderWidth: 1,
        borderColor: Colors.neutral.n04
    }
})

export default styles;