import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    imageFormat: {
        marginTop: 20,
        width: "100%",
        height: 200,
        resizeMode: 'contain',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 3,
    },

    borderRestaurant: {
        width: "100%",
        height: 80,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
    },

    restaurantTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 5,
        marginHorizontal: 15,
    },

    restaurantDescription: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'gray',
        marginLeft: 10,
    }
});

export default styles;

