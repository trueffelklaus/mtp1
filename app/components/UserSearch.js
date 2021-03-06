import React from 'react';
import {Text, View, Button, Image, TouchableOpacity, AppRegistry, StyleSheet, RefreshControl} from 'react-native';
import PhotoGrid from 'react-native-photo-grid';
import PTRView from 'react-native-pull-to-refresh'

export default class UserSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      items: [],
      stateBar: "Static" }; //ich will den Header oben nutzen um mir den aktuellen Zustand anzeigen zu lassen

    }
  static navigationOptions = {
    title: 'User Search',
  }

_onRefresh(){
  this.setState({refreshing: true})
  this.fetchData().then(()=>{
    this.setState({refreshing: false})
  });
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
    <View style={styles.container}>
      <PhotoGrid
        data = { this.state.items }
        itemsPerRow = { 3 }
        itemMargin = { 1 }
        renderHeader = { this.renderHeader }
        renderItem = { this.renderItem }
        RefreshControl={
          <RefreshControl
          refreshing = {this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
          />
          }
      />
    </View>
  );
}

renderHeader() {
    return(
      <Text>'Hallo' //hier soll eigentlich this.state.stateBar kommen
      </Text>
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

 //hier wird der View Container definiert, sonst zeigt es nix an
 const styles = StyleSheet.create({
	container:{
		 flex: 1,
        flexDirection: 'column',
		justifyContent: 'center'


	}
})
