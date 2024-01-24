import React from 'react'
import { Route, Routes  } from 'react-router-dom';
import About from '../Component/Register';
import Contact from '../Component/Login';
import Home from '../Component/Home';

function RoutesFunc() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<About />} />
        <Route path="/login" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default RoutesFunc
