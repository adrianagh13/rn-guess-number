import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Screen</Text>
      <View style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
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
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2}, //shadowOffset receives and obj
    shadowRadius: 6, //if you set shadow radius to 0 it will look like a line
    shadowOpacity: 0.26,
    backgroundColor: 'white', //shadow properties only work on iOS
    elevation: 5, //only works on Android, default
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15, //horizontal --> left and right
  },
});

export default StartGameScreen;
