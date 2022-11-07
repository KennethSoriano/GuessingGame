import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderwidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 450 ? 12 : 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontsize: 36,
        fontFamily: 'open-sans-bold'
    }
})