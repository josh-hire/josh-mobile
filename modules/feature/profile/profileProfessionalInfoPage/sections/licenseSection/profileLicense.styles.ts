import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  licenseContainer: {
    minHeight: 50,
    gap: 12,
  },
  modalView: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.general.background,
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
  licenseBox: {
    flexDirection: "row",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: Colors.general.background,
    gap: 18,
  },
  mainLicenseContainer: {
    width: "85%",
  },
});

export default styles;
