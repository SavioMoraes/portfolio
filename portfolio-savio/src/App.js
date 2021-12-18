import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Perfil, NotFound } from './pages/';
import { Header, Footer, Apresentation, Contatos } from './components';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Apresentation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={ <Perfil /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Contatos />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
