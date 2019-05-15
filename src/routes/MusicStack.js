import React from 'react'
import { createStackNavigator } from 'react-navigation';
import Musics from "../screens/Musics";

const MusicStack = createStackNavigator(
  {
    Musics: Musics
  },
  {
    initialRouteName: 'Musics',
    headerMode: 'none'
  }
);

export default MusicStack
