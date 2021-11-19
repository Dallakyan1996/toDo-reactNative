import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button, CheckBox, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import { loginStyles } from './LoginStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APIobject } from '../../service/API';
import { useAuth } from '../../hooks/useAuth';

const LoginComponent = () => {
    let [state, setState] = useState({
        email: "",
        password: ""
    })

    let _storeData = async (user) => {
        try {
            await AsyncStorage.setItem('key', user);
            console.log("woww")
        } catch (error) {
        }
    };

    const { auth, setAuth } = useAuth()

    const login = APIobject.login;
    return <View style={loginStyles.container}>
        <View style={loginStyles.loginText}>
            <Text style={loginStyles.loginText}>Log In</Text>
        </View>
        <Input
            style={loginStyles.texInput}
            placeholder='Email'
            value={state.email}
            onChangeText={(e) => {
                setState({
                    ...state,
                    email: e
                })
            }}
        />
        <Input
            style={loginStyles.texInput}
            placeholder='Password'
            value={state.password}
            password={true}
            onChangeText={(e) => {
                setState({
                    ...state,
                    password: e
                })
            }}
        />
        <View style={loginStyles.loginBtnView}>
            <Button title="Log In" onPress={() => {
                if (state.password && state.email) {
                    login(state.email, state.password).then(user => {
                        _storeData(JSON.stringify(user))
                        setAuth(true)
                    }).catch()
                    setState({
                        email: "",
                        password: ""
                    })
                }
            }} />

        </View>
    </View>
}
export default LoginComponent;