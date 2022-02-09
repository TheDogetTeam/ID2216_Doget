/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Px } from './posize';

export default function Frame8(props) {
  return (
    <View style={[styles.group, styles.group_layout]}>
      <ImageBackground
        style={[styles.img, styles.img_layout]}
        source={require('../assets/f0a4eaa72674af6b3f0e2c1cdf898287.png')}
      />

      <Px.View
        x="0px 348fr 0px"
        y="0px minmax(0px, max-content) 0px"
        style={styles.group1}>
        <ImageBackground
          style={[styles.img, styles.img_layout1]}
          source={require('../assets/4f15e9c795ec8617745bcfe3b5369bd9.png')}
        />

        <Px.View
          x="17px 300fr 31px"
          y="449px minmax(0px, max-content) 243px"
          absolute
          style={styles.group2}>
          <View style={[styles.cover_block, styles.cover_block_layout]}>
            <Px.View
              x="32px 34fr 32px"
              y="9px minmax(0px, max-content) 9px"
              style={styles.txt_box}>
              <Text style={styles.txt} ellipsizeMode={'clip'}>
                {'Day 1'}
              </Text>
            </Px.View>
          </View>
        </Px.View>

        <Px.ImageBackground
          x="32.76fr 6.32fr 60.92fr"
          y="159px 208px 361px"
          absolute
          style={styles.img1}
          source={require('../assets/6dc3dc80bfd8c75020f712168bd3ca22.png')}
        />
        <ImageBackground
          style={[styles.img2, styles.img2_layout]}
          source={require('../assets/57b6504fa2668023d26cd6ff1e5dc2fa.png')}
        />
        <Px.ImageBackground
          x="56.9fr 6.32fr 36.78fr"
          y="159px 208px 361px"
          absolute
          style={styles.img3}
          source={require('../assets/824e49f46ee31903d7c722ff0b5ba92e.png')}
        />
        <Px.ImageBackground
          x="68.97fr 6.32fr 24.71fr"
          y="159px 208px 361px"
          absolute
          style={styles.img4}
          source={require('../assets/5455788c4467960920bae9e0819bc234.png')}
        />
        <Px.ImageBackground
          x="20.69fr 6.32fr 72.99fr"
          y="159px 208px 361px"
          absolute
          style={styles.img5}
          source={require('../assets/2d07ff219900cbca3a1114c813e0665b.png')}
        />
        <Px.ImageBackground
          x="47fr 24px 277fr"
          y="671px 24px 33px"
          absolute
          style={styles.img6}
          source={require('../assets/28437159809aa6bc9073d761fca53921.png')}
        />
        <Px.View
          x="7.76fr 18.68fr 73.56fr"
          y="705px minmax(0px, max-content) 11px"
          absolute
          style={styles.txt_box}>
          <Text style={styles.txt1} ellipsizeMode={'clip'}>
            {'overview'}
          </Text>
        </Px.View>

        <Px.View
          x="35.92fr 5.75fr 58.33fr"
          y="673px 20px 35px"
          absolute
          style={styles.cover_group}>
          <ImageBackground
            style={[styles.img, styles.img_layout2]}
            source={require('../assets/6dcb7108c0e4fda91b7f3997d1f750d1.png')}
          />
          <ImageBackground
            style={[styles.img, styles.img_layout3]}
            source={require('../assets/e9a46b70e8d9ca5b46c13d9b897e37ce.png')}
          />
        </Px.View>

        <Px.View
          x="35.06fr 7.76fr 57.18fr"
          y="705px minmax(0px, max-content) 11px"
          absolute
          style={styles.txt_box}>
          <Text style={styles.txt2} ellipsizeMode={'clip'}>
            {'add'}
          </Text>
        </Px.View>

        <Px.View
          x="58.05fr 5.17fr 36.78fr"
          y="674px minmax(0px, max-content) 36px"
          absolute
          style={styles.cover_block3}>
          <View style={styles.cover_block3_item}>
            <ImageBackground
              style={[styles.img, styles.img_layout4]}
              source={require('../assets/39670e424a02eed75b4561ecb7c83006.png')}
            />
          </View>
          <View style={styles.cover_block3_space} />
          <View style={styles.cover_block3_item1}>
            <ImageBackground
              style={[styles.img, styles.img_layout5]}
              source={require('../assets/b935ebea6e9a45d8b7ec8495be5bf9a6.png')}
            />
          </View>
          <View style={styles.cover_block3_space} />
          <View style={styles.cover_block3_item}>
            <ImageBackground
              style={[styles.img, styles.img_layout6]}
              source={require('../assets/7aeae62169bcdd77f53df1e04126dce7.png')}
            />
          </View>
        </Px.View>

        <Px.View
          x="51.15fr 19.25fr 29.6fr"
          y="705px minmax(0px, max-content) 11px"
          absolute
          style={styles.txt_box}>
          <Text style={styles.txt3} ellipsizeMode={'clip'}>
            {'Statistics'}
          </Text>
        </Px.View>

        <Px.ImageBackground
          x="79.6fr 5.75fr 14.66fr"
          y="673px minmax(0px, max-content) 35px"
          absolute
          style={styles.cover_block4}
          source={require('../assets/e9a46b70e8d9ca5b46c13d9b897e37ce.png')}
          resizeMode="contain">
          <View style={styles.cover_block4_item}>
            <ImageBackground
              style={[styles.img, styles.img_layout7]}
              source={require('../assets/8ac7c112bcd73ad74b4ca7e24d17b3fc.png')}
            />
          </View>
          <View style={styles.cover_block4_item}>
            <ImageBackground
              style={[styles.img, styles.img_layout8]}
              source={require('../assets/9802a90d66c3e7f84ba05eaf5ee4b716.png')}
            />
          </View>
        </Px.ImageBackground>

        <Px.View
          x="75fr 14.94fr 10.06fr"
          y="705px minmax(0px, max-content) 11px"
          absolute
          style={styles.txt_box}>
          <Text style={styles.txt4} ellipsizeMode={'clip'}>
            {'profile'}
          </Text>
        </Px.View>
        <Px.View
          x="149fr 35px 164fr"
          y="460px minmax(0px, max-content) 254px"
          absolute
          style={styles.txt_box}>
          <Text style={styles.txt} ellipsizeMode={'clip'}>
            {'Day 2'}
          </Text>
        </Px.View>

        <Px.View
          x="0px 348fr 0px"
          y="0px minmax(0px, max-content) 672px"
          style={styles.cover_block1}>
          <Px.ImageBackground
            x="72fr 58.62fr 72fr"
            y="16px 24px 16px"
            absolute
            style={styles.img7}
            source={require('../assets/79a4a198bd2ebd1eea53523c08ce5fc9.png')}
          />
          <Px.ImageBackground
            x="302fr 18px 28fr"
            y="19px 18px 19px"
            absolute
            style={styles.img8}
            source={require('../assets/95e33d8dcb8a97142a587be2b7086935.png')}
          />

          <Px.ImageBackground
            x="2.3fr 11.49fr 86.21fr"
            y="8px minmax(0px, max-content) 8px"
            style={styles.cover_block2}
            source={require('../assets/9e421376b5abcc4ab003916e58fa69b3.png')}
            resizeMode="contain">
            <ImageBackground
              style={[styles.img, styles.img_layout9]}
              source={require('../assets/983a6494f6087090476d9b330e6d87ab.png')}
            />
          </Px.ImageBackground>
        </Px.View>

        <Px.View
          x="70.98fr 10.34fr 18.68fr"
          y="460px minmax(0px, max-content) 254px"
          absolute
          style={styles.txt_box}>
          <Text style={styles.txt} ellipsizeMode={'clip'}>
            {'Day 3'}
          </Text>
        </Px.View>
        <Px.View
          x="8px 317fr 23px"
          y="76px minmax(0px, max-content) 603px"
          absolute
          style={styles.txt_box}>
          <Text style={styles.txt5} ellipsizeMode={'clip'}>
            {'Smart animate Prototype'}
          </Text>
        </Px.View>
      </Px.View>
    </View>
  );
}

Frame8.inStorybook = true;
Frame8.fitScreen = false;
Frame8.scrollHeight = 728;

const styles = StyleSheet.create({
  group: {
    backgroundColor: '#ffffff'
  },
  group_layout: {
    marginTop: 0,
    marginBottom: 0,
    minHeight: 728,
    marginLeft: 0,
    flexGrow: 1,
    marginRight: 0
  },
  img: {
    resizeMode: 'contain'
  },
  img_layout: {
    position: 'absolute',
    top: -9,
    height: 691,
    left: -448,
    width: 636
  },
  group1: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#ffffffff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor:
      'transparent' /* cannot find mapping from CSS: 0px 1.4945039749145508px 1.9473838806152344px 0px rgba(0,0,0,0.03529411764705882), https://ethercreative.github.io/react-native-shadow-generator/ */
  },
  img_layout1: {
    position: 'absolute',
    top: 0,
    marginTop: 647,
    height: 1,
    marginBottom: 80,
    left: 3,
    flexGrow: 1,
    right: 0
  },
  group2: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#eae9eeff',
    borderRadius: 4,
    overflow: 'hidden'
  },
  cover_block: {
    backgroundColor: '#ffffffff',
    borderRadius: 4
  },
  cover_block_layout: {
    marginTop: 2,
    height: 32,
    marginLeft: 2,
    width: 98,
    minWidth: 98
  },
  txt: {
    color: '#413d57ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 14,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* SF Pro Display */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt_box: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  img1: {
    flexGrow: 1,
    resizeMode: 'contain',
    borderRadius: 11
  },
  img2: {
    resizeMode: 'contain',
    borderRadius: 11
  },
  img2_layout: {
    position: 'absolute',
    top: 0,
    marginTop: 159,
    height: 208,
    marginBottom: 361,
    left: 0,
    right: 0,
    width: 22,
    minWidth: 22,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  img3: {
    flexGrow: 1,
    resizeMode: 'contain',
    borderRadius: 11
  },
  img4: {
    flexGrow: 1,
    resizeMode: 'contain',
    borderRadius: 11
  },
  img5: {
    flexGrow: 1,
    resizeMode: 'contain',
    borderRadius: 11
  },
  img6: {
    flexGrow: 1,
    resizeMode: 'contain'
  },
  txt1: {
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
  cover_group: {
    width: '100%',
    flexGrow: 1
  },
  img_layout2: {
    position: 'absolute',
    top: 6,
    height: 8,
    left: 6,
    width: 8
  },
  img_layout3: {
    position: 'absolute',
    top: 0,
    height: 20,
    left: 0,
    width: 20
  },
  txt2: {
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
  cover_block3: {
    flexGrow: 1,
    borderRadius: 0.6000000238418579,
    borderStyle: 'solid',
    borderColor: '#888888ff',
    borderWidth: 1.5,
    flexDirection: 'row'
  },
  cover_block3_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 6
  },
  img_layout4: {
    marginTop: 9,
    height: 5,
    marginLeft: 4,
    width: 2,
    minWidth: 2
  },
  cover_block3_space: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 2
  },
  cover_block3_item1: {
    flexGrow: 0,
    flexShrink: 0,
    minWidth: 2
  },
  img_layout5: {
    marginTop: 7,
    height: 7,
    marginLeft: 0,
    width: 2,
    minWidth: 2
  },
  img_layout6: {
    marginTop: 4,
    height: 10,
    marginLeft: 0,
    width: 2,
    minWidth: 2
  },
  txt3: {
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
  cover_block4: {
    flexGrow: 1
  },
  cover_block4_item: {
    flexGrow: 0,
    flexShrink: 1
  },
  img_layout7: {
    marginTop: 4,
    height: 6,
    marginLeft: 7,
    width: 6,
    minWidth: 6
  },
  img_layout8: {
    marginTop: 4,
    height: 2,
    marginLeft: 2,
    width: 16,
    minWidth: 16
  },
  txt4: {
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
  txt: {
    color: '#413d57ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 14,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* SF Pro Display */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  cover_block1: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#ffffffff'
  },
  img7: {
    flexGrow: 1,
    resizeMode: 'contain'
  },
  img8: {
    flexGrow: 1,
    resizeMode: 'contain'
  },
  cover_block2: {
    width: '100%',
    flexGrow: 1
  },
  img_layout9: {
    marginTop: 12,
    height: 15,
    marginBottom: 13,
    marginLeft: 7,
    width: 27,
    minWidth: 27,
    marginRight: 6
  },
  txt: {
    color: '#413d57ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 14,
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'System' /* SF Pro Display */,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  txt5: {
    color: '#413e57ff',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 18,
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'System' /* Audiowide */,
    paddingHorizontal: 0,
    paddingVertical: 0
  }
});
