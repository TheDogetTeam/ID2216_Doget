/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React , { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Button,
  ScrollView,
  NativeModules
} from 'react-native';
import TopBar from './TopBar';
import { Px } from './posize';
import Categories from './Categories';
import ItemBlanks from './ItemBlanks';
import BottomBar from './BottomBar';

var register_callback = NativeModules.register_button;


class Input_content extends Component{
  constructor(props){  
    super(props);  
    
    this.state = {  
      onChangeText_article:"Artical Name",
      onChangeText_price:"Price",
      onChangeText_shop:"Shop",
      onChangeText_date:"Date",
      onChangeText_city:"City",
      };
    this.handlearticle = this.handlearticle.bind(this);
    this.handleprice = this.handleprice.bind(this);
    this.handleshop = this.handleshop.bind(this);
    this.handledate = this.handledate.bind(this);
    this.handlecity = this.handlecity.bind(this);
  }  



  handlearticle = (text) => {
     this.state.onChangeText_article = text;
  };
  handleprice = (text) => {
    this.state.onChangeText_price =  text;
  }  
  handleshop = (text) => {
    this.state.onChangeText_shop = text;
    }  
  handledate = (text) => {
    this.state.onChangeText_date = text;
  }  
  handlecity = (text) => {
    this.state.onChangeText_city= text;
  }

}



function register_button(navigation,Text_content_ext) {
  register_callback.addEntry(Text_content_ext.state.onChangeText_article , Text_content_ext.state.onChangeText_price, Text_content_ext.state.onChangeText_shop, Text_content_ext.state.onChangeText_date, Text_content_ext.state.onChangeText_city);
  navigation.navigate('Main', {itemState:2});
}

function OCRCallBack() {
  Alert.alert("OCR function start here!");
}

export default function NewItem({navigation, route}) {
  const Text_content_ext = new Input_content();
  Text_content_ext.handlearticle(route.params.article);
  Text_content_ext.handleprice(route.params.price);
  Text_content_ext.handleshop(route.params.shop);
  Text_content_ext.handlecity(route.params.city);

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
          style={styles.flex}>
          <View style={styles.flex_item}>
            <Px.View
              x="4.5px 201px 110.5fr"
              y="0px minmax(0px, max-content) 0px"
              style={styles.big_title1_box}>
              <Text style={styles.big_title1} ellipsizeMode={'clip'}>
                {'New Expense'}
              </Text>
            </Px.View>
          </View>
          <ScrollView style={styles.flex_item_categories}>
            <Px.View
              x="8.5px 303fr 4.5px"
              y="18px minmax(0px, max-content) 0px"
              style={styles.flex1}>
              <Categories navigation = {navigation}/>
            </Px.View>
          </ScrollView>
          <View style={styles.flex_item}>
            <Px.View
              x="0px 316fr 0px"
              y="39px minmax(0px, max-content) 0px"
              style={styles.flex12}>
              <ItemBlanks Text_content_ext = {Text_content_ext}/>
            </Px.View>
          </View>

          <View style={styles.flex_space} />

          <View style={styles.flex_item}>
            <Px.View
              x="25px 270fr 21px"
              y="8px minmax(0px, max-content) 0px"
              style={styles.flex25}>

              <View style={styles.flex25_item}>
                <Px.Pressable 
                x="0px 130px 0px" 
                y="0px minmax(0px, max-content) 0px" 
                style={styles.group} 
                // onPress={() => navigation.navigate('OCR_Page')}
                onPress={() => OCRCallBack()}
                >
                  <Px.Image
                    
                    x="0px 130fr 0px"
                    y="0px minmax(0px, max-content) 0px"
                    style={styles.cover_block3}
                    aspectRatio={4.333333333333333}
                    source={require('../assets/a16030a8c830c69cd9780ad59acdd11e.png')}
                  />
                  <Px.View x="0px 130fr 0px" y="4px minmax(0px, max-content) 4px" absolute style={styles.highlights_box}>
                    <Text style={styles.highlights} ellipsizeMode={'clip'}>
                      {'OCR'}
                    </Text>
                  </Px.View>
                </Px.Pressable>
              </View>

              <View style={styles.flex25_space} />

              <View style={styles.flex25_item}>
                <Px.Pressable 
                x="0px 130px 0px" 
                y="0px minmax(0px, max-content) 0px" 
                style={styles.group} 
                onPress={() => register_button(navigation,Text_content_ext)}>
                  <Px.Image
                    
                    x="0px 130fr 0px"
                    y="0px minmax(0px, max-content) 0px"
                    style={styles.cover_block2}
                    aspectRatio={4.333333333333333}
                    source={require('../assets/6cec8410f1165bcb7e78c37912edb7d4.png')}
                  />
                  <Px.View x="29px 72fr 29px" y="4px minmax(0px, max-content) 4px" absolute style={styles.highlights1_box}>
                    <Text style={styles.highlights1} ellipsizeMode={'clip'}>
                      {'Register'}
                    </Text>
                  </Px.View>
                </Px.Pressable>


              </View>
            </Px.View>
          </View>
        </Px.View>
      </View>
      <View style={styles.block_space} />
      <View style={styles.block_item}>
        <View style={[styles.component, styles.component_layout]}>
        <BottomBar navigation = {navigation} />
        </View>
      </View>
    </ImageBackground>
  );
}

NewItem.inStorybook = true;
NewItem.fitScreen = true;
NewItem.scrollHeight = 728;

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'space-between'
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
    flexShrink: 0,
    width: '100%'
  },
  content_box: {
    width: '100%'
  },
  flex: {
    flexGrow: 1
  },
  flex_item: {
    flexGrow: 1,
    flexShrink: 1
  },
  flex_item_categories: {
    flexGrow: 1,
    flexShrink: 3
  },
  flex_space: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 15
  },
  big_title1: {
    color: '#576aa9ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 32,
    fontSize: 32,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  big_title1_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  flex1: {
    width: '100%'
  },
  flex12: {
    justifyContent:'center',
    marginLeft:'auto',
    marginRight:'auto',
    width: '90%'

  },
  flex25: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // overflow: 'hidden'
  },
  flex25_item: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 130
  },
  cover_block3: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'cover',
    borderRadius: 6
  },
  cover_block3_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  highlights: {
    color: '#ffffffff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 21.599999999999998,
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  highlights_box: {
    opacity: 0.87,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex25_space: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 10
  },
  cover_block2: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'cover',
    borderRadius: 6
  },
  cover_block2_item: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 0
  },
  highlights1: {
    color: '#000000ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 21.599999999999998,
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* Roboto */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  highlights1_box: {
    opacity: 0.87,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  block_space: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 23
  },
  component: {},
  component_layout: {
    marginTop: 0,
    height: 46,
    marginBottom: 12,
    marginLeft: 33,
    flexGrow: 1,
    marginRight: 39
  }
});
