import React from 'react';
import {StackNavigator,View,Text,DrawerNavigator} from 'react-navigation';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Chat from './Components/Chat';
import Menu from './Components/Menu';


export const HomeStack= StackNavigator({
  ManHinh_Login:{screen: Login,
                navigationOptions:{
                    title: "Login",
                }
              },
  ManHinh_SignUp:{screen: SignUp,
                navigationOptions:{
                    title: "SignUp"
                }
              },
  ManHinh_Chat:{screen: Chat,
                navigationOptions:{
                title: "Chat All"
                }
              },


});


export const SideMenu = DrawerNavigator({
  Home:{
    screen:HomeStack
  },
},
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
  }
);
