import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import {Header,Left,Right,Icon} from 'native-base';
import HomeScreen from './../Screens/HomeScreen'
import ProfileScreen from './../Screens/ProfileScreen'
import OrdersScreen from '../Screens/HScreen'
import WishList from './../Screens/WishList'
import colors from './../styles/colors';

const TabNavigation = createMaterialTopTabNavigator({
    S1:{
        screen:HomeScreen,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="home"
                    size={30}
                    color={tintColor} />
            )
        }
    },

    S2:{
        screen:ProfileScreen,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-person"
                    size={30}
                    color={tintColor} />
            )
        }
    },

    S3:{
        screen:OrdersScreen,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-cart"
                    size={30}
                    color={tintColor} />
            )
        }
    },

    S4:{
        screen:WishList,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-heart"
                    size={30}
                    color={tintColor} />
            )
        }
    },

},{
    tabBarPosition:'bottom',
    animationEnabled:true,
    tabBarOptions: {
        showIcon:true,
        style: {
          backgroundColor:'#33b5e5',
          height:60,

        },
      }
});

export default createStackNavigator({ TabNavigation }, {headerMode:"none"});