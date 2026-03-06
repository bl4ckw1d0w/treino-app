import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, router } from "expo-router";
import { treinos } from "../data/treinos";
import { styles } from "../styles/workout.styles";

type Serie = { peso?: string };

type ExercicioState = {
  feito: boolean;
  tempo: number;
  rodando: boolean;
  series: Serie[];
};

type WorkoutState = {
  [nome: string]: ExercicioState;
};

export default function Workout() {
  const { treino } = useLocalSearchParams();
  const treinoKey = treino as keyof typeof treinos;

  const hoje = new Date().toISOString().split("T")[0];
  const storageKey = `workout-${treinoKey}-${hoje}`;

  const treinoData = treinos[treinoKey];

  const [dados, setDados] = useState<WorkoutState>({});
  const [finished, setFinished] = useState(false);
  const [restTimer, setRestTimer] = useState<number | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* ---------- LOAD ---------- */
  useEffect(() => {
    AsyncStorage.getItem(storageKey).then((raw) => {
      if (!raw) return;
      const parsed = JSON.parse(raw);
      setDados(parsed.exercises ?? {});
      setFinished(parsed.finished === true);
    });
  }, []);

  /* ---------- SAVE ---------- */
  const salvar = async (
    novo: WorkoutState,
    final = finished
  ) => {
    const totalTime = Object.values(novo).reduce(
      (acc, ex) => acc + (ex.tempo || 0),
      0
    );

    setDados(novo);

    await AsyncStorage.setItem(
      storageKey,
      JSON.stringify({
        exercises: novo,
        finished: final,
        totalTime,
      })
    );
  };

  /* ---------- PLAY / PAUSE ---------- */
  const toggleTimer = (nome: string) => {
    if (finished) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    const atualizado: WorkoutState = {};

    Object.entries(dados).forEach(([key, ex]) => {
      atualizado[key] = {
        ...ex,
        rodando: key === nome ? !ex.rodando : false,
      };
    });

    const atual = atualizado[nome] ?? {
      feito: false,
      tempo: 0,
      rodando: true,
      series: [],
    };

    atualizado[nome] = atual;

    salvar(atualizado);

    if (atual.rodando) {
      intervalRef.current = setInterval(() => {
        atualizado[nome].tempo += 1;
        salvar({ ...atualizado });
      }, 1000);
    }
  };

  /* ---------- DESCANSO ---------- */
  const iniciarDescanso = (segundos: number) => {
    if (restTimer) return;

    setRestTimer(segundos);

    const id = setInterval(() => {
      setRestTimer((prev) => {
        if (!prev || prev <= 1) {
          clearInterval(id);
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  /* ---------- PESO ---------- */
  const atualizarPeso = (
    nome: string,
    index: number,
    valor: string
  ) => {
    if (finished) return;

    const ex = dados[nome] ?? {
      feito: false,
      tempo: 0,
      rodando: false,
      series: [],
    };

    ex.series[index] = { peso: valor };

    salvar({
      ...dados,
      [nome]: ex,
    });
  };

  /* ---------- FINALIZAR EXERCÍCIO ---------- */
  const finalizarExercicio = (nome: string) => {
    const ex = dados[nome];
    if (!ex) return;

    ex.feito = true;
    ex.rodando = false;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    salvar({ ...dados });
  };

  /* ---------- FINALIZAR TREINO ---------- */
  const finalizarTreino = async () => {
    await salvar(dados, true);
    setFinished(true);
  };

  if (!treinoData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Treino não encontrado
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{treinoData.nome}</Text>

      {restTimer !== null && (
        <Text style={styles.restTimer}>
          💤 Descanso: {restTimer}s
        </Text>
      )}

      {treinoData.exercicios.map((ex, idx) => {
        const estado = dados[ex.nome] ?? {
          feito: false,
          tempo: 0,
          rodando: false,
          series: [],
        };

        return (
          <View key={ex.nome} style={styles.exerciseCard}>
            <Text
              style={[
                styles.exerciseName,
                estado.feito && styles.strike,
              ]}
            >
              {idx + 1}. {ex.nome}
            </Text>

            <Text style={styles.meta}>
              {ex.series}x {ex.repeticoes} • {ex.pausa}s
            </Text>

            <View style={styles.actionsRow}>
              <TouchableOpacity
                style={styles.playButton}
                onPress={() => toggleTimer(ex.nome)}
              >
                <Text>
                  {estado.rodando ? "⏸ Pause" : "▶ Play"}
                </Text>
              </TouchableOpacity>

              <Text style={styles.timer}>
                {Math.floor(estado.tempo / 60)}:
                {(estado.tempo % 60)
                  .toString()
                  .padStart(2, "0")}
              </Text>
            </View>

            {Array.from({ length: ex.series }).map(
              (_, i) => (
                <View
                  key={i}
                  style={styles.seriesRow}
                >
                  <Text style={styles.serieLabel}>
                    Série {i + 1}
                  </Text>

                  <TextInput
                    style={styles.serieBox}
                    placeholder="kg"
                    keyboardType="numeric"
                    editable={!estado.feito && !finished}
                    value={
                      estado.series?.[i]?.peso ?? ""
                    }
                    onChangeText={(v) =>
                      atualizarPeso(ex.nome, i, v)
                    }
                  />

                  <TouchableOpacity
                    style={styles.restButton}
                    onPress={() =>
                      iniciarDescanso(ex.pausa)
                    }
                  >
                    <Text>💤</Text>
                  </TouchableOpacity>
                </View>
              )
            )}

            {!estado.feito && !finished && (
              <TouchableOpacity
                style={styles.finishButton}
                onPress={() =>
                  finalizarExercicio(ex.nome)
                }
              >
                <Text
                  style={styles.finishButtonText}
                >
                  Finalizar exercício
                </Text>
              </TouchableOpacity>
            )}
          </View>
        );
      })}

      {!finished && (
        <TouchableOpacity
          style={styles.finishWorkout}
          onPress={finalizarTreino}
        >
          <Text style={styles.finishWorkoutText}>
            Finalizar treino
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
