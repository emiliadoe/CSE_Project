import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button} from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import AddButton from '../components/AddButton';
import ReviewModal from "../pages/ReviewScreen"
import RestaurantModal from './OneRestaurantModal';
import LoginPage from '../pages/Login'
import AddReviewPage from '../pages/AddReview'
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';

const MapScreen = ()  => {


    const [location, setLocation] = useState(null);
    const [isReviewModalVisible, setReviewModalVisible] = useState(false);
    const [markers,setMarkers] = useState(null);
    const [isRestaurantModalVisible, setRestaurantModalVisible] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(null);

  
    const handleMarkerPress = (marker) => {
      console.log(isRestaurantModalVisible)
      setSelectedMarker(marker);
      setRestaurantModalVisible(true);
    };
  
    const closeRestaurantModal = () => {
      setSelectedMarker(null);
      setRestaurantModalVisible(false);
    };

    const navigation = useNavigation();

    const handleButton = () => {
      setReviewModalVisible(true);
    };
  
    const handleCloseReviewModal = () => {
      setReviewModalVisible(false);
    };

    const handleOptionPress = (option) => {
      switch (option) {
        case 1:
          // Handle option 1 (Add a Review)
          setReviewModalVisible(false);
          navigation.navigate(AddReviewPage)
          break;
        case 2:
          // Handle option 2 (Add Photos)
          setReviewModalVisible(false);
          navigation.navigate(LoginPage)
          break;
        case 3:
          // Handle option 3 (Add Listing)
          setReviewModalVisible(false);
          navigation.navigate(LoginPage)
          break;
        default:
          // Handle other cases or provide a default action
          break;
    };
  }

    const handleCancel = () => {
      setReviewModalVisible(false);
    };

  
    useEffect(() => {
      async function fetchMarkers() {
          try {
            const ip = process.env.CurrentIP;
              console.log("ip" + ip);
              const response = await fetch(`http://${ip}:3000/markers/`);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setMarkers(data);
          } catch (error) {
              console.error('Error fetching markers:', error);
          }
      }
      fetchMarkers();
  }, []);
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
     {/*    <SearchBar/> */}
              <Marker
      coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
      title="Current Location"
      description="You are here!"
      pinColor='rgb( 128, 85, 200)'
    />
       {Array.isArray(markers) && markers.length > 0 ? (
        markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{latitude:marker.latitude,longitude: marker.longitude}}
            title={marker.name}
            description={marker.description}
           /*  onPress={() => handleMarkerPress(marker)}   */
       />
       
  ))
  ) :  null}
 {/* <View>
    <RestaurantModal
    animationType="slide"
    transparent={false}
    visible={isRestaurantModalVisible}
    onRequestClose={isRestaurantModalVisible===false}
  >  */}
     {/* <View style={styles.modalContainer}>
      <Text>{selectedMarker?.name}</Text>
      <Text>{selectedMarker?.description}</Text>
      <Button title="Close" onPress={closeRestaurantModal} />
    </View>   */}
{/*    </RestaurantModal>
  </View>   */}   

        <AddButton onPress={handleButton}></AddButton>
        <View style={styles.modalContainer}>
       <ReviewModal
        isVisible={isReviewModalVisible}
        onClose={handleCloseReviewModal}
        onOptionPress={handleOptionPress}
        onCancel={handleCancel}
      />
      </View>
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
    modalContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
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