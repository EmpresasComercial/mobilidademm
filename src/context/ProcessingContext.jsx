import React, { createContext, useContext, useState, useRef } from 'react';
import { Search, ShieldCheck, CheckCircle2, Loader2, X, Car, Check, Calendar, FileText } from 'lucide-react';

const ProcessingContext = createContext({
  startProcessing: () => {},
  closeProcessing: () => {},
  isProcessing: false,
});

export function ProcessingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState(1); // 1: Consulta, 2: Validação, 3: Processamento, 4: Concluído
  const [protocol, setProtocol] = useState('');
  const [config, setConfig] = useState({
    title: 'Solicitação de Locação',
    itemInfo: null, // { title, subtitle, image, badge }
    successTitle: 'Reserva Confirmada!',
    successMessage: 'Sua solicitação foi concluída com sucesso. Nossa equipe entrará em contato para os detalhes da retirada.',
    onComplete: null,
  });

  const timersRef = useRef([]);

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  const startProcessing = (customConfig = {}) => {
    clearAllTimers();

    const randomProto = 'LM-' + Math.floor(100000 + Math.random() * 900000);
    setProtocol(randomProto);

    setConfig({
      title: customConfig.title || 'Solicitação de Locação',
      itemInfo: customConfig.itemInfo || null,
      successTitle: customConfig.successTitle || 'Reserva Confirmada!',
      successMessage: customConfig.successMessage || 'Sua solicitação foi aprovada com sucesso no sistema.',
      onComplete: customConfig.onComplete || null,
    });

    setStage(1);
    setIsOpen(true);

    // Etapa 1: Consulta (0 -> 1.3s)
    const t1 = setTimeout(() => {
      setStage(2);
    }, 1300);

    // Etapa 2: Validação (1.3s -> 2.8s)
    const t2 = setTimeout(() => {
      setStage(3);
    }, 2800);

    // Etapa 3: Processamento (2.8s -> 4.4s)
    const t3 = setTimeout(() => {
      setStage(4);
      if (typeof customConfig.onComplete === 'function') {
        customConfig.onComplete();
      }
    }, 4400);

    timersRef.current = [t1, t2, t3];
  };

  const closeProcessing = () => {
    clearAllTimers();
    setIsOpen(false);
    setStage(1);
  };

  return (
    <ProcessingContext.Provider value={{ startProcessing, closeProcessing, isProcessing: isOpen, stage }}>
      {children}

      {/* ===== MODAL GLOBAL REESTRUTURADO & PREMIUM ===== */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(8, 14, 30, 0.72)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: 22,
            width: '100%',
            maxWidth: 400,
            boxShadow: '0 25px 60px -15px rgba(0, 0, 70, 0.35)',
            border: '1px solid #e2e8f0',
            position: 'relative',
            overflow: 'hidden',
            animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}>
            <style>{`
              @keyframes modalSlideUp {
                from { opacity: 0; transform: scale(0.94) translateY(16px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
              }
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .spin-loader {
                animation: spin 1.2s linear infinite;
              }
              @keyframes checkScale {
                0% { transform: scale(0.6); opacity: 0; }
                50% { transform: scale(1.15); }
                100% { transform: scale(1); opacity: 1; }
              }
              .check-pop {
                animation: checkScale 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
              }
            `}</style>

            {/* BOTÃO FECHAR NO CANTO SUPERIOR */}
            <button
              type="button"
              onClick={closeProcessing}
              style={{
                position: 'absolute',
                top: 14,
                right: 14,
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: 30,
                height: 30,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b',
                zIndex: 10,
                transition: 'background 0.2s'
              }}
            >
              <X size={16} />
            </button>

            {/* ========================================================= */}
            {/* ESTADO 1: PROCESSAMENTO EM ANDAMENTO (STAGES 1, 2 e 3)     */}
            {/* ========================================================= */}
            {stage < 4 ? (
              <div style={{ padding: '26px 20px 24px' }}>
                {/* Cabeçalho */}
                <div style={{ textAlign: 'center', marginBottom: 20 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#0000ff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    LM Mobilidade
                  </span>
                  <h3 style={{ margin: '4px 0 0', fontSize: 18, fontWeight: 800, color: '#0f172a' }}>
                    {config.title}
                  </h3>
                </div>

                {/* Veículo / Item em destaque */}
                {config.itemInfo && (
                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: 14,
                    padding: '12px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 24
                  }}>
                    {config.itemInfo.image && (
                      <img src={config.itemInfo.image} alt={config.itemInfo.title} style={{ width: 68, height: 42, objectFit: 'contain' }} />
                    )}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {config.itemInfo.title}
                      </div>
                      {config.itemInfo.subtitle && (
                        <div style={{ fontSize: 12, color: '#0000ff', fontWeight: 700, marginTop: 2 }}>
                          {config.itemInfo.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Círculo central animado de progresso */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '10px 0 20px'
                }}>
                  <div style={{ position: 'relative', width: 64, height: 64, marginBottom: 14 }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      border: '3px solid #e2e8f0'
                    }} />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      border: '3px solid #0000ff',
                      borderTopColor: 'transparent',
                      animation: 'spin 1s linear infinite'
                    }} />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0000ff',
                      fontSize: 13,
                      fontWeight: 800
                    }}>
                      {stage === 1 ? '35%' : stage === 2 ? '70%' : '95%'}
                    </div>
                  </div>

                  {/* Texto da etapa atual */}
                  <div style={{ textAlign: 'center' }}>
                    <span style={{
                      display: 'inline-block',
                      background: '#eff6ff',
                      color: '#0000ff',
                      fontSize: 12,
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: 20,
                      marginBottom: 6
                    }}>
                      {stage === 1 && '1. Consulta na Frota'}
                      {stage === 2 && '2. Validação Cadastral'}
                      {stage === 3 && '3. Processamento'}
                    </span>
                    <p style={{ margin: 0, fontSize: 13, color: '#475569', fontWeight: 500 }}>
                      {stage === 1 && 'Verificando disponibilidade nos pátios mais próximos...'}
                      {stage === 2 && 'Validando documentação e elegibilidade para apps...'}
                      {stage === 3 && 'Emitindo ordem e registrando a reserva no sistema...'}
                    </p>
                  </div>
                </div>

                {/* Stepper horizontal moderno e limpo (sem caixas gigantes) */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: '#f8fafc',
                  borderRadius: 12,
                  border: '1px solid #e2e8f0'
                }}>
                  {[
                    { num: 1, label: 'Consulta' },
                    { num: 2, label: 'Validação' },
                    { num: 3, label: 'Reserva' }
                  ].map((s, idx) => {
                    const isDone = stage > s.num;
                    const isCurrent = stage === s.num;

                    return (
                      <React.Fragment key={s.num}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <div style={{
                            width: 22,
                            height: 22,
                            borderRadius: '50%',
                            background: isDone ? '#10b981' : isCurrent ? '#0000ff' : '#cbd5e1',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 11,
                            fontWeight: 800,
                            transition: 'all 0.3s ease'
                          }}>
                            {isDone ? <Check size={13} strokeWidth={3} /> : s.num}
                          </div>
                          <span style={{
                            fontSize: 11,
                            fontWeight: isCurrent || isDone ? 700 : 500,
                            color: isDone ? '#059669' : isCurrent ? '#0000ff' : '#94a3b8'
                          }}>
                            {s.label}
                          </span>
                        </div>
                        {idx < 2 && (
                          <div style={{
                            flex: 1,
                            height: 2,
                            margin: '0 8px',
                            background: stage > idx + 1 ? '#10b981' : '#e2e8f0',
                            transition: 'background 0.3s ease'
                          }} />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* ========================================================= */
              /* ESTADO 2: CONFIRMAÇÃO / COMPROVANTE (STAGE 4)            */
              /* ========================================================= */
              <div style={{ padding: '30px 22px 24px' }}>
                {/* Ícone de Sucesso animado */}
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <div className="check-pop" style={{
                    width: 58,
                    height: 58,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)',
                    marginBottom: 12
                  }}>
                    <CheckCircle2 size={32} strokeWidth={2.5} />
                  </div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 20, fontWeight: 900, color: '#0f172a' }}>
                    {config.successTitle}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>
                    {config.successMessage}
                  </p>
                </div>

                {/* Voucher / Comprovante elegante */}
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 16,
                  padding: '16px',
                  marginBottom: 20
                }}>
                  {config.itemInfo && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 12, borderBottom: '1px dashed #cbd5e1', marginBottom: 12 }}>
                      {config.itemInfo.image && (
                        <img src={config.itemInfo.image} alt={config.itemInfo.title} style={{ width: 64, height: 40, objectFit: 'contain' }} />
                      )}
                      <div>
                        <span style={{ fontSize: 10, fontWeight: 800, color: '#0000ff', textTransform: 'uppercase' }}>
                          {config.itemInfo.badge || 'LM Frota'}
                        </span>
                        <div style={{ fontSize: 14, fontWeight: 800, color: '#0f172a' }}>
                          {config.itemInfo.title}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Linhas de detalhes do comprovante */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                      <span style={{ color: '#64748b' }}>Protocolo:</span>
                      <span style={{ fontWeight: 800, color: '#0f172a', fontFamily: 'monospace' }}>{protocol}</span>
                    </div>
                    {config.itemInfo?.subtitle && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                        <span style={{ color: '#64748b' }}>Valor da Locação:</span>
                        <span style={{ fontWeight: 800, color: '#0000ff' }}>{config.itemInfo.subtitle}</span>
                      </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                      <span style={{ color: '#64748b' }}>Status da Reserva:</span>
                      <span style={{ fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />
                        Aprovado
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                      <span style={{ color: '#64748b' }}>Previsão de Retirada:</span>
                      <span style={{ fontWeight: 700, color: '#0f172a' }}>Em até 24h</span>
                    </div>
                  </div>
                </div>

                {/* Botão de Conclusão com design premium */}
                <button
                  type="button"
                  onClick={closeProcessing}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #0000ff 0%, #1d4ed8 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: 14,
                    padding: '14px',
                    fontSize: 15,
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(0, 0, 255, 0.3)',
                    transition: 'transform 0.15s ease'
                  }}
                  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Concluir
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </ProcessingContext.Provider>
  );
}

export function useProcessing() {
  const context = useContext(ProcessingContext);
  if (!context) {
    throw new Error('useProcessing deve ser utilizado dentro de um ProcessingProvider');
  }
  return context;
}
