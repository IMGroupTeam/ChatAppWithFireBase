import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import styles from './styles';
const Button =({onPress,children})=>{
  const {buttonStyle, textButtonStyle}=styles;
  return(
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textButtonStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export {Button};
