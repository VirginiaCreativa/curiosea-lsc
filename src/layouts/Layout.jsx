import React from 'react';
import styled from 'styled-components';

import Footer from './Footer/Footer';
import Header from './Header/Header';

const Wrapper = styled.div`
  min-height: 76.4vh ;
`;


function Layout({ children }) {
  return (
    <>
      <div className="mx-auto xl:px-36 md:px-16 sm:px-10 px-5">
        <Header />
        <Wrapper>
          {children}
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
