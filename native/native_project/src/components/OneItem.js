/*
 *  
 * @Author       : Zekun WANG(wangzekun.felix@gmail.com)
 * @CreateTime   : 2022-02-16 21:05:59
 * @LastEditTime : 2022-02-19 22:14:35
 * @LastEditors  : Zekun WANG
 * @FilePath     : \native_project\src\components\OneItem.js
 * @Description  : Add one new Item 
 *  
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, ScrollView} from 'react-native';
import { Px } from './posize';

/**
 * @Description : Create a new Item with given parameters
 * @param        [unknown] props: 
 *                  @icon: for anime icon left
 *                  @content: describe the item content
 *                  @price: the price
 *                  @date: the date of this set
 *                  @shop: the shop set
 *                  @city: the city set
 * @return       One item's element
 * @author      : Zekun WANG
 */
export default function OneItem(props) {
  return (
    <View style={[styles.group, styles.group_layout]}> 
      <Px.View x="0px 311fr 0px" y="0px minmax(0px, max-content) 0px" style={styles.flex9}>
        <View style={styles.flex9_item}>  
          <Px.ImageBackground
            x="0px 48fr 8px"
            y="10px minmax(0px, max-content) 0px"
            style={styles.cover_block8} 
            source={require('../assets/63845229547f4fecc351fcbdae9528a5.png')}
            resizeMode="contain">
            <ImageBackground // set the left icon, such as a car or something else
                style={[styles.icon7, styles.icon7_layout]} 
                source={props.icon} /> 
          </Px.ImageBackground>
        </View>
        <View style={styles.flex9_item1}>
          <Px.View x="12px 243fr 0px" y="10px minmax(0px, max-content) 2px" style={styles.flex10}>
            <View style={styles.flex10_item}>
              <Px.View x="0px 243fr 0px" y="0px minmax(0px, max-content) 0px" style={styles.group1}>
                {/* <View style={[styles.small_text_body2_box, styles.small_text_body2_box_layout]}>
                  <Text style={styles.small_text_body2} ellipsizeMode={'clip'}>
                    {'Cost:'}
                  </Text>
                </View> */}
                <View style={[styles.text_body_box, styles.text_body_box_layout]}>
                  <Text style={styles.text_body} ellipsizeMode={'clip'}> 
                    {"$" + props.price } 
                    {/* show the price costed in this item */}
                  </Text>
                </View>

                <Px.View x="0px 243fr 0px" y="0px minmax(0px, max-content) 0px" style={styles.flex11}>
                  <View style={styles.flex11_item}>
                    <Px.View x="0px 104fr 0px" y="0px minmax(0px, max-content) 11px" style={styles.text_body_box1}>
                      <Text style={styles.text_body1} ellipsizeMode={'clip'}>
                        {props.content}
                        {/* Show the main content or note of this item */}
                      </Text>
                    </Px.View>
                  </View>
                  <View style={styles.flex11_space} />
                  {/* <View style={styles.flex11_item1}>
                    <Px.ImageBackground
                      
                      x="0px 12fr 0px"
                      y="16px minmax(0px, max-content) 0px"
                      style={styles.cover_block7}
                      source={require('../assets/cdfc0d4748e7637340634db1ca4defec.png')}
                      resizeMode="contain">
                      <ImageBackground style={[styles.image14, styles.image14_layout]} source={require('../assets/d47c8b1ff737f1706a337b33efdbca03.png')} />
                    </Px.ImageBackground>
                  </View> */}
                </Px.View>

                <View style={[styles.small_text_body1_box, styles.small_text_body1_box_layout]}>
                  <Text style={styles.small_text_body1} ellipsizeMode={'clip'}>
                    {props.date + " / " + props.city}
                  </Text>
                </View>
                {/* <View style={[styles.small_text_body2_box1, styles.small_text_body2_box1_layout]}>
                  <Text style={styles.small_text_body21} ellipsizeMode={'clip'}>
                    {props.city}
                  </Text>
                </View> */}
              </Px.View>
            </View>
            <View style={styles.flex10_item}>
              <Px.View x="0px 243fr 0px" y="12px minmax(0px, max-content) 0px" style={styles.cover_block13}>
                <ImageBackground style={[styles.image16, styles.image16_layout]} source={require('../assets/58657a5c9395bf2a374e39d3b2585bf2.png')} />
              </Px.View>
            </View>
          </Px.View>
        </View>
      </Px.View>

      <View style={[styles.line, styles.line_layout]} />
    </View>
  );
}

OneItem.inStorybook = true;
OneItem.fitScreen = false;
OneItem.scrollHeight = 68;

const styles = StyleSheet.create({
  group: {},
  group_layout: {
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
  group1: {
    width: '100%',
    flexGrow: 1
  },
  small_text_body2_box_layout: {
    position: 'absolute',
    height: 12,
    bottom: -2,
    width: 23,
    right: 30
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
    width: 200,
    right: 0
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
  flex11: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  flex11_item: {
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
  cover_block7: {
    width: '100%',
    flexGrow: 1
  },
  image14: {
    resizeMode: 'contain'
  },
  image14_layout: {
    marginTop: 7,
    height: 1,
    marginBottom: 4,
    marginLeft: 3,
    width: 6,
    minWidth: 6,
    marginRight: 3
  },
  small_text_body1_box_layout: {
    position: 'absolute',
    height: 12,
    bottom: -2,
    left: 0,
    // backgroundColor: "red",
    width: 150
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
    bottom: -2,
    left: 14,
    width: 24
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
  line: {
    backgroundColor: '#e9ecedff'
  },
  line_layout: {
    position: 'absolute',
    height: 1,
    bottom: -11,
    left: 0,
    right: 0
  }
});
