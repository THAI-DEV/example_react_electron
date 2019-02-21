import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './about';
import Ex001 from './ex001';
import Ex002 from './ex002';
import Ex003 from './ex003';
import Ex004 from './ex004';
import Home from './home';
import Menu from './menu';

const Rounter = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={Menu} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/ex001" component={Ex001} />
        <Route path="/ex002" component={Ex002} />
        <Route path="/ex003" component={Ex003} />
        <Route path="/ex004" component={Ex004} />
      </div>
    </BrowserRouter>
  );
};

export default Rounter;
