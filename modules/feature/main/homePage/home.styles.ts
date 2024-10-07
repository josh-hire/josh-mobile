import { Colors } from "@/constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
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
  drawerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 200
  },
  drawerToggleText: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    color: Colors.primary.p01,
  },
  drawerContent: {
    padding: 20,
  },
});

export default styles;
