import React, { FC, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DemoSignIn from 'views/demo/DemoSignIn'
import RNSplash from 'react-native-splash-screen'

const Stack = createNativeStackNavigator()

const MainNavigation: FC = () => {
  useEffect(() => {
    RNSplash.hide()
  }, [])

  return (
    <Stack.Navigator
      initialRouteName="DemoSignIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DemoSignIn" component={DemoSignIn} />
    </Stack.Navigator>
  )
}

export default MainNavigation
