import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  skillContainer: {
    width: "100%",
    minHeight: 50,
    gap: 12,
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
  skillBoxContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Membungkus elemen ke baris berikutnya
    justifyContent: "space-between", // Meratakan elemen secara merata di antara baris
  },
});

export default styles;
