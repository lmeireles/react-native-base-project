import React, {Component} from 'react';
import { useScreens } from 'react-native-screens';
import {StateProvider} from "./src/state";
import reducers from "./src/state/Reducers";
import Navigator from "./src/routes";

useScreens();

export default class App extends Component {
  initialState = {
    user: null,
    music: null
  };

  render() {
    return (
      <StateProvider initialState={this.initialState} reducer={reducers}>
        <Navigator ref={nav => {this.navigator = nav;} } />
      </StateProvider>
    );
  }
}
