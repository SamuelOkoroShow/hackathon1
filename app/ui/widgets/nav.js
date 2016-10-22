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
  TouchableOpacity,
  ScrollView,
  Dimensions,
  LayoutAnimation,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
var {height, width} = Dimensions.get('window');

export default class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeMenu: false
    }
  }
  render() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)

    if(!this.state.activeMenu){
        return (
          <View style={styles.container}>
          <View style={{flex:1, flexDirection:'row', alignItems:'center', marginTop:10}}>
          <TouchableOpacity onPress = {() => this.setState({activeMenu:true})}>
          <Icon name="more-vert" size={25} color='#fff' style={{ }} />
          </TouchableOpacity>
          <Text style={{color:"#fff", fontSize:17}}>{this.props.name}</Text>
          </View>
        
          </View>);}else{return (
          <View style={styles.container}>
          <ScrollView horizontal={true} >
          <TouchableOpacity style={{ flexDirection:'row', alignItems:'center', marginLeft:20, marginTop:10}}>
          <Icon name="home" size={19} color='#fff' style={{margin:5}} />
          
          <Text style={{color:"#fff", fontSize:17, margin:5,}}>All Stories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection:'row', alignItems:'center', marginLeft:20, marginTop:10}}>
          <Icon name="portrait" size={19} color='#fff' style={{margin:5}} />
          
          <Text style={{color:"#fff", fontSize:17, margin:5,}}>Active Users</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection:'row', alignItems:'center', marginLeft:20, marginTop:10}}>
          <Icon name="style" size={19} color='#fff' style={{margin:5}} />
          
          <Text style={{color:"#fff", fontSize:17, margin:5,}}>Communities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection:'row', alignItems:'center', marginLeft:20, marginTop:10}}>
          <Icon name="games" size={19} color='#fff' style={{margin:5}} />
          
          <Text style={{color:"#fff", fontSize:17, margin:5,}}>Immersive</Text>
          </TouchableOpacity>
          </ScrollView>
        
          </View>);

          }
     }
}

const styles = StyleSheet.create({
  container: {
height:70,
backgroundColor:'rgba(0,0,0,0.8)',
width:width
  },
  
});

