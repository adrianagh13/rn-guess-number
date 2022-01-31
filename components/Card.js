import React from 'react';
import {StyleSheet, View} from 'react-native';

//the card component allows us to have a card with the shadow properties
//when we apply it we have to specifiy measures like width and height depending

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
  //we use the spread operator for overriding the styles and also adding the ones passed by props
  //this is going to merge both styles
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2}, //shadowOffset receives and obj
    shadowRadius: 6, //if you set shadow radius to 0 it will look like a line
    shadowOpacity: 0.26,
    backgroundColor: 'white', //shadow properties only work on iOS
    elevation: 5, //only works on Android, default
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
