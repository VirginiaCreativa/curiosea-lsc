import React from 'react';
import styled from 'styled-components';

import Logo from '../../common/Logo/Logo';
import Navigation from '../Navigation/Navigation';

const HeaderStyle = styled.header`
  display: flex;
  align-items: center ;
  padding: 40px 0;
  @media (max-width: 640px) {
    padding: 20px;
  }
`;

const Header = () => (
  <div className="container mx-auto">
    <HeaderStyle>
      <Logo size="30px" />
      <Navigation />
    </HeaderStyle>
  </div>
);

export default Header;
