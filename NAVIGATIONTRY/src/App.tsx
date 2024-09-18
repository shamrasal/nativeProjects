

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer,NavigationContainerProps} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Details from './Screens/Details';

export type rootStackParamList = {
  Home : undefined,
  Details:  {Product : Product}
}

const Stack = createNativeStackNavigator<rootStackParamList>();


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{
            title:'Trending Products'
          }}
        />
        <Stack.Screen 
          name='Details' 
          component={Details} 
          options={{
            title:'Product Details'
          }}
        />
        

      </Stack.Navigator>
      <Text>Hello</Text>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
