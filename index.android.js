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
  renderScene(route, navigator) {
    let Component = (route.component) ? route.component : Main;
    return <Component navigator={navigator} {...route.passProps}/>;
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          title: 'Github NoteTaker'}}
        renderScene={this.renderScene.bind(this)} />
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
