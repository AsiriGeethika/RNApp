import React from 'react';
import {StyleSheet, Text,View} from 'react-native';
import {Header,Left,Right,Icon} from 'native-base';
import Head from './../Components/Header';

export default class AboutUs extends React.Component{
  /*static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Icon name="ios-settings" style={{fontSize:24, color:tintColor}}/>
    ),
    header: null,
  }*/
  
    render(){
      return(
        <View style={StyleSheet.container}>
        <Head/>
        <View style={StyleSheet.cont}>
        <Text>Settings</Text>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})