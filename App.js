import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StarGameScreen from './screens/StartGameScreen';
export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      <StarGameScreen></StarGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  }
});
