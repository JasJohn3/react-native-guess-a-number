import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Button, Alert} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import { useState } from 'react';

const StartGameScreen = props =>{
    //sets our entered value from user input
    const[enteredValue, setEnteredValue]= useState('');
    //a bool value created to confirm a users input values
    const[confirmed, setConfirmed] = useState(false);
    //this hook is used to convert the entered value into an integer
    const[selectedNumber, setSelectedNumber]= useState();

    const numberInputHandler = inputText =>{
        //replace(/[^0-9]/g),'') is a javscript function that uses a regular expression to remove any non-numeric entry values with an empty string.
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };
    const confirmInputHandler = confirm =>{
        const chosenNumber = parseInt(enteredValue);
        //Verifies the user has entered a valid number
        if(isNaN(chosenNumber)  || chosenNumber <= 0 || chosenNumber >= 99){
            Alert.alert('Invalid Number!', 'Number has to be between 1 and 99!', [{text:'Okay', style:'destructive', onPress:resetInputHandler}])
            return
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        
    }
    //Pressing Reset creates an empty string and sets confirmed to false
    const resetInputHandler = () =>{
        setEnteredValue('');
        setConfirmed(false);
    }
    let confirmedOutput;
    if(confirmed){
    confirmedOutput =<Text color={Colors.fontSecondary}>Chosen Number: {selectedNumber}</Text>
    }
    return(
        //TouchableWithoutFeedback and Keyboard.dismiss() create a User experience allowing the dismissal of all keyboard tops by touch allows ios compatability
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.tittle}>Start a New Game!</Text>
            
            <Card style ={styles.inputContainer}>
                <Text color ={Colors.fontSecondary}>Enter a Number</Text>
                    <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={numberInputHandler} value={enteredValue}/>
                    <View style={styles.confirmed}>{confirmedOutput}</View>
                    <View style={styles.buttonContainer}>
                        <View styles={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent} /></View>
                        <View styles={styles.button}><Button  title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /></View>
                    </View>
            </Card>
            
        </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    confirmed:{
        borderColor: Colors.primary,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius:10,
        elevation: 5,
        margin: 10,
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.accent,
        color: Colors.fontPrimary
    },
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-between'
    },
    inputContainer:{
        width: 300,
        // Adds small responsiveness
        maxWidth:'90%',
        alignItems:'center',

    },
    title:{
        fontSize:20,
        marginVertical: 10,
    },
    button:{
        elevation:5,
        width: 100,
    },
    input:{
        width: '100%',
        textAlign: 'center',
        width:100,
        minWidth: 50,
        maxWidth:'90%',
        margin: 10
    }
});

export default StartGameScreen;