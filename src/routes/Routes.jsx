import React from 'react';
import { Route, Routes } from "react-router-dom";

import Cursos from '../pages/Cursos';
import Home from '../pages/Home';


const Routers = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="cursos" element={<Cursos />} />
  </Routes>
);

export default Routers;
