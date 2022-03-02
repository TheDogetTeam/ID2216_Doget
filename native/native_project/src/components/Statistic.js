/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { View, StyleSheet, Image, ImageBackground, Dimensions, NativeModules } from 'react-native';
import { Px } from './posize';
// import { LineChart, Grid, AreaChart, PieChart, XAxis, YAxis } from 'react-native-svg-charts';
import { LineChartLocal, PieChartLocal, AreaChartLocal } from './StatisticPlot';
import * as shape from 'd3-shape'
import { useState } from 'react';

const { ShowItems } = NativeModules;

const win = Dimensions.get('window');


// const data1 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50]
// const data2 = [50, 10, 40, 95]
// const shops = ["shop0", "shopsmall", "Doge", "shopelarge"]
var pieData

function extractData(rawdata){

  const shop = rawdata.shop
  const price = parseFloat(rawdata.price)

  if(shop in pieData) pieData[shop] += price
  else pieData[shop] = price

  return price
}

export default function Statistic(props) {
  console.log("Statistics reload!");
  pieData = {}
  const [DATA, updateDATA] = useState(new Array());
  const [readState, setReadState] = useState(2);
  if(readState!=0) {
    ShowItems.readEntryAll("id DESC", (json) => {updateDATA([...json])})
    setReadState(0)
  }
  
  var data1 = DATA.map(extractData)
  var data2 = Object.values(pieData)
  var shops = Object.keys(pieData)
  
  
  console.log("data1:" + data1)
  console.log("data2:" + data2)
  console.log("shops:" + shops)
  console.log("DATA:" + DATA)

  return (
    <Px.View
      x="0px 280fr 0px"
      y="0px minmax(0px, max-content) 0px"
      style={styles.flex1}>
        <LineChartLocal data={data1} max={Math.max(...data1)} min={0}/>
        {/* <AreaChartLocal data={data1}/> */}
        <PieChartLocal data={data2} shops={shops}/>
    </Px.View>
  );
}

Statistic.inStorybook = true;
Statistic.fitScreen = false;
Statistic.scrollHeight = 478;

const styles = StyleSheet.create({
  flex1: {
    flexGrow: 1
  },
  flex1_item: {
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: 'row',
  },
  flex2_item: {
    flexGrow: 0,
    flexShrink: 1,
    padding: 10
  },
  image18: {
    resizeMode: 'contain',
    paddingTop: 50
  },
  image18_layout: {
    width: win.width/1.3,
    height: win.width/1.5,
    alignSelf: "center",
    borderWidth: 0,
    borderRadius: 20,
  },
  image12: {
    resizeMode: 'contain',
    paddingTop: 50

  },
  image12_layout: {
    top:10,
    width: win.width/1.3,
    height: win.width/1.5,
    alignSelf: "center",
    borderWidth: 0,
    borderRadius: 20,
  }
});
