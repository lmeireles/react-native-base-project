import {createSwitchNavigator} from 'react-navigation';
import {createAppContainer} from "react-navigation";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import Splash from '../screens/Splash';

const Routes = createSwitchNavigator(
  {
    Splash: Splash,
    Home: HomeStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none'
  }
);

export default createAppContainer(Routes)
