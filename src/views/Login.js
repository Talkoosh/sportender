import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import genericStyles from '../style/generic';

const Login = () => {
    return (
        <View style={[loginStyle.container, genericStyles.pageContainer]}>
            <Text style={[loginStyle.text, loginStyle.heading]}>התחברות</Text>
            <View style={loginStyle.inputContainer}>
                <TextInput style={[loginStyle.input, loginStyle.text]}></TextInput>
                <TextInput secureTextEntry={true} style={loginStyle.input}></TextInput>
            </View>
            <View style={loginStyle.btnsContainer}>
                <TouchableOpacity
                    onPress={() => {
                        console.log('login');
                    }}
                >
                    <Text style={[loginStyle.text, loginStyle.loginBtn]}>התחבר</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log('signup');
                    }}
                >
                    <Text style={[loginStyle.text, loginStyle.loginBtn, { backgroundColor: genericStyles.colors.cream }]}>הירשם</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    console.log('google login');
                }}
                style={loginStyle.loginWithContainer}
            >
                <Image style={loginStyle.loginWithBtn} source={require('../../assets/icons/google-logo.png')}></Image>
            </TouchableOpacity>
        </View>
    );
}

export default Login

const loginStyle = StyleSheet.create({
    container: {
        backgroundColor: genericStyles.colors.darkGreen,
    },
    heading: {
        fontSize: 45,
        flex: 1,
        paddingTop: 160,
    },
    text: {
        color: 'white',
    },
    input: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',
    },
    inputContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    btnsContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    loginBtn: {
        textAlign: 'center',
        backgroundColor: '#4681f4',
        width: Dimensions.get('window').width / 1.5,
        paddingVertical: 20,
        borderRadius: 10,
        overflow: 'hidden',
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    loginWithContainer: {
        padding: 20,
        marginBottom: 20,
    },
    loginWithBtn: {
        backgroundColor: genericStyles.colors.cream,
        borderRadius: 10,
    },
});
