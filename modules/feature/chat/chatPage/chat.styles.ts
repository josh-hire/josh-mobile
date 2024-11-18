import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenBackground: {
    backgroundColor: Colors.secondary.s08,
    height: "100%",
  },
  chatContainer: {
    paddingBottom: 18,
    paddingTop: 6,
    paddingHorizontal: 32,
    gap: 18,
  },
  headerContainer: {
    backgroundColor: Colors.secondary.s08,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  chatBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 6,
    borderTopColor: "white",
    borderTopWidth: 1,
    width: "100%",
  },
  inputCBContainer: {
    maxWidth: "82%",
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 5,
    margin: 10,
    backgroundColor: "#EAEAEA",
  },
  inputCB: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    color: "#000",
  },
  iconCB: {
    marginHorizontal: 5,
  },
  sendCBButton: {
    borderRadius: 50,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
