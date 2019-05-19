import React from 'react'
import {TextInput} from 'react-native'
import InputHolder from "./InputHolder"
import FormGroup from "./FormGroup"
import ErrorText from "./ErrorText"
import SimpleText from "../SimpleText";
import theme from "../theme";
import PropTypes from "prop-types";

const Input = props => {

  const {
    label,
    name,
    placeholder,
    color,
    bordered,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    ...rest
  } = props;
  const hasError = touched[name] && (errors[name] !== undefined);
  const finalColor = rest.disabled ? '#CCC' : color;

  return (
    <FormGroup>
      <InputHolder
        bordered={bordered}
        error={hasError}
      >
        {!!label && <SimpleText style={{color: finalColor}}>{label}</SimpleText>}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={color}
          style={{color: finalColor, paddingRight: 40}}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          error={errors[name]}
          touched={touched[name]}
          value={values[name]}
          {...rest}
        />
      </InputHolder>
      {hasError ? <ErrorText>{errors[name]}</ErrorText> : <ErrorText/>}
    </FormGroup>
  )
};

Input.propTypes = {
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  touched: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.object,
  values: PropTypes.object
};

Input.defaultProps = {
  disabled: false,
  bordered: false,
  color: theme.forms.labelColor,
};

export default Input;
