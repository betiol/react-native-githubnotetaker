import React from 'react-native';


import {
  Text,
  View,

} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component {
  render() {
    return (
      <View srtle={styles.container}>
        <Text> This is the Dashboard</Text>
      </View>
    )
  }
};


module.exports = Dashboard;
