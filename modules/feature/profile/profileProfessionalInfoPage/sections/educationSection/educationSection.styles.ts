import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  educationContainer: {
    minHeight: 50,
    gap: 12,
  },
  modalView: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.general.background,
  },
  mainContainer: {
    height: "100%",
    paddingHorizontal: 24,
  },
  bodyContainer: {
    justifyContent: "space-between",
    height: "90%",
  },
  closeButton: {
    width: 25,
    height: 18,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftHeaderContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  educationBox: {
    flexDirection: "row",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: Colors.general.background,
    gap: 8,
  },
  mainEducationContainer: {
    width: "75%",
  },
});

export default styles;
