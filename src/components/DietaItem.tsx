import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/dieta.styles";

type DietaItemProps = {
  horario: string;
  tipo: string;
  alimentos: string[];
  feito: boolean;
  onToggle: () => void;
};

export function DietaItem({ horario, tipo, alimentos, feito, onToggle }: DietaItemProps) {
  return (
    <View style={[styles.itemCard, feito && styles.itemCardDone]}>
      <View style={styles.itemHeader}>
        <View>
          <Text style={[styles.itemTipo, feito && styles.itemTextDone]}>{tipo}</Text>
          <Text style={[styles.itemHorario, feito && styles.itemTextDone]}>{horario}</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.checkButton,
            feito ? styles.checkButtonDone : styles.checkButtonPending,
          ]}
          onPress={onToggle}
        >
          <Text style={styles.checkButtonText}>
            {feito ? "✓ Concluído" : "○ Marcar"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.alimentosList}>
        {alimentos.map((food, i) => (
          <Text
            key={`${tipo}-${i}`}
            style={[styles.alimentoText, feito && styles.itemTextDone]}
          >
            • {food}
          </Text>
        ))}
      </View>
    </View>
  );
}
