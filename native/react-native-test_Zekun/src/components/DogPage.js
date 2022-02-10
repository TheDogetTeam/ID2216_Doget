/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import TopBar from './TopBar';
import { Px } from './posize';
import Doge from './Doge';
import ControlBar from './ControlBar';
import Items from './Items';
import BottomBar from './BottomBar';

export default function DogPage(props) {
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
          y="0px minmax(0px, max-content) 0px"
          style={styles.block1}>
          <View style={styles.block1_item}>
            <View style={[styles.flex, styles.flex_layout]}>
              <Doge />
            </View>
          </View>
          <View style={styles.block1_item}>
            <View style={[styles.block2, styles.block2_layout]}>
              <ControlBar
                icon={require('../assets/002a169a9f76fbdab63da6661b476248.png')}
                image10={require('../assets/7f305ed82fee24b759f8d95047b243f4.png')}
                image9={require('../assets/840332be457abd5413fb61386cc1752f.png')}
              />
            </View>
          </View>
          <View style={styles.block1_item}>
            <Px.View
              x="0px 348fr 0px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.cover_block2}>
              <Items
                icon7={require('../assets/a3e57bb31942d19207b892dd473b2064.png')}
                image14={require('../assets/58657a5c9395bf2a374e39d3b2585bf2.png')}
                image15={require('../assets/9887330e8526266c816e3508b1b5b8da.png')}
                image16={require('../assets/11af3806068c3f832180ea6c53b04b2b.png')}
                line={'#e9ecedff'}
                line1={'#e9ecedff'}
                small_text_body1={'Left:'}
                small_text_body2={'$100'}
                text_body={'$20'}
                text_body1={'-$10'}
              />
            </Px.View>
          </View>
        </Px.View>
      </View>
      <View style={styles.block_space} />
      <View style={styles.block_item}>
        <View style={[styles.component, styles.component_layout]}>
          <BottomBar />
        </View>
      </View>
    </ImageBackground>
  );
}

DogPage.inStorybook = true;
DogPage.fitScreen = true;
DogPage.scrollHeight = 728;

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
  block1: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  block1_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex: {},
  flex_layout: {
    marginTop: 0,
    height: 185,
    marginBottom: 9,
    marginLeft: 10,
    flexGrow: 1,
    marginRight: 1
  },
  block2: {},
  block2_layout: {
    marginTop: 1,
    height: 48,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_block2: {
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
