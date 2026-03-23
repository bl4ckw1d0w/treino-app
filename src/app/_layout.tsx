import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: { 
            backgroundColor: "#0B0B0B",
          },
          headerTintColor: "#FF3B3B",
          drawerStyle: {
            backgroundColor: "#141414",
          },
          drawerActiveTintColor: "#FF8C00",
          drawerInactiveTintColor: "#EEE",
        }}
      >
        <Drawer.Screen
          name="welcome"
          options={{
            drawerLabel: "Boas-vindas",
            title: "Boas-vindas",
          }}
        />

        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />

        <Drawer.Screen
          name="treinos"
          options={{
            drawerLabel: "Treinos",
            title: "Próximos Treinos",
          }}
        />

        <Drawer.Screen
          name="dieta"
          options={{
            drawerLabel: "Dieta",
            title: "Dieta Semanal",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );}
