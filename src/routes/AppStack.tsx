import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from '../Screens/Home';
import {createNativeStackNavigator} from "@react-navigation/native-stack"

export type AppStackParamList = {
    Home:undefined
}

const stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
    return (
        <stack.Navigator 
            screenOptions={{
                headerTitleAlign:'center',
                headerBackTitleVisible:false,
            }}
            initialRouteName="Home"
        >
            <stack.Screen name='Home' component={Home}/>
        </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default AppStack;
