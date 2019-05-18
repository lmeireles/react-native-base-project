import React from 'react';
import styled from 'styled-components';
import {ViewColumnCenter, Spacer} from "../../components/layout";
import * as Animatable from 'react-native-animatable';

const StyledImage = styled.Image`
  width: 180px;
  height: 180px;
  min-height: 180px;
`;

export const Logo = props => (
  <ViewColumnCenter center>
    <AnimatedImage
      {...props}
      resizeMode={'contain'}
      animation={'bounceIn'}
    />
    <Spacer space={34}/>
  </ViewColumnCenter>
);
const AnimatedImage = Animatable.createAnimatableComponent(StyledImage);
