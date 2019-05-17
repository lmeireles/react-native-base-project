import React, {useState} from 'react';
import {useStateValue} from "../../index";
import {currentUser} from "../queries";
import {setUser} from "../actions";
import storage from "../../../utils/storage";

const useTokenLogin = () => {
  const [{user}, dispatch] = useStateValue();
  const [route, setRoute] = useState(null);

  const doRequest = async () => {
    const token = await storage.load('access_token');

    if (!token) {
      return setRoute('Auth')
    }

    const response = await currentUser();

    if (!response.access_token) {
      return setRoute('Auth')
    }

    dispatch(setUser(response));
    setRoute('Home');
  };

  return [route, doRequest];
};

export default useTokenLogin;
