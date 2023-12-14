import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons';

const AddButton = ({ onPress, title }) => {


  const cols = useBreakpointValue({
    base: 3,
    sm: 4,
    md: 8
  });
  const icon = {
    icon: <AddIcon />,
    iconName: "add"
  }

  return <TouchableOpacity 
            style={styles.button} 
            onPress={onPress}
            icon={<Icon name={icon}/>}>
              <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
};



const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomButton;
