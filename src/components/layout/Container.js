import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {getColorFromProps} from "../theme";

const StyledContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: ${ p => p.center ? 'center' : 'flex-start' };
  align-items: center;
  padding-left: ${p => p.padder === true ? 12 : p.padder}px;  
  padding-right: ${p => p.padder === true ? 12 : p.padder}px;  
  background: ${ p => p.backgroundColor};
`;

const Container = (props) => {
  const {children, ...rest} = props;

  rest.backgroundColor = getColorFromProps(rest) || rest.backgroundColor;

  return (
    <StyledContainer {...rest}>
      {children}
    </StyledContainer>
  )
};

Container.propTypes = {
  backgroundColor: PropTypes.string,
  padder: PropTypes.number,
  center: PropTypes.bool
};

Container.defaultProps = {
  backgroundColor: '#FFF',
  padder: 12,
  center: false
};

export default Container;
