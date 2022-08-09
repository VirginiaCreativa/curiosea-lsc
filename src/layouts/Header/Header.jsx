import React from 'react';

import Logo from '../../common/Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <div className="flex align-middle p-5">
    <Logo size="30px" />
    <Navigation />
  </div>
);

export default Header;
