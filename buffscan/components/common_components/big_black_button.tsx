import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,Text, View, TouchableOpacity, Alert} from 'react-native';

type BBCProps = {
    title: string;
    action?: () => void;
};

const BigBlackButton = (props: BBCProps) => {
    return (
      <TouchableOpacity style={styles.bbc} onPress={props.action}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    bbc:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        width: '85%',
        height:50
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    }
})

export default BigBlackButton;