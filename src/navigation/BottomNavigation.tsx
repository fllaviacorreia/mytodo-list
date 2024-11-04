// NAVIGATORS
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import CompletedScreen from "@/screens/tasks/finished/CompletedScreen";
import DetailsScreen from "@/screens/tasks/details/DetailsScreen";
import HomeScreen from "@/screens/tasks/HomeScreen";
import NewTaskScreen from "@/screens/tasks/new/NewTaskScreen";
import ProfileScreen from "@/screens/profile/ProfileScreen";

// TEXT TO BOTTOM
import { Text } from "react-native";

// THEME
import theme from "theme";

// ICONS
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
            <HomeStack.Screen name="NewTask" component={NewTaskScreen} />
        </HomeStack.Navigator>
    );
}

const CompletedStack = createNativeStackNavigator();

function CompletedStackScreen() {
    return (
        <CompletedStack.Navigator screenOptions={{ headerShown: false }}>
            <CompletedStack.Screen name="Completed" component={CompletedScreen} />
            <CompletedStack.Screen name="Details" component={DetailsScreen} />
            <CompletedStack.Screen name="NewTask" component={NewTaskScreen} />
        </CompletedStack.Navigator>
    );
}

export function Tabs() {
    return (
        <Tab.Navigator 
            initialRouteName="Tasks" 
            screenOptions={{ 
                tabBarInactiveTintColor: theme.colors.gray, 
                tabBarActiveTintColor: theme.colors.primary, 
                headerShown: false 
            }}
        >
            <Tab.Screen 
                name="Tasks" 
                component={HomeScreen} 
                options={{ 
                    tabBarIcon: ({ focused, color, size }) => 
                        <Octicons name="tasklist" size={20} color={color} />, 
                    tabBarLabel: ({ color }) => 
                        <Text style={{ fontSize: 12, color: color }}>Tasks </Text> 
                }} 
            />
            <Tab.Screen 
                name="Finalizadas" 
                component={CompletedScreen} 
                options={{ 
                        tabBarIcon: ({ focused, color, size }) => 
                            <MaterialIcons name="done-all" size={20} color={color} />, 
                        tabBarLabel: ({ color }) => 
                            <Text style={{ fontSize: 12, color: color }}> Finalizadas </Text> 
                    }} 
            />
            <Tab.Screen 
                name="Perfil" 
                component={ProfileScreen} 
                options={{ 
                    tabBarIcon: ({ focused, color, size }) => 
                        <AntDesign name="user" size={20} color={color} />, 
                    tabBarLabel: ({ color }) => 
                        <Text style={{ fontSize: 12, color: color }}> Perfil </Text> 
                }} 
            />
        </Tab.Navigator>
    )
}