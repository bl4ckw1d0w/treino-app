import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 14,
  },
  dayTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  dayButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    marginHorizontal: 2,
    alignItems: "center",
    backgroundColor: "#E2E8F0",
  },
  dayButtonActive: {
    backgroundColor: "#0B79D0",
  },
  dayButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#334155",
  },
  dayButtonTextActive: {
    color: "#FFF",
  },
  progress: {
    fontSize: 14,
    color: "#1E3A8A",
    fontWeight: "600",
    marginBottom: 10,
  },
  itemCard: {
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#CBD5E1",
  },
  itemCardDone: {
    borderColor: "#22C55E",
    backgroundColor: "#ECFDF5",
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  itemTipo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
  },
  itemHorario: {
    marginTop: 3,
    fontSize: 13,
    color: "#64748B",
  },
  alimentoText: {
    fontSize: 14,
    color: "#334155",
    marginBottom: 2,
  },
  itemTextDone: {
    textDecorationLine: "line-through",
    color: "#64748B",
  },
  alimentosList: {
    marginTop: 2,
  },
  checkButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  checkButtonPending: {
    backgroundColor: "#94A3B8",
  },
  checkButtonDone: {
    backgroundColor: "#22C55E",
  },
  checkButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "700",
  },
  loading: {
    marginTop: 24,
    color: "#475569",
    textAlign: "center",
  },
  noData: {
    marginTop: 20,
    textAlign: "center",
    color: "#64748B",
  },
  backButton: {
    marginTop: 12,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 18,
    backgroundColor: "#334155",
  },
  backButtonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 13,
  },
});
