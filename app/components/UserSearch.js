import React from 'react';
import {Text, View, Button, Image, TouchableOpacity, AppRegistry, StyleSheet} from 'react-native';
import PhotoGrid from 'react-native-photo-grid';
import PTRView from 'react-native-pull-to-refresh'

export default class UserSearch extends React.Component {

  constructor() {
    super();
    this.state =  { items: [] };
  }

  static navigationOptions = {
    title: 'User Search',
  }


fetchData = async() =>{
      let items = Array.apply(null, Array(18)).map((v, i) => {
       return { id: i, src: 'https://picsum.photos/200'}
      });
      this.setState({ items });
  };

componentDidMount(){
    		this.fetchData();
    }


render(){
  return(

    <PhotoGrid
      data = { this.state.items }
      itemsPerRow = { 3 }
      itemMargin = { 1 }
      renderHeader = { this.renderHeader }
      renderItem = { this.renderItem }
    />
  );
}

renderHeader() {
    return(
      <Text>Hallo Sengaa!</Text>
    );
  }

renderItem(item, itemSize) {
    return(
          <TouchableOpacity
            key = { item.id }
            style = {{ width: itemSize, height: itemSize }}
            onPress = { () => {
              console.log("OnPress was triggered");
            }}>
            <Image
              resizeMode = "cover"
              style = {{ flex: 1 }}
              source = {{ uri: item.src }}
            />
          </TouchableOpacity>
      )
    }
 }
