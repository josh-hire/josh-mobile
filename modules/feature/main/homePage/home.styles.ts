import { Colors } from "@/constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  button: {
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    bottom: "100%",
  },
  buttonText: {
    fontSize: 16,
  },
  screenBackground: {
    backgroundColor: Colors.secondary.s08,
  },
  container: {
    marginTop: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 1.5,
    borderRadius: 30,
    overflow: "hidden",
  },
  noMoreCards: {
    fontSize: 18,
    fontWeight: "bold",
  },
  centerButton: {
    position: "absolute",
    bottom: "9%",
  },
  leftButton: {
    position: "absolute",
    left: 0,
    bottom: "9%",
  },
  rigthButton: {
    position: "absolute",
    right: 0,
    bottom: "9%",
  },
});

export default styles;
