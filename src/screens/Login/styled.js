import React from 'react';
import styled from 'styled-components';
import {ViewColumnCenter, Spacer} from "../../components/layout";

const StyledImage = styled.Image`
  width: 150px;
  height: 150px;
  min-height: 150px;
`;
export const Logo = props => (
  <ViewColumnCenter center>
    <StyledImage
      {...props}
      resizeMode={'contain'}
    />
    <Spacer space={34}/>
  </ViewColumnCenter>
);
