import React from "react";
import {ImageBackground, 
        Text, 
        View, 
        TouchableOpacity, 
        Image
    } from "react-native";
import styles from "./styles"

const linguonda = "../../assets/img/linguonda.png"

const HeaderTabs = () => {
    return(
        <View>
            <View style={styles.border}>
                <ImageBackground
                source={require(linguonda)}
                style={styles.img}
                >
                    <TouchableOpacity>
                    <Text 
                        style={styles.title
                        }>
                        FOOD LOVER
                    </Text>
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
    );
}

export default HeaderTabs;