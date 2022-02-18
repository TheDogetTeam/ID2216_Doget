/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, FlatList } from 'react-native';
import OneItem from './OneItem';
import { Px } from './posize';

const renderItem = ({item}) => {
  return (
    <OneItem 
      icon={item.icon}
      content={item.content}
      price={item.price}
      date={item.date}
      shop={item.shop}
      city={item.city}
    />
  );
};



export default function Items(props) {
  return (
    // <ScrollView style={styles.block_item}>
    <Px.View
      x="0px 311fr 0px"
      y="0px minmax(0px, max-content) 0px"
      style={styles.block3}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    </Px.View>
    // </ScrollView>
  );
}

Items.inStorybook = true;
Items.fitScreen = false;
Items.scrollHeight = 333;

const styles = StyleSheet.create({
  block_item: {
    flexGrow: 1,
    flexShrink: 1,
    // overflow: "hidden"
  },
  block3: {
    flexGrow: 1,
    flexShrink: 1
  },
  block3_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  line: {
    backgroundColor: '#e9ecedff'
  },
  line_layout: {
    marginTop: 0,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  group: {},
  group_layout: {
    marginTop: 10,
    height: 48,
    marginBottom: 9,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex6: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  flex6_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 57
  },
  cover_block8: {
    width: '100%',
    flexGrow: 1
  },
  icon7: {
    resizeMode: 'contain'
  },
  icon7_layout: {
    marginTop: 10,
    height: 28,
    marginBottom: 10,
    marginLeft: 10,
    width: 28,
    minWidth: 28,
    marginRight: 10
  },
  flex6_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 254
  },
  flex7: {
    flexGrow: 1
  },
  flex7_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  group1: {
    width: '100%',
    flexGrow: 1
  },
  small_text_body2_box_layout: {
    position: 'absolute',
    height: 12,
    bottom: -2,
    width: 23,
    right: 44
  },
  small_text_body2: {
    color: '#888888ff',
    textAlign: 'right',
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
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  text_body_box_layout: {
    position: 'absolute',
    height: 17,
    bottom: -3,
    width: 28,
    right: 18
  },
  text_body: {
    color: '#000000ff',
    textAlign: 'right',
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
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  flex8: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  flex8_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  text_body1: {
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
  text_body_box1: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex8_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 201
  },
  flex8_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  cover_block7: {
    width: '100%',
    flexGrow: 1
  },
  image14: {
    resizeMode: 'contain'
  },
  image14_layout: {
    marginTop: 8,
    height: 1,
    marginBottom: 3,
    marginLeft: 3,
    width: 6,
    minWidth: 6,
    marginRight: 3
  },
  small_text_body1_box_layout: {
    position: 'absolute',
    height: 12,
    bottom: -3,
    left: 0,
    width: 25
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
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  small_text_body2_box1_layout: {
    position: 'absolute',
    height: 12,
    bottom: -3,
    left: 25,
    width: 30
  },
  small_text_body21: {
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
  small_text_body2_box1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_block16: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#e9ecedff',
    borderRadius: 3
  },
  cover_group3: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'contain'
  },
  line1: {
    backgroundColor: '#e9ecedff'
  },
  line1_layout: {
    position: 'absolute',
    height: 0,
    bottom: -10,
    left: 0,
    right: 0
  },
  group_layout1: {
    marginTop: 1,
    height: 58,
    marginBottom: 9,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex9: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  flex9_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 56
  },
  flex9_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 255
  },
  flex10: {
    flexGrow: 1
  },
  flex10_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  group2: {
    width: '100%',
    flexGrow: 1
  },
  small_text_body2: {
    color: '#888888ff',
    textAlign: 'right',
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
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  flex11: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  flex11_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  text_body2: {
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
  text_body_box2: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex11_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 127
  },
  flex11_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  image14_layout1: {
    marginTop: 7,
    height: 1,
    marginBottom: 4,
    marginLeft: 3,
    width: 6,
    minWidth: 6,
    marginRight: 3
  },
  small_text_body1_box_layout1: {
    position: 'absolute',
    height: 12,
    bottom: -2,
    left: 0,
    width: 14
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
  small_text_body2_box2_layout: {
    position: 'absolute',
    height: 12,
    bottom: -2,
    left: 14,
    width: 24
  },
  small_text_body22: {
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
  small_text_body2_box2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_block13: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#e9ecedff',
    borderRadius: 3
  },
  image16: {
    resizeMode: 'contain',
    borderRadius: 3
  },
  image16_layout: {
    marginTop: 0,
    height: 6,
    marginBottom: 0,
    marginLeft: 0,
    width: 32,
    minWidth: 32
  },
  line_layout1: {
    position: 'absolute',
    height: 1,
    bottom: -11,
    left: 0,
    right: 0
  },
  group_layout2: {
    marginTop: 1,
    height: 59,
    marginBottom: 9,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex12: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  flex12_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 58
  },
  flex12_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 253
  },
  flex13: {
    flexGrow: 1
  },
  flex13_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  group3: {
    width: '100%',
    flexGrow: 1
  },
  small_text_body2_box_layout1: {
    position: 'absolute',
    height: 12,
    bottom: -2,
    width: 83,
    right: 49
  },
  small_text_body2: {
    color: '#888888ff',
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  text_body1_box_layout: {
    position: 'absolute',
    height: 17,
    bottom: -3,
    width: 32,
    right: 18
  },
  text_body11: {
    color: '#ff3c3cff',
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  text_body1_box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  flex14: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  flex14_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  text_body3: {
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
  text_body_box3: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex14_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 189
  },
  flex14_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  cover_group2: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'contain'
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
  small_text_body2_box3_layout: {
    position: 'absolute',
    height: 12,
    bottom: -3,
    left: 25,
    width: 30
  },
  small_text_body23: {
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
  small_text_body2_box3: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  image18: {
    resizeMode: 'contain',
    borderRadius: 3
  },
  image18_layout: {
    marginTop: 12,
    height: 6,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  group_layout3: {
    marginTop: 1,
    height: 58,
    marginBottom: 9,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex15: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  flex15_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 55
  },
  flex15_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 256
  },
  flex16: {
    flexGrow: 1
  },
  flex16_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  group4: {
    width: '100%',
    flexGrow: 1
  },
  small_text_body2_box_layout2: {
    position: 'absolute',
    height: 12,
    bottom: -2,
    width: 23,
    right: 52
  },
  small_text_body2: {
    color: '#888888ff',
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  text_body_box_layout1: {
    position: 'absolute',
    height: 17,
    bottom: -3,
    width: 36,
    right: 18
  },
  text_body: {
    color: '#000000ff',
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  text_body4: {
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
  text_body_box4: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex11_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 138
  },
  flex11_item2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  image14_layout2: {
    marginTop: 7,
    height: 1,
    marginBottom: 4,
    marginLeft: 3,
    width: 6,
    minWidth: 6,
    marginRight: 3
  },
  small_text_body1_box_layout2: {
    position: 'absolute',
    height: 12,
    bottom: -2,
    left: 0,
    width: 20
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
  small_text_body2_box4_layout: {
    position: 'absolute',
    height: 12,
    bottom: -2,
    left: 19,
    width: 30
  },
  small_text_body24: {
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
  small_text_body2_box4: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  cover_block6: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#e9ecedff',
    borderRadius: 3
  },
  image15: {
    resizeMode: 'contain',
    borderRadius: 3
  },
  image15_layout: {
    marginTop: 0,
    height: 6,
    marginBottom: 0,
    marginLeft: 0,
    width: 71,
    minWidth: 71
  },
  line_layout2: {
    position: 'absolute',
    height: 1,
    bottom: -11,
    left: 0,
    right: 0
  },
  group_layout4: {
    marginTop: 1,
    height: 59,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex18: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  flex18_layout: {
    marginTop: 0,
    height: 59,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex18_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 58
  },
  flex18_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 253
  },
  flex19: {
    flexGrow: 1
  },
  flex19_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  group5: {
    width: '100%',
    flexGrow: 1
  },
  small_text_body2_box_layout3: {
    position: 'absolute',
    height: 12,
    bottom: -2,
    width: 23,
    right: 52
  },
  small_text_body2: {
    color: '#888888ff',
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 12,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  text_body_box_layout2: {
    position: 'absolute',
    height: 17,
    bottom: -3,
    width: 36,
    right: 18
  },
  text_body: {
    color: '#000000ff',
    textAlign: 'right',
    letterSpacing: 0,
    lineHeight: 16.8,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  text_body5: {
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
  text_body_box5: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  flex8_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 193
  },
  flex8_item2: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 12
  },
  small_text_body1_box_layout3: {
    position: 'absolute',
    height: 12,
    bottom: -3,
    left: 0,
    width: 20
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
  small_text_body2_box5_layout: {
    position: 'absolute',
    height: 12,
    bottom: -3,
    left: 19,
    width: 30
  },
  small_text_body25: {
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
  small_text_body2_box5: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});
