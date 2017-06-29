import React,{Component} from 'react';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import {SideMenu} from './Routers';
class App extends Component{
    render(){
        return(
            <SideMenu />
        );
    }
}
export default App;
