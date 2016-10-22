/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  View,
  ListView,
  Image
} from 'react-native';

import * as firebase from 'firebase';

import Nav from "./widgets/nav"
import Back from "../images/background2.png"

var right = false;
var eachPost = [
  {
  "id": 1,
  name: "Letters From a Stoic",
  "message": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "time": "5:02 AM"
}, {
  "id": 2,
  name: "Allegory Of A Cave",
  "message": "In hac habitasse platea dictumst.",
  "time": "7:26 PM"
}, {
  "id": 3,
  name:"Dante's Inferno",
  "message": "Donec ut dolor.",
  "time": "12:27 AM"
}, {
  "id": 4,
  name:"Meditations",
  "message": "Nunc rhoncus dui vel sem.",
  "time": "5:58 PM"
}, {
  "id": 5,
  name:'Chaos Theory',
  "message": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  "time": "4:07 PM"
}
]

var counter = 0;

var purple = "rgba(229,57,211,0.77)";
var orange = "rgba(244,197,76,0.77)";
var blue = "rgba(57,130,229,0.77)";
var red = "rgba(241,72,62,0.77)";
var green = "rgba(57,229,90,0.77)";
var colors = [
  purple,orange,blue,red,green]

var {height, width} = Dimensions.get('window');

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class AllStories extends Component {
  constructor(props){
    super(props)

    this.state = {
       dataSource: ds.cloneWithRows(eachPost),
       currentMessage: ""
    }
  }

  storyGen(x){
    counter++;
    if(counter == 5){
      counter = 1;
    }
 
        return(<View style={{flexDirection:'row', margin:5, width: width-10, shadowColor: "#000000", shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { height: 1, width: 0 }, height:100, backgroundColor:'rgba(255,255,255,0.5)',  alignSelf:'flex-start' }}>
          <View style={{width:5, backgroundColor:colors[counter-1]}} />
          <View></View>
          </ View>)
        


  }
  render() {
    return (
      <Image source={Back} resizeMode='contain' style={styles.container}>
      <Nav name="Home" />
        <View style={{flex:1}}>
        <Text style={{color:'#333', fontSize:35, fontWeight:'700', margin:10, backgroundColor:'rgba(0,0,0,0)'}}>ALL STORIES</Text>
        <Text style={{backgroundColor:'rgba(0,0,0,0.8)', color:"#fff", textAlign:'center',padding:10, alignSelf:'center', width:200}}>2 Goats walk into a bar</Text>
        <ListView style ={{flex:1}}
        dataSource = {this.state.dataSource}
        renderRow={(rowData) => this.storyGen(rowData)}
        />
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,
    backgroundColor: '#f7f7f7',
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
