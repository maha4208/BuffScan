import React, {useState} from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {StyleSheet,Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import NonHomeHeader from '../common_components/non_home_header';
import BigBlackButton from '../common_components/big_black_button';
import BigWhiteInput from '../common_components/big_white_input';
import NavColumn from '../common_components/nav_column';

type SeparatorProps = {
    height?: number;
};
  
const Separator: React.FC<SeparatorProps> = ({ height = 1 }) => {
    return <View style={[styles.separator, { height: height }]} />;
};

type ScanProp = {
    navigation: StackNavigationProp<any,any>,
    route: any
}

function ScanNow({navigation, route}:ScanProp):JSX.Element {
   const userId = route.params.name
    return (
        <View style={styles.container}>
            <NonHomeHeader />
            <View style={styles.container2}>
                <NavColumn screen={3} navigation={navigation} userId={userId}/>
                <View style={styles.container3}>
                    {/* Here is where we implement the camera library to scan codes */}
                </View>
            </View>
        </View>  
   )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    container2: {
        flex:1,
        flexDirection:'row'
    },
    container3: {
        width:'80%',
        backgroundColor: '#5C5A5A',
        alignItems:'center'
    },
    separator: {
        backgroundColor: 'rgba(255, 0, 0, 0)'
    },
    
})

export default ScanNow;