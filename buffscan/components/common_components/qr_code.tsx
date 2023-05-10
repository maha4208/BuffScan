import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput, View, TouchableOpacity, Alert, Image, Text} from 'react-native';

interface QRCodeProps {
    source: string,
    name: string,
    id: string,
    codeFunc: () => void
}

const QRCode = (props:QRCodeProps) => {
    
    const id = props.id
    const {codeFunc} = props

    const handleDelete = async() => {
        try {
            const response = await fetch('http://localhost:3003/delete_qr', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    _id:id
                })
            })
            const result = await response.json()
            if(!response.ok){
                console.log("response failed")
            }
            else{
                codeFunc
            }
        }
        catch(e) {
            console.error(e)
        }
    }

    const handleNameChange = async(id:string) => {
        Alert.prompt(
            'Enter New Name Here',
            '',
            async (name) => {
                try {
                    const response = await fetch('http://localhost:3003/update_qr_name', {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify({
                            name:name,
                            _id:id
                        })
                    })
                    const result = await response.json()
                    if(!response.ok){
                        console.log("name not changed")
                    }
                    else{
                        codeFunc
                    }
                }
                catch(e) {
                    console.error(e)
                }
            }
        )
    }

    return (
        <View style={styles.qrview}>
            <Text style={styles.title}>{props.name}</Text>
            <Image 
            style={{ width: 200, height: 200 }}
            source={{uri: props.source}} 
            />
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.tinyButton} onPress={() => handleNameChange(id)}>
                    <Text style={styles.buttonText}>
                        Rename
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tinyButton}>
                    <Text style={styles.buttonText} onPress={handleDelete}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    qrview: {
        flexDirection:'column',
        height: 250,
        width:205,
        backgroundColor:'white',
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'black',
        textDecorationLine: 'underline'
    },
    buttonView: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    tinyButton: {
        backgroundColor: 'black',
        width:'40%',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:3,
        marginLeft:3
    },
    buttonText: {
        fontSize: 10,
        fontWeight: 'normal',
        color:'white'
    }
})

export default QRCode