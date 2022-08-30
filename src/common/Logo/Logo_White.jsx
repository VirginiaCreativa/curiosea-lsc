import React from 'react';
import styled from 'styled-components';

import LogoSVG from "../../assets/Logo_White.svg";

const LogoStyle = styled.img`
  height: ${({ size }) => size || '50px'};
`;

const LogoWhite = ({ size }) => (

  <LogoStyle src={LogoSVG} alt="logo" size={size} />

);

export default LogoWhite;
