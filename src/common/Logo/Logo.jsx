import React from 'react';
import styled from 'styled-components';

import LogoSVG from "../../assets/logo.svg";

const LogoStyle = styled.img`
  height: ${({ size }) => size || '50px'};
`;

const Logo = ({ size }) => (

  <LogoStyle src={LogoSVG} alt="logo" size={size} />

);

export default Logo;
