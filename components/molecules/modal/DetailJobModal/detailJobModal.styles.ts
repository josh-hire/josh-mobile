import { Colors } from "@constants/Colors";
import { Dimensions, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const DRAWER_HEIGHT = SCREEN_HEIGHT;

const styles = StyleSheet.create({
  drawer: {
    height: DRAWER_HEIGHT - 10,
    width: SCREEN_WIDTH,
    backgroundColor: Colors.general.background,
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
    paddingHorizontal: 12,
    zIndex: 100,
    backgroundColor: Colors.general.background,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
    padding: 16,
    borderRadius: 10,
    backgroundColor: Colors.neutral.n09,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 12,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    maxWidth: "80%",
    alignSelf: "center",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 10,
  },
  logoImage: {
    height: 80,
    objectFit: "scale-down",
    justifyContent: "center",
  },
  borderBox: {
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderColor: Colors.neutral.n02,
    alignSelf: "flex-start",
  },
  paragraphContainer: {
    flex: 1,
    paddingLeft: 5,
  },
});

export default styles;
