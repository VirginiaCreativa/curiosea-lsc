import React from 'react';
import styled from 'styled-components';

import Logo from '../../common/Logo/Logo';
import Login from '../Login/Login';
import Navigation from '../Navigation/Navigation';

const HeaderStyle = styled.header`
  display: flex;
  align-items: center ;
  justify-content: space-between ;
  padding: 40px 0;
  @media (max-width: 500px) {
    padding: 20px 0;
    margin-bottom: 20px;
  }
`;

const Header = () => (
  <HeaderStyle>
    <Logo size="40px" />
    <Navigation />
    <Login />
  </HeaderStyle>
);

export default Header;
