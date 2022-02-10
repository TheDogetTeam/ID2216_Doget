/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Px } from './posize';

export default function ScanButton(props) {
  return (
    <Px.ImageBackground
      x="0px 148fr 0px"
      y="0px minmax(0px, 44fr) 0px"
      style={styles.scan_button}
      onPress={() => Alert.alert('click')}
      source={require('../assets/1ecd0d62563fcb122455f954f3c58dd1.png')}
      container={TouchableOpacity}
      resizeMode="contain">
      <View style={styles.scan_button_item}>
        <Px.View
          x="0px 148fr 0px"
          y="9px minmax(0px, max-content) 9px"
          style={styles.subtitle_box}>
          <Text style={styles.subtitle} ellipsizeMode={'clip'}>
            {'Scan'}
          </Text>
        </Px.View>
      </View>
    </Px.ImageBackground>
  );
}

ScanButton.inStorybook = true;
ScanButton.fitScreen = false;
ScanButton.scrollHeight = 44;

const styles = StyleSheet.create({
  scan_button: {
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  scan_button_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
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
