import React from 'react';
import {StyleSheet, Text,View} from 'react-native';
import Head from './../Components/Header';

export default class Notifications extends React.Component{

  /*static navigationOptions = {
  drawerIcon : ({tintColor}) => (
    <Icon name="ios-notifications" style={{fontSize:24, color:tintColor}}/>
  ),
  header: null,
}*/

  render(){
    return(
      <View style={StyleSheet.container}>
      <Head/>
      <View style={StyleSheet.cont}>
      <Text>Notifications</Text>
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