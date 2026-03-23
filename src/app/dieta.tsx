import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
    ActivityIndicator,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { DietaItem } from "../components/DietaItem";
import { diasDaSemana, semanaDieta } from "../data/dieta";
import { styles } from "../styles/dieta.styles";


type Refeicao = {
  horario: string;
  tipo: string;
  alimentos: string[];
};

type DiaKey = keyof typeof semanaDieta;
type CheckState = Record<DiaKey, Record<number, boolean>>;

const STORAGE_KEY = "dieta-checklist-v1";

function getTodayDiaKey(): DiaKey {
  const map: DiaKey[] = [
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
  ];
  return map[new Date().getDay()];
}

function createInitialChecklist(): CheckState {
  const initial = {} as CheckState;
  (Object.keys(semanaDieta) as DiaKey[]).forEach((dia) => {
    initial[dia] = {};
    semanaDieta[dia].forEach((_, index: number) => {
      initial[dia][index] = false;
    });
  });
  return initial;
}

export default function Dieta() {
  const diaHoje = getTodayDiaKey();
  const [diaSelecionado, setDiaSelecionado] = useState<DiaKey>(diaHoje);
  const [checklist, setChecklist] = useState<CheckState>(
    createInitialChecklist()
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarChecklist = async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as CheckState;
          setChecklist((prev: CheckState) => ({ ...prev, ...parsed }));
        }
      } catch (error) {
        console.warn("Falha ao carregar dados de dieta", error);
      } finally {
        setLoading(false);
      }
    };

    carregarChecklist();
  }, []);

  const salvarChecklist = async (newState: CheckState) => {
    setChecklist(newState);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch (error) {
      console.warn("Falha ao salvar checklist de dieta", error);
    }
  };

  const toggleRefeicao = (index: number) => {
    const dayData = checklist[diaSelecionado] ?? {};
    const atualizado = {
      ...checklist,
      [diaSelecionado]: {
        ...dayData,
        [index]: !dayData[index],
      },
    };

    salvarChecklist(atualizado);
  };

  const refeicoesAtuais: Refeicao[] = (semanaDieta[diaSelecionado as DiaKey] as Refeicao[]) || [];
  const refeicoesConcluidas = Object.values(checklist[diaSelecionado as DiaKey] ?? {}).filter(Boolean).length;

  const diaAtualLabel = useMemo(() => {
    const diasMap: Record<DiaKey, string> = {
      domingo: "Domingo",
      segunda: "Segunda",
      terca: "Terça",
      quarta: "Quarta",
      quinta: "Quinta",
      sexta: "Sexta",
      sabado: "Sábado",
    };

    return diasMap[diaSelecionado as DiaKey];
  }, [diaSelecionado]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dieta Semanal</Text>
      <Text style={styles.subtitle}>
        Hoje: {diaAtualLabel} • {refeicoesConcluidas}/{refeicoesAtuais.length} concluídas
      </Text>

      <View style={styles.dayTabs}>
        {diasDaSemana.map((dia) => {
          const active = dia.key === diaSelecionado;
          return (
            <TouchableOpacity
              key={dia.key}
              style={[
                styles.dayButton,
                active && styles.dayButtonActive,
              ]}
              onPress={() => setDiaSelecionado(dia.key as DiaKey)}
            >
              <Text
                style={[
                  styles.dayButtonText,
                  active && styles.dayButtonTextActive,
                ]}
              >
                {dia.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {loading ? (
        <ActivityIndicator size="small" color="#1E293B" />
      ) : refeicoesAtuais.length === 0 ? (
        <Text style={styles.noData}>Sem plano definido para este dia.</Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {refeicoesAtuais.map((refeicao: Refeicao, index: number) => (
            <View key={`${diaSelecionado}-${index}`}>
              <DietaItem
                horario={refeicao.horario}
                tipo={refeicao.tipo}
                alimentos={refeicao.alimentos}
                feito={!!checklist[diaSelecionado]?.[index]}
                onToggle={() => toggleRefeicao(index)}
              />
            </View>
          ))}

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}
