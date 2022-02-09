/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Px } from './posize';
import ScanButton from './ScanButton';

export default function OCR_Page(props) {
  return (
    <ImageBackground
      style={[styles.block, styles.block_layout]}
      source={require('../assets/e54b8dfe285249b01b1ac9f5f05bec52.png')}
      resizeMode="cover">
      <View style={styles.block_item}>
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
                    x="0px 40px 0px"
                    y="0px minmax(0px, max-content) 0px"
                    style={styles.cover_block3}
                    aspectRatio={1}
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
              <ImageBackground
                style={[styles.searchIcon, styles.searchIcon_layout]}
                source={require('../assets/95e33d8dcb8a97142a587be2b7086935.png')}
              />
            </View>
          </Px.View>
        </Px.View>
      </View>
      <View style={styles.block_item}>
        <Px.ImageBackground
          x="62fr 75px 211fr"
          y="111px 25px 0px"
          style={styles.oCRname}
          source={require('../assets/46e9fcb149364a40edbebd477fd73651.png')}
        />
      </View>
      <View style={styles.block_item}>
        <View style={[styles.scanFrame, styles.scanFrame_layout]} />
      </View>
      <View style={styles.block_item}>
        <Px.View
          x="99fr 148fr 101fr"
          y="70px minmax(0px, max-content) 0px"
          style={styles.scan_button}>
          <ScanButton />
        </Px.View>
      </View>
      <View style={styles.block_space} />
      <View style={styles.block_item}>
        <Px.View
          x="33px 282fr 33px"
          y="9px minmax(0px, max-content) 12px"
          style={styles.bottomBar}>
          <View style={styles.bottomBar_item}>
            <Px.Image
              x="0px 55px 12px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.img}
              aspectRatio={1.1956521739130435}
              source={require('../assets/4cc57317f545f27def93230bca381a8a.png')}
            />
          </View>
          <View style={styles.bottomBar_item1}>
            <Px.Image
              x="24px 25px 25.5px"
              y="2px minmax(0px, max-content) 0px"
              style={styles.img}
              aspectRatio={0.5681818181818182}
              source={require('../assets/b89a2b85c436f4a1fb2c4fb94f1ea0ed.png')}
            />
          </View>
          <View style={styles.bottomBar_item2}>
            <Px.Image
              x="9px 58px 17.5px"
              y="3px minmax(0px, max-content) 0px"
              style={styles.img}
              aspectRatio={1.3488372093023255}
              source={require('../assets/6b101244c9e6efc0f0190e4f03d86a19.png')}
            />
          </View>
          <View style={styles.bottomBar_item3}>
            <Px.Image
              x="8px 42px 6px"
              y="2px minmax(0px, max-content) 0px"
              style={styles.img}
              aspectRatio={0.9545454545454546}
              source={require('../assets/15f7b3bc1e1631e18cdb0b9236de62d1.png')}
            />
          </View>
        </Px.View>
      </View>
    </ImageBackground>
  );
}

OCR_Page.inStorybook = true;
OCR_Page.fitScreen = false;
OCR_Page.scrollHeight = 728;

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  block_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  block_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  topBar: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#ffffffff'
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
    minWidth: 0
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
  },
  searchIcon_layout: {
    marginTop: 11,
    height: 18,
    marginBottom: 15,
    marginLeft: 17,
    width: 18,
    minWidth: 18,
    marginRight: 20
  },
  oCRname: {
    flexGrow: 1,
    resizeMode: 'contain'
  },
  scanFrame: {
    backgroundColor: '#c4c4c4ff'
  },
  scanFrame_layout: {
    marginTop: 18,
    height: 230,
    width: 224,
    minWidth: 224,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  scan_button: {
    width: '100%'
  },
  block_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 103
  },
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
  img: {
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
