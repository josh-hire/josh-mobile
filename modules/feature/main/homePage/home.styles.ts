import { Colors } from "@/constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const DRAWER_HEIGHT = SCREEN_HEIGHT;

const styles = StyleSheet.create({
  drawer: {
    height: DRAWER_HEIGHT - 10,
    width: SCREEN_WIDTH,
    backgroundColor: "white",
    position: "absolute",
    bottom: -DRAWER_HEIGHT,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 6,
    zIndex: 100,
  },
  drawerHandle: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 100,
    backgroundColor: "white",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerHandlerItem: {
    backgroundColor: Colors.neutral.n03,
    borderRadius: 30,
    height: 8,
    width: 50,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
  },
  drawerContent: {
    fontSize: 18,
    marginBottom: 20,
  },
  contentItem: {
    fontSize: 16,
    marginBottom: 10,
  },
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
