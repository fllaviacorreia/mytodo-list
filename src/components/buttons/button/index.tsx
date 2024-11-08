import { Pressable, Text, View, PressableProps } from "react-native";
import { styles } from "./style";

type StyleKeys = 'primary' | 'secondary' | 'transparent' | 'warning';


type ButtonProps = PressableProps & {
    title: string;
    className: StyleKeys;
}

const Button = ({ title, className, ...props }: ButtonProps) => {
    const textStyle = className === 'transparent' ? [styles.buttonText, styles.transparentText] : styles.buttonText;

    return (
        <View style={styles.container}>
            <Pressable style={styles[className]} {...props}>
                <Text style={textStyle}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default Button;