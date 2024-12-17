import { Colors } from "@constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.general.background,
  },
  background: {
    flex: 1,
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    objectFit: "fill",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  closedContainer: {
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 12,
  },
  closeButton: {
    elevation: 2,
    width: 18,
    height: 18,
  },
  closeIcon: {
    width: 18,
    height: 18,
  },
  mainContainer: {
    marginTop: 32,
    height: "90%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 36,
  },
  gotoButton: {
    width: "100%",
    gap: 10,
  },
  photoContainer: {
    flexDirection: "row",
    gap: 20,
  },
  photoProfile: {
    width: 164,
    height: 164,
    borderWidth: 4,
    borderColor: Colors.neutral.n03,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    width: "100%",
  },
  bubbleContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 18,
  },
});

export default styles;
