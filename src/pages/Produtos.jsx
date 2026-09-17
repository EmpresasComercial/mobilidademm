import React, { useState } from 'react';

const VEICULOS_APPS = [
  {
    id: 'grupo-a',
    grupo: 'Grupo A',
    nome: 'Kwid ou similares',
    preco: '690,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2023/10/kwid-apps-1-330x205.png',
    obs: '*consulte disponibilidade'
  },
  {
    id: 'grupo-b',
    grupo: 'Grupo B',
    nome: 'HB20 Sense, Gol ou similares',
    preco: '710,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2024/06/grupo-B-330x205.jpg',
    obs: '*consulte disponibilidade'
  },
  {
    id: 'grupo-b-plus',
    grupo: 'Grupo B Plus',
    nome: 'Argo Drive 1.0 ou similares',
    preco: '740,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2024/08/fiat-argo-drive-1.0-330x205.png',
    obs: '*consulte disponibilidade'
  },
  {
    id: 'grupo-f-polo',
    grupo: 'Grupo F',
    nome: 'Polo Track ou similares',
    preco: '772,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2024/03/polo-track-330x205.png',
    obs: '*consulte disponibilidade'
  },
  {
    id: 'grupo-es',
    grupo: 'Grupo ES',
    nome: 'Cronos Drive, HB20S, Onix Sedan ou similares',
    preco: '790,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2024/06/Cronos-1.0-Drive-HB20S-Onix-Sedan-1.0-330x205.jpg',
    obs: '*consulte disponibilidade'
  },
  {
    id: 'grupo-f-auto',
    grupo: 'Grupo F',
    nome: 'HB20 T-GDI Sense AT ou similares',
    preco: '810,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2024/03/hb20-tgdi-sense-apps-330x205.png',
    obs: '*consulte disponibilidade'
  },
  {
    id: 'grupo-s',
    grupo: 'Grupo S',
    nome: 'T-Cross, Nivus, Kicks, Tracker ou similares',
    preco: '1.328,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2023/10/suv-apps-1-330x205.png',
    obs: '*consulte disponibilidade'
  }
];

export default function Produtos() {
  const [rentedCarId, setRentedCarId] = useState(null);

  const handleRent = (car) => {
    setRentedCarId(car.id);
    setTimeout(() => {
      alert(`Solicitação de aluguel para "${car.nome}" realizada com sucesso!`);
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
          background: #e0a203;
          padding: 30px 16px 24px;
          border-bottom: 1px solid #d49800;
          text-align: center;
        }
        .aluguel-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .aluguel-hero-title {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .aluguel-hero-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          line-height: 1.5;
        }
        .aluguel-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 24px 16px;
          box-sizing: border-box;
        }
        /* Layout vertical (lista) em vez de grid */
        .aluguel-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .car-card-list {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          border: 1px solid #E6EBED;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .car-card-list:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(224, 162, 3, 0.15);
        }
        .car-img-wrap-list {
          width: 35%;
          min-width: 150px;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          position: relative;
        }
        .car-img-wrap-list img {
          max-width: 100%;
          max-height: 120px;
          object-fit: contain;
          transition: transform 0.5s ease-in-out;
        }
        .car-card-list:hover .car-img-wrap-list img {
          animation: drive 1.5s linear infinite;
        }
        @keyframes drive {
          0% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(3px) rotate(2deg); }
          50% { transform: translateX(0) rotate(0deg); }
          75% { transform: translateX(-3px) rotate(-2deg); }
          100% { transform: translateX(0) rotate(0deg); }
        }
        .car-category-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #e0a203;
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
        }
        .car-body-list {
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }
        .car-title {
          font-size: 16px;
          font-weight: 800;
          color: #0f0b33;
          margin-bottom: 4px;
        }
        .car-obs {
          font-size: 11px;
          font-weight: 600;
          color: #e0a203;
          margin-bottom: 12px;
        }
        .car-price-block {
          margin-bottom: 12px;
        }
        .car-price-label {
          font-size: 11px;
          color: #64748b;
          display: block;
        }
        .car-price-val {
          color: #0f0b33;
          font-size: 14px;
          font-weight: 700;
        }
        .car-price-val span {
          font-size: 18px;
          font-weight: 900;
        }
        .car-btn-alugar {
          background: #0000ff;
          color: #ffffff;
          border: none;
          padding: 10px 18px;
          border-radius: 24px;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: fit-content;
          box-shadow: 0 2px 6px rgba(217, 142, 4, 0.3);
          transition: background 0.2s, transform 0.1s;
        }
        .car-btn-alugar:hover {
          background: #c07d03;
        }
        .car-btn-alugar:active {
          transform: scale(0.98);
        }

        /* Mobile Adjustments for the vertical list */
        @media (max-width: 600px) {
          .car-card-list {
            flex-direction: column;
          }
          .car-img-wrap-list {
            width: 100%;
            height: 160px;
            padding: 20px;
          }
          .car-img-wrap-list img {
            max-height: 140px;
          }
          .car-btn-alugar {
            width: 100%;
          }
        }
      `}</style>

      <div className="aluguel-hero">
        <div className="aluguel-hero-inner">
          <h1 className="aluguel-hero-title">Aluguel de Veículos para Apps</h1>
          <p className="aluguel-hero-desc">
            Conheça os veículos disponíveis com a qualidade LM Veículos para Apps.
          </p>
        </div>
      </div>

      <div className="aluguel-container">
        <div className="aluguel-list">
          {VEICULOS_APPS.map((car) => (
            <div key={car.id} className="car-card-list">
              <div className="car-img-wrap-list">
                <span className="car-category-badge">{car.grupo}</span>
                <img src={car.imagem} alt={car.nome} />
              </div>

              <div className="car-body-list">
                <h2 className="car-title">{car.nome}</h2>
                <div className="car-obs">{car.obs}</div>

                <div className="car-price-block">
                  <span className="car-price-label">A partir de</span>
                  <div className="car-price-val">
                    <span>R$ {car.preco}</span> / semana
                  </div>
                </div>

                <button
                  className="car-btn-alugar"
                  onClick={() => handleRent(car)}
                  disabled={rentedCarId === car.id}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.771.815 2.796.815 3.18 0 5.767-2.587 5.768-5.766.001-3.181-2.585-5.767-5.768-5.767zm0 10.455c-.947 0-1.637-.253-2.451-.737l-.175-.104-1.579.414.422-1.54-.113-.18c-.534-.849-.816-1.573-.815-2.542.001-2.583 2.103-4.685 4.711-4.685 2.583 0 4.685 2.102 4.686 4.711 0 2.584-2.103 4.683-4.711 4.683z" />
                  </svg>
                  <span>{rentedCarId === car.id ? 'Aguarde...' : 'Quero alugar'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
