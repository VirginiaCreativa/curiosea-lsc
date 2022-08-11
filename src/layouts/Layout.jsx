import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';

const Wrapper = styled.div`
  display: inline-grid;
`;


function Layout({ children }) {
  return (
    <div className="container mx-auto md:px-36 sm:px-0">
      <Header />
      <Wrapper>
        <div>
          {children}
        </div>
      </Wrapper>
    </div>
  );
}

export default Layout;
