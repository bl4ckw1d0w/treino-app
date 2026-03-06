import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { treinos } from "../data/treinos";
import { treinosStyles as styles } from "../styles/treinos.styles";

export default function Treinos() {
	const lista = Object.keys(treinos);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Treinos</Text>

			<FlatList
				data={lista}
				keyExtractor={(item) => item}
				renderItem={({ item }) => {
					const t = treinos[item as keyof typeof treinos];

					return (
						<TouchableOpacity
							style={styles.card}
							onPress={() =>
								router.push({
									pathname: "/workout",
									params: { treino: item },
								})
							}
						>
							<Text style={styles.cardTitle}>
								{item} • {t.nome}
							</Text>
							<Text style={styles.cardMeta}>
								{t.exercicios.length} exercícios
							</Text>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
}
