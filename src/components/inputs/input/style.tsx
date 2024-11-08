import { StyleSheet } from "react-native";
import theme from "theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 12,
    marginBottom: 5,
  },

  input: {
    width: '100%',
    height: 45,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 25,
    fontSize: 16,
    backgroundColor: 'white',
  },
  error: {
    color: theme.colors.warning,
    fontSize: 16,
    marginBottom: 2,
    width: '100%',
    paddingHorizontal: 12,
  },
});