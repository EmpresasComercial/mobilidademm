import React, { useState } from 'react';
import { Copy, CheckCheck, Users, Gift, Star, Link2, Crown, Medal, Award } from 'lucide-react';

export default function Equipe() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const inviteCode = 'LM89420';
  const inviteLink = `https://lmmobilidade.com/registro?br=${inviteCode}`;

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const niveis = [
    {
      icon: <Crown size={20} color="#fef08a" />,
      label: 'Nível 1',
      desc: 'Membros Diretos',
      pct: '12%',
      gradient: 'linear-gradient(135deg, #0d2350, #0000ff)',
      shadow: 'rgba(0,0,255,0.25)'
    },
    {
      icon: <Medal size={20} color="#bfdbfe" />,
      label: 'Nível 2',
      desc: 'Indicações Indiretas',
      pct: '6%',
      gradient: 'linear-gradient(135deg, #1e40af, #3b82f6)',
      shadow: 'rgba(59,130,246,0.2)'
    },
    {
      icon: <Award size={20} color="#e2e8f0" />,
      label: 'Nível 3',
      desc: 'Equipe Expandida',
      pct: '2%',
      gradient: 'linear-gradient(135deg, #334155, #64748b)',
      shadow: 'rgba(71,85,105,0.2)'
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(0,0,255,0.35); }
          70%  { box-shadow: 0 0 0 10px rgba(0,0,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,0,255,0); }
        }
        .eq-card { animation: fadeUp 0.45s ease both; }
        .eq-card:nth-child(2) { animation-delay: 0.1s; }
        .eq-card:nth-child(3) { animation-delay: 0.2s; }
        .eq-copy-btn:active { transform: scale(0.95); }
        .eq-nivel-card { transition: transform 0.2s, box-shadow 0.2s; }
        .eq-nivel-card:active { transform: scale(0.98); }
      `}</style>

      <div style={{ background: 'transparent', minHeight: '100vh', paddingBottom: 90, fontFamily: "'Inter', sans-serif" }}>

        {/* ── HERO ── */}
        <div style={{
          background: 'linear-gradient(135deg, #0d2350 0%, #0000ff 100%)',
          padding: '32px 20px 52px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* decorative circles */}
          <div style={{ position:'absolute', top:-40, right:-40, width:160, height:160, borderRadius:'50%', background:'rgba(255,255,255,0.05)' }} />
          <div style={{ position:'absolute', bottom:-30, left:-30, width:120, height:120, borderRadius:'50%', background:'rgba(255,255,255,0.06)' }} />

          <div style={{ position:'relative', zIndex:1 }}>
            <div style={{ display:'inline-flex', padding:14, borderRadius:'50%', background:'rgba(255,255,255,0.18)', marginBottom:14, animation:'pulse-ring 2s infinite' }}>
              <Users size={30} color="#fff" />
            </div>
            <h1 style={{ margin:'0 0 8px', fontSize:22, fontWeight:900, color:'#fff', letterSpacing:'-0.3px' }}>
              Convide & Ganhe
            </h1>
            <p style={{ margin:0, fontSize:12, color:'rgba(255,255,255,0.82)', lineHeight:1.6, maxWidth:300, marginInline:'auto' }}>
              Partilhe o seu código e ganhe comissões automáticas nas recargas da sua equipe.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 480, margin: '-28px auto 0', padding: '0 6px', boxSizing: 'border-box' }}>

          {/* ── CARD CÓDIGO ── */}
          <div className="eq-card" style={{
            background: '#fff',
            borderRadius: 18,
            padding: '22px 18px',
            boxShadow: '0 8px 32px rgba(0,0,80,0.10)',
            marginBottom: 14,
            border: '1px solid #e8eef8'
          }}>
            <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:16 }}>
              <Star size={15} color="#0000ff" fill="#0000ff" />
              <span style={{ fontSize:11, fontWeight:800, color:'#0000ff', textTransform:'uppercase', letterSpacing:'0.8px' }}>
                Seu Código de Convite
              </span>
            </div>

            {/* CÓDIGO GRANDE */}
            <div style={{
              background: 'linear-gradient(135deg, #f0f4ff, #e8eeff)',
              border: '1.5px solid #c7d4ff',
              borderRadius: 12,
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              marginBottom: 12
            }}>
              <div>
                <span style={{ fontSize: 26, fontWeight: 900, color: '#0000ff', letterSpacing: '3px', fontFamily: 'monospace' }}>
                  {inviteCode}
                </span>
              </div>
              <button
                className="eq-copy-btn"
                type="button"
                onClick={() => copyToClipboard(inviteCode, 'code')}
                style={{
                  background: copiedCode ? '#10b981' : '#0000ff',
                  border: 'none',
                  borderRadius: 22,
                  cursor: 'pointer',
                  padding: '9px 15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 700,
                  boxShadow: copiedCode ? '0 4px 12px rgba(16,185,129,0.3)' : '0 4px 12px rgba(0,0,255,0.3)',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                {copiedCode ? (
                  <>
                    <CheckCheck size={16} />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* LINK */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: '10px 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              marginLeft: 4,
              marginRight: 4,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden', flex: 1 }}>
                <Link2 size={16} color="#0000ff" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: '#475569', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 500 }}>
                  {inviteLink}
                </span>
              </div>
              <button
                className="eq-copy-btn"
                type="button"
                onClick={() => copyToClipboard(inviteLink, 'link')}
                style={{
                  background: copiedLink ? '#10b981' : '#0000ff',
                  border: 'none',
                  borderRadius: 22,
                  cursor: 'pointer',
                  padding: '7px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 700,
                  flexShrink: 0,
                  boxShadow: copiedLink ? '0 2px 8px rgba(16,185,129,0.25)' : '0 2px 8px rgba(0,0,255,0.25)',
                  transition: 'all 0.2s ease',
                  marginLeft: 4,
                  marginRight: 4,
                }}
              >
                {copiedLink ? (
                  <>
                    <CheckCheck size={14} />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ── BENEFÍCIOS ── */}
          <div className="eq-card" style={{
            background: '#fff',
            borderRadius: 18,
            padding: '20px 18px',
            boxShadow: '0 4px 20px rgba(0,0,80,0.07)',
            marginBottom: 14,
            border: '1px solid #e8eef8'
          }}>
            <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:14 }}>
              <Gift size={15} color="#0000ff" />
              <span style={{ fontSize:11, fontWeight:800, color:'#0000ff', textTransform:'uppercase', letterSpacing:'0.8px' }}>
                Benefícios da Equipe
              </span>
            </div>

            <p style={{ margin:'0 0 14px', fontSize:12, color:'#64748b', lineHeight:1.6 }}>
              Receba comissão diária sobre as recargas dos membros em <strong>3 níveis</strong>:
            </p>

            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {niveis.map((n, i) => (
                <div key={i} className="eq-nivel-card" style={{
                  background: n.gradient,
                  borderRadius: 12,
                  padding: '13px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: `0 4px 14px ${n.shadow}`
                }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: 'rgba(255,255,255,0.16)',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {n.icon}
                    </div>
                    <div>
                      <span style={{ fontSize:13, fontWeight:800, color:'#fff', display:'block' }}>{n.label}</span>
                      <span style={{ fontSize:11, color:'rgba(255,255,255,0.75)' }}>{n.desc}</span>
                    </div>
                  </div>
                  <span style={{ fontSize:24, fontWeight:900, color:'#fff' }}>{n.pct}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
