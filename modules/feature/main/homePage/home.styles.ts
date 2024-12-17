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
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: Colors.general.background,
  },
  container: {
    flex: 1,
    marginTop: "2%",
    marginBottom: "5%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  card: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 1.5,
    borderRadius: 13,
    overflow: "hidden",
  },
  noMoreCards: {
    fontSize: 18,
    fontWeight: "bold",
  },
  centerButton: {
    position: "absolute",
    bottom: 10,
  },
  noButton: {
    position: "absolute",
    right: "15%",
    bottom: 10,
  },
  refreshButton: {
    position: "absolute",
    left: "15%",
    bottom: 10,
  },
});

export default styles;
