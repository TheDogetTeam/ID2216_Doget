/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import TopBar from './TopBar';
import { Px } from './posize';
import ScanButton from './ScanButton';
import BottomBar from './BottomBar';

export default function OCR_Page(props) {
  return (
    <ImageBackground
      id={'ocrpage'}
      style={[styles.block, styles.block_layout]}
      source={require('../assets/e54b8dfe285249b01b1ac9f5f05bec52.png')}
      resizeMode="cover">
      <View style={styles.block_item}>
        <View style={[styles.topBar, styles.topBar_layout]}>
          <TopBar />
        </View>
      </View>
      <View style={styles.block_item}>
        <Px.View
          x="62fr 224px 62fr"
          y="111px minmax(0px, max-content) 0px"
          style={styles.flex}>
          <View style={styles.flex_item}>
            <Px.Image
              x="0px 75px 149px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.oCRname}
              aspectRatio={3}
              source={require('../assets/46e9fcb149364a40edbebd477fd73651.png')}
            />
          </View>
          <View style={styles.flex_item}>
            <View style={[styles.scanFrame, styles.scanFrame_layout]} />
          </View>
          <View style={styles.flex_item}>
            <View style={[styles.scan_button, styles.scan_button_layout]}>
              <ScanButton />
            </View>
          </View>
        </Px.View>
      </View>
      <View style={styles.block_space} />
      <View style={styles.block_item}>
        <View style={[styles.bottomBar, styles.bottomBar_layout]}>
          <BottomBar />
        </View>
      </View>
    </ImageBackground>
  );
}

OCR_Page.inStorybook = true;
OCR_Page.fitScreen = true;
OCR_Page.scrollHeight = 728;

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center'
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
  topBar: {},
  topBar_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex: {
    flexGrow: 1
  },
  flex_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  oCRname: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'contain'
  },
  scanFrame: {
    backgroundColor: '#c4c4c4ff'
  },
  scanFrame_layout: {
    marginTop: 18,
    height: 230,
    marginBottom: 0,
    marginLeft: 0,
    width: 224,
    minWidth: 224,
    marginRight: 0
  },
  scan_button: {},
  scan_button_layout: {
    marginTop: 70,
    marginBottom: 0,
    marginLeft: 37,
    width: 148,
    minWidth: 148,
    marginRight: 39
  },
  block_space: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 112
  },
  bottomBar: {},
  bottomBar_layout: {
    marginTop: 0,
    marginBottom: 12,
    marginLeft: 33,
    flexGrow: 1,
    marginRight: 33
  }
});
