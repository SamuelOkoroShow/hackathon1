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
  Dimensions,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
var {height, width} = Dimensions.get('window');

export default class Nav extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:1, flexDirection:'row', alignItems:'center', marginTop:10}}>
      <TouchableOpacity>
      <Icon name="more-vert" size={25} color='#fff' style={{ }} />
      </TouchableOpacity>
      <Text style={{color:"#fff", fontSize:17}}>Home</Text>
      </View>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
height:60,
backgroundColor:'rgba(0,0,0,0.8)',
width:width
  },
  
});

