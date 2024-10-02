import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appLogo: {
    position: "absolute",
  },
  page: {
    height: "100%",
    justifyContent: "space-between",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    width: "100%",
    backgroundColor: Colors.secondary.s08,
    objectFit: "cover",
  },
  rounded: {
    bottom: 25,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 30,
  },
  bodyContainer: {
    paddingHorizontal: 36,
    justifyContent: "space-around",
    gap: 46,
  },
  buttonContainer: {
    marginTop: 36,
    gap: 24
  },
  haveAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginBottom: 12,
  },
});

export default styles;
