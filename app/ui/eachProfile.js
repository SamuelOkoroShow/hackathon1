/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View
} from 'react-native';

import Nav from "./widgets/nav"

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Stories extends Component {
  constructor(props){
    super(props)

    this.state = {
      userName: "Profile"
    }
  }

  changeTitle(x){
    if(x){
this.setState({userName:x});
    }else{
this.setState({userName: "Profile"});
    }
  }
  render() {
    if(this.state.userName){
        return (
          <Image source={require('../images/background.png')} style={styles.container}>
            <Nav name={this.state.userName} {...this.props} />
            <View style={{flex:1, alignItems:'center'}}>
            <Image source ={require('../images/profile.png')} resizeMode="contain" style={{shadowColor: "#000000", shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { height: 1, width: 0 }, width:330, height:380}} />
            <View style={{height:300, width:330, justifyContent:'center', backgroundColor:'rgba(255,255,255,0.7)', position:'absolute', top:100, left:20, shadowColor: "#000000", shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { height: 2, width: 0 }}}>
            <Text style={{fontSize:13, fontWeight:'900', color:'#333', margin:10, marginBottom:0}}>NAME</Text>
            <TextInput 
              style={{fontSize:30, height:50, padding:10, color:"#333", }}
        
              onChangeText={(userName) => {
          this.changeTitle(userName)
        }}
              placeholder = "What's Your Name?"
            />
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
            <View style={{flexDirection:'row'}}>

            </View>
            <View style={{flexDirection:'row', flex:1, justifyContent:'center'}}>
                      <Icon name = "pets" color ="#777" size={15} style={{margin:3}} />
                      <Text style={{color:'#444', margin:3}}>You have a dog </Text>
            </View>
            <View style={{flexDirection:'row', flex:1, justifyContent:'center'}}>
                      <Icon name = "person-pin-circle" color ="#777" size={15} style={{margin:3}} />
                      <Text style={{color:'#444', margin:3}}>Austin, TX </Text>
            </View>

            </View>
            <Text style={{fontSize:13, fontWeight:'900', color:'#333', margin:10, marginBottom:0}}>Your Life</Text>
            <Text style={{color:'#444', margin:5, marginLeft:15,}}>Fulltime world traveller.</Text>
            <Text style={{color:'#444', margin:5, marginLeft:15,}}>Fulltime world traveller.</Text>
            </View>
            </View>
          </Image>
        );}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null
  },
 
});

AppRegistry.registerComponent('games7', () => games7);
