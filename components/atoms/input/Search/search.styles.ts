import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  containerFocused: {
    elevation: 3,
    borderColor: Colors.neutral.n09,
  },
  containerError: {
    borderColor: Colors.primary.p04,
  },
  textInput: {
    marginTop: 4,
    minHeight: 40,
    backgroundColor: Colors.neutral.n09,
    paddingLeft: 36,
    padding: 10,
    borderRadius: 8,
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
    left: 10,
    top: 14,
    zIndex: 20,
  },
});

export default styles;
