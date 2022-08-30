import React from 'react';
import styled from 'styled-components';

import background from './assets/background.jpg';
import Layout from './layouts/Layout';
import Routes from './routes/Routes';

const Background = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;
function App() {
  return (
    <Background>
      <Layout>
        <Routes />
      </Layout>
    </Background>
  );
}

export default App;
