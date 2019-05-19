import React, {useEffect} from 'react';
import {Container} from "../../components/layout";
import LoginForm from "./LoginForm";
import {Logo} from './styled'
import LogoImg from '../../assets/logo.png';
import useLogin from '../../state/User/hooks/useLogin';

const Login = ({navigation: {navigate}}) => {
  const [login, setLogin] = useLogin();

  useEffect(() => {
    if (!login) return;

    navigate('Home');
  }, [login]);

  return (
    <Container center dark>
      <Logo source={LogoImg} />
      <LoginForm
        onSubmit={(values, actions) => setLogin({values, actions})}
      />
    </Container>
  )
};

export default Login
