import React, { createContext, useContext, useState, useRef } from 'react';
import { Search, ShieldCheck, CheckCircle2, Loader2, X, Car, ArrowRight } from 'lucide-react';

const ProcessingContext = createContext({
  startProcessing: () => {},
  closeProcessing: () => {},
  isProcessing: false,
});

export function ProcessingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState(1); // 1: Consulta, 2: Validação, 3: Processamento, 4: Concluído
  const [config, setConfig] = useState({
    title: 'Processamento de Solicitação',
    itemInfo: null, // { title, subtitle, image, badge }
    steps: [
      {
        id: 1,
        title: '1. Consulta de Disponibilidade',
        activeText: 'Consultando disponibilidade nos sistemas...',
        doneText: 'Consulta realizada com sucesso.',
        icon: Search
      },
      {
        id: 2,
        title: '2. Validação Cadastral & Segurança',
        activeText: 'Validando requisitos, segurança e cadastro...',
        doneText: 'Validação e requisitos aprovados.',
        icon: ShieldCheck
      },
      {
        id: 3,
        title: '3. Processamento da Operação',
        activeText: 'Processando solicitação e gerando registros...',
        doneText: 'Solicitação processada com êxito.',
        icon: Loader2
      }
    ],
    successTitle: 'Operação Confirmada!',
    successMessage: 'Sua solicitação foi processada com sucesso no sistema.',
    onComplete: null,
  });

  const timersRef = useRef([]);

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  const startProcessing = (customConfig = {}) => {
    clearAllTimers();

    const mergedConfig = {
      title: customConfig.title || 'Processamento de Solicitação',
      itemInfo: customConfig.itemInfo || null,
      steps: customConfig.steps || [
        {
          id: 1,
          title: customConfig.step1Title || '1. Consulta de Dados',
          activeText: customConfig.step1Active || 'Consultando bases e disponibilidade no sistema...',
          doneText: customConfig.step1Done || 'Consulta realizada e dados encontrados.',
          icon: Search
        },
        {
          id: 2,
          title: customConfig.step2Title || '2. Validação Cadastral',
          activeText: customConfig.step2Active || 'Validando requisitos e autorização de segurança...',
          doneText: customConfig.step2Done || 'Validação concluída e perfil aprovado.',
          icon: ShieldCheck
        },
        {
          id: 3,
          title: customConfig.step3Title || '3. Processamento da Solicitação',
          activeText: customConfig.step3Active || 'Processando e gravando registros na rede LM...',
          doneText: customConfig.step3Done || 'Operação processada e confirmada.',
          icon: Loader2
        }
      ],
      successTitle: customConfig.successTitle || 'Solicitação Concluída!',
      successMessage: customConfig.successMessage || 'A sua operação foi realizada com sucesso.',
      onComplete: customConfig.onComplete || null,
    };

    setConfig(mergedConfig);
    setStage(1);
    setIsOpen(true);

    const t1 = setTimeout(() => {
      setStage(2);
    }, 1300);

    const t2 = setTimeout(() => {
      setStage(3);
    }, 2800);

    const t3 = setTimeout(() => {
      setStage(4);
      if (typeof mergedConfig.onComplete === 'function') {
        mergedConfig.onComplete();
      }
    }, 4500);

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

      {/* ===== MODAL GLOBAL DE PROCESSAMENTO ===== */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10, 18, 38, 0.78)',
          backdropFilter: 'blur(7px)',
          WebkitBackdropFilter: 'blur(7px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: 20,
            width: '100%',
            maxWidth: 420,
            padding: '24px 20px',
            boxShadow: '0 24px 60px rgba(0, 0, 80, 0.35)',
            border: '1px solid #e2e8f0',
            position: 'relative',
            animation: 'globalModalFade 0.28s ease-out'
          }}>
            {/* Styles inline para o modal */}
            <style>{`
              @keyframes globalSpin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .global-spin-icon {
                animation: globalSpin 1s linear infinite;
              }
              @keyframes globalModalFade {
                from { opacity: 0; transform: scale(0.93) translateY(14px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
              }
              @keyframes globalPulse {
                0% { opacity: 0.5; transform: scale(0.95); }
                50% { opacity: 1; transform: scale(1.1); }
                100% { opacity: 0.5; transform: scale(0.95); }
              }
              .global-pulse {
                animation: globalPulse 1.4s infinite;
              }
            `}</style>

            {/* Header com botão fechar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 800, color: '#0000ff', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block' }}>
                  LM Mobilidade
                </span>
                <h3 style={{ margin: '2px 0 0', fontSize: 17, fontWeight: 800, color: '#0f172a' }}>
                  {config.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeProcessing}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '50%',
                  width: 32,
                  height: 32,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#64748b'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Barra de progresso de carregamento */}
            <div style={{ background: '#f1f5f9', borderRadius: 10, height: 6, width: '100%', overflow: 'hidden', marginBottom: 20 }}>
              <div style={{
                height: '100%',
                width: stage === 1 ? '25%' : stage === 2 ? '60%' : stage === 3 ? '85%' : '100%',
                background: stage === 4 ? '#10b981' : 'linear-gradient(90deg, #0000ff, #3b82f6)',
                borderRadius: 10,
                transition: 'all 0.4s ease'
              }} />
            </div>

            {/* Resumo do Item (quando aplicável) */}
            {config.itemInfo && (
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: 12,
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 20
              }}>
                {config.itemInfo.image && (
                  <img src={config.itemInfo.image} alt={config.itemInfo.title} style={{ width: 64, height: 40, objectFit: 'contain' }} />
                )}
                <div style={{ flex: 1 }}>
                  {config.itemInfo.badge && (
                    <span style={{ fontSize: 11, color: '#0000ff', fontWeight: 700 }}>{config.itemInfo.badge}</span>
                  )}
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#0f172a' }}>
                    {config.itemInfo.title}
                  </div>
                  {config.itemInfo.subtitle && (
                    <div style={{ fontSize: 12, color: '#64748b', fontWeight: 500 }}>
                      {config.itemInfo.subtitle}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 3 Etapas Globais: Consulta, Validação, Processamento */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {config.steps.map((step) => {
                const isCurrent = stage === step.id;
                const isDone = stage > step.id;
                const isPending = stage < step.id;
                const StepIcon = step.icon || Search;

                return (
                  <div
                    key={step.id}
                    style={{
                      padding: '12px 14px',
                      borderRadius: 12,
                      border: isCurrent ? '1.5px solid #93c5fd' : isDone ? '1.5px solid #bbf7d0' : '1px solid #e2e8f0',
                      background: isCurrent ? '#eff6ff' : isDone ? '#f0fdf4' : '#fafafa',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: isCurrent ? '#dbeafe' : isDone ? '#dcfce7' : '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isCurrent ? '#0000ff' : isDone ? '#16a34a' : '#94a3b8',
                      flexShrink: 0
                    }}>
                      {isCurrent ? (
                        <Loader2 size={18} className="global-spin-icon" />
                      ) : isDone ? (
                        <CheckCircle2 size={18} />
                      ) : (
                        <StepIcon size={18} />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: isCurrent ? '#0000ff' : isDone ? '#166534' : '#64748b' }}>
                          {step.title}
                        </span>
                        <span style={{ fontSize: 11, fontWeight: 700, color: isCurrent ? '#0000ff' : isDone ? '#16a34a' : '#94a3b8' }}>
                          {isCurrent ? 'Em andamento...' : isDone ? 'Concluído' : 'Aguardando'}
                        </span>
                      </div>
                      <p style={{ margin: '2px 0 0', fontSize: 11, color: isCurrent || isDone ? '#475569' : '#94a3b8', lineHeight: 1.4 }}>
                        {isDone ? step.doneText : isCurrent ? step.activeText : 'Pendente de processamento...'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ação e Conclusão */}
            {stage === 4 ? (
              <div style={{ animation: 'globalModalFade 0.3s ease' }}>
                <div style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: 12,
                  padding: '14px',
                  marginBottom: 16,
                  textAlign: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: '#16a34a', fontWeight: 800, fontSize: 15 }}>
                    <CheckCircle2 size={20} />
                    <span>{config.successTitle}</span>
                  </div>
                  <p style={{ margin: '6px 0 0', fontSize: 12, color: '#166534', lineHeight: 1.4 }}>
                    {config.successMessage}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeProcessing}
                  style={{
                    width: '100%',
                    background: '#0000ff',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: 12,
                    padding: '13px',
                    fontSize: 14,
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0, 0, 255, 0.3)',
                    transition: 'all 0.2s'
                  }}
                >
                  Concluir
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: '#64748b', fontSize: 12, fontWeight: 500 }}>
                <span className="global-pulse" style={{ width: 8, height: 8, borderRadius: '50%', background: '#0000ff', display: 'inline-block' }} />
                <span>Processando em tempo real...</span>
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
