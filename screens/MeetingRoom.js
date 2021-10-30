import React, { useState,useEffect } from 'react'
import { View,Text, StyleSheet,TextInput } from "react-native"
import StartMeeting from '../components/StartMeeting'
import { io } from "socket.io-client"

function MeetingRoom(){

    const [name, setName] = useState()
    const [roomId,setRoomId] = useState()

    useEffect(()=>{
        const API_URL="http://c0b5-2405-201-26-a037-f86d-ba04-119-8489.ngrok.io"
        socket = io("http://c0b5-2405-201-26-a037-f86d-ba04-119-8489.ngrok.io");
        console.log("hello")
        socket.on('connection',()=>console.log("connected"))
    }, [])

    return(
        <View style={styles.container}>
        {/*START MEETING SECTION*/}
            <StartMeeting 
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
            />
        </View>
    )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1,
    }
})