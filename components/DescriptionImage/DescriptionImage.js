import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../DescriptionImage/styles';


export default function DescriptionImage() {

    const lasanha = "../../assets/img/lasanha.jpg";

    return (
        <>
        <View>
            <Image 
            source={require(lasanha)}
            style={styles.imageFormat}/>
        </View>
        <View style={styles.borderRestaurant}>
            <TouchableOpacity>    
                <Text 
                    style={styles.restaurantTitle}>
                    Restaurante Foreguin
                </Text>
            </TouchableOpacity>
            <Text style={styles.restaurantDescription}>Thai - Comfort Food - $$ - 🚗 - 4 ⭐ (2913 +)</Text>
        </View>
        
        </>
    )
}