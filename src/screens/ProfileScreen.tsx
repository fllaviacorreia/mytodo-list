import * as React from 'react';
import { View, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '../navigation/AppNavigation';
import theme from 'theme';
import Button from '@/components/buttons/button';
import { useAuth } from '@/context/AuthContext';

type profileScreenProp = NativeStackNavigationProp<RoutesParamList, "Profile">;

export default function ProfileScreen() {
    const authContext = useAuth();
    const handleLogout = async () => {
      try {
        // Remove a sessão do AsyncStorage
        await authContext.logout();
      } catch (error) {
        console.error('Erro ao fazer logout:', error);
      }
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.background   }}>
      <Text>Profile Screen</Text>
      <Button
        className="warning"
        title="Logout"
        onPress={() => handleLogout()}
      />
    </View>
  );
}