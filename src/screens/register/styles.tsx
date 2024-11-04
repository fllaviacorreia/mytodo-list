import { StyleSheet } from "react-native";
import theme from "theme";

export const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
            width: '100%',
            paddingHorizontal: 15
        },
        form:{
            width: "100%",
            height: "80%",
            justifyContent: 'flex-end',
        },
        title:{
            fontSize: 22,
            fontWeight: 'bold',
            width: "100%",
            textAlign: 'center',
            marginBottom: 30,
            color: theme.colors.primary
        },
    }
)