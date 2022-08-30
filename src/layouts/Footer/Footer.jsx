import React from 'react';
import styled from 'styled-components';

import Variable from '../../styles/variable';

const FooterStyled = styled.footer`
  background-color: ${Variable.blue};
  color: #fff;
  padding: 40px 0;
`;

const Footer = () => (
  <FooterStyled>
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="basis-1/3 flex justify-center">logo</div>
        <div className="basis-1/3 flex justify-center">info</div>
        <div className="basis-1/3 flex justify-center">red</div>
      </div>
    </div>
  </FooterStyled>
);

export default Footer;
