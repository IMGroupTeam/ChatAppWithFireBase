import React,{Component } from 'react';
import {View} from 'react-native';
import styles from './styles';
const CardSection =(props)=>{
  return(
      <View style={[styles.CardSectionStyle,props.style]}>
        {props.children}
      </View>
  );
};

export {CardSection};
