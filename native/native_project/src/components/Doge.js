/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Pressable,
  Alert
} from 'react-native';
import { Px } from './posize';

export default function Doge(props) {
  return (
    // <Pressable
    //   id={'Doge'}
    //   style={[styles.flex, styles.flex_layout]}
    //   onPress={() => props.navigation.navigate('Main')}>
    <View style={[styles.flex, styles.flex_layout]}>
      <View style={styles.flex_item}>
        <ImageBackground
          style={[styles.image6, styles.image6_layout]}
          source={require('../assets/2f25626dc12d950f840b873a48c2574a.png')}
        />
      </View>
      <View style={styles.flex_item1}>
        <Px.View
          x="7px 144fr 0px"
          y="70px minmax(0px, max-content) 57px"
          style={styles.highlights_box}>
          <Text style={styles.highlights} ellipsizeMode={'clip'}>
            {'“Your Doge Is Hyped. Same as your Economy”'}
          </Text>
        </Px.View>
      </View>
    {/* </Pressable> */}
    </View>
  );
}

Doge.inStorybook = true;
Doge.fitScreen = false;
Doge.scrollHeight = 185;

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row'
  },
  flex_layout: {
    marginTop: 0,
    height: 185,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 186
  },
  image6: {
    resizeMode: 'contain'
  },
  image6_layout: {
    marginTop: 0,
    height: 170,
    width:170,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex_item1: {
    flexGrow: 1,
    flexShrink: 1,
    top: 5,
    minWidth: 144
  },
  highlights: {
    color: '#000000ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 19.2,
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'italic',
    fontFamily: 'System' /* Inter */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  highlights_box: {
    flexGrow: 1,
    flexDirection: 'row',
    width:160,
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
});
