import { Colors } from "@constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenBackground: {
    backgroundColor: Colors.general.background,
  },
  activityContainer: {
    gap: 18,
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.neutral.n09,
    padding: 12,
    borderRadius: 30,
  },
  navbarItem: {
    backgroundColor: Colors.neutral.n07,
    padding: 8,
    borderRadius: 30,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
    backgroundColor: Colors.general.background,
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
