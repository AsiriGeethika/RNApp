import React from 'react';
import {StyleSheet,SafeAreaView,Image,ScrollView,Dimensions, Text,View} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {Header,Left,Right,Icon} from 'native-base';
import HomeScreen from './../Screens/HomeScreen';
import SettingsScreen from './../Screens/SettingsScreen';
import ProfileScreen from './../Screens/ProfileScreen';
import OrdersScreen from '../Screens/HScreen';
import AboutUs from './../Screens/AboutUs';
import Notifications from './../Screens/Notifications';
import WishList from './../Screens/WishList';
import TabNavigator from './TabNavigator';
import Orders from './../Screens/Order';

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../Images/Profile.png')} style={{height: 120, width: 120, borderRadius: 60}}/>
      </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)

export default createDrawerNavigator({
  Home:{ screen: OrdersScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => <Icon name="home" size={17} />,
    }
  },

  Profile:{ screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => <Icon name="ios-person" size={17} />,
    }
  },
  Notifications:{ screen: Notifications,
    navigationOptions: {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => <Icon name="ios-notifications" size={17} />,
    }
  },
  WishList:{ screen: WishList,
    navigationOptions: {
      drawerLabel: 'Wish List',
      drawerIcon: ({ tintColor }) => <Icon name="ios-heart" size={17} />,
    }
  },
  Orders:{ screen: Orders,
    navigationOptions: {
      drawerLabel: 'Orders',
      drawerIcon: ({ tintColor }) => <Icon name="ios-cart" size={17} />,
    }
  },
  Settings:{ screen: SettingsScreen,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => <Icon name="ios-settings" size={17} />,
    }
  },
  About:{ screen: AboutUs,
    navigationOptions: {
      drawerLabel: 'About Us',
      drawerIcon: ({ tintColor }) => <Icon name="ios-information-circle" size={17} />,
    }
  },
},
{
    drawerPosition :"left",  
    contentComponent: CustomDrawerComponent
    
});
