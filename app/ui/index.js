import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  StatusBar,
  View
} from 'react-native';

import Splash from './splash'
import AllStories from './allStories'
import Stories from './stories'
import AllImersive from './allImersive'
import EachUser from './eachProfile'
import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBGn38IcpcQfdAFJHuoD9qRSdw3gLxWHw",
    authDomain: "hackathon1-6bd63.firebaseapp.com",
    databaseURL: "https://hackathon1-6bd63.firebaseio.com",
    storageBucket: "hackathon1-6bd63.appspot.com",
    messagingSenderId: "1072968272935"
  };

const firebaseApp = firebase.initializeApp(config);
console.log(firebaseApp);
var database = firebaseApp.database();



export default class Index extends Component {
  constructor(props){
    super(props)
 
  }
 
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'allStories') {
      return (
        <AllStories
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'allImersive') {
      return (
        <AllImersive
        {...this.props} 
        data = {database}
        navigator={navigator} />
        );
    }

if (routeId === 'eachUser') {
      return (
        <EachUser
        {...this.props} 
        navigator={navigator} />
        );
    }

     if (routeId === 'stories') {
      return (
        <Stories
        {...this.props} 
        navigator={navigator} />
        );
    }
    
    
    if (routeId === 'splash') {
      return (
        <Splash
        {...this.props} 
        navigator={navigator} />
        );
    }
  
   }


  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar
     barStyle="light-content"
   />
     <Navigator
     style={{flex: 1}}
     initialRoute={{id: 'splash', name: 'splash'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}
