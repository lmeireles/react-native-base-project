import React, {useEffect} from 'react'
import {Text} from 'react-native'
import {ViewCenter} from "../../components/layout";
import {useStateValue} from "../../state";
import storage from "../../utils/storage";
import {currentUser} from "../../state/User/queries";
import {setUser} from "../../state/User/actions";

const Splash = (props) => {
  const {navigation: {navigate}} = props;
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    (async () => {
      const token = await storage.load('access_token');

      if (!token) {
        return navigate('Auth')
      }

      const response = await currentUser();

      if (!response.data) {
        return navigate('Auth')
      }

      await storage.save('access_token', response.data.user);
      dispatch(setUser(response.data.user));
      return navigate('Home')
    })();
  },[]);

  return (
    <ViewCenter>
      <Text>Loading...</Text>
    </ViewCenter>
  );
};

export default Splash
