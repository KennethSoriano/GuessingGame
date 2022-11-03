import { View, Text } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderwidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: center,
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontsize: 36,
        fontWeight: 'bold'
    }
})