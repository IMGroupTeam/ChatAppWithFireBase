import React, { Component } from 'react';
import {View,Text,ListView,TouchableOpacity,TextInput} from 'react-native';
import{Card,CardSection,Input,Button,Spinner} from './Styles';
export default class Menu extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataSource_rom : new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      dataSource_online : new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
}
tao_du_lieu_hang_rom(du_lieu_hang){
  return(
    <View>
      <View><Text>{du_lieu_hang}</Text></View>
      <View style={{height:1,backgroundColor:'black'}}></View>
    </View>
  );
}
tao_du_lieu_hang_online(du_lieu_hang){
  return(
    <View>
      <View><Text>{du_lieu_hang}</Text></View>
      <View style={{height:1,backgroundColor:'black'}}></View>
    </View>
  );
}

listenForItemsRom(itemsRef){
    var items=["asdasdd","asdasd"];
    this.setState({
      dataSource_rom:this.state.dataSource_rom.cloneWithRows(items)
    });
}
listenForItemsOnline(itemsRef){
    var items=["xua","xyz"];
    this.setState({
      dataSource_online:this.state.dataSource_online.cloneWithRows(items)
    });
}
  render(){
    return(
      <Card style={{flex:1}}>


        <CardSection>
          <ListView
          dataSource={this.state.dataSource_online}
          renderRow={this.tao_du_lieu_hang_rom.bind(this)}
          />
        </CardSection>

        <CardSection>
          <ListView
          dataSource={this.state.dataSource_rom}
          renderRow={this.tao_du_lieu_hang_rom.bind(this)}
          />
        </CardSection>






      </Card>
    );
  }

  componentDidMount(){
  this.listenForItemsOnline(this.itemsRef);
   this.listenForItemsRom(this.itemsRef)
  }
}
