import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /* ---------- BASE ---------- */
  container: {
    flex: 1,
    backgroundColor: "#0E0E0E",
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 12,
  },

  locked: {
    color: "#9CA3AF",
    fontSize: 14,
    marginBottom: 16,
  },

  /* ---------- CARD EXERCÍCIO ---------- */
  exerciseCard: {
    backgroundColor: "#151515",
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
  },

  exerciseDone: {
    opacity: 0.85,
  },

  exerciseName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 4,
  },

  strike: {
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },

  meta: {
    fontSize: 13,
    color: "#9CA3AF",
    marginBottom: 12,
  },

  /* ---------- CONTROLES ---------- */
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 12,
  },

  playButton: {
    backgroundColor: "#1F2933",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  restButton: {
    backgroundColor: "#111827",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  timerText: {
    color: "#E5E7EB",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 6,
  },

  /* ---------- SÉRIES ---------- */
  seriesRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  serieLabel: {
    width: 70,
    fontSize: 13,
    color: "#D1D5DB",
  },

  serieBox: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 15,
    color: "#FFFFFF",
  },

  inputDisabled: {
    opacity: 0.5,
  },

  /* ---------- FINALIZAR ---------- */
  finishButton: {
    marginTop: 10,
    backgroundColor: "#EF4444",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },

  finishButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  doneText: {
    marginTop: 10,
    color: "#34D399",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  finishWorkout: {
  marginTop: 24,
  marginBottom: 40,
  backgroundColor: "#16a34a", // verde forte
  paddingVertical: 16,
  borderRadius: 14,
  alignItems: "center",
},

finishWorkoutText: {
  color: "#ffffff",
  fontSize: 16,
  fontWeight: "700",
  letterSpacing: 0.4,
},
backButton: {
  marginTop: 24,
  marginBottom: 40,
  alignSelf: "center",
  paddingHorizontal: 24,
  paddingVertical: 10,
  borderRadius: 20,
  backgroundColor: "#1f2933",
},
backButtonText: {
  color: "#cbd5e1",
  fontSize: 14,
  fontWeight: "500",
},
restTimer: {
  marginLeft: 8,
  fontSize: 13,
  fontWeight: "600",
  color: "#fbbf24", // amarelo de alerta
},
timer: {
  fontSize: 20,
  fontWeight: "600",
  color: "#FFFFFF",
  backgroundColor: "#1C1C1E",
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 12,
  minWidth: 70,
  textAlign: "center",
},
});
