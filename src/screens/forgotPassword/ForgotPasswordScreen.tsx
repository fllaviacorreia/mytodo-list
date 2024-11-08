import * as React from 'react';
import { View, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import Button from '@/components/buttons/button';

type forgotPasswordScreenProp = NativeStackNavigationProp<RoutesParamList, "ForgotPassword">;

export default function ForgotPasswordScreen() {
    const navigation = useNavigation<forgotPasswordScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Login"
        className='primary'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}