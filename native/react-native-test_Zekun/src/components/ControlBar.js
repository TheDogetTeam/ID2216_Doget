/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Px } from './posize';

export default function ControlBar(props) {
  return (
    <Px.View
      x="0px 348fr 0px"
      y="0px minmax(0px, max-content) 0px"
      style={styles.block2}>
      <Px.View
        x="17px 314fr 17px"
        y="15px minmax(0px, max-content) 15px"
        style={styles.flex22}>
        <View style={styles.flex22_item}>
          <ImageBackground
            style={[styles.image9, styles.image9_layout]}
            source={require('../assets/5e1eb6e0173986ce11dc785fd88093ed.png')}
          />
        </View>
        <View style={styles.flex22_item1}>
          <ImageBackground
            style={[styles.image10, styles.image10_layout]}
            source={require('../assets/08287628cd79e6874619037e66468e8b.png')}
          />
        </View>
        <View style={styles.flex22_space} />
        <View style={styles.flex22_item2}>
          <ImageBackground
            style={[styles.icon, styles.icon_layout]}
            source={require('../assets/002a169a9f76fbdab63da6661b476248.png')}
          />
        </View>
        <View style={styles.flex22_item3}>
          <ImageBackground
            style={[styles.image12, styles.image12_layout]}
            source={require('../assets/7f305ed82fee24b759f8d95047b243f4.png')}
          />
        </View>
        <View style={styles.flex22_item4}>
          <ImageBackground
            style={[styles.image13, styles.image13_layout]}
            source={require('../assets/e143e094b08f7595371d898990396aa0.png')}
          />
        </View>
      </Px.View>
    </Px.View>
  );
}

ControlBar.inStorybook = true;
ControlBar.fitScreen = false;
ControlBar.scrollHeight = 48;

const styles = StyleSheet.create({
  block2: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#ffffffff',
    overflow: 'hidden'
  },
  flex22: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex22_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 73
  },
  image9: {
    resizeMode: 'contain'
  },
  image9_layout: {
    marginTop: 3,
    height: 11,
    marginBottom: 4,
    marginLeft: 0,
    width: 73,
    minWidth: 73,
    marginRight: 0
  },
  flex22_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 26
  },
  image10: {
    resizeMode: 'contain'
  },
  image10_layout: {
    marginTop: 6,
    height: 5,
    marginBottom: 7,
    marginLeft: 10,
    width: 10,
    minWidth: 10,
    marginRight: 6
  },
  flex22_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 62
  },
  flex22_item2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 41
  },
  icon: {
    resizeMode: 'contain'
  },
  icon_layout: {
    marginTop: 0,
    height: 18,
    marginBottom: 0,
    marginLeft: 9,
    width: 18,
    minWidth: 18,
    marginRight: 14
  },
  flex22_item3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 52
  },
  image12: {
    resizeMode: 'contain'
  },
  image12_layout: {
    marginTop: 1,
    height: 16,
    marginBottom: 1,
    marginLeft: 16,
    width: 18,
    minWidth: 18,
    marginRight: 18
  },
  flex22_item4: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 60
  },
  image13: {
    resizeMode: 'contain'
  },
  image13_layout: {
    marginTop: 4,
    height: 10,
    marginBottom: 4,
    marginLeft: 15,
    width: 41,
    minWidth: 41,
    marginRight: 4
  }
});
