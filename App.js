import React from 'react';
import { useScreens } from 'react-native-screens';
import {StateProvider} from "./src/state";
import reducers from "./src/state/Reducers";
import Navigator from "./src/routes";

useScreens();

export default () => {
  const initialState = {};

  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <Navigator ref={nav => {this.navigator = nav;} } />
    </StateProvider>
  );
}
