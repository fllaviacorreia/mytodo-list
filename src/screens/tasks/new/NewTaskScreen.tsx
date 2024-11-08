import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import theme from 'theme';

type newTaskScreenProp = NativeStackNavigationProp<RoutesParamList, "NewTask">;

export default function NewTaskScreen() {
    const navigation = useNavigation<newTaskScreenProp>();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.background  }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    );
  }