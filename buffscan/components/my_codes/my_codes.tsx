import React, {useState, useEffect} from 'react';
import { StackNavigationProp, } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import {StyleSheet,Text, View, ScrollView, TouchableOpacity, Alert, Modal} from 'react-native';
import NonHomeHeader from '../common_components/non_home_header';
import BigBlackButton from '../common_components/big_black_button';
import BigWhiteInput from '../common_components/big_white_input';
import NavColumn from '../common_components/nav_column';
import QRCode from '../common_components/qr_code';

type SeparatorProps = {
    height?: number;
};
  
const Separator: React.FC<SeparatorProps> = ({ height = 1 }) => {
    return <View style={[styles.separator, { height: height }]} />;
};

type CodeProps = {
    navigation: StackNavigationProp<any,any>,
    route: any
}

function MyCodes({navigation, route}:CodeProps):JSX.Element {
   
    const userId = route.params.name
    const [codes, setCodes] = useState([])
    const [ids, setIds] = useState([])
    const [names, setNames] = useState([])

    const [urlVisible, setUrlVisible] = useState(false)
    const [contactVisible,setContactVisible] = useState(false)

    const [urlName, setUrlName] = useState('')
    const [urlLink, setUrlLink] = useState('')

    const handleUrlNameChange = (name:string) => {
        setUrlName(name)
    }

    const handleUrlLinkChange = (link:string) => {
        setUrlLink(link)
    }

    const [contactName, setContactName] = useState('')
    const [contactFirstName, setContactFirstName] = useState('')
    const [contactLastName, setContactLastName] = useState('')
    const [contactMiddleName, setContactMiddleName] = useState('')
    const [contactOrganization, setContactOrganization] = useState('')
    const [contactWork, setContactWork] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [contactHome, setContactHome] = useState('')
    const [contactCell, setContactCell] = useState('')

    const handleContactNameChange = (name:string) => {
        setContactName(name)
    }

    const handleContactFirstNameChange = (name:string) => {
        setContactFirstName(name)
    }

    const handleContactLastNameChange = (name:string) => {
        setContactLastName(name)
    }

    const handleContactMiddleNameChange = (name:string) => {
        setContactMiddleName(name)
    }

    const handleContactOrganizationChange = (org:string) => {
        setContactOrganization(org)
    }

    const handleContactWorkChange = (num:string) => {
        setContactWork(num)
    }

    const handleContactEmailChange = (email:string) => {
        setContactEmail(email)
    }

    const handleContactHomeChange = (num:string) => {
        setContactHome(num)
    }

    const handleContactCellChange = (num:string) => {
        setContactCell(num)
    }

    const createContact = async() => {
        try{
            const response = await fetch('http://localhost:3003/create_contact_qr_code', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name: contactName,
                    contact: {
                        firstName: contactFirstName,
                        lastName: contactLastName,
                        middleName: contactMiddleName,
                        organization: contactOrganization,
                        workPhone: contactWork,
                        email: contactEmail,
                        homePhone: contactHome,
                        cellPhone: contactCell
                    },
                    user_id: userId
                })
            })
            const result = await response.json()
            if(!response.ok){
                console.log("contact qr failed")
            }
            else{
                stateRender
                setContactVisible(false)
            }
        }
        catch(e){
            console.error(e)
        }
    }

    const createLink = async() => {
        try {
            const response = await fetch('http://localhost:3003/create_url_qr_code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: urlLink,
                    name: urlName,
                    user_id:userId
                })
            })
            const result = await response.json()
            if(!response.ok){
                console.log("code not created")
            }
            else {
                stateRender
                setUrlVisible(false)
            }
        }
        catch(e) {
            console.error(e)
        }
    }

    const stateRender = () => {
        setCodes([])
    }

    const createQR = async() => {
        Alert.alert(
            'Select the type of QR to Create',
            '',
            [
                {
                    text: 'URL QR',
                    onPress: () => {setUrlVisible(true)},
                },
                {
                    text: 'Contact QR',
                    onPress: () => {setContactVisible(true)},
                },
                {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel',
                }
            ]
        )
    }

    const getCodes = async() => {
        try {
            const response = await fetch('http://localhost:3003/get_qr_codes', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    user_id:userId
                })
            })
            const result = await response.json()
            if(!response.ok){
                console.log("request failed")
            }
            else{
                const resultArray = result.result
                setCodes(resultArray.map((result:any) => result.qrCode))
                setIds(resultArray.map((result:any) => result._id))
                setNames(resultArray.map((result:any) => result.name))
            }
        }
        catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getCodes();
        console.log(codes)
    }, [codes]);

    return (
        <View style={styles.container}>
            <Modal visible={urlVisible} animationType='none'>
                <View style={styles.modal}>
                    <BigWhiteInput placeholder="name" onChangeText={handleUrlNameChange} value={urlName} />
                    <BigWhiteInput placeholder="link" onChangeText={handleUrlLinkChange} value={urlLink} />
                    <BigBlackButton title="Create URL QR" action={createLink} />
                </View>
            </Modal>
            <Modal visible={contactVisible} animationType='none'>
                <View style={styles.modal}>
                    <BigWhiteInput placeholder="QR NAME" onChangeText={handleContactNameChange} value={contactName} />
                    <BigWhiteInput placeholder="first name" onChangeText={handleContactFirstNameChange} value={contactFirstName} />
                    <BigWhiteInput placeholder="last name" onChangeText={handleContactLastNameChange} value={contactLastName} />
                    <BigWhiteInput placeholder="middle name" onChangeText={handleContactMiddleNameChange} value={contactMiddleName} />
                    <BigWhiteInput placeholder="organization" onChangeText={handleContactOrganizationChange} value={contactOrganization} />
                    <BigWhiteInput placeholder="work phone" onChangeText={handleContactWorkChange} value={contactWork} />
                    <BigWhiteInput placeholder="email" onChangeText={handleContactEmailChange} value={contactEmail} />
                    <BigWhiteInput placeholder="home phone" onChangeText={handleContactHomeChange} value={contactHome} />
                    <BigWhiteInput placeholder="cell phone" onChangeText={handleContactCellChange} value={contactCell} />
                    <BigBlackButton title="Create Contact QR" action={createContact} />
                </View>
            </Modal>
            <NonHomeHeader />
            <View style={styles.container2}>
                <NavColumn screen={1} navigation={navigation} userId={userId}/>
                <View style={styles.container3}>
                    <Separator height={15} />
                    <BigBlackButton title="Create New Code" action={createQR}/>
                    <Separator height={15} />
                    <ScrollView contentContainerStyle={{flexGrow: 1,alignItems: 'center',flexDirection: 'column'}}>
                    {codes.map((item, index) => {
                        return (
                            <QRCode key={index} source={item} name={names[index]} id={ids[index]} codeFunc={stateRender} />
                        );
                    })}
                    </ScrollView>
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
    modal: {
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    }
})

export default MyCodes;