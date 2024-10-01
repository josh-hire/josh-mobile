import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  containerFocused: {
    elevation: 10,
  },
  containerError: {
    borderColor: Colors.primary.p04,
  },
  textInput: {
    minHeight: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#FFF",
    flex: 1,
  },
  textInputFocused: {
    borderWidth: 2,
  },
  textInputError: {
    borderColor: Colors.primary.p04,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 32,
  },
});

export default styles;