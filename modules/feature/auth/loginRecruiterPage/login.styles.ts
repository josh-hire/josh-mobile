import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  haveAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginBottom: 12,
  },
  page: {
    height: "100%",
    justifyContent: "space-between",
  },
  imageBackground: {
    width: "100%",
    backgroundColor: Colors.secondary.s08,
    objectFit: "cover",
  },
  appLogo: {
    position: "absolute",
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
    gap: 24,
  },
});

export default styles;
