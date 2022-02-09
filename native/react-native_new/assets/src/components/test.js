/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
 import { StatusBar } from 'expo-status-bar';

 import React, { Component } from 'react'
 import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
 import { Px } from './posize';

 const Test = () => {
   return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> 
   );
 }
 
 export default Test


 Test.inStorybook = true;
 Test.fitScreen = false;
 Test.scrollHeight = 728;


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});