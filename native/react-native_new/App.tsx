import { StatusBar } from 'expo-status-bar';
import  Frame3  from './assets/src/components/Frame3'
import  Frame4  from './assets/src/components/Frame4'
import  Frame5  from './assets/src/components/Frame5'
import  Frame7  from './assets/src/components/Frame7'
import  Frame8  from './assets/src/components/Frame8'

import  Test  from './assets/src/components/test'

import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Px } from './posize';

class App extends Component {

  render() {
    return (
     <Frame8 />
    );
  }


/*   return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> 
    
  ); */
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
