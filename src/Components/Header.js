import React from 'react';
import { Text, StyleSheet, TouchableHighlight, Alert,BackHandler, View, Image} from 'react-native';
import Back_arrow from '../../images/left-arrow.png'
import Profile_Picture from '../../images/robot2(1).png';

class Header extends React.Component {
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
     }
     
     componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
     }
     
     backPressed = () => {
       Alert.alert(
         'Exit App',
         'Do you want to exit?',
         [
           {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
           {text: 'Yes', onPress: () => BackHandler.exitApp()},
         ],
         { cancelable: false });
         return true;
     }

  render() {
    return (
      <View style={styles.container}>
         <View style={styles.backArrowContainer}>
            <TouchableHighlight style={styles.backArrowTouchableHighlight} activeOpacity={1} onPress={() => {this.backPressed()}}>
                <Image source ={Back_arrow} />
            </TouchableHighlight>
        </View>
        <View style={styles.detailContainer}>
            <Text style={styles.contactName}>DigiKala Support</Text>
            <Text style={styles.contactStatus}>Last seen recently</Text>
        </View>
        <View style={styles.contactImageContainer}>
            <Image source = {Profile_Picture} style={styles.contactImage}/>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height:70, 
        backgroundColor: 'rgb(242, 242, 242)',
        flexDirection:'row'
    },
    backArrowContainer: {
        flex: 2,
        justifyContent:'center',
        alignItems:'center'
    },
    backArrowTouchableHighlight: {
        backfaceVisibility:'hidden',
    },
    detailContainer: {
        flex: 8,
        justifyContent:'center',
        alignItems:'center' ,
        backgroundColor: 'rgb(242, 242, 242)'
    },
    contactName : {
        color:'#9E9D9D',
        fontWeight:'500',
        fontSize:22
    },
    contactStatus : {
        color:'#9E9D9D',
        fontWeight:'500',
        fontSize:14
    },
    contactImageContainer:{
        flex: 2, 
        justifyContent:'center',
        alignItems:'center'
    },
    contactImage:{
        width: 54,
        height: 54,
        borderRadius: 100/ 2
    },
});

export default Header;