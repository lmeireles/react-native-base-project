import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from './Container';
import Spacer from './Spacer';

const ViewRowCenter = styled.SafeAreaView`
  padding: ${p => p.padder === true ? 12 : p.padder}px;
  align-items: ${ p => p.center ? 'center' : 'flex-start' };
  flex: 1;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
const ViewColumnCenter = styled.SafeAreaView`
  padding: ${p => p.padder === true ? 12 : p.padder}px;
  align-items: ${ p => p.center ? 'center' : 'flex-start' };
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const ViewCenter = styled.SafeAreaView`
  padding: ${p => p.padder === true ? 12 : p.padder}px;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const propTypes = {
  padder: PropTypes.any
};
const defaultPropTypes = {
  padder: 0
};

ViewCenter.propTypes = propTypes;
ViewCenter.defaultProps = defaultPropTypes;
ViewColumnCenter.propTypes = propTypes;
ViewColumnCenter.defaultProps = defaultPropTypes;
ViewRowCenter.propTypes = propTypes;
ViewRowCenter.defaultProps = defaultPropTypes;

export { ViewRowCenter, ViewColumnCenter, ViewCenter, Container, Spacer };
