import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Px } from './posize';

export default function TopBar(props) {
  return (
    <View style={[styles.topBar, styles.topBar_layout]}>
      <Px.View x="8px 332fr 8px" y="8px minmax(0px, max-content) 8px" style={styles.flex}>
        <View style={styles.flex_item}>
          <Px.Image x="0px 40px 10px" y="0px minmax(0px, max-content) 4px" style={styles.cover_block3} aspectRatio={1} source={require('../assets/761f0ba9cda5a7b6b48465c1fa887473.png')} />
        </View>
        <View style={styles.flex_item1}>
          <Px.View x="8.5px 93fr 11px" y="0px minmax(0px, max-content) 10px" style={styles.big_title_box}>
            <Text style={styles.big_title} ellipsizeMode={'clip'}>
              {'Doget'}
            </Text>
          </Px.View>
        </View>
        <View style={styles.flex_space} />
        <View style={styles.flex_item2}>
          <Px.Image
            
            x="21px 18px 0px"
            y="11px minmax(0px, max-content) 15px"
            style={styles.searchIcon}
            onPress={() => Alert.alert('click')}
            aspectRatio={1}
            source={require('../assets/95e33d8dcb8a97142a587be2b7086935.png')}
            container={TouchableOpacity}
          />
        </View>
      </Px.View>
    </View>
  );
}

TopBar.inStorybook = true;
TopBar.fitScreen = false;
TopBar.scrollHeight = 60;

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#ffffffff'
  },
  topBar_layout: {
    marginTop: 0,
    height: 60,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  flex_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 50
  },
  cover_block3: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'contain'
  },
  flex_item1: {
    flexGrow: 0,
    flexShrink: 1,
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
  flex_space: {
    flexGrow: 1,
    flexShrink: 1
  },
  flex_item2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 59
  },
  searchIcon: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'contain'
  }
});
