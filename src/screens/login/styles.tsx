import { StyleSheet } from "react-native";
import theme from "theme";

export const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.background,
            width: '100%',
            paddingHorizontal: 15
        },
        form:{
            width: "100%",
            height: "60%",
            justifyContent: 'flex-end',
        },
        title:{
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.colors.primary
        },
        linkContainer: {
            height: "20%",
            width: "100%",
            justifyContent: 'flex-end',
            alignItems: 'center'

        },
        link: {
            color: theme.colors.secondary,
            fontSize: 16,
            fontWeight: 'bold',
        }

    }
)