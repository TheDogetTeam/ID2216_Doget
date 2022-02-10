/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Px } from './posize';

export default function BottomBar(props) {
  return (
    <Px.View
      x="0px 282fr 0px"
      y="0px minmax(0px, max-content) 0px"
      style={styles.bottomBar}>
      <View style={styles.bottomBar_item}>
        <Px.Image
          x="0px 55px 12px"
          y="0px minmax(0px, max-content) 0px"
          id="overviewicon"
          style={styles.overview}
          onPress={() => Alert.alert('click')}
          aspectRatio={1.1956521739130435}
          source={require('../assets/4cc57317f545f27def93230bca381a8a.png')}
          container={TouchableOpacity}
        />
      </View>
      <View style={styles.bottomBar_item1}>
        <Px.Image
          x="24px 25px 25.5px"
          y="2px minmax(0px, max-content) 0px"
          id="addicon"
          style={styles.img}
          onPress={() => Alert.alert('click')}
          aspectRatio={0.5681818181818182}
          source={require('../assets/b89a2b85c436f4a1fb2c4fb94f1ea0ed.png')}
          container={TouchableOpacity}
        />
      </View>
      <View style={styles.bottomBar_item2}>
        <Px.Image
          x="9px 58px 17.5px"
          y="3px minmax(0px, max-content) 0px"
          id="statisticicon"
          style={styles.img}
          onPress={() => Alert.alert('click')}
          aspectRatio={1.3488372093023255}
          source={require('../assets/6b101244c9e6efc0f0190e4f03d86a19.png')}
          container={TouchableOpacity}
        />
      </View>
      <View style={styles.bottomBar_item3}>
        <Px.Image
          x="8px 42px 6px"
          y="2px minmax(0px, max-content) 0px"
          id="profileicon"
          style={styles.img}
          onPress={() => Alert.alert('click')}
          aspectRatio={0.9545454545454546}
          source={require('../assets/15f7b3bc1e1631e18cdb0b9236de62d1.png')}
          container={TouchableOpacity}
        />
      </View>
    </Px.View>
  );
}

BottomBar.inStorybook = true;
BottomBar.fitScreen = false;
BottomBar.scrollHeight = 46;

const styles = StyleSheet.create({
  bottomBar: {
    flexGrow: 1,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottomBar_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 67
  },
  overview: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'contain'
  },
  bottomBar_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 74.5
  },
  img: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'contain'
  },
  bottomBar_item2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 84.5
  },
  bottomBar_item3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 56
  }
});
