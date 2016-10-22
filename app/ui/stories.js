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

import Nav from "./widgets/nav"
import Back from "../images/background.png"

var right = false;
var eachPost = [
  {
  "id": 1,
  "message": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "time": "5:02 AM"
}, {
  "id": 2,
  "message": "In hac habitasse platea dictumst.",
  "time": "7:26 PM"
}, {
  "id": 3,
  "message": "Donec ut dolor.",
  "time": "12:27 AM"
}, {
  "id": 4,
  "message": "Nunc rhoncus dui vel sem.",
  "time": "5:58 PM"
}, {
  "id": 5,
  "message": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  "time": "4:07 PM"
}, {
  "id": 6,
  "message": "Aenean fermentum.",
  "time": "5:30 PM"
}, {
  "id": 7,
  "message": "Nulla tellus.",
  "time": "3:03 AM"
}, {
  "id": 8,
  "message": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "time": "2:19 AM"
}, {
  "id": 9,
  "message": "Ut tellus.",
  "time": "7:14 PM"
}, {
  "id": 10,
  "message": "Etiam faucibus cursus urna.",
  "time": "11:43 PM"
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
var robots = [{
  "avatar": "https://robohash.org/natustemporibusporro.bmp?size=50x50&set=set1"
}, {
  "avatar": "https://robohash.org/repellendusreprehenderitlaborum.bmp?size=50x50&set=set1"
}, {
  "avatar": "https://robohash.org/doloribusquiaet.jpg?size=50x50&set=set1"
}, {
  "avatar": "https://robohash.org/reminqui.jpg?size=50x50&set=set1"
}, {
  "avatar": "https://robohash.org/vitaenemoexercitationem.png?size=50x50&set=set1"
}, {
  "avatar": "https://robohash.org/quiaatquenumquam.bmp?size=50x50&set=set1"
}, {
  "avatar": "https://robohash.org/suscipitautrepellat.jpg?size=50x50&set=set1"
}, {
  "avatar": "https://robohash.org/etconsecteturratione.jpg?size=50x50&set=set1"
}, {
  "avatar": "https://robohash.org/estullama.png?size=50x50&set=set1"
}, {
  "avatar": "https://robohash.org/adsaepevel.png?size=50x50&set=set1"
}]

var {height, width} = Dimensions.get('window');

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class Stories extends Component {
  constructor(props){
    super(props)

    this.state = {
       dataSource: ds.cloneWithRows(eachPost),
       robotSource: ds.cloneWithRows(robots),
       currentMessage: ""
    }
  }

  storyGen(x){
    counter++;
    if(counter == 4){
      counter = 1;
    }
    if(right){
      right = false
        return(<View style={{flexDirection:'row', margin:10, width: 270, alignSelf:'flex-start' }}>
                                        <Image source={{uri: robots[counter-1].avatar}} resizeMode="contain" style={{width:50, backgroundColor:'rgba(0,0,0,0.4)', borderRadius:25, alignSelf:'center', margin:5, height:50}} />
          <View style={{alignSelf:'flex-start', backgroundColor: colors[counter], width:200, padding:10, margin:5}}>
          <Text style={{color:"#fff",  }}>{x.message}</Text>
          </View>
          </ View>)
        
      } else{
        right = true
        return(<View style={{flexDirection:'row', margin:10, width: 270, alignSelf:'flex-end' }}>
          <View style={{alignSelf:'flex-end', backgroundColor: colors[counter], width:200, padding:10, margin:5}}>
          <Text style={{color:"#fff",  }}>{x.message}</Text>
          </View>
                              <Image source={{uri: robots[counter-1].avatar}} resizeMode="contain" style={{width:50, backgroundColor:'rgba(0,0,0,0.3)', borderRadius:25, alignSelf:'center', margin:5, height:50}} />

          </ View>)
        
      }

  }
  render() {
    return (
      <Image source={Back} resizeMode='contain' style={styles.container}>
      <Nav name="Home" />
        <View style={{flex:1}}>
        <Text style={{color:'#333', fontSize:35, fontWeight:'700', margin:10, backgroundColor:'rgba(0,0,0,0)'}}>STORY</Text>
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
