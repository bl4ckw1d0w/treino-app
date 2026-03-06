import { View, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { styles } from "../styles/home.styles";
import { treinos } from "../data/treinos";

/* mapa do treino do dia */
const MAPA_TREINOS: Record<number, string> = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
};

type ResumoHoje = {
  feitos: number;
  total: number;
};

type UltimoTreino = {
  nome: string;
  feitos: number;
  total: number;
  tempo?: number;
};

export default function Home() {
  const hoje = new Date();
  const hojeKey = hoje.toISOString().split("T")[0];
  const diaSemana = hoje.getDay();

  const chaveTreino = MAPA_TREINOS[diaSemana];
  const treinoHoje = chaveTreino
    ? treinos[chaveTreino]
    : null;

  const [resumoHoje, setResumoHoje] =
    useState<ResumoHoje | null>(null);

  const [ultimoTreino, setUltimoTreino] =
    useState<UltimoTreino | null>(null);

  const [treinosSemana, setTreinosSemana] =
    useState(0);

  const [treinoFinalizado, setTreinoFinalizado] =
    useState(false);

  useEffect(() => {
    const carregarDados = async () => {
      const keys = await AsyncStorage.getAllKeys();
      const workoutKeys = keys.filter((k) =>
        k.startsWith("workout-")
      );

      /* ---------- TREINO DE HOJE ---------- */
      if (chaveTreino) {
        const hojeStorageKey = `workout-${chaveTreino}-${hojeKey}`;
        const rawHoje =
          await AsyncStorage.getItem(hojeStorageKey);

        if (rawHoje) {
          const data = JSON.parse(rawHoje);

          const exercicios = Object.values(data).filter(
            (item: any) =>
              item &&
              typeof item === "object" &&
              "feito" in item
          );

          setResumoHoje({
            feitos: exercicios.filter(
              (ex: any) => ex.feito
            ).length,
            total: exercicios.length,
          });

          setTreinoFinalizado(data.finished === true);
        } else {
          setResumoHoje(null);
          setTreinoFinalizado(false);
        }
      }

      /* ---------- ÚLTIMO TREINO (ANTERIOR) ---------- */
      let ultimoEncontrado = null;

      for (const key of [...workoutKeys].sort().reverse()) {
        const [, letra, dateStr] = key.split("-");
        if (dateStr === hojeKey) continue;

        const raw = await AsyncStorage.getItem(key);
        if (!raw) continue;

        const data = JSON.parse(raw);
        if (data.finished !== true) continue;

        const exercicios = Object.values(data).filter(
          (item: any) =>
            item &&
            typeof item === "object" &&
            "feito" in item
        );

        ultimoEncontrado = {
          nome: `Treino ${letra}`,
          feitos: exercicios.filter(
            (ex: any) => ex.feito
          ).length,
          total: exercicios.length,
          tempo: data.totalTime,
        };

        break;
      }

      setUltimoTreino(ultimoEncontrado);

      /* ---------- SEMANA ---------- */
      const hojeData = new Date();
      const inicioSemana = new Date(hojeData);
      inicioSemana.setDate(
        hojeData.getDate() -
          hojeData.getDay() +
          1
      );

      let feitosSemana = 0;

      for (const key of workoutKeys) {
        const [, , dateStr] = key.split("-");
        const dataTreino = new Date(dateStr);
        const dia = dataTreino.getDay();

        if (
          dataTreino >= inicioSemana &&
          dataTreino <= hojeData &&
          dia !== 0 &&
          dia !== 6
        ) {
          const raw = await AsyncStorage.getItem(key);
          if (!raw) continue;

          const data = JSON.parse(raw);
          if (data.finished === true) {
            feitosSemana++;
          }
        }
      }

      setTreinosSemana(feitosSemana);
    };

    carregarDados();
  }, []);

  const irParaTreino = () => {
    if (!chaveTreino) return;

    router.push({
      pathname: "/workout",
      params: { treino: chaveTreino },
    });
  };

  const finalizarTreino = async () => {
    if (!chaveTreino) return;

    const key = `workout-${chaveTreino}-${hojeKey}`;
    const raw = await AsyncStorage.getItem(key);
    if (!raw) return;

    const data = JSON.parse(raw);

    await AsyncStorage.setItem(
      key,
      JSON.stringify({
        ...data,
        finished: true,
      })
    );

    setTreinoFinalizado(true);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá 👋</Text>
          <Text style={styles.title}>
            Seu plano de treino está pronto
          </Text>
        </View>
        <View style={styles.avatar} />
      </View>

      {/* CARD PRINCIPAL */}
      <View style={styles.mainCard}>
        <Text style={styles.mainLabel}>
          Treino de hoje
        </Text>

        {treinoHoje ? (
          <>
            <Text style={styles.mainTitle}>
              {treinoHoje.nome}
            </Text>

            <Text style={styles.mainSubtitle}>
              {resumoHoje
                ? `${resumoHoje.feitos}/${resumoHoje.total} exercícios concluídos`
                : "Nenhum exercício iniciado"}
            </Text>

            {!treinoFinalizado ? (
              <View style={styles.actionsRow}>
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={irParaTreino}
                >
                  <Text
                    style={styles.primaryButtonText}
                  >
                    Continuar treino
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.secondaryButton}
                  onPress={finalizarTreino}
                >
                  <Text
                    style={styles.secondaryButtonText}
                  >
                    Finalizar
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={styles.mainSubtitle}>
                Treino finalizado ✅
              </Text>
            )}
          </>
        ) : (
          <>
            <Text style={styles.mainTitle}>
              Dia de descanso
            </Text>
            <Text style={styles.mainSubtitle}>
              Aproveite para recuperar 💆‍♂️
            </Text>
          </>
        )}
      </View>

      {/* CARDS SECUNDÁRIOS */}
      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.smallLabel}>
            Último treino
          </Text>

          <Text style={styles.smallValue}>
            {ultimoTreino?.nome ?? "—"}
          </Text>

          <Text style={styles.smallMeta}>
            {ultimoTreino
              ? `${ultimoTreino.feitos}/${ultimoTreino.total} • ${
                  ultimoTreino.tempo
                    ? Math.floor(
                        ultimoTreino.tempo / 60
                      )
                    : 0
                } min`
              : "—"}
          </Text>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.smallLabel}>
            Semana
          </Text>

          <Text style={styles.smallValue}>
            {treinosSemana} / 5
          </Text>

          <Text style={styles.smallMeta}>
            treinos feitos
          </Text>
        </View>
      </View>
    </View>
  );
}
