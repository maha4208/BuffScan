import React from 'react';
import {StyleSheet,Text, View, TouchableOpacity, Alert, SafeAreaView} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type SeparatorProps = {
    height?: number;
};
  
const Separator: React.FC<SeparatorProps> = ({ height = 1 }) => {
    return <View style={[styles.separator, { height: height }]} />;
};

type HomeProps = {
    navigation: StackNavigationProp<any,any>
}

function HomeScreen(props:HomeProps):JSX.Element {

    const {navigation} = props

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>BuffScan</Text>
            </View> 
            <View style={styles.buttonView}>
            <Separator height={350} />
                <TouchableOpacity style={styles.homescreenButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.homescreenButton} onPress={() => navigation.navigate('Create Account')}>
                    <Text style={styles.buttonText}>
                        Create Account
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>   
   )
}

const styles = StyleSheet.create({
    header: {
        padding:10,
        height:100,
        backgroundColor:'#958B59',
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        fontSize: 60,
        fontWeight:'bold'
    },
    buttonView: {
        flex: 1,
        backgroundColor:'#5C5A5A',
        alignItems:'center',
        justifyContent:'center'
    },
    container: {
        flex:1
    },
    homescreenButton: {
        backgroundColor: '#D9D9D9',
        height:50,
        width:'85%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    },
    buttonText: {
        fontSize:30,
        fontWeight:'bold'
    },
    separator: {
        backgroundColor: 'rgba(255, 0, 0, 0)'
    },
})

export default HomeScreen;