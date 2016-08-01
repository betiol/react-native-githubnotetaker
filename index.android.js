/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Main from './App/Components/Main';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

class githubNotetaker extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          title: 'Github Scene',
          index: 1 }}
          renderScene={(route, navigator) =>
          <Main />
        } />
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
