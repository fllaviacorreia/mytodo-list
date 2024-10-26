import CheckBox, { CheckboxProps } from "expo-checkbox"
import { Text, View } from "react-native"
import styles from "./style"
import theme from "theme"

type CheckBoxProps = CheckboxProps & {
    title: string
  }
const Checkbox = ({title, ...rest}: CheckBoxProps) => {
    return (
        <View style={styles.container}>
        <CheckBox
          style={styles.checkbox}
          {...rest}
          color={theme.colors.primary}
        />
        <Text style={styles.label}>{title}</Text>
      </View>
    )
}

export default Checkbox