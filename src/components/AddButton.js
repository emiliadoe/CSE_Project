import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddButton = ({ onPress }) => {


  return <TouchableOpacity 
            style={styles.button} 
            onPress={onPress}>       
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb( 128, 85, 200)',
    padding: 10,
    width: 50, 
    height: 50,
    borderRadius: 25,    
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
    right: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default AddButton;
