import React from 'react'
import {createBottomTabNavigator} from 'react-navigation';
import Profile from "../screens/Profile";
import PostStack from "./PostStack";
import theme from "../components/theme";

const HomeStack = createBottomTabNavigator(
  {
    PostTab: PostStack,
    ProfileTab: Profile,
  },
  {
    initialRouteName: 'PostTab',
    tabBarOptions: {
      inactiveBackgroundColor: theme.navigation.tabBackground,
      activeBackgroundColor: theme.navigation.tabBackground,
      activeTintColor: theme.navigation.color,
      inactiveTintColor: theme.navigation.inactiveColor,
      style: {
        borderTopColor: theme.navigation.tabBackground
      },
      showLabel: false
    }
  }
);

export default HomeStack
