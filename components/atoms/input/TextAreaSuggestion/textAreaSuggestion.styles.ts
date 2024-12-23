import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 40,
  },
  containerFocused: {
    elevation: 10,
  },
  containerError: {
    borderColor: Colors.primary.p04,
  },
  textInput: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    flex: 1,
    fontSize: 16,
  },
  textLabelContainer: {
    flexDirection: "row",
    marginBottom: 6,
  },
  textInputFocused: {
    borderWidth: 2,
  },
  textInputError: {
    borderColor: Colors.primary.p04,
  },
  suggestionList: {
    borderWidth: 1,
    borderColor: Colors.neutral.n02,
    maxHeight: 200,
    marginTop: 5,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  item: {
    borderWidth: 1,
    borderColor: Colors.neutral.n02,
  },
  itemPressed: {
    borderWidth: 1,
    backgroundColor: Colors.secondary.s05,
    color: Colors.neutral.n01,
    borderColor: Colors.neutral.n02,
  },
  itemText: {},
  itemTextPressed: {
    color: Colors.neutral.n01,
  },
});

export default styles;
