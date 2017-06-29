import React, { Component } from 'react';
import {View,Text,ListView,TouchableOpacity,TextInput} from 'react-native';
import{Card,CardSection,Input,Button,Spinner} from './Styles';
export default class Chat extends Component{
  constructor(props){
    super(props);
    this.state = {
      noi_dung_chat:"",
      dataSource : new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
}
tao_du_lieu_hang(du_lieu_hang){
  return(
    <View>
      <View><Text>{du_lieu_hang}</Text></View>
      <View style={{height:1,backgroundColor:'black'}}></View>
    </View>
  );
}

listenForItems(itemsRef){
    var items=["asdasdd","asdasd"];
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(items)
    });
}
  render(){
    return(
      <Card style={{flex:1}}>


        <CardSection style={{flex:10}}>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={this.tao_du_lieu_hang.bind(this)}
          />
        </CardSection>


        <CardSection style={{flex:1}}>

          <Input style={{flex:5}}
              onChangeText={(noi_dung_chat)=>this.setState({noi_dung_chat})}
          />
          <Button style={{flex:1}}
                  onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}>
              Chat
          </Button>
        </CardSection>


      </Card>
    );
  }

  componentDidMount(){
  this.listenForItems(this.itemsRef);
  }
}
