import React from 'react'
import {createBottomTabNavigator} from 'react-navigation';
import Profile from "../screens/Profile";
import PostStack from "./PostStack";

const HomeStack = createBottomTabNavigator(
  {
    PostTab: PostStack,
    ProfileTab: Profile,
  },
  {
    initialRouteName: 'PostTab'
  }
);

export default HomeStack
