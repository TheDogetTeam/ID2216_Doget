/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import TopBar from './TopBar';
import { Px } from './posize';
import Overview from './Overview';
import ControlBar from './ControlBar';
import Items from './Items';
import BottomBar from './BottomBar';

export default function MainPage(props) {
  return (
    <ImageBackground
      style={[styles.block, styles.block_layout]}
      source={require('../assets/e54b8dfe285249b01b1ac9f5f05bec52.png')}
      resizeMode="cover">
      <View style={styles.block_item}>
        <Px.View
          x="0px 348fr 0px"
          y="0px minmax(0px, max-content) 0px"
          style={styles.content_box}>
          <TopBar big_title={'Doget'} />
        </Px.View>
      </View>
      <View style={styles.block_item}>
        <Px.View
          x="0px 348fr 0px"
          y="5px minmax(0px, max-content) 0px"
          style={styles.block1}>
          <View style={styles.block1_item}>
            <Px.View
              x="14px 320fr 14px"
              y="0px minmax(0px, max-content) 13px"
              style={styles.flex}>
              <Overview />
            </Px.View>
          </View>
          <View style={styles.block1_item}>
            <Px.View
              x="0px 348fr 0px"
              y="1px minmax(0px, max-content) 0px"
              style={styles.block2}>
              <ControlBar />
            </Px.View>
          </View>
          <View style={styles.block1_item}>
            <Px.View
              x="0px 348fr 0px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.cover_block3}>
              <Items />
            </Px.View>
          </View>
        </Px.View>
      </View>
      <View style={styles.block_item}>
        <Px.View
          x="33px 282fr 33px"
          y="2px minmax(0px, max-content) 12px"
          style={styles.flex21}>
          <BottomBar />
        </Px.View>
      </View>
    </ImageBackground>
  );
}

MainPage.inStorybook = true;
MainPage.fitScreen = false;
MainPage.scrollHeight = 728;

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
  },
  block_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  content_box: {
    width: '100%'
  },
  block1: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  block1_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex: {
    width: '100%'
  },
  block2: {
    width: '100%'
  },
  cover_block3: {
    width: '100%'
  },
  flex21: {
    width: '100%'
  }
});
