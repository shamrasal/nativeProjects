import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import SignUp from '../Screens/SignUp';
import LogIn from '../Screens/LogIn';

export type AppStackParamList = {
    SignUp:undefined,
    LogIn:undefined
}

const stack = createNativeStackNavigator<AppStackParamList>();

const AuthStack = () => {
    return (
        <stack.Navigator screenOptions={{
            headerTitleAlign:'center',
            headerBackTitleVisible:false,
        }}>
            <stack.Screen name='SignUp' component={SignUp}/>
            <stack.Screen name='LogIn' component={LogIn}/>
        </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default AuthStack;
