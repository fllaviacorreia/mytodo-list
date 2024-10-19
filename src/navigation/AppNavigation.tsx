// NAVIGATORS
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tabs } from "./BottomNavigation";

// SCREENS
import LoginScreen from "@/screens/login/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ForgotPasswordScreen from "@/screens/ForgotPasswordScreen";
import { useEffect, useState } from "react";

export type RoutesParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  NewTask: undefined;
  EditTask: undefined;
  DetailsTask: undefined;
  Profile: undefined;
  Completed: undefined;
}

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  const [session, setSession] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Função para carregar a sessão
  useEffect(() => {
    const loadSession = async () => {
      try {
        const storedSession = await AsyncStorage.getItem('mytodo-session');
        setSession(storedSession);
      } catch (error) {
        console.error('Failed to load session:', error);
      } finally {
        setLoading(false); // Conclui o carregamento
      }
    };

    loadSession(); // Chama a função para carregar a sessão
  }, []);

  // Enquanto estiver carregando, pode exibir um spinner ou algo assim
  if (loading) {
    return null; // Ou um indicador de carregamento (ex: <ActivityIndicator />)
  }

  return (
    <NavigationContainer>
      {session ?
       ( <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>)
        :
        (<Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        </Stack.Navigator>)
      }
    </NavigationContainer>
  );
}