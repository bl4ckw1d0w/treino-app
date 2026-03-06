import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EFEA",
    padding: 24,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },

  greeting: {
    fontSize: 16,
    color: "#777",
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
    marginTop: 4,
    maxWidth: 260,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#DDD",
  },

  mainCard: {
    backgroundColor: "#E7D9C9",
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },

  mainLabel: {
    fontSize: 14,
    color: "#555",
  },

  mainTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
    marginTop: 4,
  },

  mainSubtitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },

  primaryButton: {
    backgroundColor: "#111",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  smallCard: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    width: "48%",
  },

  smallLabel: {
    fontSize: 13,
    color: "#777",
  },

  smallValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginTop: 6,
  },

  smallMeta: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  actionsRow: {
  flexDirection: "row",
  gap: 12,
  marginTop: 16,
},

secondaryButton: {
  flex: 1,
  paddingVertical: 14,
  borderRadius: 14,
  backgroundColor: "#1F1F1F",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#333",
},

secondaryButtonText: {
  color: "#AAA",
  fontWeight: "600",
  fontSize: 15,
},

});
