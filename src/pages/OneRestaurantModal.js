import React from 'react';
import { View, Text, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const RestaurantModal = ({ isVisible, onClose, restaurant }) => {
    console.log(restaurant)
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/*  <Image source= "../assets/icons/happycow2.jpg" style={styles.image} />  */}
         {/*  <Text style={styles.title}> {restaurant.name}</Text>
          <Text style={styles.description}>{restaurant.description}</Text>
          <Text style={styles.sectionTitle}>Reviews:</Text> */}
          {/* {restaurant.reviews.map((review, index) => (
            <View key={index} style={styles.review}>
              <Text>{`User: ${review.user}`}</Text>
              <Text>{`Rating: ${review.rating}/5`}</Text>
              <Text>{`Comment: ${review.comment}`}</Text>
            </View>
          ))} */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  review: {
    marginBottom: 8,
  },
  closeButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(228,218,242,255)',
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'rgb(128, 85, 200)',
    fontWeight: 'bold',
  },
});

export default RestaurantModal;
