import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from './screen/ListingScreen'
import DetailScreen from './screen/DetailScreen'

const MainStack = createStackNavigator()

const AppNavigation = (props) => {

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={'ListingScreen'}>
        <MainStack.Screen name={'ListingScreen'} component={ListingScreen}/>
        <MainStack.Screen name={'DetailScreen'} component={DetailScreen}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
