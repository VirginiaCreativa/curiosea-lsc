import React from 'react';
import { Route, Routes } from "react-router-dom";

import Cursos from '../pages/Cursos';
import Home from '../pages/Home';


const Routers = () => (
  <Routes>
    <Route exact path="/" component={Home} />
    <Route exact path="/cursos" component={Cursos} />
  </Routes>
);

export default Routers;
