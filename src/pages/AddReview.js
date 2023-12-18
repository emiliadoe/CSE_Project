import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddReviewPage = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('../assets/icons/login.jpg')}
        style={styles.image}
         /> 
  </View>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: Dimensions.get('window').width, // Set the width to the screen width
    height: Dimensions.get('window').height, // Set the height to the screen height
  },
});

export default AddReviewPage;