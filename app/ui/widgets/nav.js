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


var purple = "rgba(229,57,211,0.77)";
var orange = "rgba(244,197,76,0.77)";
var blue = "rgba(57,130,229,0.77)";
var red = "rgba(241,72,62,0.77)";
var green = "rgba(57,229,90,0.77)";
var colors = [
  purple,orange,blue,red,green]
  
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
         <View style={{flexDirection:'row'}}>
        <View style={{height:4, width:width/4, backgroundColor:colors[0]}} />
        <View style={{height:4, width:width/4, backgroundColor:colors[1]}} />
        <View style={{height:4, width:width/4, backgroundColor:colors[2]}} />
        <View style={{height:4, width:width/4, backgroundColor:colors[3]}} />
        </View>
          </View>);}else{return (
          <View style={styles.container}>
          <ScrollView horizontal={true} >
          <TouchableOpacity onPress={() => this.props.navigator.push({id:'allStories'})} style={{ flexDirection:'row', alignItems:'center', marginLeft:20, marginTop:10}}>
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
        <View style={{flexDirection:'row'}}>
        <View style={{height:4, width:width/4, backgroundColor:colors[0]}} />
        <View style={{height:4, width:width/4, backgroundColor:colors[1]}} />
        <View style={{height:4, width:width/4, backgroundColor:colors[2]}} />
        <View style={{height:4, width:width/4, backgroundColor:colors[3]}} />
        </View>
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

