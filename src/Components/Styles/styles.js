import {StyleSheet} from 'react-native';

export default StyleSheet.create({
//Button CSS
    textButtonStyle:{
        alignSelf:'center',
        color:'black',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },

    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#007aff',
        marginLeft:5,
        marginRight:5,
    },
    //Input CSS
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    },

    labelStyle:{
        fontSize:20,
        paddingLeft:20,
        flex:1,
        fontWeight:'bold',
    },

    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
  //CardSection Style

    CardSectionStyle:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    },
    //cardStyle
    cardStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10
    },
    //spinner style
    spinnerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
