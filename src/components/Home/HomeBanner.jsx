import React from 'react';
import styled from 'styled-components';

import ImgWoman from '../../assets/woman_v2.png';
import Variable from '../../styles/variable';

const Banner = styled.div`
  display: flex;
  align-content: center;
  position: relative;
  height: 600px;
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const BoxImg = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  justify-content: center ;
  max-height: 100%;
`;

const InfoBanner = styled.div`
  position: relative;
  left: 12%;
  z-index: 2;
  display: flex;
  flex-direction: column ;
  justify-content: center ;
  h1, h2 {
    margin-bottom: 0;
    padding: 0;
    letter-spacing: -2px;
    font-weight: 700;
    font-size: 3rem;
  }
  .title_princ {
    color: ${Variable.blue};
  }
  .title_secu {
    position: relative;
    top: -20px;
    color: ${Variable.red};
  }
  p {
    color: ${Variable.grey_4};
  }
`;

const Img = styled.img`
 max-height: 600px;
`;

const ImgOver = styled.div`
  overflow: hidden;
  border-radius: 100%;
  height: 400px;
  width: 400px;
`;

const CircleYellow = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  background-color: ${Variable.yellow};
  border-radius: 100%;
  height: 400px;
  width: 400px;
`;

const HomeBanner = () => (
  <Banner className="mx-auto flex-col sm:flex-row ">
    <InfoBanner className="w-2/6">
      <h1 className="title_princ">¿Quieres aprender LSC?</h1>
      <h2 className="title_secu">Aquí te enseñamos</h2>
      <p>Lengua de Seña Colombia es nuestra comunidad de sorda, queremos compartir para comunicación con la Persona Sorda </p>
    </InfoBanner>
    <BoxImg className="">
      <Img src={ImgWoman} alt="" className="h-60 sm:h-full" />
    </BoxImg>
  </Banner>
);

export default HomeBanner;
