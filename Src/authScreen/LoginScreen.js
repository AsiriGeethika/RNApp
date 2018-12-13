import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
 
class Login extends Component{
constructor(props){
    super(props);

} 

    loginHandler=()=>{
        this.props.navigation.navigate('DrewerNav')
    }
     render(){
        return(
            <View style={styles.container}> 
                <Text> Offer Me </Text>
                <View style={{alignItems:'center'}}>
                    <Button onPress={this.loginHandler}>
                        <Text>GET STARTED!</Text>
                    </Button>
                </View>
                
             </View>
         )
     }
}
 
export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#33b5e5',
        },
});