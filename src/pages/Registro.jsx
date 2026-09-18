import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, Lock, Gift, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

export default function Registro() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [codigoConvite, setCodigoConvite] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [termosAceitos, setTermosAceitos] = useState(true);

  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);

  useEffect(() => {
    const codeParam = searchParams.get('br') || searchParams.get('convite');
    if (codeParam) {
      setCodigoConvite(codeParam);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    if (!telefone.trim()) {
      setErro('Por favor, informe seu número de telefone.');
      return;
    }
    if (senha.length < 6) {
      setErro('A palavra-passe deve ter pelo menos 6 caracteres.');
      return;
    }
    if (senha !== confirmarSenha) {
      setErro('As palavras-passe não coincidem.');
      return;
    }
    if (!termosAceitos) {
      setErro('Você deve aceitar os termos de serviço e privacidade.');
      return;
    }

    setSucesso(true);
    setTimeout(() => {
      navigate('/meu');
    }, 2000);
  };

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', paddingBottom: 80, fontFamily: "'Inter', sans-serif" }}>
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
            color: '#333',
            borderRadius: 22,
            marginLeft: 4,
            marginRight: 4,
          }}
          aria-label="Voltar"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#333' }}>
          Criar Conta
        </h1>
      </div>

      <div style={{ maxWidth: 520, margin: '0 auto', padding: '24px 16px', boxSizing: 'border-box' }}>
        {/* LOGO */}
        <div style={{ textAlign: 'center', marginBottom: 20, marginLeft: 4, marginRight: 4 }}>
          <img
            src="https://lmmobilidade.com.br/wp-content/uploads/2025/05/lm-mobilidade-color-SVG-2.svg"
            alt="LM Mobilidade"
            style={{ height: 44, width: 'auto', objectFit: 'contain' }}
          />
        </div>

        {/* TELA DE SUCESSO */}
        {sucesso ? (
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: '32px 20px',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              border: '1px solid #e0e8f4',
              marginLeft: 4,
              marginRight: 4,
            }}
          >
            <div style={{ display: 'inline-flex', padding: 16, borderRadius: '50%', background: '#ecfdf5', marginBottom: 16 }}>
              <CheckCircle2 size={48} color="#10b981" />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#1f2937', margin: '0 0 8px' }}>
              Conta Criada com Sucesso!
            </h3>
            <p style={{ fontSize: 14, color: '#6b7280', margin: '0 0 20px', lineHeight: 1.5 }}>
              A sua conta foi registada com sucesso. Redirecionando para o seu perfil...
            </p>
          </div>
        ) : (
          /* FORMULÁRIO DE REGISTRO (POSIÇÃO LIVRE SEM CARD/CONTAINER) */
          <div style={{ padding: '8px 0' }}>
            {erro && (
              <div
                style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#dc2626',
                  borderRadius: 12,
                  padding: '12px 14px',
                  fontSize: 13,
                  fontWeight: 600,
                  marginBottom: 16,
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                {erro}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* TELEFONE */}
              <div style={{ marginLeft: 4, marginRight: 4 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>
                  Telefone / WhatsApp
                </label>
                <div style={{ position: 'relative', width: '100%' }}>
                  <Phone size={18} color="#9ca3af" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} />
                  <input
                    type="tel"
                    placeholder="Por favor digite o celular"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '12px 14px 12px 42px',
                      fontSize: 15,
                      fontWeight: 600,
                      border: '1px solid #d1d5db',
                      borderRadius: 22,
                      outline: 'none',
                      color: '#111827',
                      background: '#ffffff',
                      margin: 0,
                    }}
                  />
                </div>
              </div>

              {/* SENHA */}
              <div style={{ marginLeft: 4, marginRight: 4 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>
                  Palavra-passe
                </label>
                <div style={{ position: 'relative', width: '100%' }}>
                  <Lock size={18} color="#9ca3af" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} />
                  <input
                    type={mostrarSenha ? 'text' : 'password'}
                    placeholder="Por favor digite a palavra-passe"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '12px 42px 12px 42px',
                      fontSize: 15,
                      fontWeight: 600,
                      border: '1px solid #d1d5db',
                      borderRadius: 22,
                      outline: 'none',
                      color: '#111827',
                      background: '#ffffff',
                      margin: 0,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                    style={{
                      position: 'absolute',
                      right: 14,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#9ca3af',
                      padding: 0,
                      borderRadius: 22,
                      zIndex: 2,
                    }}
                  >
                    {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* CONFIRMAR SENHA */}
              <div style={{ marginLeft: 4, marginRight: 4 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>
                  Confirmar Palavra-passe
                </label>
                <div style={{ position: 'relative', width: '100%' }}>
                  <Lock size={18} color="#9ca3af" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} />
                  <input
                    type={mostrarSenha ? 'text' : 'password'}
                    placeholder="Por favor confirme a palavra-passe"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '12px 14px 12px 42px',
                      fontSize: 15,
                      fontWeight: 600,
                      border: '1px solid #d1d5db',
                      borderRadius: 22,
                      outline: 'none',
                      color: '#111827',
                      background: '#ffffff',
                      margin: 0,
                    }}
                  />
                </div>
              </div>

              {/* CÓDIGO DE CONVITE */}
              <div style={{ marginLeft: 4, marginRight: 4 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 6 }}>
                  Código de Convite <span style={{ fontWeight: 400, color: '#888' }}>(opcional)</span>
                </label>
                <div style={{ position: 'relative', width: '100%' }}>
                  <Gift size={18} color="#0000ff" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} />
                  <input
                    type="text"
                    placeholder="Por favor digite o código de convite"
                    value={codigoConvite}
                    onChange={(e) => setCodigoConvite(e.target.value)}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '12px 14px 12px 42px',
                      fontSize: 15,
                      fontWeight: 700,
                      border: '1px solid #cbd5e1',
                      borderRadius: 22,
                      outline: 'none',
                      color: '#0000ff',
                      background: '#ffffff',
                      fontFamily: 'monospace',
                      letterSpacing: '1px',
                      margin: 0,
                    }}
                  />
                </div>
              </div>

              {/* TERMOS */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 4, marginLeft: 4, marginRight: 4 }}>
                <input
                  type="checkbox"
                  id="termos"
                  checked={termosAceitos}
                  onChange={(e) => setTermosAceitos(e.target.checked)}
                  style={{ marginTop: 3, cursor: 'pointer', borderRadius: 22 }}
                />
                <label htmlFor="termos" style={{ fontSize: 12, color: '#4b5563', lineHeight: 1.4, cursor: 'pointer' }}>
                  Concordo com os <a href="https://lmmobilidade.com.br/aviso-de-privacidade" target="_blank" rel="noreferrer" style={{ color: '#0000ff', fontWeight: 600 }}>Termos de Serviço</a> e <a href="https://lmmobilidade.com.br/aviso-de-privacidade" target="_blank" rel="noreferrer" style={{ color: '#0000ff', fontWeight: 600 }}>Política de Privacidade</a>.
                </label>
              </div>

              {/* BOTÃO REGISTRAR */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#0000ff',
                  color: '#ffffff',
                  border: 'none',
                  padding: '16px',
                  borderRadius: 22,
                  fontSize: 16,
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 0, 255, 0.25)',
                  marginTop: 10,
                  marginLeft: 4,
                  marginRight: 4,
                  transition: 'background 0.2s',
                }}
              >
                Registar Conta
              </button>
            </form>

            <div style={{ textTransform: 'center', textAlign: 'center', marginTop: 20, paddingTop: 16, borderTop: '1px solid #f1f5f9', fontSize: 13, color: '#64748b' }}>
              Já possui uma conta?{' '}
              <Link to="/meu" style={{ color: '#0000ff', fontWeight: 700, textDecoration: 'none' }}>
                Entrar
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
