import React from 'react';
import styled from 'styled-components';

import ImgWoman from '../../assets/woman.png';

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 400px;
`;

const BoxImg = styled.div`

`;
const Img = styled.img`
  max-height: 100%;
`;

const InfoBanner = styled.div`

`;

const HomeBanner = () => (
  <div className="mx-auto">
    <Banner className="flex">
      <InfoBanner className="basis-2/4">
        <h1>Quieres aprender LSC</h1>
        <h1>Aquí te enseñamos</h1>
        <p>Ipsum eu incididunt ullamco irure enim duis laboris magna nulla labore. Amet ullamco labore tempor anim minim eu. </p>
      </InfoBanner>
      <BoxImg className="basis-2/4 flex justify-end">
        <Img src={ImgWoman} alt="" />
      </BoxImg>
    </Banner>
  </div>
);

export default HomeBanner;
