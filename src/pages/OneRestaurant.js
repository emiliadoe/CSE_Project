import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RestaurantPage = () => {
  const restaurant = {
    imageUrl: 'https://example.com/restaurant-image.jpg',
    title: 'Sample Restaurant',
    description: 'A delightful place with delicious dishes.',
    reviews: [
      { user: 'User1', rating: 4, comment: 'Great food!' },
      { user: 'User2', rating: 5, comment: 'Excellent service!' },
    ],
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{restaurant.title}</Text>
        <Text style={styles.description}>{restaurant.description}</Text>
        <Text style={styles.sectionTitle}>Reviews:</Text>
        {restaurant.reviews.map((review, index) => (
          <View key={index} style={styles.review}>
            <Text>{`User: ${review.user}`}</Text>
            <Text>{`Rating: ${review.rating}/5`}</Text>
            <Text>{`Comment: ${review.comment}`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
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
});

export default RestaurantPage;
