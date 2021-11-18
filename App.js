import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, CheckBox, TextInput } from 'react-native';

export default function App() {
  let [state, setState] = useState({
    currentText: "",
    tasks: []
  })

  function login(email, password) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };

    return fetch('http://localhost:3001/auth/login', requestOptions)
      .then(user => {
        // localStorage.setItem('toDoCurrentUser', JSON.stringify(user));

        return user;
      });
  }

  return (
    <View style={styles.container}>
      <Text >TO-DO LIST</Text>
      <TextInput value={state.currentText} onChangeText={(e) => {
        setState({
          ...state,
          currentText: e
        })
      }} placeholder="Input Task" style={styles.textInput} />
      {
        state.tasks.map((task) => {
          login()
          return <View style={styles.checkBoxText} key={Math.random()}>
            <CheckBox
              key={Math.random()}
            />
            <Text key={Math.random()}>
              {task}
            </Text>
          </View>

        })
      }
      <Button onPress={() => {
        login("user1@mail.ru", "lanv1996").then(user => console.log(user))
        if (state.currentText) {
          setState({
            currentText: "",
            tasks: [...state.tasks, state.currentText]
          })
        }
      }} title="Add" />
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    paddingTop: "15px"
    // justifyContent: 'center',
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  checkBoxText: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "space-around"
  },
});
