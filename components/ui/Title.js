import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.Title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
