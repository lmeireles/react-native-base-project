import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const SimpleText = styled.Text`
  color: ${ p => p.color};
  font-weight: ${p => p.bold ? 'bold' : 'normal'};
`;

SimpleText.propTypes = {
  color: PropTypes.string
};

SimpleText.defaultProps = {
  color: '#AAA'
};

export default SimpleText;
