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
import EachUser from './eachProfile'




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
     initialRoute={{id: 'eachUser', name: 'eachUser'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}
