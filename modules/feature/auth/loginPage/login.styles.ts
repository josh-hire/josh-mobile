import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginBottom: "20%",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  bodyContainer: {
    paddingHorizontal: 36,
    justifyContent: "space-around",
    gap: 48,
  },
});

export default styles;
