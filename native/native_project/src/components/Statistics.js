/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, ScrollView } from 'react-native';
import TopBar from './TopBar';
import { Px } from './posize';
import Statistic from './Statistic';
import BottomBar from './BottomBar';

export default function Statistics({navigation}) {
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
        <View style={[styles.flex, styles.flex_layout]}>
          <View style={styles.flex_item}>
            <Px.View
              x="0px 144px 137fr"
              y="0px minmax(0px, max-content) 0px"
              style={styles.big_title1_box}>
              <Text style={styles.big_title1} ellipsizeMode={'clip'}>
                {'Statistics'}
              </Text>
            </Px.View>
          </View>
          <ScrollView style={styles.flex_item}>
            <Px.View
              x="1px 280fr 0px"
              y="28px minmax(0px, max-content) 0px"
              style={styles.flex1}>
              <Statistic />
            </Px.View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.block_space} />
      <View style={styles.block_item}>
        <View style={[styles.component, styles.component_layout]}>
        <BottomBar navigation = {navigation} />
        </View>
      </View>
    </ImageBackground>
  );
}

Statistics.inStorybook = true;
Statistics.fitScreen = true;
Statistics.scrollHeight = 728;

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#ffffff',
    borderRadius: 20
  },
  block_layout: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  block_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  content_box: {
    width: '100%'
  },
  flex: {},
  flex_layout: {
    marginTop: 20,
    height: 538,
    marginBottom: 0,
    marginLeft: 33,
    flexGrow: 1,
    marginRight: 34
  },
  flex_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  big_title1: {
    color: '#576aa9ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 32,
    fontSize: 32,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  big_title1_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  flex1: {
    width: '100%'
  },
  block_space: {
    flexGrow: 1,
    flexShrink: 1
  },
  component: {},
  component_layout: {
    marginTop: 0,
    height: 46,
    marginBottom: 12,
    marginLeft: 33,
    flexGrow: 1,
    marginRight: 39
  }
});
