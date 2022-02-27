import React, { useState } from 'react';
import { View, StyleSheet, Image, ImageBackground, Dimensions, Alert} from 'react-native';
import { Px } from './posize';
import { LineChart, Grid, AreaChart, PieChart, XAxis, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape'


// const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)


export function LineChartLocal(props) {
    
  const [componentWidth, setComponentWidth] = useState(0)

    return (
        <View style={styles.flex1_item}       
          onLayout={(event) => {
          const { width } = event.nativeEvent.layout
          setComponentWidth(width)
        }}>
            {/* <ImageBackground
            style={[styles.image18, styles.image18_layout]}
            source={require('../assets/421aabc05b2b1f480d218257e09bafdf.png')}
            /> */}
            <YAxis
                data={props.data}
                contentInset={{ top: 30, bottom: 10 }}
                svg={{
                    fill: 'grey',
                    fontSize: 10,
                }}
                style={{ height: 200 }}
                min={props.min}
                max={props.max}
                numberOfTicks={10}
                formatLabel={(value) => `\$${value}`}
            />  
            <View style={styles.flex2_item}>
                <LineChart
                    style={{ flex: 1 }}
                    style={{ height: 200 }}
                    data={props.data}
                    yMax={props.max}
                    yMin={props.min}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={{ top: 20, bottom: 20}}
                    >
                    <Grid />
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10, width: componentWidth }}
                    data={props.data}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 30 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
            </View>
        </View>
    );
}

export function AreaChartLocal(props) {

  return (
    <View 
      style={styles.flex2_item} >
    {/* <ImageBackground
      style={[styles.image12, styles.image12_layout]}
      source={require('../assets/1df63a1f392ab78721cd900a551aac52.png')}
    /> */}
      <AreaChart
          style={{ height: 200 }}
          data={props.data}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
          svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
          >
          <Grid />
      </AreaChart>
    </View>

  );
}

export function PieChartLocal(props) {
  const pieData = props.data
    .filter((value) => value > 0)
    .map((value, index) => ({
        value,
        svg: {
            fill: randomColor(),
            onPress: () => {Alert.alert(props.shops[index])},
        },
        key: `pie-${index}`,
    }))
    // console.log(pieData)
  return (
    <View style={styles.flex2_item}>
    {/* <ImageBackground
      style={[styles.image12, styles.image12_layout]}
      source={require('../assets/1df63a1f392ab78721cd900a551aac52.png')}
    /> */}
      <PieChart style={{ height: 200 }} data={pieData} />
    </View>

  );
}


const styles = StyleSheet.create({

    flex1_item: {
      flex: 1,
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: 'row',
    },
    flex2_item: {
      flexGrow: 0,
      flexShrink: 1,
      padding: 10
    },

  });
  