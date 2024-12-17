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
    justifyContent: "flex-end",
  },
  overlay: {
    padding: 15,
    margin: 10,
  },
  companyName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  photoProfile: {
    width: 40,
    height: 40,
    objectFit: "cover",
    borderRadius: 200,
  },
  location: {
    fontSize: 16,
  },
  jobType: {
    fontSize: 14,
    marginTop: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
});

export default styles;
