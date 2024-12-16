import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    height: "100%",
    justifyContent: "space-between",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
    marginBottom: "25%",
  },
  bodyContainer: {
    paddingHorizontal: 36,
    justifyContent: "space-around",
    gap: 46,
  },
  buttonContainer: {
    marginTop: 36,
    gap: 24,
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
