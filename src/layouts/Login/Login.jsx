import React from 'react';
import styled from 'styled-components';

const LoginStyle = styled.div`
  display: flex;
  align-content: center;
  align-items:  center;
`;

const LoginIn = styled.div`


`;

const SignUp = styled.div`
`;


const Login = () => (
  <LoginStyle>
    <LoginIn className="LoginIn">
      <button type="button">Login</button>
    </LoginIn>
    <SignUp />
  </LoginStyle>
);

export default Login;
