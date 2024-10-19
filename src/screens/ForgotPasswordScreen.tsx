import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';

type forgotPasswordScreenProp = NativeStackNavigationProp<RoutesParamList, "ForgotPassword">;

export default function ForgotPasswordScreen() {
    const navigation = useNavigation<forgotPasswordScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}