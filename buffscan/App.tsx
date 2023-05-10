import React from 'react';
import {SafeAreaView,ScrollView,StatusBar, StyleSheet,Text,useColorScheme,View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler'

import HomeScreen from './components/homescreen/home'
import LogIn from './components/login_screen/login'
import CreateAccount from './components/create_account/create_account';
import MyCodes from './components/my_codes/my_codes';
import ScanNow from './components/scan_now/scan_now';
import MyStack from './routes/app_stack';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
    
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex:1
  }
});

export default App;
