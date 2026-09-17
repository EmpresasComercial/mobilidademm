import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, CheckCircle2, Lock, Unlock } from 'lucide-react';

const BANCOS = [
  { id: 1, nome: 'Banco BAI',                  titular: 'LM Mobilidade SA', iban: 'AO06 0040 0000 0123 4567 8901 2' },
  { id: 2, nome: 'Banco BFA',                  titular: 'LM Mobilidade SA', iban: 'AO06 0006 0000 0987 6543 2109 8' },
  { id: 3, nome: 'Banco BIC',                  titular: 'LM Mobilidade SA', iban: 'AO06 0051 0000 0789 0123 4567 8' },
  { id: 4, nome: 'Banco Millennium Atlântico', titular: 'LM Mobilidade SA', iban: 'AO06 0055 0000 0456 7890 1234 5' },
];

const labelStyle = { fontSize: 11, color: '#9ca3af', display: 'block', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.5px' };

export default function Recarregar() {
  const navigate = useNavigate();
  const [step, setStep]                 = useState(1);
  const [valor, setValor]               = useState('');
  const [copiedIban, setCopiedIban]     = useState(null);
  const [unlocked, setUnlocked]         = useState({});

  const toggle   = (id) => setUnlocked(p => ({ ...p, [id]: !p[id] }));
  const open     = (id) => !!unlocked[id];
  const numValor = Number(valor);
  const canNext  = valor && numValor > 0;

  const copy = (e, iban) => {
    e.stopPropagation();
    navigator.clipboard.writeText(iban);
    setCopiedIban(iban);
    setTimeout(() => setCopiedIban(null), 2000);
  };

  return (
    <div style={{ background: '#f5f7fa', minHeight: '100vh', paddingBottom: 80 }}>
      <div style={{ background: '#fff', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid #e0e8f4', position: 'sticky', top: 0, zIndex: 10 }}>
        <button onClick={() => step === 2 ? setStep(1) : navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}>
          <ArrowLeft size={24} color="#333" />
        </button>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#333' }}>Pay Now</h1>
      </div>

      <div className="container" style={{ padding: '24px 16px' }}>

        {/* STEP 1 — inserir valor */}
        {step === 1 && (
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: '#333', marginBottom: 16 }}>Qual valor deseja recarregar?</h2>
            <form onSubmit={(e) => { e.preventDefault(); if (canNext) setStep(2); }}>
              <div style={{ position: 'relative', marginBottom: 24 }}>
                <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#666', fontSize: 16, fontWeight: 500 }}>Kz</span>
                <input
                  type="number" value={valor} onChange={(e) => setValor(e.target.value)}
                  placeholder="0.00" step="0.01" min="1" required
                  style={{ width: '100%', padding: '16px 16px 16px 48px', fontSize: 20, fontWeight: 600, border: '1px solid #dce4f2', borderRadius: 8, outline: 'none', color: '#333', boxSizing: 'border-box' }}
                />
              </div>
              <button
                type="submit" disabled={!canNext}
                style={{ width: '100%', background: canNext ? '#0000ff' : '#c9d2e3', color: '#fff', border: 'none', padding: '16px', borderRadius: 8, fontSize: 16, fontWeight: 700, cursor: canNext ? 'pointer' : 'not-allowed', transition: 'background 0.3s' }}
              >
                Continuar
              </button>
            </form>
          </div>
        )}

        {/* STEP 2 — selecionar banco */}
        {step === 2 && (
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 400, color: '#333', marginBottom: 16 }}>Selecione um banco para transferência</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {BANCOS.map((banco) => {
                const isOpen = open(banco.id);
                return (
                  <div
                    key={banco.id}
                    onClick={() => toggle(banco.id)}
                    style={{
                      background: '#fff', borderRadius: 12, padding: 20, cursor: 'pointer', userSelect: 'none',
                      boxShadow: isOpen ? '0 4px 16px rgba(0,0,255,0.10)' : '0 2px 8px rgba(0,0,0,0.04)',
                      border: isOpen ? '1px solid #a5b4fc' : '1px solid #e0e8f4',
                      transition: 'border 0.25s, box-shadow 0.25s',
                    }}
                  >
                    {/* Cabeçalho do card */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: isOpen ? 14 : 0 }}>
                      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#0000ff' }}>{banco.nome}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', background: isOpen ? 'rgba(0,0,255,0.08)' : 'rgba(0,0,0,0.06)', transition: 'background 0.25s' }}>
                        {isOpen ? <Unlock size={18} color="#0000ff" /> : <Lock size={18} color="#9ca3af" />}
                      </div>
                    </div>

                    {/* Estado bloqueado */}
                    {!isOpen && (
                      <div style={{ marginTop: 10, background: 'rgba(245,247,250,0.85)', borderRadius: 8, padding: '12px 14px', border: '1px dashed #d1d5db', display: 'flex', alignItems: 'center', gap: 10, color: '#9ca3af', fontSize: 13 }}>
                        <Lock size={15} color="#c4c4c4" />
                        <span>Toque para ver os dados bancários</span>
                      </div>
                    )}

                    {/* Estado desbloqueado */}
                    {isOpen && (
                      <div style={{ animation: 'fadeIn 0.2s ease' }}>
                        {/* Valor */}
                        <div style={{ background: 'linear-gradient(135deg, #1a3c7a 0%, #0000ff 100%)', borderRadius: 8, padding: '10px 14px', marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>Valor a transferir</span>
                          <span style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>Kz {numValor.toLocaleString('pt-AO', { minimumFractionDigits: 2 })}</span>
                        </div>

                        {/* Beneficiário */}
                        <div style={{ marginBottom: 10 }}>
                          <span style={labelStyle}>Beneficiário</span>
                          <span style={{ fontSize: 14, color: '#1f2937', fontWeight: 600 }}>{banco.titular}</span>
                        </div>

                        {/* IBAN */}
                        <div>
                          <span style={labelStyle}>IBAN</span>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f0f4ff', padding: '10px 12px', borderRadius: 6, border: '1px solid #dbeafe' }}>
                            <span style={{ fontSize: 13, color: '#1e3a8a', fontFamily: 'monospace', letterSpacing: '0.5px', fontWeight: 600 }}>{banco.iban}</span>
                            <button
                              onClick={(e) => copy(e, banco.iban)}
                              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', color: copiedIban === banco.iban ? '#10b981' : '#0000ff', flexShrink: 0 }}
                              title="Copiar IBAN"
                            >
                              {copiedIban === banco.iban ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
}
