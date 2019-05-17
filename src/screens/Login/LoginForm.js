import React from 'react';
import {Formik} from 'formik';
import Button from '../../components/Button';
import {ViewCenter, Spacer} from "../../components/layout";
import {ErrorText, Input} from "../../components/forms";

const LoginForm = props => (
  <Formik
    initialValues={{email: '', password: ''}}
    {...props}
  >
    {({handleChange, handleBlur, values, handleSubmit, isSubmitting, errors, touched}) => (
      <ViewCenter
        maxWidth={270}
        padder
      >
        {errors.genericError &&
          <ErrorText>{errors.genericError}</ErrorText>
        }
        <Input
          placeholder={'Username'}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          value={values.email}
        />
        <Input
          placeholder={'Password'}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
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
