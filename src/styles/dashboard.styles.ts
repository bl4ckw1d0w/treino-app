import { StyleSheet } from "react-native";

export const dashboardStyles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    padding: 24,
    paddingTop: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF3B3B",
    marginBottom: 20,
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#141414",
    padding: 16,
    borderRadius: 12,
    width: "30%",
    alignItems: "center",
  },
  cardNumber: {
    color: "#FF8C00",
    fontSize: 24,
    fontWeight: "bold",
  },
  cardLabel: {
    color: "#AAA",
    fontSize: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#FFF",
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "600",
  },
  graph: {
    color: "#4CAF50",
    fontSize: 20,
    letterSpacing: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
 ex: {
    flex: 1,
    fontSize: 16,
    color: "#222",
  },
  ganho: {
    width: 64,
    textAlign: "right",
    color: "#333",
    marginRight: 8,
  },
  prText: {
    color: "#CCC",
  },
  bold: {
    color: "#FFD700",
    fontWeight: "bold",
  },
});
