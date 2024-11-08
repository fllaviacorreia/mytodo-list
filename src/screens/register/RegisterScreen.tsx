import { View, Text, Alert, KeyboardAvoidingView } from 'react-native';
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';
import { Formik } from 'formik';
import { RegisterSchema } from '@/validates/register';
import { useAuth } from '@/context/AuthContext';
import {styles} from './styles';

/**
 * The RegisterScreen component is responsible for rendering the registration
 * interface of the application. It uses the Formik library for form handling
 * and validation, applying the RegisterSchema to ensure proper input formats 
 * for name, email, password, and confirm password fields. The component
 * provides inputs for the user's full name, email, password, and a confirm
 * password field. Upon submission, the storeData function is invoked to 
 * register the user using the context's register method. It also displays 
 * error messages for any validation issues detected in the input fields.
 */
export default function RegisterScreen() {
  const authContext = useAuth();
  
  const storeData = async (value: {name: string, email: string; password: string}) => {
    try {
      await authContext.register(value.name, value.email, value.password);
    } catch (e) {
      console.error('Error storing data', e);
      Alert.alert("Erro", "Ocorreu um erro ao salvar o perfil.");
    }
  };


  return (
    <View style={styles.container} >
      <Formik
        initialValues={{name:'', email: '', password: '', confirmPassword: ''}}
        validationSchema={RegisterSchema}
        onSubmit={async (values) => {
          await storeData(values); // Save session data
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <KeyboardAvoidingView style={styles.form} enabled behavior='padding'>
            <Text style={styles.title}>MyToDo List</Text>
            <Input
              placeholder="Full name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              error={touched.name ? errors.name : ""}
            />
            <Input
              placeholder="Email"
              onChangeText={handleChange('email')}
              keyboardType='email-address'
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
            <Input
              placeholder="Confirm password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
              error={touched.confirmPassword ? errors.confirmPassword : ""}
            />
            <Button
              className='primary'
              title="Cadastrar"
              onPress={handleSubmit as any}
            />
          </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
  );
}