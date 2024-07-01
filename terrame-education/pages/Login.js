import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from "react-redux";

import { login } from "../features/user/userSlice";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    async function userLogin() {
        try {
            await dispatch(login({ "username": username, "password": password })).unwrap();
        } catch(err) {
            Alert.alert("Error!")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOG IN</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#A4A4A4"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#A4A4A4"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <Pressable
                onPress = {() => userLogin()}
                style={styles.button}>
                <Text style={styles.loginText}>LOGIN</Text>
            </Pressable>
        </View>     
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#586937",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 50,
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    button: {
        width: "80%",
        backgroundColor: "#F1C9C9",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "black"
    }
});