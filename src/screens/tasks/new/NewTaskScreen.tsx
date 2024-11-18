import * as React from 'react';
import { View, Text, Alert, ToastAndroid, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import theme from 'theme';
import { Formik } from 'formik';
import taskSchema from '@/validates/task';
import { Task, useTask } from '@/context/TaskContext';
import Input from '@/components/inputs/input';
import Button from '@/components/buttons/button';

type newTaskScreenProp = NativeStackNavigationProp<RoutesParamList, "NewTask">;

export default function NewTaskScreen() {
    const navigation = useNavigation<newTaskScreenProp>();
    const taskContext = useTask();
  
    const storeData = async (value: Partial<Task>) => {
      try {
          if (value.title && value.startsAt && value.endsAt && value.priority) {
              taskContext.addTask({
                  title: value.title,
                  description: value.description || '',
                  startsAt: value.startsAt,
                  endsAt: value.endsAt,
                  priority: value.priority,
                  status: 'open'
              });
              ToastAndroid.show("Tarefa adicionada com sucesso.", ToastAndroid.SHORT);
              navigation.goBack();
          } else {
              Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
          }
      } catch (e) {
          console.error('Error storing data', e);
          Alert.alert("Erro", "Ocorreu um erro ao salvar a tarefa.");
      }
  };

    return (
      <View style={styles.container}>
        <Formik
          initialValues={{ title: '', description: '', startsAt: '', endsAt: '', priority: 'medium' }}
          validationSchema={taskSchema}
          onSubmit={async (values) => {
            await storeData(values); // Salva a tarefa
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
            <View style={styles.form}>
              <Input
                placeholder="Título"
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                error={touched.title ? errors.title : ""}
              />
              <Input
                placeholder="Descrição"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                error={touched.description ? errors.description : ""}
              />
              <Input
                placeholder="Data de Início (AAAA-MM-DD)"
                onChangeText={handleChange('startsAt')}
                onBlur={handleBlur('startsAt')}
                value={values.startsAt}
                error={touched.startsAt ? errors.startsAt : ""}
              />
              <Input
                placeholder="Data de Término (AAAA-MM-DD)"
                onChangeText={handleChange('endsAt')}
                onBlur={handleBlur('endsAt')}
                value={values.endsAt}
                error={touched.endsAt ? errors.endsAt : ""}
              />
              <Input
                placeholder="Prioridade (low, medium, high)"
                onChangeText={handleChange('priority')}
                onBlur={handleBlur('priority')}
                value={values.priority}
                error={touched.priority ? errors.priority : ""}
              />
              <Button
                className="primary"
                title="Adicionar Tarefa"
                onPress={handleSubmit as any}
              />
            </View>
          )}
        </Formik>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  form: {
    width: '100%',
    paddingHorizontal: 20,
  }
});
