import * as React from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesParamList } from '@/navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import theme from 'theme';
import TaskCard from '@/components/card/task';
import { useTask } from '@/context/TaskContext'; // Importa o contexto de tarefas
import FAB from '@/components/buttons/fab';
import Button from '@/components/buttons/button';
import Input from '@/components/inputs/input';

type homeScreenProp = NativeStackNavigationProp<RoutesParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<homeScreenProp>();
  const { tasks } = useTask(); // Acessa as tarefas do contexto
  const openTasks = tasks?.filter(task => task.status === 'open') || [];
  return (
    <View style={styles.container}>
      

      {/* Tarefas */}
      {tasks.length > 0 ? (

        <View style={styles.taskListContainer}>
          {/* Campo de busca */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Input
            error=""
            placeholder="Pesquise aqui"
            placeholderTextColor={theme.colors.gray}
          />
        </View>
        <View style={styles.searchButton}>
          <Button title='Go' className='secondary' />
        </View>

      </View>
          <Text style={styles.taskCount}>Total de tarefas: {tasks.length}</Text>
          <FlatList
            data={openTasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskCard
                color={
                  item.priority === 'high' ? theme.colors.warning :
                    item.priority === 'medium' ? theme.colors.primary :
                      theme.colors.secondary
                }
                title={item.title}
                disabled={item.status === 'finished'}
              />
            )}
          />
        </View>
      ) : (
        <Text style={styles.noTaskText}>Nenhuma tarefa disponível.</Text>
      )}

     
        <FAB icon="plus" color="primary" onPress={() => navigation.navigate('NewTask')} />
    


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 50,
    marginBottom: 15,
    height: 70,
    width: '100%',
  },
  searchInput: {
    width: '80%',
    height: 70,
  },
  searchButton: {
    width: "20%",
    height: 70,
    justifyContent: 'center',

  },
  taskListContainer: {
    flex: 1,
  },
  taskCount: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
    color: theme.colors.text,
  },
  noTaskText: {
    color: theme.colors.text,
    textAlign: 'center',
    marginTop: 70,
  },
});
