import React,{useState, useEffect} from 'react';
import {SafeAreaView,  View, Image, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native';
import AddButton from '../components/AddButton';
import ReviewModal from './ReviewScreen';

const RestaurantOverview = () => {
/* 
   const route = useRoute();
   const { data } = route.params || {}; */

   const [markers,setMarkers] = useState(null);

  const renderItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={styles.userName}>{item.user}</Text>
      <Text style={styles.comment}>{item.comment}</Text>
      <Text style={styles.rating}>Rating: {item.rating}</Text>
    </View>
  );

  
  useEffect(() => {
    async function fetchMarkers() {
        try {
          const ip = process.env.CurrentIP;
            console.log("ip" + ip);
            const response = await fetch(`http://172.20.10.2:3000/markers/`); /* ${ip} */
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


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View contentContainerStyle={styles.base}>
        <FlatList
      data={markers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    base: {
      flexGrow: 1,
      padding: 5, 
    },
});
    

export default RestaurantOverview;