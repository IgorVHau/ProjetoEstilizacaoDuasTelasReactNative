import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontStyle: "normal",
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 80,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        textShadowOffset: {
            height: 3,
            width: 3,
        },
        textShadowColor: "black",
        textShadowRadius: 15
    },

    border: {
        height: 75,
        // borderColor: "purple",
        // borderStyle: "solid",
        // borderWidth: 5,
    },

    img: {
        flex:2,
        resizeMode:"cover",
    },

    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 45,
    },

    imageButton: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        right: "8%",
        left: "-5%",
        marginTop: "-14%"
    }
});

export default styles;