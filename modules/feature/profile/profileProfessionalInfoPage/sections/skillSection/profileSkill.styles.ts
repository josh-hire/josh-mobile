import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  skillContainer: {
    width: "100%",
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
  skillBoxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
    borderColor: "white",
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  skillItem: {
    width: "45%",
  },
  editIcon: {
    position: "absolute",
    right: "6%",
    top: 12,
  },
});

export default styles;
