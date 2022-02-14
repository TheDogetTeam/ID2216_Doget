import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, Alert } from 'react-native';
import { Px } from './posize';

export default function ScanButton(props) {
  return (
    <ImageBackground style={[styles.scan_button, styles.scan_button_layout]} source={require('../assets/1ecd0d62563fcb122455f954f3c58dd1.png')} resizeMode="contain">
      <View style={styles.scan_button_item}>
        <Px.Pressable 
        x="0px 148fr 0px" 
        y="9px minmax(0px, max-content) 9px" 
        tyle={styles.subtitle_box} 
        onPress={() => props.navigation.navigate('NewItem')}>
          <Text style={styles.subtitle} ellipsizeMode={'clip'}>
            {'Scan'}
          </Text>
        </Px.Pressable>
      </View>
    </ImageBackground>
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
  scan_button_layout: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
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
