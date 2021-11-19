import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, CheckBox, TextInput } from 'react-native';
import { useState } from 'react';
import { toDoStyles } from './ToDoStyle';


const ToDo = () => {
    let [state, setState] = useState({
        currentText: "",
        tasks: []
    })
    return < View style={toDoStyles.container} >
        <Text >TO-DO LIST</Text>
        <TextInput value={state.currentText} onChangeText={(e) => {
            setState({
                ...state,
                currentText: e
            })
        }} placeholder="Input Task" style={toDoStyles.textInput} />
        {
            state.tasks.map((task) => {
                return <View style={toDoStyles.checkBoxText} key={Math.random()}>
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
            if (state.currentText) {
                setState({
                    currentText: "",
                    tasks: [...state.tasks, state.currentText]
                })
            }
        }} title="Add" />
        <StatusBar style="auto" />
    </View >
}
export default ToDo;