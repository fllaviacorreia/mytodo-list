import { StyleSheet } from "react-native";
import theme from "theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 12,
    marginBottom: 8,
  },

  input: {
    width: '100%',
    height: 50,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 25,
    fontSize: 16,
    backgroundColor: 'white',
  },
  error: {
    color: theme.colors.warning,
    fontSize: 16,
    marginBottom: 8,
    width: '100%',
    paddingHorizontal: 12,
  },
});