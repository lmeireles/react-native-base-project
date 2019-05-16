import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SimpleText from './SimpleText';
import theme, {getColorFromProps} from "./theme";

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  padding: ${ p => p.padding}px;
  background: ${ p => p.backgroundColor};
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.round ? 7 : 2}px;
`;

const Button = (props) => {
  const {loading, title, color, ...rest} = props;

  rest.backgroundColor = getColorFromProps(props) || rest.backgroundColor;

  return (
    <ButtonContainer {...rest}>
      { loading ?
        <ActivityIndicator color={color} />
        :
        <SimpleText color={color} bold>{title}</SimpleText>
      }
    </ButtonContainer>
  )
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.number,
  round: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string
};

Button.defaultProps = {
  backgroundColor: theme.colors.light,
  color: '#EEE',
  padding: theme.padding,
  round: false,
  loading: false,
};

export default Button;
