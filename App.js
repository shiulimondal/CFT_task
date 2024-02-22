//import liraries
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationService from './Src/Services/Navigation';
import AuthStack from './Src/Navigation/AuthStack';
import { Theme } from 'react-native-basic-elements';

const Stack = createStackNavigator();
// create a component
const App = () => {
  return (
    <Theme.Provider>
      <NavigationContainer
        ref={r => NavigationService.setTopLevelNavigator(r)}
      >
        <Stack.Navigator
          initialRouteName='AuthStack'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="AuthStack" component={AuthStack} />

        </Stack.Navigator>
      </NavigationContainer>
    </Theme.Provider>
  );
};

export default App;
