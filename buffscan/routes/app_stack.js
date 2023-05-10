import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/homescreen/home';
import LogIn from '../components/login_screen/login';
import CreateAccount from '../components/create_account/create_account';
import ScanNow from '../components/scan_now/scan_now';
import MyCodes from '../components/my_codes/my_codes';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Create Account" 
        component={CreateAccount} 
        options={{
            title: 'Create Account',
            headerStyle: {
              height: 40,
            },
            headerTitleStyle: {
              fontSize: 15,
            },
            contentOptions: {
              safeAreaInsets: { bottom: 0 }, // set the safe area insets to zero for the bottom
            },
          }}
        />
      <Stack.Screen 
        name="Login" 
        component={LogIn} 
        options={{
            title: 'Log In',
            headerStyle: {
              height: 40,
            },
            headerTitleStyle: {
              fontSize: 15,
            },
            contentOptions: {
              safeAreaInsets: { bottom: 0 }, // set the safe area insets to zero for the bottom
            },
          }}
        />
      <Stack.Screen 
        name="My Codes" 
        component={MyCodes} 
        options={{ 
          headerShown: false,
          animationEnabled: false 
        }}
      />
      <Stack.Screen 
        name="Scan Now" 
        component={ScanNow} 
        options={{ 
          headerShown: false,
          animationEnabled: false 
        }}
      />
    </Stack.Navigator>
  );
}