// Importação dos componentes e tipos necessários do React Native e do arquivo de estilos
import { Pressable, Text, View, PressableProps } from "react-native";
import { styles } from "./style";

// Definição dos estilos possíveis para o botão como tipos (primary, secondary, transparent e warning)
type StyleKeys = 'primary' | 'secondary' | 'transparent' | 'warning';

// Definição das propriedades do componente Button, estendendo as propriedades padrão de Pressable
// Adicionando 'title' (texto do botão) e 'className' (estilo do botão) como propriedades personalizadas
type ButtonProps = PressableProps & {
    title: string;
    className: StyleKeys;
}

// Declaração do componente Button, que recebe as propriedades definidas em ButtonProps
const Button = ({ title, className, ...props }: ButtonProps) => {
    
    // Condicional para definir o estilo do texto do botão:
    // Se o estilo ('className') for 'transparent', aplica estilos específicos para texto transparente
    // Caso contrário, usa o estilo padrão do texto do botão
    const textStyle = className === 'transparent' ? [styles.buttonText, styles.transparentText] : styles.buttonText;

    return (
        // Container do botão, usando estilo geral definido no arquivo de estilos
        <View style={styles.container}>
            
            {/* Componente Pressable para tornar o botão interativo.
                Aplica o estilo correspondente ao 'className' e repassa quaisquer propriedades adicionais */}
            <Pressable style={styles[className]} {...props}>
                
                {/* Componente Text para exibir o título do botão, com o estilo apropriado */}
                <Text style={textStyle}>{title}</Text>
            </Pressable>
        </View>
    )
}

// Exportação do componente Button para ser usado em outras partes do aplicativo
export default Button;
