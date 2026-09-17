import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Meu from './pages/Meu';
import Produtos from './pages/Produtos';
import './mobile-enhancements.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/equipe" element={<QuemSomos />} />
          <Route path="/meu" element={<Meu />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/aluguel" element={<Produtos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
