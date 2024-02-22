//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import Login from '../Screens/Auth/Login';
import Splash from '../Screens/Auth/Splash';
import Register from '../Screens/Auth/Register';
import Home from '../Screens/Home/Home';

const Stack = createStackNavigator();
// create a component
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthStack;
