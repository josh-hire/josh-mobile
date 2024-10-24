import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    maxWidth: "85%",
    gap: 6
  },
  companyBox: {
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#002f4f",
  },
  position: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  company: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
  },
  location: {
    borderColor: "white",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    color: "#ddd",
    marginRight: 12,
  },
  dates: {
    borderColor: "white",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    color: "#ddd",
  },
  description: {
    color: "#ccc",
  },
});

export default styles;
