import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, CheckCircle2 } from 'lucide-react';

export default function Recarregar() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [valor, setValor] = useState('');
  const [copiedIban, setCopiedIban] = useState(null);

  const bancos = [
    { id: 1, nome: 'Banco BAI (Angola)', titular: 'LM Mobilidade SA', iban: 'AO06 0040 0000 0123 4567 8901 2' },
    { id: 2, nome: 'Banco BFA', titular: 'LM Mobilidade SA', iban: 'AO06 0006 0000 0987 6543 2109 8' },
    { id: 3, nome: 'Banco BIC', titular: 'LM Mobilidade SA', iban: 'AO06 0051 0000 0789 0123 4567 8' },
    { id: 4, nome: 'Banco Millennium Atlântico', titular: 'LM Mobilidade SA', iban: 'AO06 0055 0000 0456 7890 1234 5' },
  ];

  const handleContinue = (e) => {
    e.preventDefault();
    if (valor && Number(valor) > 0) {
      setStep(2);
    }
  };

  const copyToClipboard = (iban) => {
    navigator.clipboard.writeText(iban);
    setCopiedIban(iban);
    setTimeout(() => setCopiedIban(null), 2000);
  };

  return (
    <div style={{ background: '#f5f7fa', minHeight: '100vh', paddingBottom: 80 }}>
      {/* HEADER */}
      <div style={{ background: '#fff', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid #e0e8f4', position: 'sticky', top: 0, zIndex: 10 }}>
        <button onClick={() => step === 2 ? setStep(1) : navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}>
          <ArrowLeft size={24} color="#333" />
        </button>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#333' }}>Recarregar Saldo</h1>
      </div>

      <div className="container" style={{ padding: '24px 16px' }}>
        {step === 1 && (
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: '#333', marginBottom: 16 }}>Qual valor deseja recarregar?</h2>
            <form onSubmit={handleContinue}>
              <div style={{ position: 'relative', marginBottom: 24 }}>
                <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#666', fontSize: 16, fontWeight: 500 }}>R$</span>
                <input
                  type="number"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  min="1"
                  required
                  style={{
                    width: '100%',
                    padding: '16px 16px 16px 48px',
                    fontSize: 20,
                    fontWeight: 600,
                    border: '1px solid #dce4f2',
                    borderRadius: 8,
                    outline: 'none',
                    color: '#333'
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={!valor || Number(valor) <= 0}
                style={{
                  width: '100%',
                  background: (!valor || Number(valor) <= 0) ? '#c9d2e3' : '#0000ff',
                  color: '#fff',
                  border: 'none',
                  padding: '16px',
                  borderRadius: 8,
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: (!valor || Number(valor) <= 0) ? 'not-allowed' : 'pointer',
                  transition: 'background 0.3s'
                }}
              >
                Continuar
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div>
            <div style={{ background: '#eef3ff', padding: '16px', borderRadius: 12, marginBottom: 24, border: '1px solid #dce8ff' }}>
              <p style={{ margin: 0, fontSize: 14, color: '#555', marginBottom: 4 }}>Valor a recarregar:</p>
              <p style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#0000ff' }}>R$ {Number(valor).toFixed(2).replace('.', ',')}</p>
            </div>

            <h2 style={{ fontSize: 16, fontWeight: 600, color: '#333', marginBottom: 16 }}>Selecione um banco para transferência</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {bancos.map((banco) => (
                <div key={banco.id} style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #e0e8f4' }}>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: 16, fontWeight: 700, color: '#333' }}>{banco.nome}</h3>

                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: '#888', display: 'block' }}>Beneficiário</span>
                    <span style={{ fontSize: 14, color: '#333', fontWeight: 500 }}>{banco.titular}</span>
                  </div>

                  <div>
                    <span style={{ fontSize: 12, color: '#888', display: 'block' }}>IBAN</span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f5f7fa', padding: '10px 12px', borderRadius: 6, marginTop: 4 }}>
                      <span style={{ fontSize: 13, color: '#333', fontFamily: 'monospace', letterSpacing: '0.5px' }}>{banco.iban}</span>
                      <button
                        onClick={() => copyToClipboard(banco.iban)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', color: copiedIban === banco.iban ? '#10b981' : '#0000ff' }}
                        title="Copiar IBAN"
                      >
                        {copiedIban === banco.iban ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
