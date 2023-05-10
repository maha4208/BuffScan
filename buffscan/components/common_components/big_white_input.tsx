import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput, View, TouchableOpacity, Alert} from 'react-native';

interface BWIProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
}

const BigWhiteInput = ({ placeholder, onChangeText, value }: BWIProps) => {
    
    const handleChangeText = (inputText: string) => {
        onChangeText(inputText);
    };

    return (
        <TextInput
          style={styles.bwi}
          onChangeText={handleChangeText}
          value={value}
          autoCapitalize='none'
          placeholder={placeholder}
        />
    );
};

const styles=StyleSheet.create({
    bwi: {
        backgroundColor:'#D9D9D9',
        width: '85%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginBottom:10
    }
})

export default BigWhiteInput;