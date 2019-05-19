import React from 'react';
import {useStateValue} from "../../index";
import {login} from "../queries";
import {setUser} from "../actions";
import storage from "../../../utils/storage";

const useLogin = () => {
  const [{user}, dispatch] = useStateValue();

  const formSubmit = async formData => {
    if (!formData) return;

    const {values, actions} = formData;
    const response = await login(values);

    if (response.errors || response.genericError) {
      actions.setErrors(response.errors || {genericError: "Server Error"});
      actions.setSubmitting(false);
      return
    }

    await storage.save('access_token', response.access_token);
    await actions.setSubmitting(false);
    dispatch(setUser(response));
  };

  return [user, formSubmit];
};

export default useLogin;
