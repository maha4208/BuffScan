import React, {useState} from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {StyleSheet,Text, View, TouchableOpacity, Alert} from 'react-native';
import NavButton from './nav_buttons';

interface NavButtonProps {
    screen:number,
    navigation: StackNavigationProp<any,any>,
    userId?: string
}

const NavColumn = ({screen, navigation, userId}:NavButtonProps) => {
    
    return (
        <View style={styles.nav_container}>
            <NavButton title="My Codes" color={screen === 1 ? '#958B59' : '#D9D9D9'} action={() => navigation.navigate('My Codes', {name: userId})}/>
            <NavButton title="Log Out" color={screen === 2 ? '#958B59' : '#D9D9D9'} action={() => navigation.navigate('Home')}/>
            <NavButton title="Scan Now" color={screen === 3 ? '#958B59' : '#D9D9D9'} action={() => navigation.navigate('Scan Now', {name: userId})}/>
        </View>
    )
}

const styles = StyleSheet.create({
    nav_container: {
        flex:1,
        backgroundColor:'#D9D9D9'
    }
})

export default NavColumn