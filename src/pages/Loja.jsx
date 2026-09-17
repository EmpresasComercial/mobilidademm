import React, { useState } from 'react';
import { 
  Car, 
  ShieldCheck, 
  Wrench, 
  FileCheck, 
  Clock, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Phone, 
  Sparkles,
  Send,
  X,
  Search,
  Check
} from 'lucide-react';

const VEICULOS_APPS = [
  {
    id: 'grupo-a',
    grupo: 'Grupo A',
    nome: 'Kwid ou similares',
    preco: '690,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2023/10/kwid-apps-1-330x205.png',
    tipo: 'Econômico',
    categoria: 'economicos',
    obs: 'Ideal para quem busca economia máxima de combustível na cidade.',
    destaques: ['Motor 1.0 Flex', 'Ar-condicionado', 'Direção Elétrica', 'Super Econômico']
  },
  {
    id: 'grupo-b',
    grupo: 'Grupo B',
    nome: 'HB20 Sense, Gol ou similares',
    preco: '710,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2024/06/grupo-B-330x205.jpg',
    tipo: 'Hatch Compacto',
    categoria: 'economicos',
    obs: 'Conforto e confiabilidade mecânica consagrada no dia a dia.',
    destaques: ['Motor 1.0 Flex', 'Conectividade', 'Vidros Elétricos', 'Airbags']
  },
  {
    id: 'grupo-b-plus',
    grupo: 'Grupo B Plus',
    nome: 'Argo Drive 1.0 ou similares',
    preco: '740,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2024/08/fiat-argo-drive-1.0-330x205.png',
    tipo: 'Hatch Moderno',
    categoria: 'economicos',
    obs: 'Mais espaço interno e central multimídia moderna para seus passageiros.',
    destaques: ['Design Moderno', 'Espaço Amplo', 'Direção Elétrica', 'Econômico']
  },
  {
    id: 'grupo-f-polo',
    grupo: 'Grupo F',
    nome: 'Polo Track ou similares',
    preco: '772,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2024/03/polo-track-330x205.png',
    tipo: 'Hatch Premium',
    categoria: 'economicos',
    obs: 'Robustez e segurança alemã para rodar com tranquilidade absoluta.',
    destaques: ['Controle de Estabilidade', 'Motor MPI', 'Excelente Desempenho', 'Conforto Superior']
  },
  {
    id: 'grupo-es',
    grupo: 'Grupo ES',
    nome: 'Cronos Drive, HB20S, Onix Sedan ou similares',
    preco: '790,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2024/06/Cronos-1.0-Drive-HB20S-Onix-Sedan-1.0-330x205.jpg',
    tipo: 'Sedan Espaçoso',
    categoria: 'sedans',
    obs: 'Porta-malas gigante para aceitar viagens ao aeroporto e corridas premium.',
    destaques: ['Porta-malas > 500L', 'Ar-condicionado Digital', 'Conforto Traseiro', 'Aceita Confort']
  },
  {
    id: 'grupo-f-auto',
    grupo: 'Grupo F Automático',
    nome: 'HB20 T-GDI Sense AT ou similares',
    preco: '810,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2024/03/hb20-tgdi-sense-apps-330x205.png',
    tipo: 'Turbo Automático',
    categoria: 'automaticos',
    obs: 'Câmbio automático e motor turbo para dirigir o dia todo sem cansaço.',
    destaques: ['Câmbio Automático', 'Motor Turbo T-GDI', 'Menos Cansaço', 'Piloto Automático']
  },
  {
    id: 'grupo-s',
    grupo: 'Grupo S',
    nome: 'T-Cross, Nivus, Kicks, Tracker ou similares',
    preco: '1.328,00',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2023/10/suv-apps-1-330x205.png',
    tipo: 'SUV Premium',
    categoria: 'suvs',
    obs: 'Categoria SUV para atender Uber Black/Comfort e passageiros de alto padrão.',
    destaques: ['SUV Completo', 'Posição Elevada', 'Máximo Status', 'Corridas de Alto Valor']
  }
];

const DIFERENCIAIS = [
  {
    icon: <Car size={26} color="#e0a203" />,
    title: 'Condições únicas para motorista de app',
    text: 'Diversos planos e modelos sob medida para quem roda profissionalmente.'
  },
  {
    icon: <Sparkles size={26} color="#e0a203" />,
    title: 'Melhor custo-benefício',
    text: 'Preços justos por semana para maximizar o seu lucro líquido no mês.'
  },
  {
    icon: <Clock size={26} color="#e0a203" />,
    title: 'Assistência 24 horas',
    text: 'Tranquilidade a qualquer hora em todo o território nacional.'
  },
  {
    icon: <Wrench size={26} color="#e0a203" />,
    title: 'Assistência técnica + autoproteção',
    text: 'Carros novos, revisões preventivas em dia e cobertura inclusa.'
  },
  {
    icon: <CheckCircle2 size={26} color="#e0a203" />,
    title: 'Zero burocracia',
    text: 'Aprovação ágil para você pegar o carro e começar a lucrar rápido.'
  }
];

const CONTROLE_POINTS = [
  { num: '01', title: 'Vários modelos disponíveis', desc: 'Planos com diferentes modelos e coberturas que se adaptam perfeitamente ao seu ritmo.' },
  { num: '02', title: 'Planos acessíveis', desc: 'Ótimo custo-benefício semanal, ideal para quem quer começar ou ampliar sua renda.' },
  { num: '03', title: 'Diversas unidades no Brasil', desc: 'Atendimento nas principais regiões, com retirada, devolução e suporte rápido.' },
  { num: '04', title: 'Controle financeiro', desc: 'Pagamentos fixos e sem surpresas. Planeje seus ganhos com total previsibilidade.' },
  { num: '05', title: 'Carro sempre disponível', desc: 'Veículos novos e revisados garantem que seu trabalho não pare nunca.' },
  { num: '06', title: 'Agilidade total', desc: 'Contratação simples, entrega rápida e atendimento eficiente.' }
];

const BENEFICIOS = [
  {
    icon: <ShieldCheck size={28} color="#0000ff" />,
    title: 'Zero custo fixo burocrático',
    desc: 'A LM cobre IPVA, proteção, manutenção preventiva e documentação. Você foca apenas em dirigir e faturar.'
  },
  {
    icon: <Sparkles size={28} color="#0000ff" />,
    title: 'Baixo risco e investimento inicial',
    desc: 'Sem entrada pesada, sem depreciação de veículo próprio e sem dívida bancária.'
  },
  {
    icon: <Car size={28} color="#0000ff" />,
    title: 'Flexibilidade de plano',
    desc: 'Escolha o modelo, o plano e a duração do contrato de acordo com a sua meta.'
  },
  {
    icon: <FileCheck size={28} color="#0000ff" />,
    title: 'Sem burocracia',
    desc: 'Processo rápido e transparente. Aprovou a documentação? Carro liberado para retirada.'
  },
  {
    icon: <Clock size={28} color="#0000ff" />,
    title: 'Assistência 24 horas',
    desc: 'Suporte em todo o Brasil a qualquer hora do dia ou da noite para você nunca ficar na mão.'
  }
];

const FAQS = [
  {
    q: 'Como funciona a contratação de aluguel de carro para motorista de aplicativo?',
    a: 'O processo é simples e rápido. Você escolhe o carro e o plano, envia a documentação necessária (CNH com EAR e comprovante de residência) e finaliza o contrato. Depois disso, basta retirar o veículo na unidade LM mais próxima e começar a rodar. Todos os carros já vêm revisados, licenciados e prontos para o uso profissional.'
  },
  {
    q: 'Quais os custos e considerações do aluguel de carro para motorista de aplicativo?',
    a: 'A mensalidade cobre praticamente tudo: manutenção preventiva, proteção, IPVA e documentação. O motorista só precisa arcar com combustível, pedágios e eventuais infrações de trânsito. É um formato que reduz riscos e oferece previsibilidade sobre seus lucros.'
  },
  {
    q: 'O aluguel inclui manutenção preventiva, IPVA e proteção?',
    a: 'Sim! Todos os veículos LM contam com manutenção preventiva, IPVA pago, proteção veicular e assistência 24 horas. Isso garante segurança, tranquilidade e economia para você focar apenas no seu rendimento.'
  }
];

const LOJAS = [
  {
    nome: 'Unidade Contagem - MG',
    endereco: 'R. Zezé Camargos, 280 - Cidade Industrial, Contagem - MG, 32210-080',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2025/03/Contagem.jpg',
    horario: 'Seg a Sex: 08h às 18h'
  },
  {
    nome: 'Unidade São Bernardo do Campo - SP',
    endereco: 'Rua Frei Damião, 805 - Paulicéia, São Bernardo do Campo - SP, 09695-100',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2025/03/saobernardo.jpg',
    horario: 'Seg a Sex: 08h às 18h'
  }
];

export default function Loja() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ nome: '', telefone: '', cidade: '' });
  const [selectedLojaModal, setSelectedLojaModal] = useState(null);

  const filteredCars = VEICULOS_APPS.filter(car => {
    const matchesCat = activeCategory === 'todos' || car.categoria === activeCategory;
    const matchesSearch = car.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          car.grupo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenRentalModal = (car) => {
    setSelectedCar(car);
    setFormSubmitted(false);
    setFormData({ nome: '', telefone: '', cidade: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '90px' }}>
      
      {/* ===== HERO SLIDE SECTION ===== */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0a0e2a 0%, #171c42 100%)', 
        color: '#fff', 
        padding: '36px 16px 44px', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 240,
          height: 240,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224, 162, 3, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: 980, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#e0a203', color: '#000', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 800, textTransform: 'uppercase', marginBottom: 16 }}>
            <Sparkles size={14} /> LM Veículos para Apps
          </div>

          <h1 style={{ 
            fontSize: 'clamp(22px, 5vw, 36px)', 
            fontWeight: 800, 
            lineHeight: 1.25, 
            color: '#ffffff', 
            marginBottom: 12 
          }}>
            Carros de entrada com o <span style={{ color: '#e0a203' }}>menor valor semanal</span> do mercado
          </h1>

          <p style={{ color: '#cbd5e1', fontSize: 15, maxWidth: 580, lineHeight: 1.5, marginBottom: 20 }}>
            Alugue com a LM e trabalhe como motorista de aplicativo (Uber, 99 e outros) sem se preocupar com IPVA, seguro ou manutenção!
          </p>

          <div style={{ 
            background: 'rgba(255, 255, 255, 0.08)', 
            border: '1px solid rgba(224, 162, 3, 0.4)', 
            borderRadius: 16, 
            padding: '16px 20px', 
            display: 'inline-block',
            marginBottom: 24
          }}>
            <span style={{ fontSize: 13, color: '#94a3b8', display: 'block' }}>Planos a partir de</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontSize: 16, color: '#e0a203', fontWeight: 700 }}>R$</span>
              <span style={{ fontSize: 34, fontWeight: 900, color: '#ffffff' }}>690</span>
              <span style={{ fontSize: 14, color: '#e0a203', fontWeight: 700 }}>,00 / semana</span>
            </div>
          </div>

          {/* 3 Pill features */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
            gap: 10,
            marginBottom: 24 
          }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <ShieldCheck size={20} color="#e0a203" />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#f1f5f9' }}>Sem despesa com seguro</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <FileCheck size={20} color="#e0a203" />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#f1f5f9' }}>IPVA 100% Pago</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Wrench size={20} color="#e0a203" />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#f1f5f9' }}>Manutenção preventiva</span>
            </div>
          </div>

          <a 
            href="#catalogo-veiculos" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: 8, 
              background: '#e0a203', 
              color: '#000', 
              fontWeight: 800, 
              padding: '12px 24px', 
              borderRadius: 30, 
              textDecoration: 'none',
              fontSize: 15,
              boxShadow: '0 6px 20px rgba(224, 162, 3, 0.35)',
              transition: 'transform 0.2s ease'
            }}
          >
            Ver ofertas e veículos disponíveis
          </a>
        </div>
      </section>

      {/* ===== DIFFERENTIALS (POR QUE ESCOLHER LM) ===== */}
      <section style={{ padding: '36px 16px', maxWidth: 980, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <span style={{ color: '#e0a203', fontWeight: 800, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Diferenciais exclusivos</span>
          <h2 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 800, color: '#0f172a', marginTop: 4 }}>
            Por que escolher a LM Veículos para APPs?
          </h2>
          <p style={{ color: '#64748b', fontSize: 14, marginTop: 6 }}>
            Mais lucro no seu bolso e tranquilidade enquanto você roda
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: 14 
        }}>
          {DIFERENCIAIS.map((item, idx) => (
            <div 
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 14,
                padding: '20px 16px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ 
                background: '#fef3c7', 
                padding: 10, 
                borderRadius: 12, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0 
              }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.45, margin: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CATALOGO DE VEICULOS ===== */}
      <section id="catalogo-veiculos" style={{ padding: '36px 16px', maxWidth: 980, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <span style={{ color: '#0000ff', fontWeight: 800, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Nossa Frota</span>
          <h2 style={{ fontSize: 'clamp(20px, 4vw, 30px)', fontWeight: 800, color: '#0f172a', marginTop: 4 }}>
            Nossos Veículos para Motoristas de App
          </h2>
          <p style={{ color: '#64748b', fontSize: 14, marginTop: 4 }}>
            Carros 100% revisados, higienizados e homologados para Uber e 99
          </p>
        </div>

        {/* Search & Category Filter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          {/* Search bar */}
          <div style={{ position: 'relative' }}>
            <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text"
              placeholder="Buscar por modelo ou grupo (ex: Kwid, HB20, Sedan...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                borderRadius: 24,
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                fontSize: 14,
                outline: 'none',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
              }}
            />
          </div>

          {/* Categories */}
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
            {[
              { id: 'todos', label: 'Todos os Veículos' },
              { id: 'economicos', label: 'Econômicos' },
              { id: 'sedans', label: 'Sedans (Viagens/Porta-malas)' },
              { id: 'automaticos', label: 'Automáticos' },
              { id: 'suvs', label: 'SUVs (Alto Padrão)' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  background: activeCategory === cat.id ? '#0000ff' : '#ffffff',
                  color: activeCategory === cat.id ? '#ffffff' : '#334155',
                  border: activeCategory === cat.id ? '1px solid #0000ff' : '1px solid #cbd5e1',
                  borderRadius: 20,
                  padding: '8px 16px',
                  fontSize: 13,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 20 
        }}>
          {filteredCars.map(car => (
            <div 
              key={car.id}
              style={{
                background: '#ffffff',
                borderRadius: 18,
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease'
              }}
            >
              {/* Image box */}
              <div style={{ 
                background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)', 
                padding: '20px 16px 10px',
                textAlign: 'center',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  background: '#0000ff',
                  color: '#ffffff',
                  padding: '3px 10px',
                  borderRadius: 12,
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                  {car.grupo}
                </span>

                <span style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  background: 'rgba(0,0,0,0.6)',
                  color: '#ffffff',
                  padding: '3px 8px',
                  borderRadius: 10,
                  fontSize: 10,
                  fontWeight: 600
                }}>
                  *consulte disp.
                </span>

                <img 
                  src={car.imagem} 
                  alt={car.nome}
                  style={{ 
                    maxHeight: 145, 
                    maxWidth: '100%', 
                    objectFit: 'contain',
                    marginTop: 10,
                    filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))' 
                  }} 
                />
              </div>

              {/* Card Body */}
              <div style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#e0a203', textTransform: 'uppercase' }}>
                  {car.tipo}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', margin: '4px 0 10px' }}>
                  {car.nome}
                </h3>
                <p style={{ fontSize: 12, color: '#64748b', margin: '0 0 12px', lineHeight: 1.4 }}>
                  {car.obs}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {car.destaques.map((d, i) => (
                    <span 
                      key={i}
                      style={{ 
                        background: '#f1f5f9', 
                        color: '#475569', 
                        fontSize: 11, 
                        fontWeight: 600, 
                        padding: '3px 8px', 
                        borderRadius: 6 
                      }}
                    >
                      ✓ {d}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div style={{ marginTop: 'auto', borderTop: '1px solid #f1f5f9', paddingTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: 11, color: '#64748b', display: 'block' }}>A partir de</span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#0000ff' }}>R$</span>
                      <span style={{ fontSize: 20, fontWeight: 900, color: '#0f172a' }}>{car.preco}</span>
                      <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>/sem</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenRentalModal(car)}
                    style={{
                      background: '#20B038',
                      color: '#ffffff',
                      border: 'none',
                      padding: '10px 16px',
                      borderRadius: 22,
                      fontSize: 13,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(32, 176, 56, 0.3)'
                    }}
                  >
                    <span>Quero alugar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 6 NUMERIC POINTS (VOCE NO CONTROLE) ===== */}
      <section style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '40px 16px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <span style={{ color: '#0000ff', fontWeight: 800, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Autonomia e Lucro</span>
            <h2 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 800, color: '#0f172a', marginTop: 4 }}>
              Você no controle do aluguel de carro para motorista de aplicativo
            </h2>
            <p style={{ color: '#64748b', fontSize: 14, marginTop: 4 }}>
              Tudo o que você precisa para maximizar suas corridas e planejar sua rotina
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: 16 
          }}>
            {CONTROLE_POINTS.map((pt, i) => (
              <div 
                key={i}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: 14,
                  padding: '18px 16px',
                  display: 'flex',
                  gap: 14
                }}
              >
                <div style={{ 
                  color: '#e0a203', 
                  fontSize: 24, 
                  fontWeight: 900, 
                  lineHeight: 1, 
                  fontFamily: 'monospace' 
                }}>
                  {pt.num}
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{pt.title}</h3>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.45, margin: 0 }}>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS SECTION ===== */}
      <section style={{ padding: '40px 16px', maxWidth: 980, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <span style={{ color: '#e0a203', fontWeight: 800, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Vantagens Reais</span>
          <h2 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 800, color: '#0f172a', marginTop: 4 }}>
            Quais são os benefícios de alugar com a LM?
          </h2>
          <p style={{ color: '#64748b', fontSize: 14, maxWidth: 640, margin: '8px auto 0', lineHeight: 1.5 }}>
            Aqui você não se preocupa com burocracia, custos fixos de depreciação ou manutenção imprevista. O foco é 100% no seu ganho.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 16 }}>
          {BENEFICIOS.map((b, i) => (
            <div 
              key={i}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 16,
                padding: '22px 18px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ marginBottom: 12 }}>{b.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>{b.title}</h3>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NOSSAS LOJAS ===== */}
      <section style={{ background: '#f1f5f9', padding: '40px 16px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span style={{ color: '#0000ff', fontWeight: 800, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Presença Física</span>
            <h2 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 800, color: '#0f172a', marginTop: 4 }}>
              Nossas Lojas e Pontos de Atendimento
            </h2>
            <p style={{ color: '#64748b', fontSize: 14, marginTop: 4 }}>
              Retirada rápida com agendamento e consultores dedicados para motoristas
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {LOJAS.map((loja, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: 16,
                  overflow: 'hidden',
                  border: '1px solid #cbd5e1',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <img 
                  src={loja.imagem} 
                  alt={loja.nome} 
                  style={{ width: '100%', height: 180, objectFit: 'cover' }}
                />
                <div style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>{loja.nome}</h3>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, color: '#64748b', fontSize: 13, marginBottom: 8 }}>
                    <MapPin size={16} color="#0000ff" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{loja.endereco}</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 16 }}>
                    ⏰ {loja.horario}
                  </div>

                  <button
                    onClick={() => setSelectedLojaModal(loja)}
                    style={{
                      marginTop: 'auto',
                      background: '#0000ff',
                      color: '#ffffff',
                      border: 'none',
                      padding: '10px 14px',
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Ver detalhes do endereço
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section style={{ padding: '40px 16px', maxWidth: 840, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <span style={{ color: '#e0a203', fontWeight: 800, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Tire suas dúvidas</span>
          <h2 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 800, color: '#0f172a', marginTop: 4 }}>
            Dúvidas Frequentes sobre Aluguel para Apps
          </h2>
          <p style={{ color: '#64748b', fontSize: 14, marginTop: 4 }}>
            Respostas diretas e transparentes para motoristas
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 14,
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '16px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} color="#0000ff" /> : <ChevronDown size={20} color="#64748b" />}
                </button>
                {isOpen && (
                  <div style={{ padding: '0 18px 18px', borderTop: '1px solid #f1f5f9', color: '#475569', fontSize: 14, lineHeight: 1.55 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== CENTRAL DE ATENDIMENTO BANNER ===== */}
      <section style={{ maxWidth: 840, margin: '0 auto', padding: '0 16px 20px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: 20,
          padding: '28px 20px',
          color: '#ffffff',
          textAlign: 'center'
        }}>
          <Phone size={32} color="#e0a203" style={{ marginBottom: 12 }} />
          <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Central de Atendimento ao Motorista</h3>
          <p style={{ color: '#cbd5e1', fontSize: 14, maxWidth: 520, margin: '0 auto 16px', lineHeight: 1.5 }}>
            Segunda a sexta-feira, das 7h às 18h. Atendimento 24h para assistência em caso de sinistro, furto ou roubo.
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(224,162,3,0.4)',
            padding: '10px 20px',
            borderRadius: 30,
            fontSize: 16,
            fontWeight: 800,
            color: '#e0a203'
          }}>
            📞 0800 075 5050
          </div>
        </div>
      </section>

      {/* ===== MODAL DE RESERVA / PROPOSTA ===== */}
      {selectedCar && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(5px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: 20,
            width: '100%',
            maxWidth: 440,
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '24px 20px',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.25)'
          }}>
            <button
              onClick={() => setSelectedCar(null)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} color="#475569" />
            </button>

            {!formSubmitted ? (
              <>
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <span style={{ background: '#e0a203', color: '#000', fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 10, textTransform: 'uppercase' }}>
                    {selectedCar.grupo}
                  </span>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', marginTop: 8 }}>
                    {selectedCar.nome}
                  </h3>
                  <div style={{ fontSize: 18, fontWeight: 900, color: '#0000ff' }}>
                    R$ {selectedCar.preco} <span style={{ fontSize: 12, color: '#64748b' }}>/ semana</span>
                  </div>
                </div>

                <img 
                  src={selectedCar.imagem} 
                  alt={selectedCar.nome}
                  style={{ maxHeight: 110, margin: '0 auto 16px', display: 'block', objectFit: 'contain' }}
                />

                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#334155', display: 'block', marginBottom: 4 }}>
                      Seu Nome Completo
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: João da Silva"
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 10,
                        border: '1px solid #cbd5e1',
                        fontSize: 14,
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#334155', display: 'block', marginBottom: 4 }}>
                      WhatsApp / Celular com DDD
                    </label>
                    <input 
                      required
                      type="tel" 
                      placeholder="Ex: (11) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 10,
                        border: '1px solid #cbd5e1',
                        fontSize: 14,
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#334155', display: 'block', marginBottom: 4 }}>
                      Sua Cidade / Região
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: São Paulo, Contagem, BH..."
                      value={formData.cidade}
                      onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 10,
                        border: '1px solid #cbd5e1',
                        fontSize: 14,
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ background: '#f8fafc', padding: 10, borderRadius: 8, fontSize: 11, color: '#64748b' }}>
                    🔒 Seus dados serão utilizados apenas por nossos consultores para envio da proposta oficial sem compromisso.
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#20B038',
                      color: '#ffffff',
                      border: 'none',
                      padding: '12px',
                      borderRadius: 12,
                      fontSize: 14,
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      cursor: 'pointer',
                      marginTop: 6
                    }}
                  >
                    <Send size={16} /> Enviar Pedido de Reserva
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 8px' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>
                  Solicitação Recebida com Sucesso!
                </h3>
                <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.5, marginBottom: 20 }}>
                  Olá <strong>{formData.nome || 'Motorista'}</strong>, recebemos seu interesse no <strong>{selectedCar.nome}</strong>. Nosso time de atendimento da LM entrará em contato pelo número informado para formalizar sua reserva!
                </p>
                <button
                  onClick={() => setSelectedCar(null)}
                  style={{
                    background: '#0000ff',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px 24px',
                    borderRadius: 20,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Concluir
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== MODAL DETALHES DE LOJA ===== */}
      {selectedLojaModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(5px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: 20,
            width: '100%',
            maxWidth: 420,
            padding: '24px 20px',
            position: 'relative'
          }}>
            <button
              onClick={() => setSelectedLojaModal(null)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} color="#475569" />
            </button>

            <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>
              {selectedLojaModal.nome}
            </h3>

            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
              <MapPin size={20} color="#0000ff" style={{ flexShrink: 0, marginTop: 3 }} />
              <p style={{ margin: 0, fontSize: 14, color: '#334155', lineHeight: 1.5 }}>
                {selectedLojaModal.endereco}
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: 12, borderRadius: 10, fontSize: 13, color: '#475569', marginBottom: 18 }}>
              ⏰ Horário de funcionamento: {selectedLojaModal.horario}
            </div>

            <button
              onClick={() => setSelectedLojaModal(null)}
              style={{
                width: '100%',
                background: '#0000ff',
                color: '#ffffff',
                border: 'none',
                padding: '12px',
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
