import React from 'react';
import styled from 'styled-components';

import LogoSVG from "../../assets/logo.svg";

const LogoStyle = styled.img`

  max-height: 50px;
`;

const Logo = ({ size }) => (
  <LogoStyle src={LogoSVG} alt="logo" height={size} />
);

export default Logo;
