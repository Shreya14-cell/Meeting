import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
    {
        id: 1,
        name: "video-camera",
        title: "Start A Meeting"
    },
    {
        id: 2,
        name: "plus",
        title: "Join A Meeting"
    },
    {
        id: 3,
        name: "calendar",
        title: "Your Schedule"
    },
]

function MenuButtons({navigation}){


    const openMeeting = () => {
        navigation.navigate("Room")
    }
    return(
        <View style={styles.container}>
            { items.map((item,index) => 
            <View 
                key={index}
                style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={()=>openMeeting()}
                    style={styles.button}
                >
                    <FontAwesome name = {item.name} size={25} color={"#ffffff"} />
                </TouchableOpacity>
                <Text style={styles.menuText}>{item.title}</Text>
            </View>
            )}
        </View>
    )
}

export default MenuButtons

const styles = StyleSheet.create({
    container:{
        marginTop: 180,
        paddingBottom: 10,
        borderBottomColor: "#ffffff",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 230
    },
    buttonContainer:{
        alignItems: "center"
    },
    button:{
        width: 98,
        height: 50,
        backgroundColor: "#644117",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    menuText:{
        color: "#000000",
        fontSize: 15,
        fontWeight: "600",
        paddingTop: 10
    },
})