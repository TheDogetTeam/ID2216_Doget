/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Image, ImageBackground, Dimensions} from 'react-native';
import { Px } from './posize';
const win = Dimensions.get('window');


export default function Statistic(props) {
  return (
    <Px.View
      x="0px 280fr 0px"
      y="0px minmax(0px, max-content) 0px"
      style={styles.flex1}>
      <View style={styles.flex1_item}>
        <ImageBackground
          style={[styles.image18, styles.image18_layout]}
          source={require('../assets/421aabc05b2b1f480d218257e09bafdf.png')}
        />
      </View>
      <View style={styles.flex1_item}>
        <ImageBackground
          style={[styles.image12, styles.image12_layout]}
          source={require('../assets/1df63a1f392ab78721cd900a551aac52.png')}
        />
      </View>
    </Px.View>
  );
}

Statistic.inStorybook = true;
Statistic.fitScreen = false;
Statistic.scrollHeight = 478;

const styles = StyleSheet.create({
  flex1: {
    flexGrow: 1
  },
  flex1_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  image18: {
    resizeMode: 'contain',
    paddingTop: 50
  },
  image18_layout: {
    width: win.width/1.3,
    height: win.width/1.5,
    alignSelf: "center",
    borderWidth: 0,
    borderRadius: 20,
  },
  image12: {
    resizeMode: 'contain',
    paddingTop: 50

  },
  image12_layout: {
    top:10,
    width: win.width/1.3,
    height: win.width/1.5,
    alignSelf: "center",
    borderWidth: 0,
    borderRadius: 20,
  }
});
