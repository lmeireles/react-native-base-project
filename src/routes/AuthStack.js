import React from 'react'
import { createStackNavigator } from 'react-navigation';
import Login from "../screens/Login";

const AuthStack = createStackNavigator(
  {
    Login: Login
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default AuthStack
