/* eslint-disable prettier/prettier */
import React from 'react';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    </RootStack.Navigator>
)

export default RootStackScreen;