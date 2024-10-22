import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenBackground: {
    flex: 1,
    backgroundColor: Colors.secondary.s08,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 32,
  },
  bottomView: {
    flex: 1,
    justifyContent: "flex-end",
    height: "100%",
    backgroundColor: "rgba(220,220,220,0.7)",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 35,
    paddingTop: 10,
    height: "25%",
    alignItems: "center",
    elevation: 5,
  },
  buttonClose: {
    width: 80,
    height: 5,
    borderRadius: 30,
    backgroundColor: Colors.secondary.s07,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  optionContainer: {
    width: "100%",
    justifyContent: "flex-end",
    marginTop: 12,
  },
  optionButton: {
    padding: 18,
    borderBottomWidth: 1
  },
  optionBottomButton: {
    padding: 18,
  }
});

export default styles;
