import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Icon } from 'react-native-elements'

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}>Welcome to React️</Text>
          <Button title="Label" />
          <Icon name="ios-alarm" type="ionicon" color="white" />
        </View>
        <Text style={styles.appIntro}>Hello World!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  appHeader: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 16,
    color: 'white',
  },
  appIntro: {
    flex: 2,
    fontSize: 30,
    textAlign: 'center',
  },
})
