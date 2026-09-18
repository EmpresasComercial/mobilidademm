import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Meu from './pages/Meu';
import Produtos from './pages/Produtos';
import Recarregar from './pages/Recarregar';
import Retirar from './pages/Retirar';
import Equipe from './pages/Equipe';
import Registro from './pages/Registro';
import { ProcessingProvider } from './context/ProcessingContext';

import './mobile-enhancements.css';

export default function App() {
  return (
    <BrowserRouter>
      <ProcessingProvider>
        <Routes>
          {/* Portal de Entrada Inicial ao abrir o App */}
          <Route path="/" element={<Registro />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/cadastro" element={<Registro />} />
          <Route path="/recarregar" element={<Recarregar />} />
          <Route path="/retirar" element={<Retirar />} />
          <Route path="/retirada" element={<Retirar />} />
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/inicio" element={<Home />} />
                <Route path="/quem-somos" element={<QuemSomos />} />
                <Route path="/meu" element={<Meu />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/aluguel" element={<Produtos />} />
                <Route path="/equipe" element={<Equipe />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </ProcessingProvider>
    </BrowserRouter>
  );
}
