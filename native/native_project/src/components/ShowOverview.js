import Overview from "./Overview";
import Doge from "./Doge";
import React from 'react';
import { Modal } from 'react-native';
import { View, StyleSheet, Text, Pressable, Alert } from 'react-native';
import { Px } from './posize';

export default function ShowOverview(props) {
    if(props.state == props.states.overview){
    //   Alert.alert("state is overview");
      return (
        <Overview />
      );
    }
    else if(props.state == props.states.dog){
    //   Alert.alert("state is dog");
      return(
        <Doge />
      );
    }
    else{
        Alert.alert("Error! Overview state is " + props.state);
        return(
            <Doge />
        )
    }
  }

  ShowOverview.inStorybook = true;
  ShowOverview.fitScreen = false;
  ShowOverview.scrollHeight = 176;

