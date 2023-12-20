import React,{useState} from 'react';
import {SafeAreaView,  View, Image, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AddButton from '../components/AddButton';
import ReviewModal from './ReviewScreen';
import DraggableButton from '../components/AddButtonDraggable';
import AddReviewPage from './AddReview';
import LoginPage from './Login';

const RestaurantPage = () => {

   const route = useRoute();
   const { data } = route.params || {};
  console.log(data)
  console.log(data.restaurant)

  const navigation = useNavigation();


  const [isReviewModalVisible, setReviewModalVisible] = useState(false);


  const handleButton = () => {
    setReviewModalVisible(true);
  };

  const handleClose = () => {
    setReviewModalVisible(false);
  };


  const handleOptionPress = (option) => {
    switch (option) {
      case 1:
        setReviewModalVisible(false);
        navigation.navigate(AddReviewPage)
        break;
      case 2:
        setReviewModalVisible(false);
        navigation.navigate(LoginPage)
        break;
      case 3:
        setReviewModalVisible(false);
        navigation.navigate(LoginPage)
        break;
      default:
        break;
  };
}

  const restaurant1 = {
    reviews: [
      { user: 'User1', rating: 4, comment: 'Great food!', id:"1" },
      { user: 'User2', rating: 5, comment: 'Excellent service!', id:"2" },
    ],
  };

     {/*        {restaurant1.reviews.map((review, index) => (
          <View key={index} style={styles.review}>
            <Text>{`User: ${review.user}`}</Text>
            <Text>{`Rating: ${review.rating}/5`}</Text>
            <Text>{`Comment: ${review.comment}`}</Text>
            </View> 
        ))} */}



  const renderItem = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={styles.userName}>{item.user}</Text>
      <Text style={styles.comment}>{item.comment}</Text>
      <Text style={styles.rating}>Rating: {item.rating}</Text>
    </View>
  );



  return (
    <SafeAreaView style={styles.safeAreaView}  
     onPressLeft={() => {
      navigation.goBack();
    }}>
      <View contentContainerStyle={styles.base}>
          <View style={styles.cardTop}>
            <Image style={styles.cardImg} source={require('../assets/icons/noimage.jpg')} />
            <View style={styles.cardImgOverlay} />
            <View style={styles.cardOption} pointerEvents="box-none">
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle} numberOfLines={2}>
              {data.restaurant.name}  
                        </Text>
            <Text style={styles.cardDescription} >
            {data.restaurant.description}  
            </Text>
            <View style={styles.cardFooter}>
            <Text style={styles.sectionTitle}>Reviews:</Text>
<View>
<TouchableOpacity style={styles.card} activeOpacity={0.8}>
<FlatList
      data={restaurant1.reviews}
  /*     keyExtractor={(item) => item.id} */
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
            </TouchableOpacity>
    </View>
          </View>
          <DraggableButton onPress={handleButton} />
          <ReviewModal
        isVisible={isReviewModalVisible}
        onClose={handleClose}
        onOptionPress={handleOptionPress}
        onCancel={handleClose} 
      />
          </View>
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
    card: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#dde8eb',
      borderRadius: 12,
      backgroundColor: '#ffffff',
      overflow: 'hidden',
    },
    cardTop: {
      backgroundColor: '#f1f6f8',
      overflow: 'hidden',
    },
    cardImg: {
      width: '90%',
      aspectRatio: 16 / 9,
      height: '50%'
    },
    cardImgOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#000000',
      opacity: 0.2,
    },
    cardOption: {
      position: 'absolute',
      top: 10,
      right: 10,
      left: 10,
      alignItems: 'flex-start',
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 28,
      minWidth: 100,
      maxWidth: '100%',
      paddingHorizontal: 15,
      backgroundColor: '#169f94',
      borderRadius: 4,
      overflow: 'hidden',
    },
    btnText: {
      color: '#ffffff',
      fontSize: 16,
    },
    cardBody: {
      paddingTop: 20,
    },
    cardTitle: {
      fontSize: 20,
      marginBottom: 15,
      paddingHorizontal: 15,
      color: '#1c1c1c',
      opacity: 1,
    },
    cardDescription: {
      fontSize: 14,
      marginBottom: 15,
      paddingHorizontal: 15,
      color: '#1c1c1c',
      opacity: 0.5,
    },
    cardFooter: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginHorizontal: 15,
      paddingTop: 15,
      borderTopWidth: 1,
      borderColor: '#dde8eb',
    },
    cardFooterText: {
      flexShrink: 0,
      marginBottom: 15,
      fontSize: 14,
      color: '#1c1c1c',
      opacity: 0.5,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    review: {
      marginBottom: 8,
    },
    reviewItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    userName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    comment: {
      fontSize: 14,
    },
    rating: {
      fontSize: 12,
      color: 'green',
    },
});
    

export default RestaurantPage;