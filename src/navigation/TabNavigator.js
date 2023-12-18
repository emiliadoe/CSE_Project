import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Mockpage from '../pages/MockPage'
import MapScreen from '../pages/MapScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
   /*      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }} 
      tabBarIcon: ({ focused }) => (
          <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />
        ),
        tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>
      }}
      />
      */
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'Explore') {
            iconName = 'search';
            color = focused ? 'rgb( 128, 85, 200)' : '#a9a9a9';
          } else if (route.name === 'Social') {
            iconName = 'search';
            color = focused ? 'rgb( 128, 85, 200)' : '#a9a9a9';          }  
          else if (route.name === 'Feed') {
            iconName = 'home';
            color = focused ? 'rgb( 128, 85, 200)' : '#a9a9a9';          }  
          else if (route.name === 'Notifications') {
            iconName = 'search';
            color = focused ? 'rgb( 128, 85, 200)' : '#a9a9a9';          }  
          else if (route.name === 'Me') {
            iconName = "user"
            color = focused ? 'rgb( 128, 85, 200)' : '#a9a9a9';          }  

          return <Icon iconName={iconName} size={20} color={color} />;
        },
      })}
      >
        <Tab.Screen
        name="Explore"
        component={MapScreen}
      />
       <Tab.Screen
        name="Social"
        component={Mockpage}
      />
      <Tab.Screen
        name="Feed"
        component={Mockpage}
      />
      <Tab.Screen
        name="Notifications"
        component={Mockpage}
      />
          <Tab.Screen
        name="Me"
        component={Mockpage}
/*         options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} */
      />
    </Tab.Navigator>
);
export default TabNavigator;

