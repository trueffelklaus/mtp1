import React from 'react';
import {Text, View, Button, Image} from 'react-native';

export default class Logout extends React.Component {
  static navigationOptions = {
    title: 'Logout',
  }

  render() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Logout</Text>
    </View>
  }
}
