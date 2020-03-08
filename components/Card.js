import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props =>{
    //styles.card uses a spread operator allowing for additional styling properties to be passed in.
    return <View style={{...styles.card,...props.style}} >{props.children}</View>
};

const styles = StyleSheet.create({
   card:{
    //Shadow effects only work on iOS devices, not android
    shadowColor: 'black',
    shadowOffset:{width:0, height: 2},
    shadowRadius:6,
    shadowOpacity: 0.26,
    
    //elevation effect only works on Android devices
    elevation: 5,

    backgroundColor: 'white',
    padding:10,
    borderRadius:10
   } 

});

export default Card;