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
  Alert
} from 'react-native';
import { Px } from './posize';

export default function Categories(props) {
  return (
    <Px.View
      x="0px 303fr 0px"
      y="0px minmax(0px, max-content) 0px"
      style={styles.flex1}>
      <View style={styles.flex1_item}>
        <Px.View
          x="0px 68fr 7px"
          y="1px minmax(0px, max-content) 0px"
          style={styles.flex2}>
          <View style={styles.flex2_item}>
            <Px.Pressable
              x="11.5px 35fr 21.5px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.flex3}
              onPress={() => Alert.alert('click')}>
              <View style={styles.flex3_item}>
                <ImageBackground
                  style={[styles.icon2, styles.icon2_layout]}
                  source={require('../assets/611df309a2b168a6867b7e34335da106.png')}
                />
              </View>
              <View style={styles.flex3_item}>
                <Px.View
                  x="0px 35fr 0px"
                  y="8px minmax(0px, max-content) 0px"
                  style={styles.small_text_body1_box}>
                  <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                    {'Sport'}
                  </Text>
                </Px.View>
              </View>
            </Px.Pressable>
          </View>
          <View style={styles.flex2_item}>
            <Px.Pressable
              x="0px 68fr 0px"
              y="14px minmax(0px, max-content) 0px"
              style={styles.flex4}
              onPress={() => Alert.alert('click')}>
              <View style={styles.flex4_item}>
                <ImageBackground
                  style={[styles.icon2, styles.icon2_layout1]}
                  source={require('../assets/2f26d94934d9d899c40cce3e225b45ed.png')}
                />
              </View>
              <View style={styles.flex4_item}>
                <Px.View
                  x="0px 68fr 0px"
                  y="9px minmax(0px, max-content) 0px"
                  style={styles.small_text_body1_box}>
                  <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                    {'Restaurant'}
                  </Text>
                </Px.View>
              </View>
            </Px.Pressable>
          </View>
          <View style={styles.flex2_item}>
            <Px.Pressable
              x="9.5px 43fr 15.5px"
              y="12px minmax(0px, max-content) 0px"
              style={styles.flex5}
              onPress={() => Alert.alert('click')}>
              <View style={styles.flex5_item}>
                <ImageBackground
                  style={[styles.icon2, styles.icon2_layout2]}
                  source={require('../assets/bd8d75712da3713d1b20a6479e2a6ade.png')}
                />
              </View>
              <View style={styles.flex5_item}>
                <Px.View
                  x="0px 43fr 0px"
                  y="7px minmax(0px, max-content) 0px"
                  style={styles.small_text_body1_box}>
                  <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                    {'Others'}
                  </Text>
                </Px.View>
              </View>
            </Px.Pressable>
          </View>
        </Px.View>
      </View>
      <View style={styles.flex1_item1}>
        <Px.View
          x="8.5px 60fr 15px"
          y="1px minmax(0px, max-content) 0px"
          style={styles.flex6}>
          <View style={styles.flex6_item}>
            <Px.Pressable
              x="0px 60fr 0px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.flex7}
              onPress={() => Alert.alert('click')}>
              <View style={styles.flex7_item}>
                <ImageBackground
                  style={[styles.icon2, styles.icon2_layout3]}
                  source={require('../assets/693d4b7ea32786b64267cad01e32af81.png')}
                />
              </View>
              <View style={styles.flex7_item}>
                <Px.View
                  x="0px 60fr 0px"
                  y="9px minmax(0px, max-content) 0px"
                  style={styles.small_text_body1_box}>
                  <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                    {'Shopping'}
                  </Text>
                </Px.View>
              </View>
            </Px.Pressable>
          </View>
          <View style={styles.flex6_item}>
            <Px.Pressable
              x="2px 49fr 9px"
              y="13px minmax(0px, max-content) 0px"
              style={styles.flex8}
              onPress={() => Alert.alert('click')}>
              <View style={styles.flex8_item}>
                <ImageBackground
                  style={[styles.icon2, styles.icon2_layout4]}
                  source={require('../assets/dd7c5ae566fe1390b0808724ab980a38.png')}
                />
              </View>
              <View style={styles.flex8_item}>
                <Px.View
                  x="0px 49fr 0px"
                  y="9px minmax(0px, max-content) 0px"
                  style={styles.small_text_body1_box}>
                  <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                    {'Grocery'}
                  </Text>
                </Px.View>
              </View>
            </Px.Pressable>
          </View>
          <View style={styles.flex6_item}>
            <Px.Pressable
              x="5.5px 48fr 6.5px"
              y="10px minmax(0px, max-content) 0px"
              style={styles.flex9}
              onPress={() => Alert.alert('click')}>
              <View style={styles.flex9_item}>
                <ImageBackground
                  style={[styles.icon7, styles.icon7_layout]}
                  source={require('../assets/b4b62e3148760042676c35f7ec330a6a.png')}
                />
              </View>
              <View style={styles.flex9_item}>
                <Px.View
                  x="0px 48fr 0px"
                  y="9px minmax(0px, max-content) 0px"
                  style={styles.small_text_body1_box}>
                  <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                    {'Custom'}
                  </Text>
                </Px.View>
              </View>
            </Px.Pressable>
          </View>
        </Px.View>
      </View>
      <View style={styles.flex1_item2}>
        <Px.View
          x="10px 41fr 19.5px"
          y="0px minmax(0px, max-content) 55px"
          style={styles.flex10}>
          <View style={styles.flex10_item}>
            <Px.Pressable
              x="0px 41fr 0px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.flex11}
              onPress={() => Alert.alert('click')}>
              <View style={styles.flex11_item}>
                <ImageBackground
                  style={[styles.icon2, styles.icon2_layout5]}
                  source={require('../assets/3edfa36a7a616c2d1e7126ec79ed4d78.png')}
                />
              </View>
              <View style={styles.flex11_item}>
                <Px.View
                  x="0px 41fr 0px"
                  y="9px minmax(0px, max-content) 0px"
                  style={styles.small_text_body1_box}>
                  <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                    {'Phone'}
                  </Text>
                </Px.View>
              </View>
            </Px.Pressable>
          </View>
          <View style={styles.flex10_item}>
            <Px.Pressable
              x="0px 39fr 2px"
              y="18px minmax(0px, max-content) 0px"
              style={styles.flex12}
              onPress={() => Alert.alert('click')}>
              <View style={styles.flex12_item}>
                <Px.ImageBackground
                  x="5px 24fr 10px"
                  y="0px minmax(0px, max-content) 0px"
                  style={styles.cover_block}
                  source={require('../assets/9fc7da2024745b0668a78d94dd06139c.png')}
                  resizeMode="contain">
                  <View style={styles.cover_block_item}>
                    <ImageBackground
                      style={[styles.image9, styles.image9_layout]}
                      source={require('../assets/0b17d5b88267072a35b615bbd1d74981.png')}
                    />
                  </View>
                  <View style={styles.cover_block_item}>
                    <ImageBackground
                      style={[styles.image8, styles.image8_layout]}
                      source={require('../assets/20dda82ff9db64ca004fb28e89027027.png')}
                    />
                  </View>
                </Px.ImageBackground>
              </View>
              <View style={styles.flex12_item}>
                <Px.View
                  x="0px 39fr 0px"
                  y="5px minmax(0px, max-content) 0px"
                  style={styles.small_text_body1_box}>
                  <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                    {'Utility'}
                  </Text>
                </Px.View>
              </View>
            </Px.Pressable>
          </View>
        </Px.View>
      </View>
      <View style={styles.flex1_item3}>
        <Px.View
          x="14px 60fr 0px"
          y="0px minmax(0px, max-content) 55px"
          style={styles.flex13}>
          <View style={styles.flex13_item}>
            <Px.Pressable
              x="0px 60fr 0px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.flex14}
              onPress={() => Alert.alert('click')}>
              <View style={styles.flex14_item}>
                <ImageBackground
                  style={[styles.icon2, styles.icon2_layout6]}
                  source={require('../assets/61d7497669827dca075c4045d0db34cc.png')}
                />
              </View>
              <View style={styles.flex14_item}>
                <Px.View
                  x="0px 60fr 0px"
                  y="10px minmax(0px, max-content) 0px"
                  style={styles.small_text_body1_box}>
                  <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                    {'Transport'}
                  </Text>
                </Px.View>
              </View>
            </Px.Pressable>
          </View>
          <View style={styles.flex13_item}>
            <Px.Pressable
              x="9.5px 35fr 15.5px"
              y="13px minmax(0px, max-content) 0px"
              style={styles.flex15}
              onPress={() => Alert.alert('click')}>
              <View style={styles.flex15_item}>
                <ImageBackground
                  style={[styles.icon2, styles.icon2_layout]}
                  source={require('../assets/06440e821ad6443257bbac51dfc5f762.png')}
                />
              </View>
              <View style={styles.flex15_item}>
                <Px.View
                  x="0px 35fr 0px"
                  y="9px minmax(0px, max-content) 0px"
                  style={styles.small_text_body1_box}>
                  <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                    {'RENT'}
                  </Text>
                </Px.View>
              </View>
            </Px.Pressable>
          </View>
        </Px.View>
      </View>
    </Px.View>
  );
}

Categories.inStorybook = true;
Categories.fitScreen = false;
Categories.scrollHeight = 159;

const styles = StyleSheet.create({
  flex1: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  flex1_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 75
  },
  flex2: {
    flexGrow: 1
  },
  flex2_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex3: {
    flexGrow: 1
  },
  flex3_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon2: {
    resizeMode: 'contain'
  },
  icon2_layout: {
    marginTop: 0,
    height: 24,
    marginBottom: 0,
    marginLeft: 6,
    width: 24,
    minWidth: 24,
    marginRight: 5
  },
  small_text_body1: {
    color: '#000000ff',
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
  small_text_body1_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  flex4: {
    flexGrow: 1
  },
  flex4_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon2_layout1: {
    marginTop: 0,
    height: 24,
    marginBottom: 0,
    marginLeft: 17.5,
    width: 24,
    minWidth: 24,
    marginRight: 26.5
  },
  small_text_body1: {
    color: '#000000ff',
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
  flex5: {
    flexGrow: 1
  },
  flex5_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon2_layout2: {
    marginTop: 0,
    height: 24,
    marginBottom: 0,
    marginLeft: 11,
    width: 24,
    minWidth: 24,
    marginRight: 8
  },
  small_text_body1: {
    color: '#000000ff',
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
  flex1_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 83.5
  },
  flex6: {
    flexGrow: 1
  },
  flex6_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex7: {
    flexGrow: 1
  },
  flex7_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon2_layout3: {
    marginTop: 0,
    height: 24,
    marginBottom: 0,
    marginLeft: 14,
    width: 24,
    minWidth: 24,
    marginRight: 22
  },
  small_text_body1: {
    color: '#000000ff',
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
  flex8: {
    flexGrow: 1
  },
  flex8_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon2_layout4: {
    marginTop: 0,
    height: 24,
    marginBottom: 0,
    marginLeft: 13,
    width: 24,
    minWidth: 24,
    marginRight: 12
  },
  small_text_body1: {
    color: '#000000ff',
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
  flex9: {
    flexGrow: 1
  },
  flex9_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon7: {
    resizeMode: 'contain'
  },
  icon7_layout: {
    marginTop: 0,
    height: 24,
    marginBottom: 0,
    marginLeft: 11.5,
    width: 25,
    minWidth: 25,
    marginRight: 11.5
  },
  small_text_body1: {
    color: '#000000ff',
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
  flex1_item2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 70.5
  },
  flex10: {
    flexGrow: 1
  },
  flex10_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex11: {
    flexGrow: 1
  },
  flex11_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon2_layout5: {
    marginTop: 0,
    height: 24,
    marginBottom: 0,
    marginLeft: 9,
    width: 24,
    minWidth: 24,
    marginRight: 8
  },
  small_text_body1: {
    color: '#000000ff',
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
  flex12: {
    flexGrow: 1
  },
  flex12_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  cover_block: {
    flexGrow: 1
  },
  cover_block_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  image9: {
    resizeMode: 'contain'
  },
  image9_layout: {
    marginTop: 0,
    height: 10,
    marginBottom: 0,
    marginLeft: 4,
    width: 20,
    minWidth: 20,
    marginRight: 0
  },
  image8: {
    resizeMode: 'contain'
  },
  image8_layout: {
    marginTop: 1,
    height: 5,
    marginBottom: 8,
    marginLeft: 4,
    width: 20,
    minWidth: 20,
    marginRight: 0
  },
  small_text_body1: {
    color: '#000000ff',
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
  flex1_item3: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 74
  },
  flex13: {
    flexGrow: 1
  },
  flex13_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex14: {
    flexGrow: 1
  },
  flex14_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  icon2_layout6: {
    marginTop: 0,
    height: 24,
    marginBottom: 0,
    marginLeft: 13.5,
    width: 24,
    minWidth: 24,
    marginRight: 22.5
  },
  small_text_body1: {
    color: '#000000ff',
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
  flex15: {
    flexGrow: 1
  },
  flex15_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  small_text_body1: {
    color: '#000000ff',
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
