import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

/* ── Ícones customizados ── */
function IcRecarrega() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a3c7a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 .49-4.5" />
    </svg>
  );
}
function IcCupom() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a3c7a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-4 0v2" />
      <line x1="12" y1="12" x2="12" y2="17" />
      <line x1="9.5" y1="14.5" x2="14.5" y2="14.5" />
    </svg>
  );
}
function IcRetirada() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a3c7a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}
function IcSacar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a3c7a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}
function IcConvidar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a3c7a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  );
}

/* ── Ícone de olho simples ── */
function IcEye({ hidden }) {
  return hidden ? (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function Meu() {
  const [hideValues, setHideValues] = useState(false);

  const balances = [
    { label: 'saldo atual', value: '1.462,50' },
    { label: 'Receita de equipamento', value: '1.500,00' },
    { label: 'renda da equipe', value: '0,00' },
  ];

  const menuItems = [
    { Icon: IcRecarrega, label: 'recarrega' },
    { Icon: IcCupom, label: 'Conversor de cupons em dinheiro' },
    { Icon: IcRetirada, label: 'Informações de retirada' },
    { Icon: IcSacar, label: 'Retirar dinheiro' },
    { Icon: IcConvidar, label: 'convidar amigos' },
  ];

  return (
    <div className="meu-page-wrapper">
      <style>{`
        .meu-page-wrapper {
          background: #f0f2f5;
          min-height: 100vh;
          padding-bottom: 72px;
          width: 100%;
        }
        .meu-map-banner {
          width: 100%;
          height: auto;
          background: #f7f9fe;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 16px 24px;
          box-sizing: border-box;
        }
        .meu-map-banner img {
          width: 100%;
          max-width: 420px;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          display: block;
        }
        .meu-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px 24px;
          box-sizing: border-box;
        }
        .meu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 4px;
          position: relative;
          z-index: 2;
        }
        @media (min-width: 768px) {
          .meu-grid {
            grid-template-columns: 360px 1fr;
            gap: 24px;
            margin-top: 10px;
          }
        }
      `}</style>

      {/* ── MAPA OFICIAL LM MOBILIDADE ── */}
      <div className="meu-map-banner">
        <img
          src="https://lmmobilidade.com.br/wp-content/uploads/2024/03/mapa-mobilidade-1-1-490x490.png"
          alt="Mapa LM Mobilidade"
        />
      </div>

      {/* ── CONTAINER RESPONSIVO (se adapta como a Home: 1200px no Desktop, 100% no Mobile) ── */}
      <div className="meu-container">
        <div className="meu-grid">
          
          {/* COLUNA ESQUERDA: PERFIL + SALDOS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* CARD PERFIL */}
            <div style={{
              background: '#fff',
              borderRadius: 14,
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
            }}>
              <div style={{
                width: 56, height: 56,
                borderRadius: '50%',
                border: '2.5px solid #1a3c7a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#fff',
                flexShrink: 0,
                overflow: 'hidden',
              }}>
                <img
                  src="https://lmmobilidade.com.br/wp-content/uploads/2025/05/lm-mobilidade-color-SVG-2.svg"
                  alt="LM Mobilidade"
                  style={{ width: 46, height: 46, objectFit: 'contain' }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#1a3c7a', lineHeight: 1.3 }}>LM Mobilidade</div>
                <div style={{ fontSize: 12, color: '#888', marginTop: 3 }}>ID: 244926695136</div>
              </div>

              <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: '#1a3c7a' }} aria-label="Sair">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </button>
            </div>

            {/* CARDS SALDO */}
            <div style={{
              background: '#f5f0c0',
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid #e6e0a0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              {balances.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 16px',
                    borderBottom: i < balances.length - 1 ? '1px solid #e2da94' : 'none',
                  }}
                >
                  <span style={{ fontSize: 14, color: '#333' }}>{item.label}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#333' }}>
                      {hideValues ? '••••' : item.value}
                    </span>
                    <button
                      onClick={() => setHideValues(h => !h)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, lineHeight: 1 }}
                      aria-label="ocultar/mostrar valor"
                    >
                      <IcEye hidden={hideValues} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUNA DIREITA: MENU ITENS */}
          <div>
            <div style={{
              background: '#fff',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
            }}>
              {menuItems.map(({ Icon, label }, i) => (
                <button
                  key={i}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '16px 20px',
                    cursor: 'pointer',
                    borderBottom: i < menuItems.length - 1 ? '1px solid #f0f0f0' : 'none',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ width: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon />
                  </div>
                  <span style={{ flex: 1, fontSize: 15, color: '#222', fontWeight: 500 }}>{label}</span>
                  <ChevronRight size={18} color="#bbb" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
