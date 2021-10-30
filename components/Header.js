import React from 'react'
import { View,Text,StyleSheet } from "react-native"
import Entypo from "react-native-vector-icons/Entypo";

function Header() {
    return(
        <View style={styles.container}>
            <Entypo name="list" size={30} color="#f0fff3" />  
            <Text style={styles.heading}>HELLO THERE!</Text>
            {/*<Entypo name="back" size={30} color="#f0fff3" />*/} 
        </View>
    ) 
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 2,
        paddingHorizontal: 20
    },
    heading:{
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "700",
        marginTop: 100,
        fontStyle: "normal",
        paddingHorizontal: 65,
        paddingVertical: 5,
        paddingLeft: 70
    },
})