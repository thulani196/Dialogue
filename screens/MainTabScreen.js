import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import MessagesScreen from './MessagesScreen';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#7c0da8',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="MessagesScreen"
      component={MessagesScreen}
      options={{
        tabBarLabel: 'Inbox',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon name="chatbox-ellipses-outline" color={color} size={26} />
        ),
      }}
    />

    
    
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (

  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7c0da8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>

    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#7c0da8"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    
  </HomeStack.Navigator>
);
