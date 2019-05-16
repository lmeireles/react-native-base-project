import styled from 'styled-components'
import PropTypes from "prop-types";

const Spacer = styled.SafeAreaView`
  width: 100%;
  margin-bottom: ${p => p.space}px;
  border-top-color: ${p => p.border ? p.border : 'transparent'};
  border-top-width: ${p => p.border ? '1px' : '0px'};
`;

Spacer.propTypes = {
  space: PropTypes.number,
  error: PropTypes.bool,
  border: PropTypes.string,
};

Spacer.defaultProps = {
  space: 0
};

export default Spacer
