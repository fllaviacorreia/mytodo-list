import { StyleSheet } from "react-native";
import theme from "theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        width: '100%',
    },
    checkbox: {
        borderRadius: 5,
        marginLeft: 10,
        width: 17,
        height: 17,
        padding: 2,
        marginRight: 8,
    },
    label: {
        fontSize: 16,
    },
});

export default styles