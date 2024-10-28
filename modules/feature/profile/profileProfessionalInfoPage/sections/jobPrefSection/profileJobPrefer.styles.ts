import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  jobPrefContainer: {
    minHeight: 50,
    gap: 12,
    width: "100%",
  },
  modalView: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.secondary.s08,
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
  preferencesContainer: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  preferenceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  preferenceAnswer: {
    padding: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    width: "auto",
    marginVertical: 12,
    alignSelf: "flex-start",
  },
  preferenceLine: {
    borderBottomColor: Colors.neutral.n02,
    borderWidth: 1,
    marginBottom: 12,
  },
});

export default styles;
