/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Px } from './posize';

export default function TopBar(props) {
  return (
    <Px.View
      x="0px 348fr 0px"
      y="0px minmax(0px, max-content) 0px"
      style={styles.topBar}>
      <Px.View
        x="8px 332fr 8px"
        y="8px minmax(0px, max-content) 8px"
        style={styles.flex}>
        <View style={styles.flex_item}>
          <Px.View
            x="0px 277fr 0px"
            y="0px minmax(0px, max-content) 4px"
            style={styles.nA_Doget}>
            <View style={styles.nA_Doget_item}>
              <Px.Image
                style={[styles.img, styles.img_layout]}
                source={require('../assets/761f0ba9cda5a7b6b48465c1fa887473.png')}
              />
            </View>
            <View style={styles.nA_Doget_space} />
            <View style={styles.nA_Doget_item1}>
              <Px.View
                x="0px 93fr 0px"
                y="0px minmax(0px, max-content) 6px"
                style={styles.big_title_box}>
                <Text style={styles.big_title} ellipsizeMode={'clip'}>
                  {'Doget'}
                </Text>
              </Px.View>
            </View>
          </Px.View>
        </View>
        <View style={styles.flex_item1}>
          <Px.ImageBackground
            x="17px 18px 20px"
            y="11px 18px 15px"
            style={styles.searchIcon}
            onPress={() => Alert.alert('click')}
            source={require('../assets/95e33d8dcb8a97142a587be2b7086935.png')}
            container={TouchableOpacity}
          />
        </View>
      </Px.View>
    </Px.View>
  );
}

TopBar.inStorybook = true;
TopBar.fitScreen = false;
TopBar.scrollHeight = 60;

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#ffffffff'
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    marginTop: 0,
    height: 40,
    marginBottom: 0,
    marginLeft: 20,
    width: 30,
    minWidth: 30,
    marginRight: 21
  },

  flex: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 277
  },
  nA_Doget: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  nA_Doget_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 40
  },
  cover_block3: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'contain'
  },
  nA_Doget_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 18.5
  },
  nA_Doget_item1: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0,
    left: 10,
    top: 2
  },
  big_title: {
    color: '#553891ff',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 33.6,
    fontSize: 28,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Suez One */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  big_title_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  flex_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 55
  },
  searchIcon: {
    resizeMode: 'contain'
  }
});
