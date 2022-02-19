/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Pressable, Alert } from 'react-native';
import { Px } from './posize';

export default function Overview(props) {
  return (
    <View
      style={[styles.flex, styles.flex_layout]}
      // onPress={() => props.navigation.navigate('DogPage')}
      >
      <View style={styles.flex_item}>
        <Px.Image
          style={styles.cover_group1}
          aspectRatio={1}
          source={require('../assets/21e04622107cf3a329ece76f3276955a.png')}
        />
      </View>
      <View style={styles.flex_item1}>
        <Px.View
          x="9px 142fr 0px"
          y="0px minmax(0px, max-content) 0px"
          style={styles.cover_block4}>
          <Px.View
            x="6px 130fr 6px"
            y="10px minmax(0px, max-content) 10px"
            style={styles.flex1}>
            <View style={styles.flex1_item}>
              <Px.View
                x="1px 109fr 20px"
                y="0px minmax(0px, max-content) 0px"
                style={styles.text_body_box}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                  {'Income/Expense'}
                </Text>
              </Px.View>
            </View>
            <View style={styles.flex1_item}>
              <View style={[styles.flex2, styles.flex2_layout]}>
                <View style={styles.flex2_item}>
                  <Px.View
                    x="0px 25fr 0px"
                    y="0px minmax(0px, max-content) 0px"
                    style={styles.small_text_body1_box}>
                    <Text
                      style={styles.small_text_body1}
                      ellipsizeMode={'clip'}>
                      {'$100'}
                    </Text>
                  </Px.View>
                </View>
                <View style={styles.flex2_item}>
                  <Px.View
                    x="0px 30fr 0px"
                    y="0px minmax(0px, max-content) 0px"
                    style={styles.small_text_body2_box}>
                    <Text
                      style={styles.small_text_body2}
                      ellipsizeMode={'clip'}>
                      {'/$120'}
                    </Text>
                  </Px.View>
                </View>
              </View>
            </View>
            <View style={styles.flex1_item}>
              <Px.View
                x="1px 102fr 27px"
                y="8px minmax(0px, max-content) 0px"
                style={styles.text_body_box}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                  {'Budget/Remain'}
                </Text>
              </Px.View>
            </View>
            <View style={styles.flex1_item}>
              <View style={[styles.flex3, styles.flex3_layout]}>
                <View style={styles.flex3_item}>
                  <Px.View
                    x="0px 25fr 0px"
                    y="0px minmax(0px, max-content) 0px"
                    style={styles.small_text_body1_box}>
                    <Text
                      style={styles.small_text_body1}
                      ellipsizeMode={'clip'}>
                      {'$100'}
                    </Text>
                  </Px.View>
                </View>
                <View style={styles.flex3_item}>
                  <Px.View
                    x="0px 30fr 0px"
                    y="0px minmax(0px, max-content) 0px"
                    style={styles.small_text_body2_box}>
                    <Text
                      style={styles.small_text_body2}
                      ellipsizeMode={'clip'}>
                      {'/$120'}
                    </Text>
                  </Px.View>
                </View>
              </View>
            </View>
            <View style={styles.flex1_item}>
              <Px.View
                x="0px 127fr 3px"
                y="5px minmax(0px, max-content) 0px"
                style={styles.text_body_box}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                  {'Last/Current Month'}
                </Text>
              </Px.View>
            </View>
            <View style={styles.flex1_item}>
              <View style={[styles.flex4, styles.flex4_layout]}>
                <View style={styles.flex4_item}>
                  <Px.View
                    x="0px 25fr 0px"
                    y="0px minmax(0px, max-content) 0px"
                    style={styles.small_text_body1_box}>
                    <Text
                      style={styles.small_text_body1}
                      ellipsizeMode={'clip'}>
                      {'$100'}
                    </Text>
                  </Px.View>
                </View>
                <View style={styles.flex4_item}>
                  <Px.View
                    x="0px 30fr 0px"
                    y="0px minmax(0px, max-content) 0px"
                    style={styles.small_text_body2_box}>
                    <Text
                      style={styles.small_text_body2}
                      ellipsizeMode={'clip'}>
                      {'/$120'}
                    </Text>
                  </Px.View>
                </View>
              </View>
            </View>
            <View style={styles.flex1_item}>
              <Px.View
                x="0px 130fr 0px"
                y="8px minmax(0px, max-content) 0px"
                style={styles.text_body_box}>
                <Text style={styles.text_body} ellipsizeMode={'clip'}>
                  {'Difference '}
                </Text>
              </Px.View>
            </View>
            <View style={styles.flex1_item}>
              <Px.View
                x="0px 130fr 0px"
                y="1px minmax(0px, max-content) 15px"
                style={styles.small_text_body1_box}>
                <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                  {'$100'}
                </Text>
              </Px.View>
            </View>
          </Px.View>
        </Px.View>
      </View>
    {/* </Pressable> */}
    </View>
  );
}

Overview.inStorybook = true;
Overview.fitScreen = false;
Overview.scrollHeight = 176;

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  flex_layout: {
    marginTop: 0,
    height: 176,
    left: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex_item: {
    flexGrow: 1,
    flexShrink: 1,
    left: 1,
    // flexBasis: 150
  },
  cover_group1: {
    width: 130,
    height: 130,
    left:1,
    flexGrow: 1,
    resizeMode: 'contain'
  },
  flex_item1: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 151
  },
  cover_block4: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#d500fa0a'
  },
  flex1: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  flex1_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  text_body: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  text_body_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex2: {
    flexDirection: 'row'
  },
  flex2_layout: {
    marginTop: 1,
    height: 12,
    marginBottom: 0,
    marginLeft: 1,
    flexGrow: 1,
    marginRight: 1
  },
  flex2_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  small_text_body1: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  small_text_body1_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  small_text_body2: {
    color: '#888888ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  small_text_body2_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  text_body: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  flex3: {
    flexDirection: 'row'
  },
  flex3_layout: {
    marginTop: 1,
    height: 12,
    marginBottom: 0,
    marginLeft: 1,
    flexGrow: 1,
    marginRight: 1
  },
  flex3_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  small_text_body1: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  small_text_body2: {
    color: '#888888ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  text_body: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  flex4: {
    flexDirection: 'row'
  },
  flex4_layout: {
    marginTop: 1,
    height: 12,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex4_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  small_text_body1: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  small_text_body2: {
    color: '#888888ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  text_body: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  small_text_body1: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  }
});
