import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Colors from "../constants/colors";

//basic end game screen with a button that points to a method from app.js to restart the game.
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>You Won!</Text>
      <Text style={styles.text}>Thank you for playing!</Text>
      <Text style={styles.text}>Number of Rounds: {props.roundsNumber}</Text>
      <Text style={styles.text}>Correct Number: {props.userNumber}</Text>
      <Button
        title="NEW GAME!"
        style={styles.exitButton}
        onPress={props.onRestart}
      />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accent,
  },
  text: {
    color: Colors.fontPrimary,
    backgroundColor: Colors.primary,
    fontSize: 22,
    padding: 10,
    margin: 10,
  },
  exitButton: {
    flex: 1,
    color: Colors.primary,
    elevation: 5,
    width: 100,
  },
});
