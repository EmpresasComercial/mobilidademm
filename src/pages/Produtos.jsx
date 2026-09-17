import React, { useState } from 'react';
import { Car } from 'lucide-react';

const CARS_DATA = [
  {
    id: 1,
    model: 'VW Polo Track 1.0 Flex',
    category: 'Hatch / Econômico',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    pricePerDay: '89,90',
    duration: '1 dia (diária)',
    dailyYield: '160,00',
    specs: ['Ar-condicionado', 'Direção Elétrica', '5 Lugares', 'Motor 1.0 Flex'],
  },
  {
    id: 2,
    model: 'VW T-Cross 200 TSI Automatic',
    category: 'SUV / Premium',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    pricePerDay: '149,90',
    duration: '1 dia (diária)',
    dailyYield: '280,00',
    specs: ['Câmbio Automático', 'SUV 5 Lugares', 'Central Multimídia', 'Motor Turbo 200 TSI'],
  },
  {
    id: 3,
    model: 'Fiat Strada Endurance 1.4',
    category: 'Utilitário / Trabalho',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    pricePerDay: '119,00',
    duration: '1 dia (diária)',
    dailyYield: '220,00',
    specs: ['Caçamba 1.354L', 'Direção Hidráulica', 'Ar-condicionado', 'Motor 1.4 Fire'],
  },
  {
    id: 4,
    model: 'Hyundai HB20 Comfort 1.0',
    category: 'Hatch / Urbano',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
    pricePerDay: '94,50',
    duration: '1 dia (diária)',
    dailyYield: '175,00',
    specs: ['Som Bluetooth', 'Vidros Elétricos', 'Freios ABS', 'Econômico Flex'],
  },
  {
    id: 5,
    model: 'Chevrolet Onix Sedan LTZ Turbo',
    category: 'Sedan / Conforto',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    pricePerDay: '109,90',
    duration: '1 dia (diária)',
    dailyYield: '210,00',
    specs: ['Câmbio Automático', 'Porta-malas 469L', 'Wi-Fi a bordo', 'Motor 1.0 Turbo'],
  },
  {
    id: 6,
    model: 'Toyota Corolla XEi 2.0',
    category: 'Executive / Sedan',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    pricePerDay: '199,00',
    duration: '1 dia (diária)',
    dailyYield: '350,00',
    specs: ['Bancos em Couro', 'Câmbio Direct-Shift', 'Piloto Automático', 'Motor 2.0 Dynamic'],
  },
];

export default function Produtos() {
  const [rentedCarId, setRentedCarId] = useState(null);

  const handleRent = (car) => {
    setRentedCarId(car.id);
    setTimeout(() => {
      alert(`Solicitação de aluguel para "${car.model}" realizada com sucesso!`);
      setRentedCarId(null);
    }, 400);
  };

  return (
    <div className="aluguel-page">
      <style>{`
        .aluguel-page {
          background: #ffffff;
          min-height: 100vh;
          padding-bottom: 90px;
          width: 100%;
        }
        .aluguel-hero {
          background: #ffffff;
          padding: 28px 16px 20px;
          border-bottom: 1px solid #e5e9f2;
        }
        .aluguel-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .aluguel-hero-title {
          font-size: 24px;
          font-weight: 700;
          color: #0000ff;
          margin-bottom: 6px;
        }
        .aluguel-hero-desc {
          font-size: 14px;
          color: #555555;
          margin: 0;
          line-height: 1.5;
        }
        .aluguel-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 28px 16px;
          box-sizing: border-box;
        }
        .aluguel-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 640px) {
          .aluguel-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .aluguel-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .car-card {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e9f2;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .car-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 255, 0.08);
        }
        .car-img-wrap {
          position: relative;
          width: 100%;
          height: 195px;
          background: #f8fafc;
          overflow: hidden;
        }
        .car-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .car-category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #0000ff;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
        }
        .car-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .car-title {
          font-size: 18px;
          font-weight: 700;
          color: #020c2b;
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .car-metrics-direct {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid #f0f3f8;
        }
        .car-metric-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13.5px;
        }
        .car-metric-label {
          color: #555555;
        }
        .car-metric-val {
          font-weight: 600;
          color: #1e293b;
        }
        .car-price-val {
          color: #0000ff;
          font-size: 16px;
          font-weight: 700;
        }
        .car-yield-val {
          color: #15803d;
          font-weight: 700;
        }
        .car-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }
        .car-tag {
          font-size: 11px;
          background: #f1f5f9;
          color: #475569;
          padding: 4px 9px;
          border-radius: 6px;
          font-weight: 500;
        }
        .car-btn-alugar {
          width: 100%;
          background: #0000ff;
          color: #ffffff;
          border: none;
          padding: 11px 18px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: auto;
          transition: background 0.2s, transform 0.1s;
        }
        .car-btn-alugar:hover {
          background: #001ad4;
        }
        .car-btn-alugar:active {
          transform: scale(0.98);
        }
      `}</style>

      {/* ── SEÇÃO HERO DA PÁGINA ── */}
      <div className="aluguel-hero">
        <div className="aluguel-hero-inner">
          <h1 className="aluguel-hero-title">Aluguel de Veículos</h1>
          <p className="aluguel-hero-desc">
            Conheça os veículos disponíveis para aluguel com a qualidade da LM Mobilidade.
          </p>
        </div>
      </div>

      {/* ── LISTA DE VEÍCULOS PARA ALUGUEL ── */}
      <div className="aluguel-container">
        <div className="aluguel-grid">
          {CARS_DATA.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-img-wrap">
                <img src={car.image} alt={car.model} />
                <span className="car-category-badge">{car.category}</span>
              </div>

              <div className="car-body">
                {/* Nome/Modelo do Veículo */}
                <h2 className="car-title">{car.model}</h2>

                {/* Métricas alinhadas diretamente */}
                <div className="car-metrics-direct">
                  <div className="car-metric-item">
                    <span className="car-metric-label">Preço do Aluguel:</span>
                    <span className="car-price-val">R$ {car.pricePerDay}</span>
                  </div>
                  <div className="car-metric-item">
                    <span className="car-metric-label">Duração de Aluguel:</span>
                    <span className="car-metric-val">{car.duration}</span>
                  </div>
                  <div className="car-metric-item">
                    <span className="car-metric-label">Receita Diária:</span>
                    <span className="car-yield-val">+ R$ {car.dailyYield} / dia</span>
                  </div>
                </div>

                {/* Tags de especificações */}
                <div className="car-tags">
                  {car.specs.map((spec, i) => (
                    <span key={i} className="car-tag">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Botão Alugar profissional */}
                <button
                  className="car-btn-alugar"
                  onClick={() => handleRent(car)}
                  disabled={rentedCarId === car.id}
                >
                  <Car size={17} />
                  <span>{rentedCarId === car.id ? 'Aguarde...' : 'Alugar'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
