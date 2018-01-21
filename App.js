/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';
import UserSearch from './app/components/UserSearch';
import UserProfile from './app/components/UserProfile';
import Logout from './app/components/Logout';


const RootDrawer = DrawerNavigator({
  UserSearch: {
    screen: UserSearch,
  },
  UserProfile: {
    screen: UserProfile,
  },
  Logout: {
    screen: Logout,
  },
});
export default RootDrawer;


AppRegistry.registerComponent('mtp1', () => mtp1);
