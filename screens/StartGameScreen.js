import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10, //marginVertical replaces marginBottom and marginTop
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%', //if the device is too small we make sure that the width doesn't exceed the 80 percent
    alignItems: 'center', //ltr bc flexdirection is default --> column
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15, //horizontal --> left and right
  },
  button: {
    width: 100,
  }
});

export default StartGameScreen;
