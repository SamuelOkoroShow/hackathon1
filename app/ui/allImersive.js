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
  View
} from 'react-native';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBGn38IcpcQfdAFJHuoD9qRSdw3gLxWHw",
    authDomain: "hackathon1-6bd63.firebaseapp.com",
    databaseURL: "https://hackathon1-6bd63.firebaseio.com",
    storageBucket: "hackathon1-6bd63.appspot.com",
    messagingSenderId: "1072968272935"
  };
  firebase.initializeApp(config);

export default class AllImmersive extends Component {
  render() {
    return (
      <Image style={styles.container} resizeMode="contain" source={require('../images/background3.png')} >
       <Image source={require('../images/logo.png')} style={{height:270, width:270}} resizeMode="contain" />
      
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('games7', () => games7);
