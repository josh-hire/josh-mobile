import { Colors } from "@constants/Colors";
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
    gap: 18,
    paddingBottom: 48,
  },
  contentItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  headerContainer: {
    gap: 8,
  },
  bodyContainer: {
    gap: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.neutral.n03,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 6,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    height: 80,
    objectFit: "scale-down",
    justifyContent: "center",
  },
  borderBox: {
    borderRadius: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.neutral.n02,
    alignSelf: "flex-start",
  },
  paragraphContainer: {
    flex: 1,
    paddingLeft: 5,
  },
});

export default styles;
