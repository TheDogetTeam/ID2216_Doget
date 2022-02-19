/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React, {useState} from 'react';
import { View, StyleSheet, Image, ImageBackground, ScrollView, Pressable, Alert, NativeModules } from 'react-native';
import TopBar from './TopBar';
import { Px } from './posize';
import Overview from './Overview';
import ControlBar from './ControlBar';
import Items from './Items';
import BottomBar from './BottomBar';
import Doge from './Doge';
import ShowOverview from './ShowOverview';

const { ShowItems } = NativeModules;

// const DATA = [
//   {
//     id: "1",
//     icon: require("../assets/a3e57bb31942d19207b892dd473b2064.png"),
//     price: '$20',
//     content: 'Taxi',
//     shop: 'Taxi',
//     city: 'Stockholm',
//     date: '2022.2.3.'
//   },
//   {
//     id: "2",
//     icon: require("../assets/3d3ead1b4fa457a1dd2ea6df61870de7.png"),
//     price: '$18',
//     content: 'Public Transport',
//     shop: 'T-Center',
//     city: 'Stockholm',
//     date: '2022.2.15.'
//   },
//   {
//     id: "3",
//     icon: require("../assets/3d3ead1b4fa457a1dd2ea6df61870de7.png"),
//     price: '$34',
//     content: 'Public Transport',
//     shop: 'Solna Center',
//     city: 'Stockholm',
//     date: '2022.2.16.'
//   },
//   {
//     id: "4",
//     icon: require("../assets/ac6e6279ad9ba4d089b374f9a10b158c.png"),
//     price: '$45',
//     content: 'Home Shopping',
//     shop: 'Zara',
//     city: 'Stockholm',
//     date: '2022.2.17.'
//   },
//   {
//     id: "5",
//     icon: require("../assets/4c105694eaddcb9b824f2a116db34c73.png"),
//     price: '$17',
//     content: 'Entertainment',
//     shop: 'Skansen',
//     city: 'Stockholm',
//     date: '2022.2.17.'
//   },
//   {
//     id: "6",
//     icon: require("../assets/ac6e6279ad9ba4d089b374f9a10b158c.png"),
//     price: '$30',
//     content: 'Food',
//     shop: 'Willys',
//     city: 'Solna',
//     date: '2022.2.18.'
//   },
//   {
//     id: "7",
//     icon: require("../assets/ac6e6279ad9ba4d089b374f9a10b158c.png"),
//     price: '$22',
//     content: 'Food',
//     shop: 'Willys',
//     city: 'Solna',
//     date: '2022.2.18.'
//   },
// ]
var DATA = new Array();

export default function Main({ navigation }) {

  const states = {"overview": "0", "dog": "1"};
  const [OverviewState, setOverviewState] = useState(states.overview);

  ShowItems.readEntryAll("id", (json) => {DATA = [...json]})
  // DATA.push(1);
  console.log("DATA is " + DATA)
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
        {/* <Px.View
          x="0px 348fr 0px"
          y="5px minmax(0px, max-content) 0px"
          style={styles.block1}>  */}
          <View style={styles.block2_item}>
            <Pressable 
            style={[styles.component, styles.component_layout]}
            onPress={() => {setOverviewState(OverviewState==states.overview? states.dog : states.overview)} }
            >
              {/* <Overview navigation = {navigation}
                small_text_body1={'$100'}
                small_text_body2={'/$120'}
                text_body={'Income/Expense'}
              /> */}
              <ShowOverview state={OverviewState} states={states} />
              
            </Pressable>
          </View>
          <View style={styles.block2_item}>
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
            {/* <Px.View
              x="0px 348fr 0px"
              y="0px minmax(0px, max-content) 0px"
              style={styles.cover_block3}> */}
            <View style={[styles.cover_block3, styles.cover_block3_layout]}>
              <Items
                // icon7={require('../assets/a3e57bb31942d19207b892dd473b2064.png')}
                // image14={require('../assets/d47c8b1ff737f1706a337b33efdbca03.png')}
                // image15={require('../assets/afd6b3ab8df26c984b2af31730fe3b66.png')}
                // image16={require('../assets/58657a5c9395bf2a374e39d3b2585bf2.png')}
                // image18={require('../assets/11af3806068c3f832180ea6c53b04b2b.png')}
                // line={'#e9ecedff'}
                // line1={'#e9ecedff'}
                // small_text_body1={'$100'}
                // small_text_body2={'Left:'}
                // text_body={'$20'}
                // text_body1={'-$10'}
                data={DATA}
              />
            {/* </Px.View> */}
            </View>
          </View>
        {/* </Px.View> */}
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
  block1_layout: {
    marginTop: 5,
    marginBottom: 0,
    minHeight: 603,
    flexShrink: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  block1_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  block2_item: {
    flexGrow: 0,
    flexShrink: 0
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
  cover_block3_layout: {
    marginTop: 0,
    marginBottom: 0,
    minHeight: 100,
    flexShrink: 0,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
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
