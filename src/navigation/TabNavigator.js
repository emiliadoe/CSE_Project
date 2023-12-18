import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Mockpage from '../pages/MockPage'
import MapScreen from '../pages/MapScreen';
import ReviewModal from '../pages/ReviewScreen';
import LoginPage from '../pages/Login'
import AddReviewPage from '../pages/AddReview'
import { createStackNavigator } from '@react-navigation/stack';


const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator 
  screenOptions={{
    headerShown: false
    }}>
    <MainStack.Screen 
    name="Explore" 
    component={MapScreen}  />
     <MainStack.Screen name="AddReviewPage" component={AddReviewPage} />
     <MainStack.Screen name="LoginPage" component={LoginPage} />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();

const ModalStackScreen = () => (
  <ModalStack.Navigator screenOptions={{
    headerShown: false,
    presentation:"modal"
  }}>
    <ModalStack.Screen name="Main" component={MainStackScreen} screenOptions={{
    headerShown: false
    }}/>
    <ModalStack.Screen name="ReviewModal" component={ReviewModal} screenOptions={{
    headerShown: false
    }}/>
  </ModalStack.Navigator>
);


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
        component={ModalStackScreen}
      />
       <Tab.Screen
        name="Social"
        component={Mockpage}
      /*   options={
          tabBarIcon= <Icon iconName={'search'} size={20} color={"white"} /> 
        } */
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

