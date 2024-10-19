import * as React from 'react';
import { View, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '../navigation/AppNavigation';
import { CommonActions, useNavigation } from '@react-navigation/native';
import theme from 'theme';
import Button from '@/components/buttons/button';
import AsyncStorage from '@react-native-async-storage/async-storage';

type profileScreenProp = NativeStackNavigationProp<RoutesParamList, "Profile">;

export default function ProfileScreen() {
    const navigation = useNavigation<profileScreenProp>();
    const handleLogout = async () => {
      try {
        // Remove a sessão do AsyncStorage
        await AsyncStorage.removeItem('mytodo-session');
    
        // Reseta a pilha de navegação e navega para a tela de Login
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        );
      } catch (error) {
        console.error('Erro ao fazer logout:', error);
      }
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.background   }}>
      <Text>Profile Screen</Text>
      <Button
        className="warning"
        title="Go to Login"
        onPress={() => handleLogout()}
      />
    </View>
  );
}