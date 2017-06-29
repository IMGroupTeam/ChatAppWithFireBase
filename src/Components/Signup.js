import React, { Component } from 'react';
import {Alert} from 'react-native';
import{Card,CardSection,Input,Button,Spinner} from './Styles';
import {firebaseRef} from './FirebaseConfig';

export default class SignUp extends Component {

  constructor(props){
    super(props);
    this.itemRef = firebaseRef.database();
    this.state = {
      id:'',
      email: '',
      password: '',
      username:''
    }
  }
  //Add user into database
  addData(){
    this.itemRef.ref('USER').push({
      id: this.state.id,
      email:this.state.email,
      username: this.state.username,
    });
  }
  //Register function
  doRegister(){
    firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      Alert.alert(
        'Confirm!!!',
        'Register OK!' + this.state.email,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => {this.addData()}},
        ],
        { cancelable: false }
      );
      this.setState({
        id:firebaseRef.auth().currentUser.uid,
      })
    })
    .catch(function(error) {
      Alert.alert(
        'Confirm!!!',
        'Register false!' + error,
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label = 'Email'
            placeholder="email@gmail.com"
            onChangeText = {(email) => this.setState({email})}
          />
        </CardSection>
        <CardSection>
          <Input
            label = 'UserName'
            placeholder="Enter your username..."
            onChangeText = {(username) => this.setState({username})}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry = {true}
            label = 'Password'
            placeholder="Enter your password..."
            onChangeText = {(password) => this.setState({password})}
          />
        </CardSection>
        <CardSection>
          <Button onPress = {()=>{this.doRegister()}} >SIGN UP</Button>
        </CardSection>
      </Card>
    );
  }
}
