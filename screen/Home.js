import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../components/Header";

export default function Home(){
    return(
        <SafeAreaView style={{ 
            flex: 1
            }}
        >
            <Header />
        </SafeAreaView>
    );
}