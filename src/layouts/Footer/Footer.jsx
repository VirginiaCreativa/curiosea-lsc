import React from 'react';
import styled from 'styled-components';

import Logo from '../../common/Logo/Logo_White';
import Variable from '../../styles/variable';

const FooterStyled = styled.footer`
  background-color: ${Variable.blue};
  color: #fff;
  padding: 33px 0;
`;

const Info = styled.p`
  font-size: 0.7rem;
`;

const Redes = styled.div`
  font-size: 1.4rem;
  i {
    margin: 0 10px;
    cursor: pointer;
    &.bx:hover {
      color: ${Variable.blue_ligth};
    }
  }
`;


const YearNow = new Date().getFullYear();

const Footer = () => (
  <FooterStyled>
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="basis-1/4 flex justify-center items-center">
          <Logo size="40px" />
        </div>
        <div className="basis-1/2 flex justify-center items-center">
          <Info>©{YearNow} Hecho a Colombia. Dev & Design with by @Virginia.Creativa. Model with by @YulieneModel</Info>
        </div>
        <Redes className="basis-1/4 flex justify-center items-center">
          <i className="bx bxl-instagram" />
          <i className="bx bxl-facebook-square" />
          <i className="bx bxl-tiktok" />
        </Redes>
      </div>
    </div>
  </FooterStyled>
);

export default Footer;
