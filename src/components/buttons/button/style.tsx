// Importa o tema personalizado e a função StyleSheet do React Native
import theme from "theme";
import { StyleSheet } from "react-native";

// Criação de um objeto de estilos usando StyleSheet.create
export const styles = StyleSheet.create({
    
    // Estilo para o container do botão, define o layout e o espaçamento
    container: {
      justifyContent: 'flex-start', // Alinhamento dos itens no início
      alignItems: 'center', // Alinha os itens no centro horizontalmente
      width: '100%', // O container ocupa toda a largura disponível
      padding: 12, // Espaçamento interno do container
      marginBottom: 8, // Espaçamento inferior para separar do próximo componente
    },

    // Estilo para o botão primário
    primary: {
      width: '100%', // O botão ocupa toda a largura disponível
      height: 50, // Altura fixa do botão
      borderRadius: 25, // Borda arredondada para criar uma aparência circular
      paddingHorizontal: 21, // Espaçamento interno nas laterais do botão
      backgroundColor: theme.colors.primary, // Cor de fundo retirada do tema
      justifyContent: 'center', // Alinhamento do conteúdo no centro vertical
      alignItems: 'center', // Alinhamento do conteúdo no centro horizontal
    },

    // Estilo para o botão secundário
    secondary: {
      width: '100%',
      height: 50,
      borderRadius: 25,
      paddingHorizontal: 21,
      backgroundColor: theme.colors.secondary, // Cor de fundo para o estilo secundário
      justifyContent: 'center',
      alignItems: 'center',
    },

    // Estilo para o botão de alerta (warning)
    warning: {
      width: '100%',
      height: 50,
      borderRadius: 25,
      paddingHorizontal: 21,
      backgroundColor: theme.colors.warning, // Cor de fundo para o botão de alerta
      justifyContent: 'center',
      alignItems: 'center',
    },

    // Estilo para o botão transparente
    transparent: {
      width: '100%',
      height: 50,
      borderRadius: 25,
      paddingHorizontal: 21,
      backgroundColor: 'transparent', // Fundo transparente
      justifyContent: 'center',
      alignItems: 'center',
    },

    // Estilo padrão para o texto do botão
    buttonText: {
      fontWeight: "800", // Negrito
      color: 'white', // Cor do texto branco
      fontSize: 18, // Tamanho do texto
    },

    // Estilo específico para o texto do botão transparente
    transparentText: {
      color: theme.colors.secondary, // Cor do texto para o botão transparente, vinda do tema
    }
});
