import React, { useState } from 'react';
import LoginComponent from './src/components/LoginComponent/LoginComponent';
import ToDo from './src/components/ToDoComponent/ToDoComponent';

export default function App() {
  let _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null) {
        console.log(JSON.parse(value));
        return value;
      }
    } catch (error) {
    }
  };

  let currentUser = _retrieveData()
  let [auth, setAuth] = useState(false)

  return (auth ? <ToDo />
    : <LoginComponent />)
}


