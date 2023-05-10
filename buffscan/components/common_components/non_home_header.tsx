import React from 'react';
import {StyleSheet,Text, View, TouchableOpacity, Alert} from 'react-native';

function NonHomeHeader():JSX.Element {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>BuffScan</Text>
        </View> 
    )
}

const styles=StyleSheet.create({
    header: {
        padding:5,
        height:60,
        backgroundColor:'#958B59',
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        fontSize: 40,
        fontWeight:'bold'
    },
})

export default NonHomeHeader;