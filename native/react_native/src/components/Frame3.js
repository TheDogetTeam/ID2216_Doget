/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';

export default function Frame3(props) {
  return (
    <ImageBackground
      style={[styles.block, styles.block_layout]}
      source={require('../assets/0296e5ad5b53fed60be71dacb6667bc3.png')}
      resizeMode="contain"
    />
  );
}

Frame3.inStorybook = true;
Frame3.fitScreen = false;
Frame3.scrollHeight = 728;

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#ffffff',
    borderRadius: 20
  },
  block_layout: {
    marginTop: 0,
    marginBottom: 0,
    minHeight: 728,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  }
});
