import React, {useState} from 'react';
import {StyleSheet,Text, View, TouchableOpacity, Alert} from 'react-native';

interface NavButtonProps {
    title:string,
    color:string,
    action: () => void
}

const NavButton = ({title,color,action}:NavButtonProps) => {
    return (
        <TouchableOpacity style={styles.nav_button} onPress={action}>
            <Text numberOfLines={2} style={[styles.button_text, {color:color}]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    nav_button: {
        backgroundColor: '#5C5A5A',
        width:'90%',
        padding:2,
        aspectRatio:1,
        margin:'5%',
        marginTop:'5%',
        alignItems:'center',
        justifyContent:'center'
    },
    button_text: {
        fontSize: 15,
        fontWeight:'bold',
        textAlign:'center'

    }
})

export default NavButton