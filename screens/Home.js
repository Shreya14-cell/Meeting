import React from 'react'
import { View,StyleSheet,SafeAreaView,StatusBar,Image } from "react-native"
import Header from "../components/Header"
{/*import SearchBar from '../components/SearchBar'*/}
import MenuButtons from '../components/MenuButtons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function Home( { navigation } ) {
    return(
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%'}}>
                <Header />
                {/*<SearchBar />*/}
                <MenuButtons navigation = {navigation}/>
            </SafeAreaView>
            <View style={styles.container1}></View>
        </View>
    ) 
}

export default Home 

const styles = StyleSheet.create({
  
    container: {
        height: hp('30%'),
        backgroundColor: "orange",
        borderBottomRightRadius: hp('30%')
       
    },
})