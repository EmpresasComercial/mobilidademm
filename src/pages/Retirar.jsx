import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertCircle, Wallet, ShieldCheck } from 'lucide-react';
import { useProcessing } from '../context/ProcessingContext';

export default function Retirar() {
  const navigate = useNavigate();
  const { startProcessing } = useProcessing();
  const saldoDisponivel = 1462.50;

  const [valor, setValor] = useState('');
  const [sucesso, setSucesso] = useState(false);
  const [protocolo, setProtocolo] = useState('');

  const handleRetirarTudo = () => {
    setValor(saldoDisponivel.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numValor = Number(valor);
    if (!numValor || numValor <= 0 || numValor > saldoDisponivel) {
      return;
    }

    const cod = 'SAQ-' + Math.floor(100000 + Math.random() * 900000);

    startProcessing({
      title: 'Processamento de Retirada',
      itemInfo: {
        title: `${numValor.toLocaleString('pt-AO', { minimumFractionDigits: 2 })} Kz`,
        subtitle: 'Transferência Bancária',
        badge: 'Saque de Saldo'
      },
      steps: [
        {
          id: 1,
          title: '1. Consulta de Saldo & Dados',
          activeText: 'Consultando saldo disponível e conta de recebimento...',
          doneText: 'Saldo suficiente e conta bancária verificada.',
        },
        {
          id: 2,
          title: '2. Validação Bancária & Segurança',
          activeText: 'Validando requisitos de segurança e titularidade...',
          doneText: 'Titularidade e dados bancários validados.',
        },
        {
          id: 3,
          title: '3. Processamento da Transferência',
          activeText: 'Enviando ordem de pagamento ao sistema bancário...',
          doneText: 'Transferência registrada e concluída com sucesso.',
        }
      ],
      successTitle: 'Saque Registrado com Sucesso!',
      successMessage: `Seu pedido de retirada de ${numValor.toLocaleString('pt-AO', { minimumFractionDigits: 2 })} Kz foi aprovado. Protocolo: ${cod}`,
      onComplete: () => {
        setProtocolo(cod);
        setSucesso(true);
      }
    });
  };

  const numValor = Number(valor);
  const saldoInsuficiente = numValor > saldoDisponivel;
  const valorInvalido = numValor < 1000 && numValor > 0;

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', paddingBottom: 80, fontFamily: 'sans-serif' }}>
      {/* HEADER */}
      <div
        style={{
          background: '#fff',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          borderBottom: '1px solid #e0e8f4',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
            display: 'flex',
            alignItems: 'center',
            color: '#333'
          }}
          aria-label="Voltar"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#333' }}>
          Retirar Dinheiro
        </h1>
      </div>

      <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px 16px' }}>
        {/* TELA DE SUCESSO */}
        {sucesso ? (
          <div
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: '32px 20px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              border: '1px solid #e0e8f4',
              marginLeft: 4,
              marginRight: 4,
            }}
          >
            <div style={{ display: 'inline-flex', padding: 16, borderRadius: '50%', background: '#ecfdf5', marginBottom: 16 }}>
              <CheckCircle2 size={48} color="#10b981" />
            </div>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1f2937', margin: '0 0 8px 0' }}>
              Solicitação Enviada!
            </h2>
            <p style={{ fontSize: 14, color: '#6b7280', margin: '0 0 24px 0', lineHeight: 1.5 }}>
              O seu pedido de retirada foi registrado com sucesso.
            </p>

            <div style={{ background: '#f9fafb', borderRadius: 8, padding: 16, textAlign: 'left', marginBottom: 24, border: '1px solid #e5e7eb', marginLeft: 4, marginRight: 4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: '#6b7280' }}>Protocolo:</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1f2937', fontFamily: 'monospace' }}>{protocolo}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, color: '#6b7280' }}>Valor Solicitado:</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#0000ff' }}>
                  {Number(valor).toLocaleString('pt-AO', { minimumFractionDigits: 2 })} Kz
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate('/meu')}
              style={{
                width: '100%',
                background: '#0000ff',
                color: '#fff',
                border: 'none',
                padding: '14px',
                borderRadius: 22,
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                marginLeft: 4,
                marginRight: 4,
              }}
            >
              Voltar ao Meu Perfil
            </button>
          </div>
        ) : (
          /* FORMULÁRIO COM APENAS SALDO, INPUT E INFORMAÇÕES */
          <div>
            {/* 1. SALDO */}
            <div
              style={{
                background: 'linear-gradient(135deg, #1a3c7a 0%, #0000ff 100%)',
                color: '#fff',
                borderRadius: 12,
                padding: '20px',
                marginBottom: 20,
                boxShadow: '0 4px 12px rgba(0,0,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginLeft: 4,
                marginRight: 4,
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, opacity: 0.9, marginBottom: 4 }}>
                  <Wallet size={16} />
                  <span style={{ fontSize: 13, fontWeight: 500 }}>Saldo disponível para retirada</span>
                </div>
                <div style={{ fontSize: 24, fontWeight: 800 }}>
                  {saldoDisponivel.toLocaleString('pt-AO', { minimumFractionDigits: 2 })} Kz
                </div>
              </div>
              <button
                type="button"
                onClick={handleRetirarTudo}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  color: '#fff',
                  padding: '8px 14px',
                  borderRadius: 22,
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                Retirar tudo
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* 2. INPUT DE VALOR */}
              <div
                style={{
                  marginBottom: 16,
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 8 }}>
                  Valor que deseja retirar
                </label>
                <div style={{ position: 'relative' }}>
                  <span
                    style={{
                      position: 'absolute',
                      left: 14,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#6b7280',
                      fontSize: 16,
                      fontWeight: 700
                    }}
                  >
                    Kz
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    placeholder="Por favor digite o valor"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '12px 14px 12px 48px',
                      fontSize: 18,
                      fontWeight: 700,
                      border: saldoInsuficiente ? '1px solid #ef4444' : '1px solid #d1d5db',
                      borderRadius: 22,
                      outline: 'none',
                      color: '#111827',
                      marginLeft: 4,
                      marginRight: 4,
                    }}
                  />
                </div>
                {saldoInsuficiente && (
                  <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <AlertCircle size={14} /> Saldo insuficiente. Máximo disponível: {saldoDisponivel.toLocaleString('pt-AO', { minimumFractionDigits: 2 })} Kz
                  </span>
                )}
                {valorInvalido && (
                  <span style={{ fontSize: 12, color: '#f59e0b', marginTop: 4, display: 'block' }}>
                    * Valor mínimo de retirada é de 1.000 Kz
                  </span>
                )}
              </div>

              {/* BOTÃO CONFIRMAR */}
              <button
                type="submit"
                disabled={!valor || numValor <= 0 || saldoInsuficiente}
                style={{
                  width: '100%',
                  background: (!valor || numValor <= 0 || saldoInsuficiente) ? '#cbd5e1' : '#0000ff',
                  color: '#fff',
                  border: 'none',
                  padding: '16px',
                  borderRadius: 22,
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: (!valor || numValor <= 0 || saldoInsuficiente) ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s ease',
                  marginBottom: 20,
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                Confirmar Retirada
              </button>

              {/* INFORMAÇÕES SOBRE A RETIRADA (COMO ÚLTIMO ITEM) */}
              <div
                style={{
                  background: '#eff6ff',
                  borderRadius: 10,
                  padding: '14px 16px',
                  border: '1px solid #dbeafe',
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: '#1e40af', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ShieldCheck size={16} /> Informações sobre a Retirada
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, color: '#3b82f6', lineHeight: 1.6 }}>
                  <li><strong>Valor mínimo:</strong> 1.000,00 Kz</li>
                  <li><strong>Taxa de processamento:</strong> 0% (Gratuito)</li>
                  <li><strong>Prazo estimado:</strong> Até 24 horas úteis</li>
                  <li>O valor será creditado na conta bancária previamente vinculada.</li>
                </ul>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
