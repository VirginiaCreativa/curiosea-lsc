import React from 'react';
import styled from 'styled-components';

import background from './assets/background.jpg';
import Layout from './layouts/Layout';

const Background = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
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
