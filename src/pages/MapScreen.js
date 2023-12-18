import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import AddButton from '../components/AddButton';
import ReviewModal from "../pages/ReviewScreen"

const MapScreen = ()  => {

    const [location, setLocation] = useState(null);
    const [isReviewModalVisible, setReviewModalVisible] = useState(false);

    const handleButton = () => {
      setReviewModalVisible(true);
    };
  
    const handleCloseReviewModal = () => {
      setReviewModalVisible(false);
    };

    const handleOptionPress = (option) => {
      console.log(`Option ${option} pressed`);
      setReviewModalVisible(false);
    };

    const handleCancel = () => {
      setReviewModalVisible(false);
    };
  

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
        console.log('Location:', location);
        console.log('Map Dimensions:', StyleSheet.flatten(styles.map));
      } catch (error) {
        console.error('Error getting location:', error);
      }

    })();
  }, []);  

  return (
    <View  style={{ flex: 1 }}>
    {location  ? (
      //if location true
      <View  style={styles.container} >
      <MapView
           style={styles.map}   
          initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
          title="Marker Title"
          description="Marker Description"
        />
        <AddButton onPress={handleButton}></AddButton>

       <ReviewModal
        isVisible={isReviewModalVisible}
        onClose={handleCloseReviewModal}
        onOptionPress={handleOptionPress}
        onCancel={handleCancel}
      />
      </MapView>  
      </View>  
    ) : (
      //if no location
      <View style={styles.loadingContainer}>
      <Image source={require('../assets/icons/happycow2.jpg')} /> 
      <Text>Loading location...</Text>
      </View>
    )}
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
      ...StyleSheet.absoluteFillObject,
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  


export default MapScreen;