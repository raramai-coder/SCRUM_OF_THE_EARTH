import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Dimensions } from 'react-native';

const metronomePress = ()=>console.log("MetronomePressed")  //function for what happens when the metronome is pressed. TODO: put pause/play functionality here

function MetronomeScreen(props) {
    return (
        <SafeAreaView>
            <TouchableHighlight onPress={metronomePress}>
            <Image source={require("../assets/mock-metronome.jpg")} resizeMode='contain' style = {styles.metronomeImage}></Image>
            </TouchableHighlight>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    metronomeImage:{
        width:'100%',
        height:'100%',
    }
})

export default MetronomeScreen;