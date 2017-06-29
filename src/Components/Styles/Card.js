import React,{Component } from 'react';
import {View} from 'react-native';
import styles from './styles';
//display item
const Card = (props) =>{
  return(

    <View style={[styles.cardStyle,props.style]}>
      {props.children}
    </View>
  );
};

export {Card};
