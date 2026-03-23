// semanaDieta define a dieta de cada dia com horários, tipo e alimentos.
export const semanaDieta = {
  domingo: [
    {
      horario: "08:00",
      tipo: "Café da manhã",
      alimentos: ["Ovos mexidos", "Tapioca", "Café sem açúcar"]
    },
    {
      horario: "12:30",
      tipo: "Almoço",
      alimentos: ["Peito de frango grelhado", "Arroz integral", "Salada de folhas"]
    },
    {
      horario: "16:00",
      tipo: "Pré-treino",
      alimentos: ["Banana", "Whey protein"]
    },
    {
      horario: "19:30",
      tipo: "Pós-treino",
      alimentos: ["Batata doce", "Tilápia assada", "Brócolis"]
    }
  ],
  segunda: [
    {
      horario: "07:00",
      tipo: "Café da manhã",
      alimentos: ["Iogurte natural", "Granola", "Frutas vermelhas"]
    },
    {
      horario: "12:30",
      tipo: "Almoço",
      alimentos: ["Carne moída magra", "Quinoa", "Cenoura cozida"]
    },
    {
      horario: "15:30",
      tipo: "Pré-treino",
      alimentos: ["Maçã", "Amêndoas"]
    },
    {
      horario: "19:00",
      tipo: "Pós-treino",
      alimentos: ["Arroz integral", "Peixe branco", "Espinafre"]
    }
  ],
  terca: [
    {
      horario: "07:15",
      tipo: "Café da manhã",
      alimentos: ["Pão integral", "Ovo cozido", "Avocado"]
    },
    {
      horario: "12:30",
      tipo: "Almoço",
      alimentos: ["Peito de peru", "Batata doce", "Mix de vegetais"]
    },
    {
      horario: "16:00",
      tipo: "Pré-treino",
      alimentos: ["Pêra", "Whey protein"]
    },
    {
      horario: "19:30",
      tipo: "Pós-treino",
      alimentos: ["Macarrão integral", "Carne magra", "Salada verde"]
    }
  ],
  quarta: [
    {
      horario: "07:00",
      tipo: "Café da manhã",
      alimentos: ["Panqueca de aveia", "Mel", "Iogurte grego"]
    },
    {
      horario: "12:30",
      tipo: "Almoço",
      alimentos: ["Filé de frango", "Arroz integral", "Abobrinha grelhada"]
    },
    {
      horario: "15:30",
      tipo: "Pré-treino",
      alimentos: ["Banana", "Pasta de amendoim"]
    },
    {
      horario: "19:00",
      tipo: "Pós-treino",
      alimentos: ["Cuscuz integral", "Omelete", "Salada mista"]
    }
  ],
  quinta: [
    {
      horario: "07:00",
      tipo: "Café da manhã",
      alimentos: ["Smoothie verde", "Torradas integrais"]
    },
    {
      horario: "12:30",
      tipo: "Almoço",
      alimentos: ["Carne magra", "Arroz integral", "Brócolis"]
    },
    {
      horario: "15:30",
      tipo: "Pré-treino",
      alimentos: ["Maçã", "Nozes"]
    },
    {
      horario: "19:00",
      tipo: "Pós-treino",
      alimentos: ["Batata doce", "Salmão", "Aspargos"]
    }
  ],
  sexta: [
    {
      horario: "07:00",
      tipo: "Café da manhã",
      alimentos: ["Omelete de claras", "Tomate", "Chá verde"]
    },
    {
      horario: "12:30",
      tipo: "Almoço",
      alimentos: ["Frango ao forno", "Arroz integral", "Salada colorida"]
    },
    {
      horario: "15:30",
      tipo: "Pré-treino",
      alimentos: ["Uva", "Amendoim"]
    },
    {
      horario: "19:00",
      tipo: "Pós-treino",
      alimentos: ["Wrap integral", "Queijo cottage", "Vegetais"]
    }
  ],
  sabado: [
    {
      horario: "08:00",
      tipo: "Café da manhã",
      alimentos: ["Cereal integral", "Leite de amêndoas", "Frutas"]
    },
    {
      horario: "12:30",
      tipo: "Almoço",
      alimentos: ["Tilápia grelhada", "Salada de quinoa", "Legumes"]
    },
    {
      horario: "15:30",
      tipo: "Pré-treino",
      alimentos: ["Mamão", "Castanhas"]
    },
    {
      horario: "19:00",
      tipo: "Pós-treino",
      alimentos: ["Espaguete de abobrinha", "Frango desfiado", "Rúcula"]
    }
  ]
};

export const diasDaSemana = [
  { key: "domingo", label: "Dom" },
  { key: "segunda", label: "Seg" },
  { key: "terca", label: "Ter" },
  { key: "quarta", label: "Qua" },
  { key: "quinta", label: "Qui" },
  { key: "sexta", label: "Sex" },
  { key: "sabado", label: "Sáb" }
];

export const tipoRefeicoes = ["Café da manhã", "Almoço", "Pré-treino", "Pós-treino"];
