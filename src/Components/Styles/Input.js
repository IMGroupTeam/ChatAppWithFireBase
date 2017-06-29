import React,{Component} from 'react';
import {View,TextInput,Text} from 'react-native';
import styles from './styles';
const Input=({secureTextEntry,placeholder,label,value,onChangeText})=>{
  const{inputStyle,containerStyle,labelStyle}=styles;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            value={value}
            style={inputStyle}
            onChangeText={onChangeText}
            />
        </View>   
    );
};

export {Input};
