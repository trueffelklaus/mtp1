import React from 'react';
import {Text, View, Button, Image, TouchableOpacity, AppRegistry} from 'react-native';
import PhotoGrid from 'react-native-photo-grid';

export default class UserSearch extends React.Component {

  constructor() {
    super();
    this.state =  { items: [] };
  }

  static navigationOptions = {
    title: 'User Search',
  }



componentDidMount() {
    // Build an array of 10 photos
    let items = Array.apply(null, Array(10)).map((v, i) => {
      // return { source = {require('./Bild01')}}
     return { id: i, src: 'https://www.sengaa.blog/wp-content/uploads/2016/09/Breaks_Gin-2.png'}
    });
    this.setState({ items });
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
