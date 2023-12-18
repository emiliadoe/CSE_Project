import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import TabNavigator from './src/navigation/TabNavigator';


const AppNavigator = () => (
   <NavigationContainer>
     {/*  <StackNavigator/>   */}
      <TabNavigator/>  
  </NavigationContainer> 
     
);

export default AppNavigator;
