import React from 'react';
import { Link } from "react-router-dom";
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
        font-weight: 500;
        font-size: 16px;
        color: ${Variable.grey_4};
        &:hover {
          color: ${Variable.blue};
        }
        &.active {
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
    <div className="hidden md:block">
      <NavList className="flex space-x-4 align-middle">
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/lsc">LSC</Link></li>
        <li><Link to="/cursos">Cursos</Link></li>
        <li><Link to="/equipo">Equipo</Link></li>
        <li><Link to="/contactenos">Contáctenos</Link></li>
      </NavList>

    </div>
  </NavStyle>
);

export default Navigation;
