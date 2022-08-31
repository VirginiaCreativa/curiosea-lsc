import React from 'react';
import styled from 'styled-components';

import ImgWoman from '../../assets/woman.png';

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 600px;
`;

const BoxImg = styled.div`
  display: flex;
  justify-content: center ;
`;

const Img = styled.img`
  max-height: 100%;
`;

const InfoBanner = styled.div`

`;

const HomeBanner = () => (
  <div className="mx-auto">
    <Banner className="flex-col sm:flex-row">
      <InfoBanner className="basis-full sm:basis-2/4">
        <h1>Quieres aprender LSC</h1>
        <h1>Aquí te enseñamos</h1>
        <p>Ipsum eu incididunt ullamco irure enim duis laboris magna nulla labore. Amet ullamco labore tempor anim minim eu. </p>
      </InfoBanner>
      <BoxImg className="basis-full sm:basis-2/4">
        <Img src={ImgWoman} alt="" />
      </BoxImg>
    </Banner>
  </div>
);

export default HomeBanner;
