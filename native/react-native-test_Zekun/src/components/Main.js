/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import TopBar from './TopBar';
import { Px } from './posize';
import Overview from './Overview';
import ControlBar from './ControlBar';
import Items from './Items';
import BottomBar from './BottomBar';


export default function Main({ navigation }) {
  return (    
    <ImageBackground
      style={[styles.block, styles.block_layout]}
      source={require('../assets/e54b8dfe285249b01b1ac9f5f05bec52.png')}
      resizeMode="cover">
      <View style={styles.block_item}>
        <Px.View
          x="0px 348fr 0px"
          y="0px minmax(0px, max-content) 0px"
          style={styles.content_box}>
          <TopBar big_title={'Doget'} />
        </Px.View>
      </View>
      <View style={styles.block_item}>
        <Px.View
          x="0px 348fr 0px"
          y="5px minmax(0px, max-content) 0px"
          style={styles.block1}>
          <View style={styles.block1_item}>
            <View style={[styles.component, styles.component_layout]}>
              <Overview navigation = {navigation}
                small_text_body1={'$100'}
                small_text_body2={'/$120'}
                text_body={'Income/Expense'}
              />
            </View>
          </View>
          <View style={styles.block1_item}>
            <View style={[styles.block2, styles.block2_layout]}>
              <ControlBar
                icon={require('../assets/002a169a9f76fbdab63da6661b476248.png')}
                image10={require('../assets/08287628cd79e6874619037e66468e8b.png')}
                image12={require('../assets/7f305ed82fee24b759f8d95047b243f4.png')}
                image13={require('../assets/e143e094b08f7595371d898990396aa0.png')}
                image9={require('../assets/5e1eb6e0173986ce11dc785fd88093ed.png')}
              />
            </View>
          </View>
          <View style={styles.block1_item}>
            <Px.View
              x="0px 348fr 0px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.cover_block3}>
              <Items
                icon7={require('../assets/a3e57bb31942d19207b892dd473b2064.png')}
                image14={require('../assets/d47c8b1ff737f1706a337b33efdbca03.png')}
                image15={require('../assets/afd6b3ab8df26c984b2af31730fe3b66.png')}
                image16={require('../assets/58657a5c9395bf2a374e39d3b2585bf2.png')}
                image18={require('../assets/11af3806068c3f832180ea6c53b04b2b.png')}
                line={'#e9ecedff'}
                line1={'#e9ecedff'}
                small_text_body1={'$100'}
                small_text_body2={'Left:'}
                text_body={'$20'}
                text_body1={'-$10'}
              />
            </Px.View>
          </View>
        </Px.View>
      </View>
      <View style={styles.block_space} />
      <View style={styles.block_item}>
        <View style={[styles.component, styles.component_layout1]}>
          <BottomBar navigation = {navigation} />
        </View>
      </View>
    </ImageBackground>
  );
}

Main.inStorybook = true;
Main.fitScreen = true;
Main.scrollHeight = 728;

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#ffffff',
    borderRadius: 20
  },
  block_layout: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    flexGrow: 1,
    right: 0
  },
  block_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  content_box: {
    width: '100%'
  },
  block1: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  block1_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  component: {},
  component_layout: {
    marginTop: 0,
    height: 176,
    marginBottom: 14,
    marginLeft: 14,
    flexGrow: 1,
    marginRight: 16
  },
  block2: {},
  block2_layout: {
    marginTop: 0,
    height: 48,
    marginBottom: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  cover_block3: {
    width: '100%'
  },
  block_space: {
    flexGrow: 1,
    flexShrink: 1
  },
  component_layout1: {
    marginTop: 0,
    height: 46,
    marginBottom: 12,
    marginLeft: 33,
    flexGrow: 1,
    marginRight: 39
  }
});
