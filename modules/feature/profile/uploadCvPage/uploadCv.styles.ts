import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: Colors.general.background,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  uploadBox: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.neutral.n03,
  },
  uploadContainer: {
    maxWidth: "80%",
    minHeight: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  fileContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: 30,
    height: 26,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "white",
  },
  menu: {
    position: "absolute",
    top: 30,
    right: 10,
    width: 120,
    backgroundColor: Colors.secondary.s06,
    borderRadius: 4,
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  menuItem: {
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    width: "100%",
  },
});

export default styles;
