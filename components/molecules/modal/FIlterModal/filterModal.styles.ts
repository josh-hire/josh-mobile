import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  closedContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  closeButton: {
    elevation: 2,
    width: 32,
    height: 32,
  },
  closeIcon: {
    width: 28,
    height: 28,
  },
  mainContainer: {
    marginTop: 32,
    height: "80%",
    width: "100%",
    justifyContent: "flex-start",
    paddingHorizontal: 36,
  },
});

export default styles;
