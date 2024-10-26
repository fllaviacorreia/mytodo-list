import  theme from "theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      padding: 12,
      marginBottom: 8,
    },

    primary: {
      width: '100%',
      height: 50,
      borderRadius: 25,
      paddingHorizontal: 21,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },

    secondary: {
      width: '100%',
      height: 50,
      borderRadius: 25,
      paddingHorizontal: 21,
      backgroundColor: theme.colors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
    },

    warning: {
      width: '100%',
      height: 50,
      borderRadius: 25,
      paddingHorizontal: 21,
      backgroundColor: theme.colors.warning,
      justifyContent: 'center',
      alignItems: 'center',
    },

    transparent: {
      width: '100%',
      height: 50,
      borderRadius: 25,
      paddingHorizontal: 21,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },

    buttonText: {
      fontWeight: "800",
      color: 'white',
      fontSize: 18,
    },

    transparentText: {
      color: theme.colors.secondary, // Cor do texto para o botão transparente
    }
});
