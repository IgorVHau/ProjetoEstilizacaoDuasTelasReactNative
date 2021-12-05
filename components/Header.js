import React from "react";
import {AppRegistry,
        ImageBackground, 
        Text, 
        View, 
        StyleSheet, 
        TouchableOpacity, 
        Image
    } from "react-native";

const linguonda='../assets/linguonda.png';

export default function HeaderTwo() {
    
    return(
        <View>
            <View style={styles.border}>
                <ImageBackground
                source={require(linguonda)}
                style={styles.img}
                >
                    <TouchableOpacity>
                    <Text style={styles.title}>FOOD LOVERS</Text>
                    </TouchableOpacity>
                </ImageBackground>
                
            </View>
            <TouchableOpacity style={styles.imageButton}>
                    <Image
                        source={{uri: 'https://4.bp.blogspot.com/-HWOwZ-bBtkY/V1IHiGxmYUI/AAAAAAAAEAU/MdJleVgEEI47gqwuk3D6AUN5Zp2khXemgCLcB/s1600/pirates_of_the_caribbean_render_by_sachso74-d7mgk7w1.png'}}
                        style={styles.profileImage}
                        resizeMode='cover'
                    />
                </TouchableOpacity>
            
        </View>
        
    )
    
}

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
        textDecorationLine: "line-through",
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
})

AppRegistry.registerComponent('styles', () => styles)