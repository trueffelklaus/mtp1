import React from 'react';
import {Text, View, Button, Image} from 'react-native';

export default class UserProfile extends React.Component {
  static navigationOptions = {
    title: 'User Profile',
  }

  render() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Profile</Text>
    </View>
  }
}
