import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 0,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    footer: {
        margin: 0,
        position: "absolute",
        alignItems: "center",
        width: "100%",
        bottom: 0,
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
    }
});

export default styles;