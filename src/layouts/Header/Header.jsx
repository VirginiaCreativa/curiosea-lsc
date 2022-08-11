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
  @media (max-width: 640px) {
    padding: 20px;
  }
`;

const Header = () => (
  <div>
    <HeaderStyle>
      <Logo size="30px" />
      <Navigation />
      <Login />
    </HeaderStyle>
  </div>
);

export default Header;
