import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import {getColorFromProps} from "./theme";
import theme from "./theme";

const Text = styled.Text`
  font-size: ${p => p.size}px;
  color: ${ p => p.color};
  font-weight: ${p => p.bold ? 'bold' : 'normal'};
`;

const SimpleText = props => {
  const finalProps = {
    ...props,
    color: getColorFromProps(props) || props.color
  };

  return <Text {...finalProps}/>
};

SimpleText.propTypes = {
  color: PropTypes.string,
  bold: PropTypes.bool,
  size: PropTypes.number
};

SimpleText.defaultProps = {
  color: '#AAA',
  bold: false,
  size: theme.fontSize
};

export default SimpleText;
