import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AddButton = () => {
    return(
        <View>
            <View style={stylo.buttonAlign}>
                <TouchableOpacity style={stylo.button}>
                    <Text style={stylo.buttonText}>Adicionar experiência</Text>
                </TouchableOpacity>
            </View>
            <View style={stylo.buttonAlign}>
                <TouchableOpacity style={stylo.button}>
                    <Text style={stylo.buttonText}>Deletar experiência</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const stylo = StyleSheet.create({
    buttonAlign: {
        margin:3,
    },

    button: {
        backgroundColor: 'gray',
        padding: 5,
        borderRadius: 10,
        marginLeft: 100,
        marginRight: 100,
    },
    buttonText: {
        color: 'white',
        fontStyle: 'italic',
        textAlign: 'center',
    }
})

export default AddButton;