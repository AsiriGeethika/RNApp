import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {View,StyleSheet,Text,Image} from 'react-native';
import {Button,Body,Left,Icon,Right} from "native-base";
import DrawerNavigator from './../Navigations/DrawerNavigator';

class Head extends Component{
    constructor(props){
        super(props);
    } 

     render(){
         const { title, openDrawer, iconName,leftPress, type,iconNameRight } = this.props;
         const rightIcon = type==='sub'? 
            <Icon      
                name={iconNameRight}
                style={{fontSize: 23, color: '#ffffff'}} 
            /> :
            <Button
            transparent
            // onPress={() => this.props.navigation.navigate("DrawerOpen")}
            // onPress={() => this.props.navigation.openDrawer()}
            onPress={openDrawer}
            // onPress={() => navigation.openDrawer()}>

            >
            <Icon name="menu" />
        </Button>

        return(
            <View style={styles.header}> 
            <Left>
               {rightIcon}
            </Left>
                <Image source={require('../Images/cart1.png')} style = {styles.img1}  />
                <Text style={styles.txt}>Offer Me</Text> 
                <Right>
                   
                </Right> 
             </View>
         )
     }
}
 
export default Head;

Head.propsTypes={
    title:PropTypes.string,
    openDrawer: PropTypes.func.isRequired,
    iconName:PropTypes.string,
    leftPress:PropTypes.func,
    type:PropTypes.string,
    iconNameRight:PropTypes.string
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#33b5e5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
       
      },
      img1:{
        width:40,
        height:40
      },
      txt:{
        fontSize:35,
        marginLeft:10,
        fontWeight: "600",
        fontStyle: 'italic',
        color:'#fff'
      }
});