import React from 'react';
import styled from 'styled-components';

import Variable from '../../styles/variable';

const NavStyle = styled.div`
  display: flex;
  align-content: center;
  align-items:  center;
`;

const NavList = styled.ul`
   li {
     a {
        margin: 0 10px;
        font-weight: 600;
        font-size: 14px;
        color: ${Variable.grey_3};
        &:hover {
          color: ${Variable.blue};
        }
        &.active {
          color: ${Variable.blue};
          font-weight: 600;
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
      <NavList className="flex space-x-4 align-middle">
        <li><a href="/" className="active">Home</a></li>
        <li><a href="/lsc">LSC</a></li>
        <li><a href="/cursos">Cursos</a></li>
        <li><a href="/equipo">Equipo</a></li>
        <li><a href="/contactenos">Contáctenos</a></li>
      </NavList>

    </div>
  </NavStyle>
);

export default Navigation;
