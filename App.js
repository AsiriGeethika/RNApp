import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './Src/authScreen/LoginScreen';
import TabNavigator from './Src/Navigations/TabNavigator';
import HomeScreen from './Src/Screens/HomeScreen';
import Register from './Src/Screens/Register';
import SignIn from './Src/Screens/SignIn';
import AboutUs from './Src/Screens/AboutUs';
import Profile from './Src/Screens/ProfileScreen';
import DrawerNavigator from './Src/Navigations/DrawerNavigator';
import ViewCard from './Src/Components/ViewCard'
import OrdersScreen from './Src/Screens/HScreen';
import WishList from './Src/Screens/WishList';

export default class App extends Component{
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({ 
  // ViewCard:{
  //   screen:ViewCard
  // }, 
  Login:{screen:Login},
  Home:{screen: HomeScreen},
  Reg:{screen: Register},
  Signin:{screen : SignIn},
  About:{screen:AboutUs},
  Orders:{screen:OrdersScreen},
  Wish:{screen:WishList},
  Profile:{screen:Profile},
  DrewerNav:{screen:DrawerNavigator},
  


},
    navigationOptions={
      //initialRouteName: 'Home',
      headerMode:'none'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
