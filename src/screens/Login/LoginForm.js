import React from 'react';
import {Formik} from 'formik';
import Button from '../../components/Button';
import {ViewCenter, Spacer} from "../../components/layout";
import {ErrorText, Input} from "../../components/forms";
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Password too short')
    .required('Required field'),
  username: Yup.string()
    .required('Required field')
});

const LoginForm = props => (
  <Formik
    initialValues={{username: '', password: ''}}
    validationSchema={LoginSchema}
    {...props}
  >
    {({handleSubmit, isSubmitting, ...props}) => (
      <ViewCenter
        maxWidth={270}
        padder
      >
        {props.errors.genericError &&
          <ErrorText>{props.errors.genericError}</ErrorText>
        }
        <Input
          placeholder={'Username'}
          name={'username'}
          {...props}
        />
        <Input
          placeholder={'Password'}
          name={'password'}
          {...props}
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
