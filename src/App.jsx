import React from 'react';
import styled from 'styled-components';

import Layout from './layouts/Layout';

const Background = styled.div`
  background: linear-gradient(0deg, rgba(0,65,130, 0.2) 0%, rgba(255,255,255,0) 100%);
  height: 100vh;
`;
function App() {
  return (
    <Background>
      <Layout />
    </Background>
  );
}

export default App;
