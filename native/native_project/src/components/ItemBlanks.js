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
  TextInput
} from 'react-native';
import { Px } from './posize';

export default function ItemBlanks(props) {
  const Text_content = props.Text_content_ext;
  return (
    <View style={[styles.flex12, styles.flex12_layout]}>
      <View style={styles.flex12_item}>
        <Px.View
          x="0px 316fr 0px"
          y="0px minmax(0px, max-content) 0px"
          style={styles.flex16}>
          <View style={styles.flex16_item}>

              <Px.ImageBackground
                x="0px 316fr 0px"
                y="0px minmax(0px, max-content) 0px"
                style={styles.cover_block1}
                source={require('../assets/c990a542af3a5c2bfb35a2bc491a8790.png')}
                resizeMode="contain">
                <View style={styles.cover_block1_space} />
                <View style={styles.cover_block1_item}>
                  <ImageBackground
                    style={[styles.image7, styles.image7_layout]}
                    source={require('../assets/ce8dbe6a26da290ac34d972e17e5d2d1.png')}
                  />
                </View>
              </Px.ImageBackground>

              <Px.View
                x="0px 316fr 0px"
                y="0px minmax(0px, max-content) 0px"
                absolute
                style={styles.highlights2_box}>
                  <TextInput
                  style={styles.highlights2}
                  onChangeText={Text_content.handlearticle}
                  defaultValue={"Artical Name"}
                   />
              </Px.View>

          </View>
          <View style={styles.flex16_item}>
            <ImageBackground
              style={[styles.line1, styles.line1_layout]}
              source={require('../assets/7d51432cc2d0a745c8ad9e5c59c5e3f1.png')}
            />
          </View>
        </Px.View>
      </View>

      <View style={styles.flex12_item}>
        <Px.View
          x="0px 316fr 0px"
          y="37px minmax(0px, max-content) 0px"
          style={styles.flex17}>
          <View style={styles.flex17_item}>
              <Px.ImageBackground
                x="0px 316fr 0px"
                y="0px minmax(0px, max-content) 0px"
                style={styles.cover_block1}
                source={require('../assets/c990a542af3a5c2bfb35a2bc491a8790.png')}
                resizeMode="contain">
                <View style={styles.cover_block1_space} />
                <View style={styles.cover_block1_item}>
                  <ImageBackground
                    style={[styles.icon6, styles.icon6_layout]}
                    source={require('../assets/d69186c398285ffc266091ad45e7f920.png')}
                  />
                </View>
              </Px.ImageBackground>

              <Px.View
                x="0px 316fr 0px"
                y="0px minmax(0px, max-content) 0px"
                absolute
                style={styles.highlights2_box}>
                  <TextInput
                  style={styles.highlights2}
                  onChangeText={Text_content.handleprice}
                  defaultValue={"Price"}
                   />
              </Px.View>
          </View>
          <View style={styles.flex17_item}>
            <View style={[styles.line, styles.line_layout]} />
          </View>
        </Px.View>
      </View>

      <View style={styles.flex12_item}>
        <Px.View
          x="0px 316fr 0px"
          y="38px minmax(0px, max-content) 0px"
          style={styles.flex19}>
          <View style={styles.flex19_item}>
            <Px.ImageBackground
              x="0px 316fr 0px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.cover_block1}
              source={require('../assets/c990a542af3a5c2bfb35a2bc491a8790.png')}
              resizeMode="contain">
              <View style={styles.cover_block1_space} />
              <View style={styles.cover_block1_item}>
                <ImageBackground
                  style={[styles.icon6, styles.icon6_layout]}
                  source={require('../assets/d69186c398285ffc266091ad45e7f920.png')}
                />
              </View>
            </Px.ImageBackground>

            <Px.View
              x="0px 316fr 0px"
              y="0px minmax(0px, max-content) 0px"
              absolute
              style={styles.highlights2_box}>
                <TextInput
                style={styles.highlights2}
                onChangeText={Text_content.handleshop}
                defaultValue={"Shop"}
                  />
            </Px.View>

          </View>
          <View style={styles.flex19_item}>
            <View style={[styles.line, styles.line_layout]} />
          </View>
        </Px.View>
      </View>

      <View style={styles.flex12_item}>
        <Px.View
          x="0px 316fr 0px"
          y="37px minmax(0px, max-content) 0px"
          style={styles.flex21}>
          <View style={styles.flex21_item}>
            {/* <Px.View
              x="0px 316fr 0px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.flex22}
              >
              <View style={styles.flex22_item}>
                <Px.View
                  x="0px 37fr 0px"
                  y="1px minmax(0px, max-content) 0px"
                  style={styles.highlights2_box}>
                    <TextInput
                  style={styles.highlights2_box}
                  onChangeText={onChangeText_date}
                  value={date}
                   />
                </Px.View>
              </View>
              <View style={styles.flex22_space} />
              <View style={styles.flex22_item1}>
                <ImageBackground
                  style={[styles.image6, styles.image6_layout]}
                  source={require('../assets/3f93270ab868c86e4e57ca546bf7c6ff.png')}
                />
              </View>
            </Px.View> */}
              <Px.ImageBackground
                x="0px 316fr 0px"
                y="0px minmax(0px, max-content) 0px"
                style={styles.cover_block1}
                source={require('../assets/c990a542af3a5c2bfb35a2bc491a8790.png')}
                resizeMode="contain">
                <View style={styles.cover_block1_space} />
                <View style={styles.cover_block1_item}>
                  <ImageBackground
                    style={[styles.image6, styles.image6_layout]}
                    source={require('../assets/3f93270ab868c86e4e57ca546bf7c6ff.png')}
                  />
                </View>
              </Px.ImageBackground>

              <Px.View
                x="0px 316fr 0px"
                y="0px minmax(0px, max-content) 0px"
                absolute
                style={styles.highlights2_box}>
                  <TextInput
                  style={styles.highlights2}
                  onChangeText={Text_content.handledate}
                  defaultValue={"Date"}
                   />
              </Px.View>

          </View>
          <View style={styles.flex21_item}>
            <View style={[styles.line, styles.line_layout]} />
          </View>
        </Px.View>
      </View>

      <View style={styles.flex12_item}>
        <Px.View
          x="0px 316fr 0px"
          y="37px minmax(0px, max-content) 0px"
          style={styles.flex23}>
          <View style={styles.flex23_item}>
            {/* <Px.View
              x="0px 316fr 0px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.flex24}
              >
              <View style={styles.flex24_item}>
                <Px.View
                  x="0px 32fr 0px"
                  y="1px minmax(0px, max-content) 0px"
                  style={styles.highlights2_box}>
                    <TextInput
                  style={styles.highlights2_box}
                  onChangeText={onChangeText_city}
                  value={city}
                   />
                </Px.View>
              </View>
              <View style={styles.flex24_space} />
              <View style={styles.flex24_item1}>
                <ImageBackground
                  style={[styles.image6, styles.image6_layout]}
                  source={require('../assets/f403aa6d5382d40732382eae901efa3e.png')}
                />
              </View>
            </Px.View> */}

              <Px.ImageBackground
                x="0px 316fr 0px"
                y="0px minmax(0px, max-content) 0px"
                style={styles.cover_block1}
                source={require('../assets/c990a542af3a5c2bfb35a2bc491a8790.png')}
                resizeMode="contain">
                <View style={styles.cover_block1_space} />
                <View style={styles.cover_block1_item}>
                  <ImageBackground
                    style={[styles.image6, styles.image6_layout]}
                    source={require('../assets/f403aa6d5382d40732382eae901efa3e.png')}
                  />
                </View>
              </Px.ImageBackground>

              <Px.View
                x="0px 316fr 0px"
                y="0px minmax(0px, max-content) 0px"
                absolute
                style={styles.highlights2_box}>
                  <TextInput
                  style={styles.highlights2}
                  onChangeText={Text_content.handlecity}
                  defaultValue={"City"}
                   />
              </Px.View>

          </View>
          <View style={styles.flex23_item}>
            <View style={[styles.line, styles.line_layout]} />
          </View>
        </Px.View>
      </View>
      
    </View>
  );
}

ItemBlanks.inStorybook = true;
ItemBlanks.fitScreen = false;
ItemBlanks.scrollHeight = 281;

const styles = StyleSheet.create({
  flex12: {},
  flex12_layout: {
    marginTop: 0,
    height: 281,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex12_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex16: {
    flexGrow: 1
  },
  flex16_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  group: {
    width: '100%',
    flexGrow: 1
  },
  cover_block1: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cover_block1_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10
  },
  cover_block1_space1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 10
  },
  cover_block1_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 27
  },
  image7: {
    resizeMode: 'stretch'
  },
  image7_layout: {
    marginTop: 0,
    height: 16,
    marginBottom: 5,
    marginLeft: 1,
    width: 20,
    minWidth: 16,
    marginRight: 6
  },
  highlights2: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 20.625,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  highlights2_box: {
    opacity: 0.87,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  line1: {
    resizeMode: 'cover'
  },
  line1_layout: {
    marginTop: 3,
    height: 2,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex17: {
    flexGrow: 1
  },
  flex17_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex18: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex18_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  highlights2: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 20.625,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  flex18_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 251
  },
  flex18_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 16
  },
  icon6: {
    resizeMode: 'contain'
  },
  icon6_layout: {
    marginTop: 1,
    height: 16,
    marginBottom: 4,
    marginLeft: 0,
    width: 16,
    minWidth: 16,
    marginRight: 0
  },
  line: {
    opacity: 0.87,
    backgroundColor: '#000000de'
  },
  line_layout: {
    marginTop: 4,
    height: 1,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  flex19: {
    flexGrow: 1
  },
  flex19_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex20: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex20_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  highlights2: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 20.625,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  flex20_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 251
  },
  flex20_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 16
  },
  flex21: {
    flexGrow: 1
  },
  flex21_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex22: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex22_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  highlights2: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 20.625,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  flex22_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 255
  },
  flex22_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 16
  },
  image6: {
    resizeMode: 'contain'
  },
  image6_layout: {
    marginTop: 0,
    height: 21,
    marginBottom: 1,
    marginLeft: 0,
    width: 16,
    minWidth: 16,
    marginRight: 0
  },
  flex23: {
    flexGrow: 1
  },
  flex23_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  flex24: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex24_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  highlights2: {
    color: '#000000ff',
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 20.625,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  flex24_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 260
  },
  flex24_item1: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 16
  }
});
