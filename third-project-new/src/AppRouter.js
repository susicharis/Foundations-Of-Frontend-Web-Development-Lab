import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Products from './pages/products';

// Fourth Requirement ------------------------------------------------------------------ //


const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </Router>
);

export default AppRouter;
