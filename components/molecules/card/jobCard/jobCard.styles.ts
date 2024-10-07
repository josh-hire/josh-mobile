import { Dimensions, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  cardContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 1.2,
    position: "absolute",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 15,
    borderRadius: 30,
    margin: 10,
  },
  headerContainer: {
    marginBottom: 5,
  },
  companyName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  location: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)",
  },
  jobType: {
    fontSize: 14,
    color: "rgba(255,255,255,0.7)",
    marginTop: 5,
  },
});

export default styles;
