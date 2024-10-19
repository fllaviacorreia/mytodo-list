import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import theme from 'theme';

type completedScreenProp = NativeStackNavigationProp<RoutesParamList, "Completed">;

export default function CompletedScreen() {
    const navigation = useNavigation<completedScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.background   }}>
      <Text>Completed Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailsTask')}
      />
    </View>
  );
}