import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenBackground: {
    backgroundColor: Colors.secondary.s08,
  },
  activityContainer: {
    gap: 18,
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  drawerHandle: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 12,
    zIndex: 100,
    backgroundColor: "white",
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
    backgroundColor: "white",
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