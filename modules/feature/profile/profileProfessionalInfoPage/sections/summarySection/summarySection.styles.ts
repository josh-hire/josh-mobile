import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  summaryContainer: {
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
  textArea: {
    marginTop: 12,
    color: "white",
    fontSize: 16,
    textAlignVertical: "top",
    maxHeight: "85%",
  },
});

export default styles;
