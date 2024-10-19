import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '../../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import { LoginSchema } from '@/validates/login';
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { styles } from './styles';

type LoginScreenProp = NativeStackNavigationProp<RoutesParamList, "Login">;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenProp>();
  // const { signIn } = React.useContext(AuthContext);
  
const storeData = async (value: { email: string; password: string }) => {
  try {
    // Tenta buscar o perfil armazenado
    const profileData = await AsyncStorage.getItem('mytodo-profile');
    const parsedProfile = profileData ? JSON.parse(profileData) : null;

    // Verifica se existe um perfil armazenado
    if (parsedProfile) {
      if (parsedProfile.email === value.email) {
        // Se o e-mail corresponde, armazena a sessão
        await AsyncStorage.setItem('mytodo-session', JSON.stringify(value));
        navigation.navigate('Home'); // Navegar para Home se tudo estiver certo
      } else {
        // Caso o e-mail não bata, mostra um alerta
        Alert.alert("Erro", "E-mail não encontrado no perfil.");
      }
    } else {
      // Caso nenhum perfil exista, cria um novo perfil e armazena a sessão
      await AsyncStorage.setItem('mytodo-profile', JSON.stringify(value));
      await AsyncStorage.setItem('mytodo-session', JSON.stringify(value));
      navigation.navigate('Home'); // Navegar para Home após salvar o perfil
    }
  } catch (e) {
    // Erro ao salvar ou verificar o perfil
    console.error('Error storing data', e);
    Alert.alert("Erro", "Ocorreu um erro ao verificar ou salvar o perfil.");
  }
};


  return (
    <View style={styles.container}>
            <Text style={styles.title}>MyToDo List</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          await storeData(values); // Save session data
          navigation.navigate('Home'); // Navigate to Home screen
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View style={styles.form}>
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

            <Button className='primary' title="Login" onPress={handleSubmit as any} />
          </View>
        )}
      </Formik>
      <View style={styles.linkContainer}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </View>
    </View>
  );
}
