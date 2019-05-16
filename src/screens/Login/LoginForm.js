import React from 'react';
import {Formik} from 'formik';
import Button from '../../components/Button';
import {ViewCenter, Spacer} from "../../components/layout";
import {Input} from "../../components/forms";

const LoginForm = props => (
  <Formik
    initialValues={{email: '', password: ''}}
    {...props}
  >
    {({handleChange, handleBlur, values, handleSubmit, isSubmitting}) => (
      <ViewCenter
        maxWidth={270}
        padder
      >
        <Input
          placeholder={'Username'}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        <Input
          placeholder={'Password'}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
        />
        <Spacer space={18}/>
        <Button
          primary
          loading={isSubmitting}
          onPress={handleSubmit}
          title="Login"
        />
      </ViewCenter>
    )}
  </Formik>
);

export default LoginForm;
