import React,{Component} from 'react';
import {Text} from 'react-native';
import{Card,CardSection,Input,Button,Spinner} from './Styles';
import Chat from './Chat';
import {firebaseRef} from './FirebaseConfig';
class Login extends Component{
    state={
        email:'',
        pwd:'',
        err:'',
        loading:false
    };

    signInWithFirebase(){
        this.setState({
            err:"",
            loading:true
        })
        const{email,pwd}=this.state;
        firebaseRef.auth().signInWithEmailAndPassword(email,pwd)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    }

    onLoginSuccess(){
        this.setState({
            err:"login successful",
            loading:false
        })
        this.props.navigation.navigate('ManHinh_Chat');
    }

    onLoginFail(){
        this.setState({
            err:"login fail! Please register",
            loading:false
        })
    }

    renderButton(){
        if(this.state.loading){
            return(
            //loading bar
            <CardSection>
                <Spinner size='large'/>
            </CardSection>
            );
        }else{
            return(
            <CardSection style={{flexDirection:'row'}}>
                    <Button onPress={()=>this.signInWithFirebase()}>
                    LOGIN
                    </Button>
                    <Button onPress = {()=>{this.props.navigation.navigate('ManHinh_SignUp')}}>
                    REGISTER
                    </Button>
            </CardSection>
            );
        }
    }

    render(){
        return(
        <Card style={{}}>
            <CardSection>
                <Input
                    onChangeText={email=>this.setState({email})}
                    value={this.state.email}
                    label="Email"
                    placeholder="email@gmail.com"
                />
            </CardSection>
            <CardSection>
                <Input
                    onChangeText={pwd=>this.setState({pwd})}
                    value={this.state.pwd}
                    secureTextEntry={true}
                    label="Password"
                    placeholder="password"
                />
            </CardSection>
                <Text style={{fontSize:18,color:'red',alignSelf:'center'}}>{this.state.err}</Text>
                 {this.renderButton()}
        </Card>
        );
    }
}

export default Login;
