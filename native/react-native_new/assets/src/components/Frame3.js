/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
 import React, { Component } from 'react'
 import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
 import { Px } from './posize';

 const Frame3 = () => {
   return (
     <View style={[styles.group, styles.group_layout1]}>
       <View style={[styles.line1, styles.line1_layout]} />
 
       <ImageBackground
         style={[styles.block, styles.block_layout]}
         source={require('../assets/b3a45bac747451ed7cb0b07b78524149.png')}
         resizeMode="contain">
         <View style={styles.block_item}>
           <Px.View
             x="0px 348fr 0px"
             y="0px minmax(0px, max-content) 0px"
             style={styles.cover_block13}>
             <Px.View
               x="8px 332fr 8px"
               y="8px minmax(0px, max-content) 8px"
               style={styles.flex2}>
               <View style={styles.flex2_item}>
                 <Px.ImageBackground
                   x="0px 40fr 0px"
                   y="0px minmax(0px, max-content) 0px"
                   style={styles.cover_block14}
                   source={require('../assets/9e421376b5abcc4ab003916e58fa69b3.png')}
                   resizeMode="contain">
                   <ImageBackground
                     style={[styles.image12, styles.image12_layout]}
                     source={require('../assets/983a6494f6087090476d9b330e6d87ab.png')}
                   />
                 </Px.ImageBackground>
               </View>
               <View style={styles.flex2_space} />
               <View style={styles.flex2_item1}>
                 <ImageBackground
                   style={[styles.image11, styles.image11_layout]}
                   source={require('../assets/79a4a198bd2ebd1eea53523c08ce5fc9.png')}
                 />
               </View>
               <View style={styles.flex2_space1} />
               <View style={styles.flex2_item2}>
                 <ImageBackground
                   style={[styles.icon3, styles.icon3_layout]}
                   source={require('../assets/95e33d8dcb8a97142a587be2b7086935.png')}
                 />
               </View>
             </Px.View>
           </Px.View>
         </View>
         <View style={styles.block_item}>
           <Px.View
             x="15px 328fr 5px"
             y="17px minmax(0px, max-content) 0px"
             style={styles.flex3}>
             <View style={styles.flex3_item}>
               <View style={[styles.block4, styles.block4_layout]}>
                 <View style={[styles.cover_group2, styles.cover_group2_layout]}>
                   <ImageBackground
                     style={[styles.cover2, styles.cover2_layout]}
                     source={require('../assets/070b2e3c2c47157d8a9d55789fd1e255.png')}
                   />
 
                   <Px.ImageBackground
                     x="22px 118fr 22px"
                     y="20px minmax(0px, max-content) 21px"
                     absolute
                     style={styles.cover_block16}
                     source={require('../assets/372cf30548508d2dc3b9694d4e7d5285.png')}
                     resizeMode="contain">
                     <View style={styles.cover_block16_item}>
                       <ImageBackground
                         style={[styles.image14, styles.image14_layout]}
                         source={require('../assets/d9dd9125bd90368a6b6ba447af1327f6.png')}
                       />
                     </View>
                     <View style={styles.cover_block16_item}>
                       <ImageBackground
                         style={[styles.image15, styles.image15_layout]}
                         source={require('../assets/54de944eaf73acbe5f7858c20774dd0a.png')}
                       />
                     </View>
                   </Px.ImageBackground>
                 </View>
 
                 <Px.ImageBackground
                   x="4px 163fr 4px"
                   y="5px minmax(0px, max-content) -5px"
                   absolute
                   style={styles.cover_block17}
                   source={require('../assets/248305427237a47635d438cba40668c3.png')}
                   resizeMode="contain">
                   <ImageBackground
                     style={[styles.cover3, styles.cover3_layout]}
                     source={require('../assets/15ae06ab05ef8de6d80a849e621900ed.png')}
                   />
                 </Px.ImageBackground>
               </View>
             </View>
             <View style={styles.flex3_space} />
             <View style={styles.flex3_item1}>
               <Px.ImageBackground
                 x="0px 142fr 0px"
                 y="5px minmax(0px, max-content) 0px"
                 style={styles.cover_block18}
                 source={require('../assets/9200f2ab79c74ebfc2932652581205ac.png')}
                 resizeMode="contain">
                 <Px.View
                   x="6px 130fr 6px"
                   y="10px minmax(0px, max-content) 10px"
                   style={styles.flex}>
                   <View style={styles.flex_item}>
                     <Px.View
                       x="1px 109fr 20px"
                       y="0px minmax(0px, max-content) 0px"
                       style={styles.text_body_box}>
                       <Text style={styles.text_body} ellipsizeMode={'clip'}>
                         {'Income/Expense'}
                       </Text>
                     </Px.View>
                   </View>
                   <View style={styles.flex_item}>
                     <Px.View
                       x="1px 128fr 1px"
                       y="1px minmax(0px, max-content) 0px"
                       style={styles.flex6}>
                       <View style={styles.flex6_item}>
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
                       <View style={styles.flex6_item}>
                         <Px.View
                           x="0px 30fr 0px"
                           y="0px minmax(0px, max-content) 0px"
                           style={styles.small_text_body_box}>
                           <Text
                             style={styles.small_text_body}
                             ellipsizeMode={'clip'}>
                             {'/$120'}
                           </Text>
                         </Px.View>
                       </View>
                     </Px.View>
                   </View>
                   <View style={styles.flex_item}>
                     <Px.View
                       x="1px 102fr 27px"
                       y="8px minmax(0px, max-content) 0px"
                       style={styles.text_body_box}>
                       <Text style={styles.text_body} ellipsizeMode={'clip'}>
                         {'Budget/Remain'}
                       </Text>
                     </Px.View>
                   </View>
                   <View style={styles.flex_item}>
                     <Px.View
                       x="1px 128fr 1px"
                       y="1px minmax(0px, max-content) 0px"
                       style={styles.flex6}>
                       <View style={styles.flex6_item}>
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
                       <View style={styles.flex6_item}>
                         <Px.View
                           x="0px 30fr 0px"
                           y="0px minmax(0px, max-content) 0px"
                           style={styles.small_text_body_box}>
                           <Text
                             style={styles.small_text_body}
                             ellipsizeMode={'clip'}>
                             {'/$120'}
                           </Text>
                         </Px.View>
                       </View>
                     </Px.View>
                   </View>
                   <View style={styles.flex_item}>
                     <Px.View
                       x="0px 127fr 3px"
                       y="5px minmax(0px, max-content) 0px"
                       style={styles.text_body_box}>
                       <Text style={styles.text_body} ellipsizeMode={'clip'}>
                         {'Last/Current Month'}
                       </Text>
                     </Px.View>
                   </View>
                   <View style={styles.flex_item}>
                     <Px.View
                       x="0px 130fr 0px"
                       y="1px minmax(0px, max-content) 0px"
                       style={styles.flex8}>
                       <View style={styles.flex8_item}>
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
                       <View style={styles.flex8_item}>
                         <Px.View
                           x="0px 30fr 0px"
                           y="0px minmax(0px, max-content) 0px"
                           style={styles.small_text_body_box}>
                           <Text
                             style={styles.small_text_body}
                             ellipsizeMode={'clip'}>
                             {'/$120'}
                           </Text>
                         </Px.View>
                       </View>
                     </Px.View>
                   </View>
                   <View style={styles.flex_item}>
                     <Px.View
                       x="0px 130fr 0px"
                       y="8px minmax(0px, max-content) 0px"
                       style={styles.text_body_box}>
                       <Text style={styles.text_body} ellipsizeMode={'clip'}>
                         {'Difference '}
                       </Text>
                     </Px.View>
                   </View>
                   <View style={styles.flex_item}>
                     <Px.View
                       x="0px 130fr 0px"
                       y="1px minmax(0px, max-content) 15px"
                       style={styles.small_text_body1_box}>
                       <Text
                         style={styles.small_text_body1}
                         ellipsizeMode={'clip'}>
                         {'$100'}
                       </Text>
                     </Px.View>
                   </View>
                 </Px.View>
               </Px.ImageBackground>
             </View>
           </Px.View>
         </View>
         <View style={styles.block_item}>
           <View style={[styles.group, styles.group_layout]}>
             <Px.ImageBackground
               x="0px 343fr 4px"
               y="24px minmax(0px, max-content) 0px"
               absolute
               style={styles.cover_block19}
               source={require('../assets/e747ff90c23f769bea159b8a44dd571c.png')}
               resizeMode="contain">
               <View style={[styles.line, styles.line_layout]} />
               <View style={[styles.line1, styles.line1_layout1]} />
               <View style={[styles.line, styles.line_layout1]} />
               <View style={[styles.line1, styles.line1_layout2]} />
               <View style={[styles.line, styles.line_layout2]} />
 
               <Px.View
                 x="26px 311fr 6px"
                 y="41px minmax(0px, max-content) 2px"
                 style={styles.block1}>
                 <View style={styles.block1_item}>
                   <Px.View
                     x="0px 311fr 0px"
                     y="0px minmax(0px, max-content) 0px"
                     style={styles.group1}>
                     <Px.View
                       x="44fr 71.7fr 44fr"
                       y="19px minmax(0px, max-content) 17px"
                       absolute
                       style={styles.small_text_body_box1}>
                       <Text
                         style={styles.small_text_body2}
                         ellipsizeMode={'clip'}>
                         {'Left:'}
                       </Text>
                     </Px.View>
 
                     <Px.View
                       x="0px 311fr 0px"
                       y="0px minmax(0px, max-content) 0px"
                       style={styles.flex9}>
                       <View style={styles.flex9_item}>
                         <Px.ImageBackground
                           x="0px 48fr 0px"
                           y="0px minmax(0px, max-content) 0px"
                           style={styles.cover_block}
                           source={require('../assets/619db2d1d86fb9b0254d80a769926bcc.png')}
                           resizeMode="contain">
                           <ImageBackground
                             style={[styles.icon1, styles.icon1_layout]}
                             source={require('../assets/a3e57bb31942d19207b892dd473b2064.png')}
                           />
                         </Px.ImageBackground>
                       </View>
                       <View style={styles.flex9_space} />
                       <View style={styles.flex9_item1}>
                         <Px.View
                           x="0px 243fr 0px"
                           y="2px minmax(0px, max-content) 1px"
                           style={styles.flex10}>
                           <View style={styles.flex10_item}>
                             <Px.View
                               x="0px 243fr 0px"
                               y="0px minmax(0px, max-content) 0px"
                               style={styles.flex11}>
                               <View style={styles.flex11_item}>
                                 <Px.View
                                   x="0px 55fr 0px"
                                   y="0px minmax(0px, max-content) 0px"
                                   style={styles.flex12}>
                                   <View style={styles.flex12_item}>
                                     <Px.View
                                       x="0px 30fr 25px"
                                       y="0px minmax(0px, max-content) 0px"
                                       style={styles.text_body_box}>
                                       <Text
                                         style={styles.text_body}
                                         ellipsizeMode={'clip'}>
                                         {'Taxi'}
                                       </Text>
                                     </Px.View>
                                   </View>
                                   <View style={styles.flex12_item}>
                                     <Px.View
                                       x="0px 55fr 0px"
                                       y="1px minmax(0px, max-content) 0px"
                                       style={styles.flex13}>
                                       <View style={styles.flex13_item}>
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
                                       <View style={styles.flex13_item}>
                                         <Px.View
                                           x="0px 30fr 0px"
                                           y="0px minmax(0px, max-content) 0px"
                                           style={styles.small_text_body_box}>
                                           <Text
                                             style={styles.small_text_body}
                                             ellipsizeMode={'clip'}>
                                             {'/$120'}
                                           </Text>
                                         </Px.View>
                                       </View>
                                     </Px.View>
                                   </View>
                                 </Px.View>
                               </View>
                               <View style={styles.flex11_space} />
                               <View style={styles.flex11_item1}>
                                 <Px.View
                                   x="0px 28fr 0px"
                                   y="13px minmax(0px, max-content) 0px"
                                   style={styles.text_body_box1}>
                                   <Text
                                     style={styles.text_body1}
                                     ellipsizeMode={'clip'}>
                                     {'$20'}
                                   </Text>
                                 </Px.View>
                               </View>
                               <View style={styles.flex11_space1} />
                               <View style={styles.flex11_item2}>
                                 <Px.ImageBackground
                                   x="0px 12fr 0px"
                                   y="15px minmax(0px, max-content) 3px"
                                   style={styles.cover_block1}
                                   source={require('../assets/cdfc0d4748e7637340634db1ca4defec.png')}
                                   resizeMode="contain">
                                   <ImageBackground
                                     style={[
                                       styles.image1,
                                       styles.image1_layout
                                     ]}
                                     source={require('../assets/d47c8b1ff737f1706a337b33efdbca03.png')}
                                   />
                                 </Px.ImageBackground>
                               </View>
                             </Px.View>
                           </View>
                           <View style={styles.flex10_item}>
                             <Px.View
                               x="0px 243fr 0px"
                               y="9px minmax(0px, max-content) 0px"
                               style={styles.cover_block2}>
                               <Px.View
                                 x="1fr 82.3fr 17.7fr"
                                 y="0px 6px 0px"
                                 style={styles.cover_group}>
                                 <ImageBackground
                                   style={[styles.image2, styles.image2_layout]}
                                   source={require('../assets/75afd001f65f76dda3c374ae82e36707.png')}
                                 />
                                 <ImageBackground
                                   style={[styles.cover1, styles.cover1_layout]}
                                   source={require('../assets/f15cfce93228f268e70530952b373c80.png')}
                                 />
                               </Px.View>
                             </Px.View>
                           </View>
                         </Px.View>
                       </View>
                     </Px.View>
                   </Px.View>
                 </View>
                 <View style={styles.block1_item}>
                   <Px.View
                     x="0px 311fr 0px"
                     y="21px minmax(0px, max-content) 0px"
                     style={styles.group2}>
                     <Px.View
                       x="44fr 71.7fr 44fr"
                       y="19px minmax(0px, max-content) 17px"
                       absolute
                       style={styles.small_text_body_box2}>
                       <Text
                         style={styles.small_text_body3}
                         ellipsizeMode={'clip'}>
                         {'Left:'}
                       </Text>
                     </Px.View>
 
                     <Px.View
                       x="0px 311fr 0px"
                       y="0px minmax(0px, max-content) 0px"
                       style={styles.flex14}>
                       <View style={styles.flex14_item}>
                         <Px.ImageBackground
                           x="0px 48fr 0px"
                           y="0px minmax(0px, max-content) 0px"
                           style={styles.cover_block3}
                           source={require('../assets/619db2d1d86fb9b0254d80a769926bcc.png')}
                           resizeMode="contain">
                           <View style={[styles.block2, styles.block2_layout]}>
                             <ImageBackground
                               style={[styles.icon1, styles.icon1_layout1]}
                               source={require('../assets/3d3ead1b4fa457a1dd2ea6df61870de7.png')}
                             />
                           </View>
                         </Px.ImageBackground>
                       </View>
                       <View style={styles.flex14_space} />
                       <View style={styles.flex14_item1}>
                         <Px.View
                           x="0px 243fr 0px"
                           y="1px minmax(0px, max-content) 1px"
                           style={styles.flex15}>
                           <View style={styles.flex15_item}>
                             <Px.View
                               x="0px 243fr 0px"
                               y="0px minmax(0px, max-content) 0px"
                               style={styles.flex16}>
                               <View style={styles.flex16_item}>
                                 <Px.View
                                   x="0px 104fr 0px"
                                   y="0px minmax(0px, max-content) 1px"
                                   style={styles.flex17}>
                                   <View style={styles.flex17_item}>
                                     <Px.View
                                       x="0px 104fr 0px"
                                       y="0px minmax(0px, max-content) 0px"
                                       style={styles.text_body_box}>
                                       <Text
                                         style={styles.text_body}
                                         ellipsizeMode={'clip'}>
                                         {'Public transport'}
                                       </Text>
                                     </Px.View>
                                   </View>
                                   <View style={styles.flex17_item}>
                                     <Px.View
                                       x="0px 104fr 0px"
                                       y="1px minmax(0px, max-content) 0px"
                                       style={styles.flex18}>
                                       <View style={styles.flex18_item}>
                                         <Px.View
                                           x="0px 14fr 0px"
                                           y="0px minmax(0px, max-content) 0px"
                                           style={styles.small_text_body1_box}>
                                           <Text
                                             style={styles.small_text_body1}
                                             ellipsizeMode={'clip'}>
                                             {'$2'}
                                           </Text>
                                         </Px.View>
                                       </View>
                                       <View style={styles.flex18_item}>
                                         <Px.View
                                           x="0px 24fr 0px"
                                           y="0px minmax(0px, max-content) 0px"
                                           style={styles.small_text_body_box}>
                                           <Text
                                             style={styles.small_text_body}
                                             ellipsizeMode={'clip'}>
                                             {'/$20'}
                                           </Text>
                                         </Px.View>
                                       </View>
                                     </Px.View>
                                   </View>
                                 </Px.View>
                               </View>
                               <View style={styles.flex16_space} />
                               <View style={styles.flex16_item1}>
                                 <Px.View
                                   x="0px 28fr 0px"
                                   y="14px minmax(0px, max-content) 0px"
                                   style={styles.text_body_box2}>
                                   <Text
                                     style={styles.text_body2}
                                     ellipsizeMode={'clip'}>
                                     {'$18'}
                                   </Text>
                                 </Px.View>
                               </View>
                               <View style={styles.flex16_space1} />
                               <View style={styles.flex16_item2}>
                                 <Px.ImageBackground
                                   x="0px 12fr 0px"
                                   y="16px minmax(0px, max-content) 3px"
                                   style={styles.cover_block1}
                                   source={require('../assets/cdfc0d4748e7637340634db1ca4defec.png')}
                                   resizeMode="contain">
                                   <ImageBackground
                                     style={[
                                       styles.image1,
                                       styles.image1_layout1
                                     ]}
                                     source={require('../assets/d47c8b1ff737f1706a337b33efdbca03.png')}
                                   />
                                 </Px.ImageBackground>
                               </View>
                             </Px.View>
                           </View>
                           <View style={styles.flex15_item}>
                             <Px.View
                               x="0px 243fr 0px"
                               y="9px minmax(0px, max-content) 0px"
                               style={styles.cover_block5}>
                               <ImageBackground
                                 style={[styles.image3, styles.image3_layout]}
                                 source={require('../assets/d410953adf618e5604ccf12c48fe0d66.png')}
                               />
                             </Px.View>
                           </View>
                         </Px.View>
                       </View>
                     </Px.View>
                   </Px.View>
                 </View>
                 <View style={styles.block1_item}>
                   <Px.View
                     x="0px 311fr 0px"
                     y="20px minmax(0px, max-content) 0px"
                     style={styles.group3}>
                     <Px.View
                       x="49fr 68.49fr 49fr"
                       y="19px minmax(0px, max-content) 17px"
                       absolute
                       style={styles.small_text_body_box3}>
                       <Text
                         style={styles.small_text_body4}
                         ellipsizeMode={'clip'}>
                         {'Limit is exceeded:'}
                       </Text>
                     </Px.View>
 
                     <Px.ImageBackground
                       x="299fr 12px 0px"
                       y="17px minmax(0px, max-content) 19px"
                       absolute
                       style={styles.cover_block20}
                       source={require('../assets/4a8d14d81367781eb26a80a75576ded2.png')}
                       resizeMode="contain">
                       <View style={styles.cover_block20_item}>
                         <ImageBackground
                           style={[styles.line2, styles.line2_layout]}
                           source={require('../assets/9887330e8526266c816e3508b1b5b8da.png')}
                         />
                       </View>
                       <View style={styles.cover_block20_space} />
                       <View style={styles.cover_block20_item1}>
                         <ImageBackground
                           style={[styles.line2, styles.line2_layout1]}
                           source={require('../assets/d5bbc56b4ef9183d0c55a21ac1e3f375.png')}
                         />
                       </View>
                     </Px.ImageBackground>
 
                     <Px.View
                       x="0px 311fr 0px"
                       y="0px minmax(0px, max-content) 0px"
                       style={styles.flex19}>
                       <View style={styles.flex19_item}>
                         <Px.ImageBackground
                           x="0px 48fr 0px"
                           y="0px minmax(0px, max-content) 0px"
                           style={styles.cover_block3}
                           source={require('../assets/619db2d1d86fb9b0254d80a769926bcc.png')}
                           resizeMode="contain">
                           <View style={[styles.block2, styles.block2_layout]}>
                             <ImageBackground
                               style={[styles.icon1, styles.icon1_layout2]}
                               source={require('../assets/ac6e6279ad9ba4d089b374f9a10b158c.png')}
                             />
                           </View>
                         </Px.ImageBackground>
                       </View>
                       <View style={styles.flex19_space} />
                       <View style={styles.flex19_item1}>
                         <Px.View
                           x="0px 243fr 0px"
                           y="2px minmax(0px, max-content) 1px"
                           style={styles.flex20}>
                           <View style={styles.flex20_item}>
                             <Px.View
                               x="0px 243fr 0px"
                               y="0px minmax(0px, max-content) 0px"
                               style={styles.flex21}>
                               <View style={styles.flex21_item}>
                                 <Px.View
                                   x="0px 55fr 0px"
                                   y="0px minmax(0px, max-content) 0px"
                                   style={styles.flex12}>
                                   <View style={styles.flex12_item}>
                                     <Px.View
                                       x="0px 42fr 13px"
                                       y="0px minmax(0px, max-content) 0px"
                                       style={styles.text_body_box}>
                                       <Text
                                         style={styles.text_body}
                                         ellipsizeMode={'clip'}>
                                         {'Home'}
                                       </Text>
                                     </Px.View>
                                   </View>
                                   <View style={styles.flex12_item}>
                                     <Px.View
                                       x="0px 55fr 0px"
                                       y="1px minmax(0px, max-content) 0px"
                                       style={styles.flex13}>
                                       <View style={styles.flex13_item}>
                                         <Px.View
                                           x="0px 25fr 0px"
                                           y="0px minmax(0px, max-content) 0px"
                                           style={styles.small_text_body1_box}>
                                           <Text
                                             style={styles.small_text_body1}
                                             ellipsizeMode={'clip'}>
                                             {'$210'}
                                           </Text>
                                         </Px.View>
                                       </View>
                                       <View style={styles.flex13_item}>
                                         <Px.View
                                           x="0px 30fr 0px"
                                           y="0px minmax(0px, max-content) 0px"
                                           style={styles.small_text_body_box}>
                                           <Text
                                             style={styles.small_text_body}
                                             ellipsizeMode={'clip'}>
                                             {'/$200'}
                                           </Text>
                                         </Px.View>
                                       </View>
                                     </Px.View>
                                   </View>
                                 </Px.View>
                               </View>
                               <View style={styles.flex21_space} />
                               <View style={styles.flex21_item1}>
                                 <Px.View
                                   x="0px 32fr 0px"
                                   y="13px minmax(0px, max-content) 0px"
                                   style={styles.text_body1_box}>
                                   <Text
                                     style={styles.text_body11}
                                     ellipsizeMode={'clip'}>
                                     {'-$10'}
                                   </Text>
                                 </Px.View>
                               </View>
                               <View style={styles.flex21_space1} />
                               <View style={styles.flex21_item2}>
                                 <Px.View
                                   x="0px 12fr 0px"
                                   y="15px minmax(0px, max-content) 3px"
                                   style={styles.cover_group1}>
                                   <ImageBackground
                                     style={[
                                       styles.image4,
                                       styles.image4_layout
                                     ]}
                                     source={require('../assets/ef642e3b2e14dac1a996f5583ae5a762.png')}
                                   />
                                 </Px.View>
                               </View>
                             </Px.View>
                           </View>
                           <View style={styles.flex20_item}>
                             <ImageBackground
                               style={[styles.image5, styles.image5_layout]}
                               source={require('../assets/f394b966fc2dd1e2a9c3a869bcc7c3a3.png')}
                             />
                           </View>
                         </Px.View>
                       </View>
                     </Px.View>
                   </Px.View>
                 </View>
                 <View style={styles.block1_item}>
                   <Px.View
                     x="0px 311fr 0px"
                     y="21px minmax(0px, max-content) 0px"
                     style={styles.group4}>
                     <Px.View
                       x="68fr 56.27fr 68fr"
                       y="19px minmax(0px, max-content) 17px"
                       absolute
                       style={styles.small_text_body1_box}>
                       <Text
                         style={styles.small_text_body1}
                         ellipsizeMode={'clip'}>
                         {'$70'}
                       </Text>
                     </Px.View>
                     <Px.View
                       x="52fr 66.56fr 52fr"
                       y="19px minmax(0px, max-content) 17px"
                       absolute
                       style={styles.small_text_body_box4}>
                       <Text
                         style={styles.small_text_body5}
                         ellipsizeMode={'clip'}>
                         {'Left:'}
                       </Text>
                     </Px.View>
 
                     <Px.View
                       x="0px 311fr 0px"
                       y="0px minmax(0px, max-content) 0px"
                       style={styles.flex24}>
                       <View style={styles.flex24_item}>
                         <Px.ImageBackground
                           x="0px 48fr 0px"
                           y="0px minmax(0px, max-content) 0px"
                           style={styles.cover_block3}
                           source={require('../assets/619db2d1d86fb9b0254d80a769926bcc.png')}
                           resizeMode="contain">
                           <View style={[styles.block2, styles.block2_layout]}>
                             <ImageBackground
                               style={[styles.icon1, styles.icon1_layout3]}
                               source={require('../assets/4c105694eaddcb9b824f2a116db34c73.png')}
                             />
                           </View>
                         </Px.ImageBackground>
                       </View>
                       <View style={styles.flex24_space} />
                       <View style={styles.flex24_item1}>
                         <Px.View
                           x="0px 243fr 0px"
                           y="1px minmax(0px, max-content) 1px"
                           style={styles.flex25}>
                           <View style={styles.flex25_item}>
                             <Px.View
                               x="0px 243fr 0px"
                               y="0px minmax(0px, max-content) 0px"
                               style={styles.flex26}>
                               <View style={styles.flex26_item}>
                                 <Px.View
                                   x="0px 93fr 0px"
                                   y="0px minmax(0px, max-content) 1px"
                                   style={styles.flex27}>
                                   <View style={styles.flex27_item}>
                                     <Px.View
                                       x="0px 93fr 0px"
                                       y="0px minmax(0px, max-content) 0px"
                                       style={styles.text_body_box}>
                                       <Text
                                         style={styles.text_body}
                                         ellipsizeMode={'clip'}>
                                         {'Entertainment'}
                                       </Text>
                                     </Px.View>
                                   </View>
                                   <View style={styles.flex27_item}>
                                     <Px.View
                                       x="19px 55fr 19px"
                                       y="1px minmax(0px, max-content) 0px"
                                       style={styles.small_text_body_box}>
                                       <Text
                                         style={styles.small_text_body}
                                         ellipsizeMode={'clip'}>
                                         {'/$200'}
                                       </Text>
                                     </Px.View>
                                   </View>
                                 </Px.View>
                               </View>
                               <View style={styles.flex26_space} />
                               <View style={styles.flex26_item1}>
                                 <Px.View
                                   x="0px 36fr 0px"
                                   y="14px minmax(0px, max-content) 0px"
                                   style={styles.text_body_box3}>
                                   <Text
                                     style={styles.text_body3}
                                     ellipsizeMode={'clip'}>
                                     {'$130'}
                                   </Text>
                                 </Px.View>
                               </View>
                               <View style={styles.flex26_space1} />
                               <View style={styles.flex26_item2}>
                                 <Px.ImageBackground
                                   x="0px 12fr 0px"
                                   y="16px minmax(0px, max-content) 3px"
                                   style={styles.cover_block1}
                                   source={require('../assets/cdfc0d4748e7637340634db1ca4defec.png')}
                                   resizeMode="contain">
                                   <ImageBackground
                                     style={[
                                       styles.image1,
                                       styles.image1_layout2
                                     ]}
                                     source={require('../assets/d47c8b1ff737f1706a337b33efdbca03.png')}
                                   />
                                 </Px.ImageBackground>
                               </View>
                             </Px.View>
                           </View>
                           <View style={styles.flex25_item}>
                             <Px.View
                               x="0px 243fr 0px"
                               y="9px minmax(0px, max-content) 0px"
                               style={styles.cover_block9}>
                               <ImageBackground
                                 style={[styles.image2, styles.image2_layout1]}
                                 source={require('../assets/75afd001f65f76dda3c374ae82e36707.png')}
                               />
                             </Px.View>
                           </View>
                         </Px.View>
                       </View>
                     </Px.View>
                   </Px.View>
                 </View>
                 <View style={styles.block1_item}>
                   <Px.View
                     x="0px 311fr 0px"
                     y="20px minmax(0px, max-content) 0px"
                     style={styles.group5}>
                     <Px.View
                       x="68fr 56.2fr 68fr"
                       y="20px minmax(0px, max-content) 16px"
                       absolute
                       style={styles.small_text_body1_box}>
                       <Text
                         style={styles.small_text_body1}
                         ellipsizeMode={'clip'}>
                         {'$70'}
                       </Text>
                     </Px.View>
                     <Px.View
                       x="52fr 66.56fr 52fr"
                       y="19px minmax(0px, max-content) 17px"
                       absolute
                       style={styles.small_text_body_box5}>
                       <Text
                         style={styles.small_text_body6}
                         ellipsizeMode={'clip'}>
                         {'Left:'}
                       </Text>
                     </Px.View>
 
                     <Px.View
                       x="0px 311fr 0px"
                       y="0px minmax(0px, max-content) 0px"
                       style={styles.flex28}>
                       <View style={styles.flex28_item}>
                         <Px.ImageBackground
                           x="0px 48fr 0px"
                           y="0px minmax(0px, max-content) 0px"
                           style={styles.cover_block3}
                           source={require('../assets/619db2d1d86fb9b0254d80a769926bcc.png')}
                           resizeMode="contain">
                           <View style={[styles.block2, styles.block2_layout]}>
                             <ImageBackground
                               style={[styles.icon1, styles.icon1_layout4]}
                               source={require('../assets/cefcd19f007efa2ca07b3c589d7e3179.png')}
                             />
                           </View>
                         </Px.ImageBackground>
                       </View>
                       <View style={styles.flex28_space} />
                       <View style={styles.flex28_item1}>
                         <Px.View
                           x="0px 243fr 0px"
                           y="2px minmax(0px, max-content) 1px"
                           style={styles.flex29}>
                           <View style={styles.flex29_item}>
                             <Px.View
                               x="0px 243fr 0px"
                               y="0px minmax(0px, max-content) 0px"
                               style={styles.flex30}>
                               <View style={styles.flex30_item}>
                                 <Px.View
                                   x="0px 49fr 0px"
                                   y="0px minmax(0px, max-content) 0px"
                                   style={styles.flex31}>
                                   <View style={styles.flex31_item}>
                                     <Px.View
                                       x="0px 38fr 11px"
                                       y="0px minmax(0px, max-content) 0px"
                                       style={styles.text_body_box}>
                                       <Text
                                         style={styles.text_body}
                                         ellipsizeMode={'clip'}>
                                         {'Sport'}
                                       </Text>
                                     </Px.View>
                                   </View>
                                   <View style={styles.flex31_item}>
                                     <Px.View
                                       x="19px 30fr 0px"
                                       y="1px minmax(0px, max-content) 0px"
                                       style={styles.small_text_body_box}>
                                       <Text
                                         style={styles.small_text_body}
                                         ellipsizeMode={'clip'}>
                                         {'/$200'}
                                       </Text>
                                     </Px.View>
                                   </View>
                                 </Px.View>
                               </View>
                               <View style={styles.flex30_space} />
                               <View style={styles.flex30_item1}>
                                 <Px.View
                                   x="0px 36fr 0px"
                                   y="13px minmax(0px, max-content) 0px"
                                   style={styles.text_body_box4}>
                                   <Text
                                     style={styles.text_body4}
                                     ellipsizeMode={'clip'}>
                                     {'$130'}
                                   </Text>
                                 </Px.View>
                               </View>
                               <View style={styles.flex30_space1} />
                               <View style={styles.flex30_item2}>
                                 <Px.ImageBackground
                                   x="0px 12fr 0px"
                                   y="15px minmax(0px, max-content) 3px"
                                   style={styles.cover_block1}
                                   source={require('../assets/cdfc0d4748e7637340634db1ca4defec.png')}
                                   resizeMode="contain">
                                   <ImageBackground
                                     style={[
                                       styles.image1,
                                       styles.image1_layout
                                     ]}
                                     source={require('../assets/d47c8b1ff737f1706a337b33efdbca03.png')}
                                   />
                                 </Px.ImageBackground>
                               </View>
                             </Px.View>
                           </View>
                           <View style={styles.flex29_item}>
                             <Px.View
                               x="0px 243fr 0px"
                               y="9px minmax(0px, max-content) 0px"
                               style={styles.cover_block9}>
                               <ImageBackground
                                 style={[styles.image2, styles.image2_layout2]}
                                 source={require('../assets/75afd001f65f76dda3c374ae82e36707.png')}
                               />
                             </Px.View>
                           </View>
                         </Px.View>
                       </View>
                     </Px.View>
                   </Px.View>
                 </View>
               </Px.View>
             </Px.ImageBackground>
 
             <Px.View
               x="0px 347fr 0px"
               y="0px minmax(0px, max-content) 341px"
               absolute
               style={styles.block3}>
               <Px.View
                 x="16px 315fr 16px"
                 y="8px minmax(0px, max-content) 8px"
                 style={styles.flex1}>
                 <View style={styles.flex1_item}>
                   <ImageBackground
                     style={[styles.image6, styles.image6_layout]}
                     source={require('../assets/5e1eb6e0173986ce11dc785fd88093ed.png')}
                   />
                 </View>
                 <View style={styles.flex1_space} />
                 <View style={styles.flex1_item1}>
                   <ImageBackground
                     style={[styles.image7, styles.image7_layout]}
                     source={require('../assets/08287628cd79e6874619037e66468e8b.png')}
                   />
                 </View>
                 <View style={styles.flex1_space1} />
                 <View style={styles.flex1_item2}>
                   <Px.ImageBackground
                     x="0px 48fr 0px"
                     y="0px minmax(0px, max-content) 0px"
                     style={styles.cover_block15}
                     source={require('../assets/840332be457abd5413fb61386cc1752f.png')}
                     resizeMode="contain">
                     <ImageBackground
                       style={[styles.icon3, styles.icon3_layout1]}
                       source={require('../assets/002a169a9f76fbdab63da6661b476248.png')}
                     />
                   </Px.ImageBackground>
                 </View>
                 <View style={styles.flex1_space2} />
                 <View style={styles.flex1_item3}>
                   <ImageBackground
                     style={[styles.image9, styles.image9_layout]}
                     source={require('../assets/7f305ed82fee24b759f8d95047b243f4.png')}
                   />
                 </View>
                 <View style={styles.flex1_space3} />
                 <View style={styles.flex1_item4}>
                   <ImageBackground
                     style={[styles.image10, styles.image10_layout]}
                     source={require('../assets/cad3c8f796cde347e2917307004877a2.png')}
                   />
                 </View>
               </Px.View>
             </Px.View>
           </View>
         </View>
         <View style={styles.block_item}>
           <Px.View
             x="47fr 72.99fr 47fr"
             y="17px minmax(0px, max-content) 0px"
             style={styles.flex4}>
             <View style={styles.flex4_item}>
               <ImageBackground
                 style={[styles.icon5, styles.icon5_layout]}
                 source={require('../assets/28437159809aa6bc9073d761fca53921.png')}
               />
             </View>
             <View style={styles.flex4_space} />
             <View style={styles.flex4_item}>
               <ImageBackground
                 style={[styles.icon5, styles.icon5_layout]}
                 source={require('../assets/e30b797b38d2be7022853181b45f55ed.png')}
               />
             </View>
             <View style={styles.flex4_space} />
             <View style={styles.flex4_item}>
               <ImageBackground
                 style={[styles.icon5, styles.icon5_layout]}
                 source={require('../assets/b988aedab7370b6d7cdfedcecc3a4ca0.png')}
               />
             </View>
             <View style={styles.flex4_space} />
             <View style={styles.flex4_item}>
               <ImageBackground
                 style={[styles.icon5, styles.icon5_layout]}
                 source={require('../assets/332abda0857ed3beb144d7386c75253b.png')}
               />
             </View>
           </Px.View>
         </View>
         <View style={styles.block_item}>
           <Px.View
             x="32px 284fr 32px"
             y="10px minmax(0px, max-content) 11px"
             style={styles.flex5}>
             <View style={styles.flex5_item}>
               <Px.View
                 x="0px 55fr 0px"
                 y="0px minmax(0px, max-content) 0px"
                 style={styles.small_text_body2_box}>
                 <Text style={styles.small_text_body21} ellipsizeMode={'clip'}>
                   {'overview'}
                 </Text>
               </Px.View>
             </View>
             <View style={styles.flex5_space} />
             <View style={styles.flex5_item}>
               <Px.View
                 x="0px 25fr 0px"
                 y="0px minmax(0px, max-content) 0px"
                 style={styles.small_text_body2_box}>
                 <Text style={styles.small_text_body22} ellipsizeMode={'clip'}>
                   {'add'}
                 </Text>
               </Px.View>
             </View>
             <View style={styles.flex5_space1} />
             <View style={styles.flex5_item}>
               <Px.View
                 x="0px 58fr 0px"
                 y="0px minmax(0px, max-content) 0px"
                 style={styles.small_text_body2_box}>
                 <Text style={styles.small_text_body23} ellipsizeMode={'clip'}>
                   {'Statistics'}
                 </Text>
               </Px.View>
             </View>
             <View style={styles.flex5_space2} />
             <View style={styles.flex5_item}>
               <Px.View
                 x="0px 42fr 0px"
                 y="0px minmax(0px, max-content) 0px"
                 style={styles.small_text_body2_box}>
                 <Text style={styles.small_text_body24} ellipsizeMode={'clip'}>
                   {'profile'}
                 </Text>
               </Px.View>
             </View>
           </Px.View>
         </View>
       </ImageBackground>
     </View>
   );
 }
 
 export default Frame3


 Frame3.inStorybook = true;
 Frame3.fitScreen = false;
 Frame3.scrollHeight = 728;
 
 const styles = StyleSheet.create({
   group: {},
   group_layout1: {
     marginTop: 0,
     marginBottom: 0,
     marginLeft: 0,
     flexGrow: 1,
     marginRight: 0
   },
   line1: {
     backgroundColor: '#e9ecedff'
   },
   line1_layout: {
     position: 'absolute',
     top: 0,
     marginTop: 662,
     height: 1,
     marginBottom: 65,
     left: 26,
     flexGrow: 1,
     right: 11
   },
   block: {
     backgroundColor: '#ffffff',
     borderRadius: 20
   },
   block_layout: {
     marginTop: 0,
     marginBottom: 0,
     minHeight: 728,
     marginLeft: 0,
     flexGrow: 1,
     marginRight: 0
   },
   block_item: {
     flexGrow: 0,
     flexShrink: 1
   },
   cover_block13: {
     width: '100%',
     flexGrow: 1,
     backgroundColor: '#ffffffff'
   },
   flex2: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex2_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 40
   },
   cover_block14: {
     width: '100%',
     flexGrow: 1
   },
   image12: {
     resizeMode: 'contain'
   },
   image12_layout: {
     marginTop: 12,
     height: 15,
     marginBottom: 13,
     marginLeft: 7,
     width: 27,
     minWidth: 27,
     marginRight: 6
   },
   flex2_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 24
   },
   flex2_item1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 204
   },
   image11: {
     resizeMode: 'contain'
   },
   image11_layout: {
     marginTop: 8,
     height: 24,
     marginBottom: 8,
     marginLeft: 0,
     flexGrow: 1,
     marginRight: 0
   },
   flex2_space1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 26
   },
   flex2_item2: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 38
   },
   icon3: {
     resizeMode: 'contain'
   },
   icon3_layout: {
     marginTop: 11,
     height: 18,
     marginBottom: 11,
     marginLeft: 0,
     width: 18,
     minWidth: 18,
     marginRight: 20
   },
   flex3: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex3_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 171
   },
   block4: {},
   block4_layout: {
     marginTop: 0,
     height: 161,
     marginBottom: 20,
     marginLeft: 0,
     flexGrow: 1,
     marginRight: 0
   },
   cover_group2: {},
   cover_group2_layout: {
     position: 'absolute',
     top: 10,
     height: 152,
     width: 162,
     right: 0
   },
   cover2: {
     resizeMode: 'contain'
   },
   cover2_layout: {
     position: 'absolute',
     top: 0,
     marginTop: 0,
     height: 152,
     marginBottom: 0,
     left: 0,
     flexGrow: 1,
     right: 0
   },
   cover_block16: {
     flexGrow: 1
   },
   cover_block16_item: {
     flexGrow: 0,
     flexShrink: 1
   },
   image14: {
     resizeMode: 'contain'
   },
   image14_layout: {
     marginTop: 38,
     height: 21,
     marginBottom: 0,
     marginLeft: 35,
     width: 49,
     minWidth: 49,
     marginRight: 34
   },
   image15: {
     resizeMode: 'contain'
   },
   image15_layout: {
     marginTop: 0,
     height: 14,
     marginBottom: 38,
     marginLeft: 25,
     width: 69,
     minWidth: 69,
     marginRight: 24
   },
   cover_block17: {
     width: '100%',
     flexGrow: 1
   },
   cover3: {
     resizeMode: 'contain'
   },
   cover3_layout: {
     marginTop: 0,
     height: 161,
     marginBottom: 0,
     marginLeft: 0,
     flexGrow: 1,
     marginRight: 0
   },
   flex3_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 15
   },
   flex3_item1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 142
   },
   cover_block18: {
     width: '100%',
     flexGrow: 1
   },
   flex: {
     flexGrow: 1
   },
   flex_item: {
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
   flex6: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex6_item: {
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
   small_text_body: {
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
   small_text_body_box: {
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
   small_text_body: {
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
   flex8: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex8_item: {
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
   small_text_body: {
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
   },
   group_layout: {
     marginTop: 11,
     height: 389,
     marginBottom: 0,
     marginLeft: 0,
     flexGrow: 1,
     marginRight: 1
   },
   cover_block19: {
     width: '100%',
     flexGrow: 1
   },
   line: {
     backgroundColor: '#e9ecedff'
   },
   line_layout: {
     position: 'absolute',
     top: 0,
     marginTop: 305,
     height: 0,
     marginBottom: 60,
     left: 26,
     flexGrow: 1,
     right: 6
   },
   line1_layout1: {
     position: 'absolute',
     top: 0,
     marginTop: 236,
     height: 1,
     marginBottom: 128,
     left: 26,
     flexGrow: 1,
     right: 6
   },
   line_layout1: {
     position: 'absolute',
     top: 0,
     marginTop: 168,
     height: 0,
     marginBottom: 197,
     left: 26,
     flexGrow: 1,
     right: 6
   },
   line1_layout2: {
     position: 'absolute',
     top: 0,
     marginTop: 99,
     height: 1,
     marginBottom: 265,
     left: 26,
     flexGrow: 1,
     right: 6
   },
   line_layout2: {
     position: 'absolute',
     top: 0,
     marginTop: 31,
     height: 0,
     marginBottom: 334,
     left: 26,
     flexGrow: 1,
     right: 6
   },
   block1: {
     flexGrow: 1
   },
   block1_item: {
     flexGrow: 0,
     flexShrink: 1
   },
   group1: {
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
   small_text_body_box1: {
     flexGrow: 1,
     flexDirection: 'row',
     alignItems: 'flex-start',
     justifyContent: 'flex-end'
   },
   flex9: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex9_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 48
   },
   cover_block: {
     width: '100%',
     flexGrow: 1
   },
   icon1: {
     resizeMode: 'contain'
   },
   icon1_layout: {
     marginTop: 10,
     height: 28,
     marginBottom: 10,
     marginLeft: 10,
     width: 28,
     minWidth: 28,
     marginRight: 10
   },
   flex9_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 20
   },
   flex9_item1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 243
   },
   flex10: {
     flexGrow: 1
   },
   flex10_item: {
     flexGrow: 0,
     flexShrink: 1
   },
   flex11: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex11_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 55
   },
   flex12: {
     flexGrow: 1
   },
   flex12_item: {
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
   flex13: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex13_item: {
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
   small_text_body: {
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
   flex11_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 142
   },
   flex11_item1: {
     flexGrow: 0,
     flexShrink: 0,
     minWidth: 0
   },
   text_body1: {
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
   text_body_box1: {
     flexGrow: 1,
     flexDirection: 'row',
     alignItems: 'flex-start',
     justifyContent: 'flex-end'
   },
   flex11_space1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 6
   },
   flex11_item2: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 12
   },
   cover_block1: {
     width: '100%',
     flexGrow: 1
   },
   image1: {
     resizeMode: 'contain'
   },
   image1_layout: {
     marginTop: 8,
     height: 1,
     marginBottom: 3,
     marginLeft: 4,
     width: 5,
     minWidth: 5,
     marginRight: 3
   },
   cover_block2: {
     width: '100%',
     flexGrow: 1,
     backgroundColor: '#e9ecedff',
     borderRadius: 3
   },
   cover_group: {
     width: '100%',
     flexGrow: 1
   },
   image2: {
     resizeMode: 'contain',
     borderRadius: 3
   },
   image2_layout: {
     position: 'absolute',
     top: 0,
     marginTop: 0,
     height: 6,
     marginBottom: 0,
     left: 0,
     width: 71,
     minWidth: 71
   },
   cover1: {
     resizeMode: 'contain',
     borderRadius: 3
   },
   cover1_layout: {
     position: 'absolute',
     top: 0,
     marginTop: 0,
     height: 6,
     marginBottom: 0,
     left: 0,
     flexGrow: 1,
     right: 0
   },
   group2: {
     width: '100%',
     flexGrow: 1
   },
   small_text_body3: {
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
   small_text_body_box2: {
     flexGrow: 1,
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
     flexShrink: 1,
     flexBasis: 48
   },
   cover_block3: {
     width: '100%',
     flexGrow: 1
   },
   block2: {
     overflow: 'hidden'
   },
   block2_layout: {
     marginTop: 10,
     height: 28,
     marginBottom: 10,
     marginLeft: 10,
     flexGrow: 1,
     marginRight: 10
   },
   icon1_layout1: {
     position: 'absolute',
     top: 0,
     height: 28,
     left: 1,
     width: 28
   },
   flex14_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 20
   },
   flex14_item1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 243
   },
   flex15: {
     flexGrow: 1
   },
   flex15_item: {
     flexGrow: 0,
     flexShrink: 1
   },
   flex16: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex16_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 104
   },
   flex17: {
     flexGrow: 1
   },
   flex17_item: {
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
   flex18: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex18_item: {
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
   small_text_body: {
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
   flex16_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 93
   },
   flex16_item1: {
     flexGrow: 0,
     flexShrink: 0,
     minWidth: 0
   },
   text_body2: {
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
   text_body_box2: {
     flexGrow: 1,
     flexDirection: 'row',
     alignItems: 'flex-start',
     justifyContent: 'flex-end'
   },
   flex16_space1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 6
   },
   flex16_item2: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 12
   },
   image1_layout1: {
     marginTop: 7,
     height: 1,
     marginBottom: 4,
     marginLeft: 4,
     width: 5,
     minWidth: 5,
     marginRight: 3
   },
   cover_block5: {
     width: '100%',
     flexGrow: 1,
     backgroundColor: '#e9ecedff',
     borderRadius: 3
   },
   image3: {
     resizeMode: 'contain',
     borderRadius: 3
   },
   image3_layout: {
     marginTop: 0,
     height: 6,
     marginBottom: 0,
     marginLeft: 0,
     width: 32,
     minWidth: 32
   },
   group3: {
     width: '100%',
     flexGrow: 1
   },
   small_text_body4: {
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
   small_text_body_box3: {
     flexGrow: 1,
     flexDirection: 'row',
     alignItems: 'flex-start',
     justifyContent: 'flex-end'
   },
   cover_block20: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   cover_block20_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 5
   },
   line2: {
     resizeMode: 'contain'
   },
   line2_layout: {
     marginTop: 4,
     height: 0,
     marginBottom: 8,
     marginLeft: 4,
     flexGrow: 1,
     marginRight: 0
   },
   cover_block20_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 3
   },
   cover_block20_item1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 4
   },
   line2_layout1: {
     marginTop: 4,
     height: 0,
     marginBottom: 8,
     marginLeft: 0,
     flexGrow: 1,
     marginRight: 3
   },
   flex19: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex19_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 48
   },
   icon1_layout2: {
     position: 'absolute',
     top: 0,
     height: 28,
     left: 1,
     width: 28
   },
   flex19_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 20
   },
   flex19_item1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 243
   },
   flex20: {
     flexGrow: 1
   },
   flex20_item: {
     flexGrow: 0,
     flexShrink: 1
   },
   flex21: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex21_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 55
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
   },
   small_text_body: {
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
   flex21_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 138
   },
   flex21_item1: {
     flexGrow: 0,
     flexShrink: 0,
     minWidth: 0
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
     flexGrow: 1,
     flexDirection: 'row',
     alignItems: 'flex-start',
     justifyContent: 'flex-end'
   },
   flex21_space1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 6
   },
   flex21_item2: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 12
   },
   cover_group1: {
     width: '100%',
     flexGrow: 1
   },
   image4: {
     resizeMode: 'contain'
   },
   image4_layout: {
     marginTop: 7,
     height: 2,
     marginBottom: 3,
     marginLeft: 5,
     width: 3,
     minWidth: 3,
     marginRight: 4
   },
   image5: {
     resizeMode: 'contain',
     borderRadius: 3
   },
   image5_layout: {
     marginTop: 9,
     height: 6,
     marginBottom: 0,
     marginLeft: 0,
     flexGrow: 1,
     marginRight: 0
   },
   group4: {
     width: '100%',
     flexGrow: 1
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
   small_text_body5: {
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
   small_text_body_box4: {
     flexGrow: 1,
     flexDirection: 'row',
     alignItems: 'flex-start',
     justifyContent: 'flex-end'
   },
   flex24: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex24_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 48
   },
   icon1_layout3: {
     position: 'absolute',
     top: 0,
     height: 28,
     left: 1,
     width: 28
   },
   flex24_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 20
   },
   flex24_item1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 243
   },
   flex25: {
     flexGrow: 1
   },
   flex25_item: {
     flexGrow: 0,
     flexShrink: 1
   },
   flex26: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex26_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 93
   },
   flex27: {
     flexGrow: 1
   },
   flex27_item: {
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
   small_text_body: {
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
   flex26_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 96
   },
   flex26_item1: {
     flexGrow: 0,
     flexShrink: 0,
     minWidth: 0
   },
   text_body3: {
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
   text_body_box3: {
     flexGrow: 1,
     flexDirection: 'row',
     alignItems: 'flex-start',
     justifyContent: 'flex-end'
   },
   flex26_space1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 6
   },
   flex26_item2: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 12
   },
   image1_layout2: {
     marginTop: 7,
     height: 1,
     marginBottom: 4,
     marginLeft: 4,
     width: 5,
     minWidth: 5,
     marginRight: 3
   },
   cover_block9: {
     width: '100%',
     flexGrow: 1,
     backgroundColor: '#e9ecedff',
     borderRadius: 3
   },
   image2_layout1: {
     marginTop: 0,
     height: 6,
     marginBottom: 0,
     marginLeft: 0,
     width: 71,
     minWidth: 71
   },
   group5: {
     width: '100%',
     flexGrow: 1
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
   small_text_body6: {
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
   small_text_body_box5: {
     flexGrow: 1,
     flexDirection: 'row',
     alignItems: 'flex-start',
     justifyContent: 'flex-end'
   },
   flex28: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex28_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 48
   },
   icon1_layout4: {
     position: 'absolute',
     top: 0,
     height: 28,
     left: 1,
     width: 28
   },
   flex28_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 20
   },
   flex28_item1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 243
   },
   flex29: {
     flexGrow: 1
   },
   flex29_item: {
     flexGrow: 0,
     flexShrink: 1
   },
   flex30: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex30_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 49
   },
   flex31: {
     flexGrow: 1
   },
   flex31_item: {
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
   small_text_body: {
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
   flex30_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 140
   },
   flex30_item1: {
     flexGrow: 0,
     flexShrink: 0,
     minWidth: 0
   },
   text_body4: {
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
   text_body_box4: {
     flexGrow: 1,
     flexDirection: 'row',
     alignItems: 'flex-start',
     justifyContent: 'flex-end'
   },
   flex30_space1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 6
   },
   flex30_item2: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 12
   },
   image2_layout2: {
     marginTop: 0,
     height: 6,
     marginBottom: 0,
     marginLeft: 0,
     width: 71,
     minWidth: 71
   },
   block3: {
     width: '100%',
     flexGrow: 1,
     backgroundColor: '#ffffffff',
     overflow: 'hidden'
   },
   flex1: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex1_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 73
   },
   image6: {
     resizeMode: 'contain'
   },
   image6_layout: {
     marginTop: 10,
     height: 11,
     marginBottom: 11,
     marginLeft: 0,
     width: 73,
     minWidth: 73,
     marginRight: 0
   },
   flex1_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 10
   },
   flex1_item1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 10
   },
   image7: {
     resizeMode: 'contain'
   },
   image7_layout: {
     marginTop: 13,
     height: 5,
     marginBottom: 14,
     marginLeft: 0,
     width: 10,
     minWidth: 10,
     marginRight: 0
   },
   flex1_space1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 62
   },
   flex1_item2: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 48
   },
   cover_block15: {
     width: '100%',
     flexGrow: 1
   },
   icon3_layout1: {
     marginTop: 7,
     height: 18,
     marginBottom: 7,
     marginLeft: 15,
     width: 18,
     minWidth: 18,
     marginRight: 15
   },
   flex1_space2: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 15
   },
   flex1_item3: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 18
   },
   image9: {
     resizeMode: 'contain'
   },
   image9_layout: {
     marginTop: 8,
     height: 16,
     marginBottom: 8,
     marginLeft: 0,
     width: 18,
     minWidth: 18,
     marginRight: 0
   },
   flex1_space3: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 33
   },
   flex1_item4: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 46
   },
   image10: {
     resizeMode: 'contain'
   },
   image10_layout: {
     marginTop: 11,
     height: 10,
     marginBottom: 11,
     marginLeft: 0,
     width: 41,
     minWidth: 41,
     marginRight: 5
   },
   flex4: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex4_item: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 24
   },
   icon5: {
     resizeMode: 'contain'
   },
   icon5_layout: {
     marginTop: 0,
     height: 24,
     marginBottom: 0,
     marginLeft: 0,
     width: 24,
     minWidth: 24,
     marginRight: 0
   },
   flex4_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 52
   },
   flex5: {
     flexGrow: 1,
     flexDirection: 'row'
   },
   flex5_item: {
     flexGrow: 0,
     flexShrink: 0,
     minWidth: 0
   },
   small_text_body21: {
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
   small_text_body2_box: {
     flexGrow: 1,
     flexDirection: 'row',
     alignItems: 'flex-start',
     justifyContent: 'center'
   },
   flex5_space: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 36
   },
   small_text_body22: {
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
   flex5_space1: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 34.5
   },
   small_text_body23: {
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
   flex5_space2: {
     flexGrow: 0,
     flexShrink: 1,
     flexBasis: 25.5
   },
   small_text_body24: {
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
   }
 });
 