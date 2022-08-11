import React from 'react';
import styled from 'styled-components';

import Variable from '../../styles/variable';

const LoginStyle = styled.div`
  display: flex;
  align-content: center;
  align-items:  center;
`;

const LoginIn = styled.div`
  button {
    color: ${Variable.blue};
    font-weight: 600;
    margin-right: 30px;
    :hover {
      color: ${Variable.blue_ligth};
    }

  }
`;

const SignUp = styled.div`
  button {
    background-color: ${Variable.blue_ligth};
    color: ${Variable.white};
    padding: 10px 20px;
    border-radius: 100px;
    transition: all 0.1s ease;
    font-weight: 600;
    :hover {
      box-shadow: 0 0 6px 0 rgba(0,0,0, 0.2);
      background-color: ${Variable.blue};
    }
  }
`;


const Login = () => (
  <LoginStyle>
    <LoginIn className="LoginIn">
      <button type="button">Login In</button>
    </LoginIn>
    <SignUp>
      <button type="button">Sign Up</button>
    </SignUp>
  </LoginStyle>
);

export default Login;
