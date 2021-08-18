/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {Component} from 'react';
 import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import * as actions from './actions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/mainReducer'; //Import the root reducer

const enhancer = compose(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

const Stack = createNativeStackNavigator();

import Home from './Views/Home'
import Article from './Views/Article'

export default class App extends Component  {

  render() {
 
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
          ({
            headerStyle: {
              backgroundColor: '#fff',
              height: 80,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
          },
          {
            headerMode: 'screen',
            defaultNavigationOptions: {
              cardStyle: {backgroundColor: '#FFFFFF'},
            },
          })
        }>
        <Stack.Screen
          name='Home'
          component={Home}
        />
 
        <Stack.Screen
          name='Article'
          component={Article}
       
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
      }
};

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

