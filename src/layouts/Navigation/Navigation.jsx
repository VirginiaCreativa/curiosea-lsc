import React from 'react';
import styled from 'styled-components';

import Variable from '../../styles/variable';

const NavStyle = styled.div`
  display: flex;
  align-content: center;
  align-items:  center;
  ul {
    li {
      a {
        font-weight: 600;
        color: ${Variable.blue};
      }
    }
  }
`;
const Navigation = () => (
  <NavStyle className="flex items-center">
    <div className="block md:hidden">
      <button type="button">--</button>
    </div>
    <div className=" hidden md:block">
      <ul className="flex space-x-4 align-middle">
        <li><a href="/">Home</a></li>
        <li><a href="/lsc">LSC</a></li>
        <li><a href="/cursos">Cursos</a></li>
        <li><a href="/equipo">Equípo</a></li>
        <li><a href="/contactenos">Contáctenos</a></li>
      </ul>

    </div>
  </NavStyle>
);

export default Navigation;
