import React from 'react';
import styled from 'styled-components';
import {ViewColumnCenter} from "../../components/layout";

const StyledImage = styled.Image`
  width: 150px;
  height: 150px;
`;
export const Logo = props => (
  <ViewColumnCenter center>
    <StyledImage
      {...props}
      resizeMode={'contain'}
    />
  </ViewColumnCenter>
);
