import React from 'react';
import styled from 'styled-components';

import Footer from './Footer/Footer';
import Header from './Header/Header';

const Wrapper = styled.div`
  display: inline-grid;
  min-height: 76vh ;
`;


function Layout({ children }) {
  return (
    <>
      <div className="container mx-auto md:px-36 sm:px-0">
        <Header />
        <Wrapper>
          <div>
            {children}
          </div>
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
