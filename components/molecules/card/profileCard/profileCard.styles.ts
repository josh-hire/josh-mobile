import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  photoProfile: {
    width: 40,
    height: 40,
    objectFit: "cover",
    borderRadius: 200,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
});

export default styles;
