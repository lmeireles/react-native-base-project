import React, {useEffect, useState} from 'react';
import {useStateValue} from "../../index";
import {login} from "../queries";
import {setUser} from "../actions";

const useLogin = () => {
  const [{user}, dispatch] = useStateValue();
  const [formSubmit, setFormSubmit] = useState(null);

  useEffect(() => {
    if (!formSubmit) return;
    (async () => {
      const response = await login(formSubmit.values);

      if (response.errors || response.genericError) {
        formSubmit.actions.setErrors(response.errors || response.genericError);
        formSubmit.actions.setSubmitting(false);
        return
      }

      await formSubmit.actions.setSubmitting(false);

      dispatch(setUser(response.data));
    })();
  }, [formSubmit]);

  return [user, setFormSubmit];
};

export default useLogin;
