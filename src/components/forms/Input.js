import React from 'react'
import {TextInput} from 'react-native'
import InputHolder from "./InputHolder"
import FormGroup from "./FormGroup"
import ErrorText from "./ErrorText"
import SimpleText from "../SimpleText";
import theme from "../theme";
import PropTypes from "prop-types";

const Input = props => {

  const {label, placeholder, error, touched, color, bordered, ...rest} = props;
  const hasError = touched && (error !== undefined);
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
          {...rest}
        />
      </InputHolder>
      {hasError ? <ErrorText>{error}</ErrorText> : <ErrorText/>}
    </FormGroup>
  )
};

Input.propTypes = {
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  touched: PropTypes.bool,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  bordered: false,
  color: theme.forms.labelColor,
};

export default Input;
