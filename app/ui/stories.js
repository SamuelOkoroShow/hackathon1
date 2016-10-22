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
  TextInput,
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
var i = 0

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
       eachpost : eachPost,
       dataSource: ds.cloneWithRows(eachPost),
       robotSource: ds.cloneWithRows(robots),
       currentMessage: "",
       storiesColor: colors[0],
       text:"",
    }
  }

  componentDidMount(){




  }

  changeColor(){

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
    if(counter == 5){
      counter = 1;
    }
    if(right){
      right = false
        return(<View style={{flexDirection:'row', margin:5, width: 270, alignSelf:'flex-start' }}>
                                        <View style={{width:50, backgroundColor:'rgba(0,0,0,0.4)', borderRadius:25, alignSelf:'center', margin:5, height:50}} />
          <View style={{alignSelf:'flex-start', borderRadius:5, borderWidth:2, borderColor:'rgba(0,0,0,0.3)', backgroundColor: colors[counter], width:200, padding:10, margin:5}}>
          <Text style={{color:"#fff",  }}>{x.message}</Text>
          </View>
          </ View>)
        
      } else{
        right = true
        return(<View style={{flexDirection:'row', margin:5, width: 270, alignSelf:'flex-end' }}>
          <View style={{alignSelf:'flex-end', borderRadius:5, borderWidth:2, borderColor:'rgba(0,0,0,0.3)', backgroundColor: colors[counter], width:200, padding:10, margin:5}}>
          <Text style={{color:"#fff",  }}>{x.message}</Text>
          </View>
                              <View resizeMode="contain" style={{width:50, backgroundColor:'rgba(0,0,0,0.3)', borderRadius:25, alignSelf:'center', margin:5, height:50}} />

          </ View>)
        
      }

  }

  submit(x){
    console.log(x);
    eachPost.push({message:x})
    this.setState({
      dataSource: ds.cloneWithRows(eachPost),
    })
  }
  render() {
    return (
      <Image source={Back} resizeMode='contain' style={styles.container}>
      <Nav name="Home" {...this.props} />
        <View style={{flex:1}}>
        <Text style={{color:'#333', fontSize:35, fontWeight:'700', margin:10, backgroundColor:'rgba(0,0,0,0)', shadowColor: "#000000", shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { height: 1, width: 0 }}}>STORY</Text>
        <Text style={{backgroundColor:'rgba(0,0,0,0.8)', color:"#fff", textAlign:'center',padding:10, alignSelf:'center', width:200, borderLeftWidth:5, borderRightWidth:5, borderColor:this.state.storiesColor,}}>2 Goats walk into a bar</Text>
        <ListView style ={{flex:1}}
        dataSource = {this.state.dataSource}
        renderRow={(rowData) => this.storyGen(rowData)}
        />
        <View style={{flexDirection:'row'}}>
        <View style={{height:4, width:width/4, backgroundColor:colors[0]}} />
        <View style={{height:4, width:width/4, backgroundColor:colors[1]}} />
        <View style={{height:4, width:width/4, backgroundColor:colors[2]}} />
        <View style={{height:4, width:width/4, backgroundColor:colors[3]}} />
        </View>
        <TextInput 
        maxLength = {50}
        onChangeText={(text) => {
          this.setState({text});
        }}
        onSubmitEditing = {() => this.submit(this.state.text)}
        style={{height:50, padding:10, backgroundColor:'#fff'}}
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
