import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'; // Ou qualquer pacote de ícones que você esteja usando
import theme from 'theme';

type FABProps = {
  icon: "plus" | "trash" | "edit"; // Nome do ícone, conforme o pacote de ícones utilizado
  color: 'primary' | 'secondary' | 'warning';
  onPress: () => void;
};

const FAB: React.FC<FABProps> = ({ icon, color, onPress }) => {
  // Determina a cor do botão com base no tipo de cor passado
  const backgroundColor = color === 'primary'
    ? theme.colors.primary
    : color === 'secondary'
    ? theme.colors.secondary
    : theme.colors.warning;

  return (
    <TouchableOpacity
      style={[styles.fab, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <FontAwesome6 name={icon} size={24} color={theme.colors.background} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
  },
});

export default FAB;
