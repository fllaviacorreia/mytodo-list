// TaskCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// Tipagem para as props do TaskCard
interface TaskCardProps {
  color: string;
  title: string;
  disabled: boolean;
}

const TaskCard = ({ color, title, disabled }: TaskCardProps) => {
  return (
    <View style={styles.taskCard}>
      {/* Bloco colorido à esquerda */}
      <View style={[styles.colorBlock, { backgroundColor: color }]} />
      
      {/* Texto da tarefa */}
      <Text style={[styles.taskTitle, disabled && styles.disabledText]}>
        {title}
      </Text>

      {/* Botão de adicionar */}
      <TouchableOpacity disabled={disabled}>
        <Text style={[styles.addButton, disabled && styles.disabledButton]}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;
