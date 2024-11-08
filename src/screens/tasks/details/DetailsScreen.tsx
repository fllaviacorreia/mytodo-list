import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import theme from 'theme';

type detailsScreenProp = NativeStackNavigationProp<RoutesParamList, "DetailsTask">;

export default function DetailsScreen() {
    const navigation = useNavigation<detailsScreenProp>();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.background   }}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    );
  }