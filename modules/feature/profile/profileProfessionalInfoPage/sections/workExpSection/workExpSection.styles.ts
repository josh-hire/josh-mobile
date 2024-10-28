import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  workExpContainer: {
    minHeight: 50,
    width: "100%",
  },
  modalView: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.secondary.s08,
  },
  addExperienceContainer: {
    gap: 32,
    marginBottom: 12,
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
  textArea: {
    marginTop: 12,
    color: "white",
    fontSize: 16,
    textAlignVertical: "top",
    maxHeight: "85%",
  },
  container: {
    padding: 20,
    backgroundColor: "#001f33",
    flex: 1,
  },
  companyBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#002f4f",
    gap: 8,
  },
  mainWorkExpContainer: {
    width: "75%",
  },
});

export default styles;
