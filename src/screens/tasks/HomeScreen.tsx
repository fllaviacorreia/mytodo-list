import * as React from 'react';
import { View, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import theme from 'theme';
import Button from '@/components/buttons/button';
import TaskCard from '@/components/card/task';

type homeScreenProp = NativeStackNavigationProp<RoutesParamList, "Home">;

export default function HomeScreen() {
    const navigation = useNavigation<homeScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.background }}>
      <Text>Home Screen</Text>
      <TaskCard color={theme.colors.primary} title="Tarefas pendentes" disabled={false}/>
      <TaskCard color={theme.colors.secondary} title="Tarefas pendentes" disabled={false}/>
      <TaskCard color={theme.colors.secondary} title="Tarefas pendentes" disabled={false}/>
      <TaskCard color={theme.colors.primary} title="Tarefas pendentes" disabled={false}/>
      <TaskCard color={theme.colors.warning} title="Tarefas pendentes" disabled={false}/>
      <TaskCard color={theme.colors.primary} title="Tarefas pendentes" disabled={false}/>
      <TaskCard color={theme.colors.warning} title="Tarefas pendentes" disabled={false}/>
    
    </View>
  );
}