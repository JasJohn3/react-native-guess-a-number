import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
const Input = props =>{
    return(
        //{...props} allows for the use of standard methods from the TextInput props
        <TextInput {...props} style={{...styles.input, ...props.style}}></TextInput>
    );
}

const styles = StyleSheet.create({
    input:{
        height: 30,
        borderRadius:10,
        borderColor: Colors.secondary,
        borderWidth: 2
    }
});

export default Input;