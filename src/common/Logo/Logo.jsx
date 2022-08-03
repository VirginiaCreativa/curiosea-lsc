import React from 'react';
import styled from 'styled-components';

import LogoSVG from "../../assets/logo.svg";

const LogoStyle = styled.img`
  width: 50px;
  height: 50px;
`;

const Logo = () => (
  <LogoStyle src={LogoSVG} alt="logo" />
);

export default Logo;
