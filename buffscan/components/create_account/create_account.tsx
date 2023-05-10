import React, {useState} from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {StyleSheet,Text, View, TouchableOpacity, Alert} from 'react-native';
import NonHomeHeader from '../common_components/non_home_header';
import BigBlackButton from '../common_components/big_black_button';
import BigWhiteInput from '../common_components/big_white_input';

type SeparatorProps = {
    height?: number;
};
  
const Separator: React.FC<SeparatorProps> = ({ height = 1 }) => {
    return <View style={[styles.separator, { height: height }]} />;
};

type CreateProps = {
    navigation: StackNavigationProp<any,any>
}

function CreateAccount(props:CreateProps):JSX.Element {
   
    const {navigation} = props

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleEmailChange = (text: string) => {
      setEmail(text);
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const handleConfirmPasswordChange = (text: string) => {
        setConfirmPassword(text);
    };

    const handleCreateAccount = async () => {
        if(password === confirmPassword){
            try {
                const response = await fetch('http://localhost:3003/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        name: email,
                        pass:password
                    })
                })
                const result = await response.json()
                if(response.ok){
                    navigation.navigate('My Codes', {name: result.result._id})
                }
                else{
                    console.log("response failed")
                }
            }
            catch(e) {
                console.error(e)
            }
        }
        else{
            Alert.alert('passwords do not match')
        }
    }

    return (
        <View style={styles.container}>
            <NonHomeHeader />
            <View style={styles.loginView}>
                <Separator height={315} />
                <BigWhiteInput placeholder="email:" onChangeText={handleEmailChange} value={email} />
                <BigWhiteInput placeholder="password:" onChangeText={handlePasswordChange} value={password} />
                <BigWhiteInput placeholder="confirm password:" onChangeText={handleConfirmPasswordChange} value={confirmPassword} />
                <BigBlackButton title='Create Account' action={handleCreateAccount}/>
            </View>
        </View>   
   )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    separator: {
        backgroundColor: 'rgba(255, 0, 0, 0)'
    },
    loginView: {
        backgroundColor:'#5C5A5A',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CreateAccount;