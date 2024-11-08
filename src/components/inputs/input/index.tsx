import { Text, TextInput, TextInputProps, SafeAreaView, View } from "react-native"
import { styles } from "./style";
import React from "react";

type InputProps = TextInputProps & {
    error: string | undefined;
}

const Input = ({ error, ...rest }: InputProps) => {
    const invalid = !!error;
    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, invalid && styles.error]}
                {...rest}
            />

            {invalid && <Text style={styles.error}>{error}</Text> }
        </View>
    );
}

export default Input;