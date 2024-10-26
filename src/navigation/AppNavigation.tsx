// NAVIGATORS
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tabs } from "./BottomNavigation";

// SCREENS
import LoginScreen from "@/screens/login/LoginScreen";
import ForgotPasswordScreen from "@/screens/forgotPassword/ForgotPasswordScreen";
import RegisterScreen from "@/screens/register/RegisterScreen";
import { useAuth } from "@/context/AuthContext";

export type RoutesParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  Register: undefined;
  Home: undefined;
  NewTask: undefined;
  EditTask: undefined;
  DetailsTask: undefined;
  Profile: undefined;
  Completed: undefined;
}

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  const {isAuthenticated, isFirstAccess} = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ?
       ( <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>)
        :
        (<Stack.Navigator initialRouteName={isFirstAccess ? "Login" : "Register"}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>)
      }
    </NavigationContainer>
  );
}