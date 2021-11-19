import React from "react";
import { View, Button } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogOutComponent = () => {
    let { auth, setAuth } = useAuth()
    const removeKey = async () => {
        try {
            await AsyncStorage.removeItem('key').then(() => {
            })
        }
        catch (exception) {
            return false;
        }
    }
    return <View>
        <Button onPress={() => {

            removeKey().then(setAuth(false))
        }} title="Log Out" />
    </View>
}

export default LogOutComponent;