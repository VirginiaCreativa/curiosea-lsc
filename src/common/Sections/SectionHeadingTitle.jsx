import React from 'react';
import styled from 'styled-components';

import Variable from '../../styles/variable';

const Title = styled.h1`
  color: ${Variable.blue};
  text-transform: uppercase;
`;

const SectionHeadingTitle = ({ title, subtitle }) => (
  <div className="mx-auto my-24 flex flex-col justify-center">
    <Title>{title}</Title>
    <h4>Ut eiusmod est irure labore ex consequat nostrud minim ullamco eu.</h4>
  </div>
);

export default SectionHeadingTitle;
