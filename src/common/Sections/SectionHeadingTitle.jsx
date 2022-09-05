import React from 'react';
import styled from 'styled-components';

import Variable from '../../styles/variable';

const Headign = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;


const Title = styled.h1`
  color: ${Variable.blue};
  text-transform: uppercase;
`;

const SectionHeadingTitle = ({ title, subtitle }) => (
  <Headign className="mx-auto">
    <Title>{title}</Title>
    <h4>Ut eiusmod est irure labore ex consequat nostrud minim ullamco eu.</h4>
  </Headign>
);

export default SectionHeadingTitle;
