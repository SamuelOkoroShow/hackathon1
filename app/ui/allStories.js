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
  LayoutAnimation,
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';

import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/MaterialIcons';


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
var i = 0;

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class AllStories extends Component {
  constructor(props){
    super(props)

    this.state = {
       dataSource: ds.cloneWithRows(eachPost),
       currentMessage: "",
       storiesColor: "rgba(229,57,211,0.77)",
       flexed:3
    }
  }

  componentDidMount(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    setTimeout(() => {this.changeColor()}, 2000)
    setTimeout(() => {this.changeColor()}, 5000)
    setTimeout(() => {this.changeColor()}, 9000)
    setTimeout(() => {this.changeColor()}, 13000)
    setTimeout(() => {this.changeColor()}, 15000)
    setTimeout(() => {this.changeColor()}, 19000)
    setTimeout(() => {this.changeColor()}, 23000)
    setTimeout(() => {this.changeColor()}, 29000)
    setTimeout(() => {this.changeColor()}, 33000)
    setTimeout(() => {this.changeColor()}, 37000)
    setTimeout(() => {this.setState({flexed:3})}, 4000)

  }
  changeColor(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    i++
    if(i == 5){
      i = 0
    }
    this.setState({
      storiesColor: colors[i],
    })
  }
  storyGen(x){
    counter++;
    if(counter == 6){
      counter = 1;

    }
 
        return(<View style={{flexDirection:'row', margin:10, width: width-20, shadowColor: "#000000", shadowOpacity: 0.5, shadowRadius: 3, shadowOffset: { height: 1, width: 0 }, height:80, backgroundColor:'rgba(255,255,255,1)',  alignSelf:'flex-start' }}>
          <View style={{width:5, backgroundColor:colors[counter-1]}} />
          <View style={{flex:this.state.flexed}}>
          <Text style={{fontSize:24, fontWeight:'300', margin:5, marginLeft:15, marginTop:8, color:"rgba(0,0,0,0.6)"}}>{x.name}</Text>
          <View style={{flexDirection:'row', marginLeft:15, alignItems:'center'}}>
          <Icon name = "pets" color ="#777" size={15} style={{marginLeft:0}} />
          <Icon name = "wifi-tethering" color ="#777" size={15} style={{marginLeft:15}} />
          <Icon name = "attach-file" color ="#777" size={15} style={{marginLeft:15}} />
          <Icon name = "gamepad" color ="#777" size={15} style={{marginLeft:15}} />
          </View>

          </View>
          <TouchableOpacity onPress={() => this.props.navigator.push({id:'stories'})} style={{flex:1, justifyContent:'center', alignItems:'center', shadowColor: "#000000", shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { height: 1, width: 0 }, }}>
          <Icon name='chevron-right' size={26} color="#fff" style={{padding:10, backgroundColor:colors[counter-1]}} />
          </TouchableOpacity>
          </ View>)
        


  }
  render() {
    return (
      <Image source={Back} resizeMode='contain' style={styles.container}>
      <Nav name="All Stories" {...this.props} />
        <View style={{flex:1}}>
        <Text style={{color:'#333', fontSize:35, fontWeight:'700', margin:10, backgroundColor:'rgba(0,0,0,0)', }}>ALL STORIES</Text>
        <Text style={{backgroundColor:'rgba(0,0,0,0.8)', color:"#fff", marginLeft:10, padding:10, width:130}}>All Active Stories</Text>
        <View style={{width:130, height:3, marginBottom:10, marginLeft:10, backgroundColor:this.state.storiesColor}} />
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
