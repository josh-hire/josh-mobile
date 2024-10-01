import { Colors } from "@constants/Colors";

const styles = {
  container: {
    marginBottom: 10,
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
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#FFF",
    flex: 1,
    fontSize: 16,
  },
  textInputFocused: {
    borderWidth: 2,
  },
  textInputError: {
    borderColor: Colors.primary.p04,
  },
  suggestionList: {
    backgroundColor: "#fff",
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
};

export default styles;