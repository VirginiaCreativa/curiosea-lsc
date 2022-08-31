import React from 'react';
import styled from 'styled-components';

import ImgWoman from '../../assets/woman_v2.png';
import Variable from '../../styles/variable';

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 600px;
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const BoxImg = styled.div`

  position: relative;
  display: flex;
  justify-content: center ;
`;

const InfoBanner = styled.div`
  display: flex;
  flex-direction: column ;
  justify-content: center ;
`;

const Img = styled.img`
  position: absolute;
  z-index: 2;
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
  <Banner className="mx-auto flex-col sm:flex-row">
    <InfoBanner className="basis-full h-5 sm:h-full sm:basis-2/4">
      <h1>Quieres aprender LSC</h1>
      <h1>Aquí te enseñamos</h1>
      <p>Ipsum eu incididunt ullamco irure enim duis laboris magna nulla labore. Amet ullamco labore tempor anim minim eu. </p>
    </InfoBanner>
    <BoxImg className="basis-full sm:basis-2/4 h-80">
      <Img src={ImgWoman} alt="" className="h-60 sm:h-full" />
    </BoxImg>
  </Banner>
);

export default HomeBanner;
