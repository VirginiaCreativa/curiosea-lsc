import React from 'react';
import styled from 'styled-components';

import Variable from '../../styles/variable';

const Headign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${Variable.blue};
  text-transform: uppercase;
`;

const SubTitle = styled.h1`
  font-size: 0.9rem;
  font-weight:300;
  color: ${Variable.grey_4};
  text-transform: uppercase;
`;
const SectionHeadingTitle = ({ title, subtitle }) => (
  <Headign className="">
    <Title>{title}</Title>
    <SubTitle>Ut eiusmod est irure labore ex consequat nostrud minim ullamco eu.</SubTitle>
  </Headign>
);

export default SectionHeadingTitle;
