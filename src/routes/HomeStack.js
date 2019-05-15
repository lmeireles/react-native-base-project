import React from 'react'
import {createBottomTabNavigator} from 'react-navigation';
import Profile from "../screens/Profile";
import MusicStack from "./MusicStack";

const HomeStack = createBottomTabNavigator(
  {
    MusicTab: MusicStack,
    ProfileTab: Profile,
  },
  {
    initialRouteName: 'MusicTab'
  }
);

export default HomeStack
