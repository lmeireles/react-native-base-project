import React from 'react'
import { createStackNavigator } from 'react-navigation';
import Posts from "../screens/Posts";
import theme from "../components/theme";
import Ionicons from 'react-native-vector-icons/Ionicons';

const PostStack = createStackNavigator(
  {
    Posts: Posts
  },
  {
    initialRouteName: 'Posts',
    headerMode: 'float',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.navigation.headerBackground,
      },
      headerTintColor: theme.navigation.color
    },
    navigationOptions: {
      tabBarIcon: ({tintColor}) => <Ionicons
        name={'md-list-box'}
        size={theme.navigation.iconSize}
        color={tintColor}
      />,
    }
  }
);

export default PostStack
