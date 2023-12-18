import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../pages/MapScreen';
 
const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
  <Stack.Screen name="Home" component={MapScreen} />
  </Stack.Navigator>
);


const MapStackNavigator = () => {
  return (
    <MapStack.Navigator screenOptions={screenOptionStyle}>
      <MapStack.Screen name="Map" component={HomeScreen} />
    </MapStack.Navigator>
  );
}

export default {StackNavigator };
