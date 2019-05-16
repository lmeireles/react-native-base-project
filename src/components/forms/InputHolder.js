import styled from 'styled-components'
import PropTypes from "prop-types";
import theme from "../theme";

const getBorderColor = props => (
    props.error ? theme.forms.errorColor : theme.forms.labelColor
);

const InputHolder = styled.View`
  border-width: ${p => p.bordered ? 1 : 0}px;
  position: relative;
  border-radius: 2px;
  border-color: ${p => p.bordered ? getBorderColor(p) : 'transparent'};
  border-bottom-width: 1px;
  border-bottom-color: ${p => getBorderColor(p) };
`;

InputHolder.propTypes = {
  bordered: PropTypes.bool,
  noPadding: PropTypes.bool,
  error: PropTypes.bool,
};

InputHolder.defaultProps = {
  bordered: false,
  noPadding: false,
  error: false,
};

export default InputHolder;
