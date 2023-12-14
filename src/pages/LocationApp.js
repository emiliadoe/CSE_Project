import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

const LocationApp = () => {
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        console.error('Error getting location:', error);
      }
    })();
  }, []);

  const navigateToMap = () => {
    navigation.navigate('HomeScreen', { data: location.coords });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {location ? (
        <View>
          <Text>Latitude: {location.coords.latitude}</Text>
          <Text>Longitude: {location.coords.longitude}</Text>
        </View>
      ) : (
        <Text>Loading location...</Text>
      )}
      <Button title="Get Location" onPress={() => setLocation(null)} />
      <Button title="Go to Map" onPress={navigateToMap} />
    </View>
  );
};

export default LocationApp;