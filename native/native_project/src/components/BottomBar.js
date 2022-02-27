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
  Alert,
  NativeModules
} from 'react-native';
import { Px } from './posize';


export default function BottomBar(props) {
  return (
    <Px.View
      x="0px 282fr 0px"
      y="0px minmax(0px, max-content) 0px"
      style={styles.bottomBar}>
      <View style={styles.bottomBar_item}>
        <Px.Pressable
          x="0px 65fr 0px"
          y="0px minmax(0px, max-content) 0px"
          style={styles.flex}
          onPress={() => props.navigation.navigate('Main')}>
          <View style={styles.flex_item}>
            <ImageBackground
              style={[styles.img, styles.img_layout]}
              source={require('../assets/28437159809aa6bc9073d761fca53921.png')}
            />
          </View>
          <View style={styles.flex_item}>
            <Px.View
              x="0px 65fr 0px"
              y="5px minmax(0px, max-content) 0px"
              style={styles.txt_box}>
              <Text style={styles.txt} ellipsizeMode={'clip'}>
                {'overview'}
              </Text>
            </Px.View>
          </View>
        </Px.Pressable>
      </View>
      
      <View style={styles.bottomBar_item}>
        <Px.Pressable
          x="0px 65fr 0px"
          y="0px minmax(0px, max-content) 0px"
          style={styles.flex1}
          onPress={() => props.navigation.navigate('NewItem',{article:"Artical Name",price:"Price",shop:"Shop",city:"City"})}>

          <View style={styles.flex1_item}>
            <Px.Image
              style={[styles.img, styles.img_layout]}
              source={require('../assets/d19b3bcb3d42893369c50341b6408dc7.png')}
            />
          </View>
          <View style={styles.flex1_item}>
            <Px.View
              x="0px 27fr 0px"
              y="5px minmax(0px, max-content) 0px"
              style={styles.txt_box}>
              <Text style={styles.txt} ellipsizeMode={'clip'}>
                {'add'}
              </Text>
            </Px.View>
          </View>
        </Px.Pressable>
      </View>
      <View style={styles.bottomBar_item}>
        <Px.Pressable
          x="0px 67fr 0px"
          y="0px minmax(0px, max-content) 0px"
          style={styles.flex2}
          onPress={() => props.navigation.navigate('Statistics')}>
          <View style={styles.flex2_item}>
            <Px.Image
              style={[styles.img, styles.img_layout]}
              source={require('../assets/79ac0ecc3dae584df5fd1a6ad01f4323.png')}
            />
          </View>
          <View style={styles.flex2_item}>
            <Px.View
              x="0px 67fr 0px"
              y="5px minmax(0px, max-content) 0px"
              style={styles.txt_box}>
              <Text style={styles.txt} ellipsizeMode={'clip'}>
                {'Statistics'}
              </Text>
            </Px.View>
          </View>
        </Px.Pressable>
      </View>
      <View style={styles.bottomBar_item}>
        <Px.Pressable
          x="0px 52fr 0px"
          y="0px minmax(0px, max-content) 0px"
          style={styles.flex3}
          onPress={() => props.navigation.navigate('Profile')}>
          <View style={styles.flex3_item}>
            <Px.Image
              style={[styles.img, styles.img_layout]}
              source={require('../assets/271dce5dd7939fef6e98e309e2c38f68.png')}
            />
          </View>
          <View style={styles.flex3_item}>
            <Px.View
              x="0px 52fr 0px"
              y="5px minmax(0px, max-content) 0px"
              style={styles.txt_box}>
              <Text style={styles.txt} ellipsizeMode={'clip'}>
                {'profile'}
              </Text>
            </Px.View>
          </View>
        </Px.Pressable>
      </View>
    </Px.View>
  );
}

BottomBar.inStorybook = true;
BottomBar.fitScreen = false;
BottomBar.scrollHeight = 46;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    flexBasis: 65
  },
  flex: {
    flexGrow: 1
  },
  flex_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    marginTop: 0,
    height: 24,
    marginBottom: 0,
    marginLeft: 20,
    width: 24,
    minWidth: 24,
    marginRight: 21
  },
  txt: {
    color: '#888888ff',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'System' /* Montserrat */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  bottomBar_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 27
  },
  flex1: {
    flexGrow: 1
  },
  flex1_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  cover_group: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'contain'
  },
  txt: {
    color: '#888888ff',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'System' /* Montserrat */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  bottomBar_item2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 67
  },
  flex2: {
    flexGrow: 1
  },
  flex2_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  cover_block1: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'contain'
  },
  txt: {
    color: '#888888ff',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'System' /* Montserrat */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  bottomBar_item3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 52
  },
  flex3: {
    flexGrow: 1
  },
  flex3_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  cover_block: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'contain'
  },
  txt: {
    color: '#888888ff',
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'System' /* Montserrat */,
    paddingHorizontal: 0,
    paddingVertical: 0
  }
});
