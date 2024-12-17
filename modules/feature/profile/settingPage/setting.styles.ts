import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: Colors.general.background,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 32,
  },
  sectionContainer: {
    alignItems: "flex-start",
    width: "100%",
    gap: 14,
  },
  optionContainer: {
    borderRadius: 10,
    padding: 20,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.1)",
    gap: 14,
  },
  optionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingLeft: 12,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  optionBottomButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingLeft: 12,
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
});

export default styles;
