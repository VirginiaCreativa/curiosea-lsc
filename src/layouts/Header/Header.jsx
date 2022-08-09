import React from 'react';

import Logo from '../../common/Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <div className="container mx-auto">
    <div div className="flex align-middle py-8" >
      <Logo size="30px" />
      <Navigation />
    </div>
  </div>
);

export default Header;
