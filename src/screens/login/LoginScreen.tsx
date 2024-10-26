import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '../../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { LoginSchema } from '@/validates/login';
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { styles } from './styles';
import { useAuth } from '@/context/AuthContext';
import Checkbox from '@/components/checkbox';

type LoginScreenProp = NativeStackNavigationProp<RoutesParamList, "Login">;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenProp>();
  const authContext = useAuth();
  
  const storeData = async (value: { email: string; password: string, keepConnected: boolean }) => {
    try {
      await authContext.login(value.email, value.password, value.keepConnected);
    } catch (e) {
      console.error('Error storing data', e);
      Alert.alert("Erro", "Ocorreu um erro ao verificar ou salvar o perfil.");
    }
  };


  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '', keepConnected: false }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          await storeData(values); // Save session data
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View style={styles.form}>
            <Text style={styles.title}>MyToDo List</Text>
            <Input
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={touched.email ? errors.email : ""}
            />
            <Input
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              error={touched.password ? errors.password : ""}
            />

            <Button
              className='primary'
              title="Login"
              onPress={handleSubmit as any}
            />
            <Checkbox
              title="Mantenha-me conectado"
              value={values.keepConnected}
              onValueChange={(value) => setFieldValue('keepConnected', value)} />
          </View>
        )}
      </Formik>

      <View style={styles.linkContainer}>
        <Button 
          className='transparent' 
          title="Esqueci minha senha" 
          onPress={() => navigation.navigate('ForgotPassword')} />
        {/* <Button className='warning' title="Criar conta" onPress={() => navigation.navigate('Register')} /> */}
      </View>
    </View>
  );
}
