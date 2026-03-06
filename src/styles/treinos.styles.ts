import { StyleSheet } from "react-native";

export const treinosStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EFEA",
    padding: 24,
    paddingTop: 32,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 16,
  },

  list: {
    marginTop: 8,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginBottom: 6,
  },

  cardMeta: {
    fontSize: 13,
    color: "#666",
  },
});
