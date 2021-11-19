import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4a4647',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    texInput: {
        backgroundColor: 'white',
        padding: "8px"
    },
    loginText: {
        // display: "flex",
        width: "100%",
        textAlign: "center",
        color: "white",
        fontSize: "30px",
        paddingBottom: "10px",

    },
    loginBtn: {
        display: "flex",
        color: "red",
        margin: "auto",
        padding: "50px",
        justifyContent: "center",
        alignItem: "center"
    },
    loginBtnView: {
        width: "80%",
        display: "flex",
    }
});