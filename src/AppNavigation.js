import React from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from './screen/ListingScreen'
import DetailScreen from './screen/DetailScreen'
import colors from './utils/colors';

const MainStack = createStackNavigator()

const AppNavigation = (props) => {

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={'ListingScreen'}>
        <MainStack.Screen 
          name={'ListingScreen'} 
          component={ListingScreen}
          options={{
            title: 'Contacts',
            headerTitleAlign: 'center'
          }}/>
        <MainStack.Screen 
          name={'DetailScreen'} 
          component={DetailScreen}
          options={{
            headerTitle: ''
          }}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
