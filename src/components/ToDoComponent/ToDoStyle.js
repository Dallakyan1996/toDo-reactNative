import { StyleSheet } from 'react-native';

export const toDoStyles = StyleSheet.create({
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