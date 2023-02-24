import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import CountryInfo from "./Components/CountryInfo";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/country/:countryName" element={<CountryInfo />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;