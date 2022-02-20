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
   NativeModules,
   TextInput
 } from 'react-native';
 import TopBar from './TopBar';
 import { Px } from './posize';
 import Categories from './Categories';
 import ItemBlanks from './ItemBlanks';
 import BottomBar from './BottomBar';
 
 var profile_callback = NativeModules.profile_button;

 function profile_button(navigation,name) {
   profile_callback.addDBTable(name);
   navigation.navigate("Main", {itemState:2});
 } 


 class Input_content extends Component{
    constructor(props){  
      super(props);  
      this.state = {  
        onChangeText_user:"User Name"
        };
      this.handleuser = this.handleuser.bind(this);
    }  
  
  
    handleuser = (text) => {
       this.state.onChangeText_user = text;
    };
  }


 
 export default function Profile({navigation}) {
    const Text_content_ext = new Input_content();

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


       <View style={styles.flex12_item}>
       <Px.View
          x="0px 316fr 0px"
          y="37px minmax(0px, max-content) 0px"
          style={styles.flex21}>
          <View style={styles.flex21_item}>

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
                  onChangeText={Text_content_ext.handleuser}
                  defaultValue={"User Name"}
                   />
         </Px.View>
         </View>

         <View style={styles.flex21_item}>
            <View style={[styles.line, styles.line_layout]} />
          </View>

         </Px.View>
          </View>


          <View style={styles.flex25_space} />
          <Px.Pressable 
                style={styles.press} 
                onPress={() =>  profile_button(navigation, Text_content_ext.state.onChangeText_user)}>
                  <Px.Image
                    x="0px 130fr 0px"
                    y="0px minmax(0px, max-content) 0px"
                    style={styles.cover_block3}
                    aspectRatio={4.333333333333333}
                    source={require('../assets/a16030a8c830c69cd9780ad59acdd11e.png')}
                  />
                  <Px.View x="0px 130fr 0px" y="4px minmax(0px, max-content) 4px" absolute style={styles.highlights_box}>
                    <Text style={styles.highlights} ellipsizeMode={'clip'}>
                      {'Register'}
                    </Text>
                  </Px.View>
                </Px.Pressable>


       <View style={styles.block_space} />
       <View style={styles.block_item}>
         <View style={[styles.component, styles.component_layout]}>
         <BottomBar navigation = {navigation} />
         </View>
       </View>
     </ImageBackground>
   );
 }
 
 Profile.inStorybook = true;
 Profile.fitScreen = true;
 Profile.scrollHeight = 728;
 
 const styles = StyleSheet.create({
    press: {
        justifyContent:'center',
        marginLeft:'auto',
        marginRight:'auto',
        width: '35%'
      },
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
     flexShrink: 1,
     width: '100%'
   },
   content_box: {
     width: '100%'
   },
   flex: {
     flexGrow: 1
   },
   flex_item: {
     flexGrow: 0,
     flexShrink: 1
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
   flex17: {
    flexGrow: 1
  },
  flex17_item: {
    flexGrow: 0,
    flexShrink: 1
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
   cover_block3: {
    width: 'auto',
    height: 'auto',
    flexGrow: 1,
    resizeMode: 'cover',
    borderRadius: 6
  },
   block_space: {
     flexGrow: 1,
     flexShrink: 1,
     flexBasis: 23
   },
   flex21: {
    flexGrow: 1
  },
  flex21_item: {
    flexGrow: 0,
    flexShrink: 1
  },
   component: {},
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
  flex12_item: {
    flexGrow: 0,
    flexShrink: 1
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
  cover_block1_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 27
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
   component_layout: {
     marginTop: 0,
     height: 46,
     marginBottom: 12,
     marginLeft: 33,
     flexGrow: 1,
     marginRight: 39
   }
 });
 