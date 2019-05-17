import React, {useEffect} from 'react'
import {Logo} from "../Login/styled";
import LogoImg from "../../assets/logo.png";
import {Container} from "../../components/layout";
import useTokenLogin from "../../state/User/hooks/useTokenLogin";

const Splash = (props) => {
  const {navigation: {navigate}} = props;
  const [route, setRoute] = useTokenLogin();

  useEffect(() => {
    route ? navigate(route) : setRoute()
  }, [route]);

  return (
    <Container center dark>
      <Logo source={LogoImg}/>
    </Container>
  );
};

export default Splash
