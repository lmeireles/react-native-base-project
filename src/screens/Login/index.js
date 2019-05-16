import React, {useEffect} from 'react';
import {Container} from "../../components/layout";
import LoginForm from "./LoginForm";
import {Logo} from './styled'
import LogoImg from '../../assets/logo.png';
import useLogin from '../../state/User/hooks/useLogin';

const Login = (props) => {
  const [login, setLogin] = useLogin(null);

  useEffect(() => {
    if (!login) return;

    props.navigation.navigate('Home');
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
