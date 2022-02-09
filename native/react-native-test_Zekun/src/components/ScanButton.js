/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Px } from './posize';

export default function ScanButton(props) {
  return (
    <Px.ImageBackground
      x="0px 148fr 0px"
      y="0px minmax(0px, max-content) 0px"
      style={styles.scan_button}
      source={require('../assets/1ecd0d62563fcb122455f954f3c58dd1.png')}
      resizeMode="contain">
      <Px.View
        x="0px 148fr 0px"
        y="9px minmax(0px, max-content) 9px"
        style={styles.subtitle_box}>
        <Text style={styles.subtitle} ellipsizeMode={'clip'}>
          {'Scan'}
        </Text>
      </Px.View>
    </Px.ImageBackground>
  );
}

ScanButton.inStorybook = true;
ScanButton.fitScreen = false;
ScanButton.scrollHeight = 44;

const styles = StyleSheet.create({
  scan_button: {
    width: '100%',
    flexGrow: 1,
    borderRadius: 6
  },
  subtitle: {
    color: '#ffffffff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 25.78125,
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  subtitle_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
