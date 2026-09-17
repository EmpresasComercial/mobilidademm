import React, { useState, useEffect } from 'react';
import { 
  Check, 
  X, 
  MapPin, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Phone,
  Shield,
  HelpCircle,
  FileText
} from 'lucide-react';

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

const CONTROLE_ITEMS = [
  {
    num: '01',
    title: 'Vários modelos disponíveis',
    desc: 'Planos com diferentes modelos e cobertura que se adaptam ao seu uso.'
  },
  {
    num: '02',
    title: 'Planos acessíveis',
    desc: 'Ótimo custo-benefício, ideais para quem quer começar ou ampliar a renda.'
  },
  {
    num: '03',
    title: 'Diversas unidades no Brasil',
    desc: 'Atendimento em várias cidades, com retirada e devolução no mesmo local e suporte rápido.'
  },
  {
    num: '04',
    title: 'Controle financeiro',
    desc: 'Pagamentos fixos e sem surpresas. Planeje seus ganhos mensais com total previsibilidade.'
  },
  {
    num: '05',
    title: 'Carro sempre disponível',
    desc: 'Veículos novos e revisados garantem que seu trabalho não pare e você dirija com segurança.'
  },
  {
    num: '06',
    title: 'Agilidade',
    desc: 'Contratação simples, entrega rápida e atendimento eficiente para você começar a rodar logo.'
  }
];

const BENEFICIOS_ITEMS = [
  {
    icon: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2025/11/carro.png',
    title: 'Zero preocupação com custos fixos burocráticos',
    desc: 'A LM cobre IPVA, proteção, manutenção preventiva e documentação. Você foca apenas no seu trabalho.'
  },
  {
    icon: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2025/11/money-plant.png',
    title: 'Baixo risco e investimento inicial',
    desc: 'Sem entrada, sem depreciação e sem dívida. Você começa a rodar com custo reduzido.'
  },
  {
    icon: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2025/11/lava-jato-1.png',
    title: 'Flexibilidade',
    desc: 'Escolha o modelo, o plano e a duração do contrato. Ajuste tudo conforme sua demanda.'
  },
  {
    icon: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2025/11/seguro-de-automovel-1.png',
    title: 'Sem burocracia',
    desc: 'Processo rápido e transparente. Aprovou a documentação? O carro já fica pronto para entrega.'
  },
  {
    icon: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2025/05/icon-faq-1.png',
    title: 'Assistência 24 horas',
    desc: 'Suporte em todo o Brasil, a qualquer hora. A LM garante segurança durante o seu trajeto.'
  }
];

const FAQS_ITEMS = [
  {
    q: 'Como funciona a contratação de aluguel de carro para motorista de aplicativo?',
    a: 'O processo é simples e rápido. Você escolhe o carro e o plano, envia a documentação necessária e finaliza o contrato. Depois disso, basta retirar o veículo na unidade LM mais próxima e começar a rodar. Todos os carros já vêm revisados, licenciados e prontos para o uso profissional.'
  },
  {
    q: 'Quais os custos e considerações do aluguel de carro para motorista de aplicativo?',
    a: 'A mensalidade cobre praticamente tudo: manutenção preventiva, proteção, IPVA e documentação. O motorista só precisa arcar com combustível, multas e eventuais danos fora da cobertura. É um formato que reduz riscos e oferece controle total sobre seus ganhos.'
  },
  {
    q: 'O aluguel inclui manutenção preventiva, IPVA e proteção?',
    a: 'Sim. Todos os veículos LM contam com manutenção preventiva, IPVA pago, proteção e assistência 24 horas. Isso garante segurança, conforto e previsibilidade para quem depende do carro para trabalhar.'
  }
];

const LOJAS_DATA = [
  {
    cidade: 'Contagem',
    endereco: 'R. Zezé Camargos, 280 - Cidade Industrial, Contagem - MG, 32210-080',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2025/03/Contagem.jpg'
  },
  {
    cidade: 'São Bernardo',
    endereco: 'Rua Frei Damião, 805 - Paulicéia São Bernardo do Campo - SP 09695-100',
    imagem: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2025/03/saobernardo.jpg'
  }
];

export default function Loja() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCar, setSelectedCar] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ nome: '', telefone: '', cidade: '' });
  const [openFaq, setOpenFaq] = useState(null);
  const [activeModalInfo, setActiveModalInfo] = useState(null);

  // Auto carousel slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleOpenRental = (car) => {
    setSelectedCar(car);
    setFormSent(false);
    setFormData({ nome: '', telefone: '', cidade: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div style={{ background: '#fff', color: '#0f0b33', fontFamily: "'DM Sans', sans-serif", paddingBottom: 80 }}>
      
      {/* ===== HEADER OFICIAL LM VEÍCULOS APPS ===== */}
      <header style={{ 
        background: '#e0a203', 
        padding: '16px 20px 10px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Logo pill */}
        <div style={{
          background: '#ffffff',
          borderRadius: 30,
          padding: '7px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <img 
            src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2022/08/LM_apps.svg" 
            alt="LM Veículos para Apps" 
            style={{ height: 26, width: 'auto' }} 
          />
          <span style={{ color: '#e0a203', fontWeight: 900, fontSize: 13 }}>▶</span>
        </div>

        {/* Menu pill */}
        <button 
          onClick={() => setActiveModalInfo({ title: 'Menu LM Apps', content: 'Você já está navegando na página oficial da LM Veículos para Apps.' })}
          style={{
            background: '#ffffff',
            border: 'none',
            borderRadius: 30,
            padding: '8px 22px',
            fontSize: 14,
            fontWeight: 700,
            color: '#0f0b33',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          Menu
        </button>
      </header>

      {/* ===== CARROSSEL HERO OFICIAL ===== */}
      <section style={{ 
        position: 'relative', 
        background: '#e0a203', 
        overflow: 'hidden',
        paddingBottom: 24 
      }}>
        {/* Scallop arc cutout */}
        <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, fill: '#e0a203' }}>
          <svg viewBox="0 0 500 35" preserveAspectRatio="none" style={{ height: 18, width: '100%' }}>
            <path d="M0.00,0.00 C150.00,30.00 350.00,30.00 500.00,0.00 L500.00,0.00 L0.00,0.00 Z" style={{ fill: '#e0a203' }}></path>
          </svg>
        </div>

        {/* SLIDE 1: O JEITO ECONÔMICO PARA VOCÊ RODAR */}
        {currentSlide === 0 && (
          <div style={{ 
            animation: 'fadeIn 0.5s ease-in-out', 
            padding: '10px 16px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            {/* Imagem do homem apontando para o celular e os 3 carros */}
            <div style={{ width: '100%', maxWidth: 440, position: 'relative', marginBottom: 12 }}>
              <img 
                src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2026/04/apps1.png" 
                alt="LM Veículos Apps" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Imagem do texto gráfico "O jeito econômico para você RODAR" */}
            <div style={{ maxWidth: 320, margin: '0 auto 16px' }}>
              <img 
                src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/themes/lmmobilidade-iwwa/img/slide/abril/rodar.png" 
                alt="O jeito econômico para você Rodar"
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            {/* 4 Ícones oficiais da LM */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: 12,
              width: '100%',
              maxWidth: 420
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', textAlign: 'left' }}>
                <img src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2026/04/01.png" alt="" style={{ width: 28, height: 'auto' }} />
                <span>Sem despesa <br/>com seguro</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', textAlign: 'left' }}>
                <img src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2026/04/02.png" alt="" style={{ width: 28, height: 'auto' }} />
                <span>IPVA <br/>PAGO</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', textAlign: 'left' }}>
                <img src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2026/04/03.png" alt="" style={{ width: 28, height: 'auto' }} />
                <span>MANUTENÇÃO <br/>PREVENTIVA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', textAlign: 'left' }}>
                <img src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2026/04/04.png" alt="" style={{ width: 28, height: 'auto' }} />
                <span>CARRO <br/>RESERVA</span>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2: CARROS DE ENTRADA COM O MENOR VALOR SEMANAL */}
        {currentSlide === 1 && (
          <div style={{ 
            animation: 'fadeIn 0.5s ease-in-out', 
            padding: '24px 20px 20px',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.25, maxWidth: 360, margin: '0 auto 16px' }}>
              Carros de entrada com o menor valor semanal do mercado
            </h2>

            <div style={{ margin: '8px 0 16px' }}>
              <span style={{ fontSize: 14, fontWeight: 600, display: 'block' }}>Planos a partir de</span>
              <div style={{ fontSize: 38, fontWeight: 900, lineHeight: 1 }}>
                <small style={{ fontSize: 22 }}>R$</small> 690 <span style={{ fontSize: 16 }}>,00/semana</span>
              </div>
            </div>

            {/* 4 Ícones oficiais de vantagens */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: 12,
              margin: '12px auto',
              maxWidth: 420
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', textAlign: 'left' }}>
                <img src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2026/04/011.png" alt="" style={{ width: 28, height: 'auto' }} />
                <span>Sem despesa <br/>com seguro</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', textAlign: 'left' }}>
                <img src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2026/04/012.png" alt="" style={{ width: 28, height: 'auto' }} />
                <span>IPVA <br/>pago</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', textAlign: 'left' }}>
                <img src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2026/04/013.png" alt="" style={{ width: 28, height: 'auto' }} />
                <span>Manutenção <br/>preventiva</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', textAlign: 'left' }}>
                <img src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2026/04/014.png" alt="" style={{ width: 28, height: 'auto' }} />
                <span>Carro <br/>reserva</span>
              </div>
            </div>

            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.8)', marginTop: 10, display: 'block' }}>
              *Imagens ilustrativas. Consulte condições na contratação.
            </span>
          </div>
        )}

        {/* Paginação do Carrossel (Dots) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 10 }}>
          <button 
            onClick={() => setCurrentSlide(0)}
            style={{
              width: currentSlide === 0 ? 24 : 10,
              height: 10,
              borderRadius: 5,
              background: currentSlide === 0 ? '#ffffff' : 'rgba(255,255,255,0.45)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
          <button 
            onClick={() => setCurrentSlide(1)}
            style={{
              width: currentSlide === 1 ? 24 : 10,
              height: 10,
              borderRadius: 5,
              background: currentSlide === 1 ? '#ffffff' : 'rgba(255,255,255,0.45)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        </div>
      </section>

      {/* ===== SECTION DIFERENCIAIS ===== */}
      <section style={{ padding: '34px 16px 20px', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(20px, 4vw, 26px)',
          fontWeight: 800,
          color: '#e0a203',
          textAlign: 'center',
          marginBottom: 20
        }}>
          Por que escolher LM Veículos para APPs?
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Item 1: Card Dourado Full */}
          <div style={{
            background: '#e0a203',
            color: '#ffffff',
            borderRadius: 12,
            padding: '20px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            boxShadow: '0 4px 14px rgba(224, 162, 3, 0.25)'
          }}>
            {/* 4 ícones em 2x2 */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 28px)', 
              gap: 6,
              flexShrink: 0
            }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e0a203', fontWeight: 900, fontSize: 13 }}>🚗</div>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e0a203', fontWeight: 900, fontSize: 13 }}>✓</div>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e0a203', fontWeight: 900, fontSize: 13 }}>★</div>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e0a203', fontWeight: 900, fontSize: 13 }}>$</div>
            </div>

            <div>
              <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 6px', color: '#ffffff' }}>
                Condições únicas para motorista de aplicativo
              </h3>
              <p style={{ fontSize: 13, margin: 0, opacity: 0.95, lineHeight: 1.4 }}>
                Diversos planos e modelos para quem quer rodar como motorista de aplicativo.
              </p>
            </div>
          </div>

          {/* Linha 2: 2 cards lado a lado */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {/* Card Melhor Custo Benefício */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #E6EBED',
              borderRadius: 12,
              padding: '18px 14px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{ fontSize: 26, color: '#e0a203', marginBottom: 6 }}>💰</div>
              <h3 style={{ fontSize: 14, fontWeight: 800, color: '#e0a203', margin: '0 0 6px' }}>
                Melhor custo benefício
              </h3>
              <p style={{ fontSize: 12, color: '#475569', margin: 0, lineHeight: 1.35 }}>
                Para você rodar como motorista de aplicativo
              </p>
            </div>

            {/* Card Assistência 24h */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #E6EBED',
              borderRadius: 12,
              padding: '18px 14px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{ fontSize: 26, color: '#e0a203', marginBottom: 6 }}>🛡️</div>
              <h3 style={{ fontSize: 14, fontWeight: 800, color: '#e0a203', margin: '0 0 6px' }}>
                Assistência 24h
              </h3>
              <p style={{ fontSize: 12, color: '#475569', margin: 0, lineHeight: 1.35 }}>
                Tranquilidade o tempo todo pra você rodar sem preocupações.
              </p>
            </div>
          </div>

          {/* Linha 3: Card Branco Full (Assistência Técnica + Autoproteção) */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #E6EBED',
            borderRadius: 12,
            padding: '18px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 16
          }}>
            <img 
              src="https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2022/08/icone-baixa-km.png" 
              alt="Assistência técnica"
              style={{ width: 48, height: 'auto', flexShrink: 0 }} 
            />
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 800, color: '#e0a203', margin: '0 0 4px' }}>
                Assistência técnica + autoproteção
              </h3>
              <p style={{ fontSize: 13, color: '#475569', margin: 0, lineHeight: 1.4 }}>
                Carros novos e com manutenção em dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION CONHEÇA OS VEÍCULOS DISPONÍVEIS ===== */}
      <section id="nossos-veiculos-app" style={{ padding: '30px 14px 40px', maxWidth: 960, margin: '0 auto' }}>
        
        {/* Links superiores oficiais */}
        <div style={{ 
          textAlign: 'center', 
          fontSize: 12, 
          color: '#475569', 
          marginBottom: 10,
          display: 'flex',
          justifyContent: 'center',
          gap: 16
        }}>
          <span 
            onClick={() => setActiveModalInfo({ title: 'Condições Contratuais', content: 'Contratos flexíveis semanais com IPVA pago, proteção veicular, manutenção preventiva inclusa e assistência 24h em todo o Brasil.' })}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            Veja nossas condições contratuais
          </span>
          <span>•</span>
          <span 
            onClick={() => setActiveModalInfo({ title: 'Tabela de Avarias', content: 'A LM disponibiliza transparência total nas inspeções de entrega e devolução dos veículos.' })}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            Tabela de Avarias
          </span>
        </div>

        {/* Título oficial dourado */}
        <h2 style={{
          fontSize: 'clamp(20px, 4.5vw, 28px)',
          fontWeight: 800,
          color: '#e0a203',
          textAlign: 'center',
          marginBottom: 24
        }}>
          Conheça os veículos disponíveis
        </h2>

        {/* Grid de Veículos: 2 colunas no celular exatamente como no site oficial */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: 14
        }}>
          {VEICULOS_APPS.map((car) => (
            <div 
              key={car.id}
              style={{
                background: '#ffffff',
                border: '1px solid #E6EBED',
                borderRadius: 12,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                position: 'relative'
              }}
            >
              {/* Imagem do carro sem fundo com sombra natural */}
              <div style={{ 
                padding: '14px 10px 4px', 
                minHeight: 110,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={car.imagem} 
                  alt={car.nome}
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: 95, 
                    objectFit: 'contain'
                  }} 
                />
              </div>

              {/* Tag consulte disponibilidade */}
              <div style={{ 
                padding: '0 12px', 
                fontSize: 10, 
                fontWeight: 600, 
                color: '#e0a203',
                marginBottom: 6 
              }}>
                {car.obs}
              </div>

              {/* Corpo de texto do Card */}
              <div style={{ 
                padding: '0 12px 14px', 
                display: 'flex', 
                flexDirection: 'column', 
                flexGrow: 1,
                justifyContent: 'space-between'
              }}>
                <div>
                  {/* Badge de Grupo */}
                  <div style={{
                    background: '#e0a203',
                    color: '#ffffff',
                    borderRadius: 4,
                    padding: '2px 8px',
                    fontSize: 10,
                    fontWeight: 700,
                    display: 'inline-block',
                    marginBottom: 6
                  }}>
                    {car.grupo}
                  </div>

                  {/* Nome do carro */}
                  <div style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: '#0f0b33',
                    lineHeight: 1.25,
                    marginBottom: 8,
                    minHeight: 32
                  }}>
                    {car.nome}
                  </div>

                  {/* Preço */}
                  <div style={{ marginBottom: 10 }}>
                    <span style={{ fontSize: 10, color: '#64748b', display: 'block' }}>A partir de</span>
                    <div style={{ color: '#0f0b33', fontSize: 11, fontWeight: 700 }}>
                      <span style={{ fontSize: 15, fontWeight: 900 }}>R$ {car.preco}</span> / semana
                    </div>
                  </div>
                </div>

                {/* Botão Quero Alugar */}
                <button
                  onClick={() => handleOpenRental(car)}
                  style={{
                    background: '#d98e04',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: 24,
                    padding: '8px 10px',
                    fontSize: 12,
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    cursor: 'pointer',
                    width: '100%',
                    boxShadow: '0 2px 6px rgba(217, 142, 4, 0.3)'
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.771.815 2.796.815 3.18 0 5.767-2.587 5.768-5.766.001-3.181-2.585-5.767-5.768-5.767zm0 10.455c-.947 0-1.637-.253-2.451-.737l-.175-.104-1.579.414.422-1.54-.113-.18c-.534-.849-.816-1.573-.815-2.542.001-2.583 2.103-4.685 4.711-4.685 2.583 0 4.685 2.102 4.686 4.711 0 2.584-2.103 4.683-4.711 4.683z" />
                  </svg>
                  <span>Quero alugar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION NOSSAS LOJAS ===== */}
      <section style={{ background: '#f8fafc', padding: '34px 16px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#e0a203', margin: '0 0 4px' }}>
              Nossas lojas
            </h3>
            <p style={{ fontSize: 13, color: '#64748b', margin: 0 }}>
              Conheça nossos endereços.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {LOJAS_DATA.map((loja, i) => (
              <div 
                key={i}
                style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <img 
                  src={loja.imagem} 
                  alt={loja.cidade} 
                  style={{ width: '100%', height: 160, objectFit: 'cover' }}
                />
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: '#0f0b33', margin: '0 0 6px' }}>
                    {loja.cidade}
                  </h4>
                  <p style={{ fontSize: 12, color: '#64748b', lineHeight: 1.4, margin: '0 0 14px' }}>
                    {loja.endereco}
                  </p>
                  <button
                    onClick={() => setActiveModalInfo({ title: `Unidade ${loja.cidade}`, content: `Endereço completo:\n${loja.endereco}\n\nHorário de atendimento: Segunda a sexta, das 8h às 18h.` })}
                    style={{
                      marginTop: 'auto',
                      background: '#e0a203',
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 800,
                      cursor: 'pointer',
                      alignSelf: 'flex-start'
                    }}
                  >
                    Traçar rota
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION NUMERIC LIST: VOCÊ NO CONTROLE ===== */}
      <section style={{ padding: '40px 16px', maxWidth: 840, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(19px, 4vw, 25px)', fontWeight: 800, color: '#0f0b33', textAlign: 'center', marginBottom: 26 }}>
          Você no controle do aluguel de carro para motorista de aplicativo
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
          {CONTROLE_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid #E6EBED',
                borderRadius: 10,
                padding: '16px',
                display: 'flex',
                gap: 14
              }}
            >
              <div style={{ 
                color: '#e0a203', 
                fontSize: 22, 
                fontWeight: 900, 
                lineHeight: 1 
              }}>
                {item.num}
              </div>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: '#0f0b33', margin: '0 0 4px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 12, color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION BENEFÍCIOS ===== */}
      <section style={{ background: '#f8fafc', padding: '40px 16px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <h2 style={{ fontSize: 'clamp(19px, 4vw, 25px)', fontWeight: 800, color: '#0f0b33', margin: '0 0 8px' }}>
              Quais são os benefícios do aluguel de carro para motorista de aplicativo
            </h2>
            <p style={{ fontSize: 13, color: '#64748b', maxWidth: 600, margin: '0 auto', lineHeight: 1.5 }}>
              Alugar com a LM veículos para Apps é ter liberdade para dirigir e tranquilidade para planejar o futuro. Aqui, você não se preocupa com burocracia, custos fixos ou manutenção, só com o seu ganho.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {BENEFICIOS_ITEMS.map((b, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #E6EBED',
                  borderRadius: 10,
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16
                }}
              >
                <img src={b.icon} alt="" style={{ width: 34, height: 'auto', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 800, color: '#0f0b33', margin: '0 0 4px' }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: 12, color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION FAQ ===== */}
      <section style={{ padding: '40px 16px', maxWidth: 840, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(19px, 4vw, 25px)', fontWeight: 800, color: '#0f0b33', textAlign: 'center', margin: '0 0 8px' }}>
          Aluguel de carro para motorista de aplicativo: dúvidas frequentes
        </h2>
        <p style={{ fontSize: 13, color: '#64748b', textAlign: 'center', maxWidth: 620, margin: '0 auto 24px', lineHeight: 1.5 }}>
          Quem trabalha com aplicativo sabe que tempo é dinheiro. Por isso, reunimos respostas diretas para ajudar você a entender como o aluguel da LM funciona.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQS_ITEMS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                style={{
                  border: '1px solid #E6EBED',
                  borderRadius: 10,
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    background: '#ffffff',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#0f0b33' }}>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} color="#e0a203" /> : <ChevronDown size={18} color="#94a3b8" />}
                </button>
                {isOpen && (
                  <div style={{ padding: '0 16px 16px', fontSize: 13, color: '#475569', lineHeight: 1.5, borderTop: '1px solid #f1f5f9' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== CENTRAL DE ATENDIMENTO BANNER ===== */}
      <section style={{ background: '#f1f1f1', padding: '34px 16px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0f0b33', marginBottom: 12 }}>
            Central de Atendimento LM
          </h3>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: '#ffffff',
            padding: '10px 24px',
            borderRadius: 30,
            border: '1px solid #cbd5e1',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            marginBottom: 14
          }}>
            <span style={{ fontSize: 20 }}>📞</span>
            <span style={{ fontSize: 16, fontWeight: 900, color: '#0f0b33' }}>0800 075 5050</span>
          </div>

          <p style={{ fontSize: 12, color: '#64748b', margin: '0 auto 10px', maxWidth: 500, lineHeight: 1.45 }}>
            Segunda a sexta-feira, das 7h às 18h.<br />
            Atendimento 24h para assistência, furto ou roubo.
          </p>

          <div style={{
            fontSize: 11,
            color: '#94a3b8',
            maxWidth: 580,
            margin: '14px auto 0',
            background: '#ffffff',
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid #e2e8f0'
          }}>
            <strong>Atenção:</strong> Ao receber um boleto, verifique se o domínio do remetente termina em <strong>@lmmobilidade.com.br</strong> e se consta a razão social da LM como beneficiária do documento.
          </div>
        </div>
      </section>

      {/* ===== MODAL IN-APP: RESERVA DO CARRO (QUERO ALUGAR) ===== */}
      {selectedCar && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: 16,
            width: '100%',
            maxWidth: 420,
            maxHeight: '92vh',
            overflowY: 'auto',
            padding: '24px 20px',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <button
              onClick={() => setSelectedCar(null)}
              style={{
                position: 'absolute',
                top: 14,
                right: 14,
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: 30,
                height: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={16} color="#475569" />
            </button>

            {!formSent ? (
              <>
                <div style={{ textAlign: 'center', marginBottom: 14 }}>
                  <span style={{ background: '#e0a203', color: '#fff', fontSize: 11, fontWeight: 800, padding: '2px 10px', borderRadius: 4 }}>
                    {selectedCar.grupo}
                  </span>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: '#0f0b33', margin: '8px 0 4px' }}>
                    {selectedCar.nome}
                  </h3>
                  <div style={{ fontSize: 16, fontWeight: 900, color: '#d98e04' }}>
                    R$ {selectedCar.preco} <span style={{ fontSize: 12, color: '#64748b' }}>/ semana</span>
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: 14 }}>
                  <img 
                    src={selectedCar.imagem} 
                    alt={selectedCar.nome}
                    style={{ maxHeight: 90, maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>

                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 700, color: '#475569', display: 'block', marginBottom: 4 }}>
                      Nome Completo
                    </label>
                    <input 
                      required
                      type="text"
                      placeholder="Ex: Carlos Eduardo"
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        borderRadius: 8,
                        border: '1px solid #cbd5e1',
                        fontSize: 13,
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: 11, fontWeight: 700, color: '#475569', display: 'block', marginBottom: 4 }}>
                      WhatsApp / Celular com DDD
                    </label>
                    <input 
                      required
                      type="tel"
                      placeholder="Ex: (11) 98765-4321"
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        borderRadius: 8,
                        border: '1px solid #cbd5e1',
                        fontSize: 13,
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: 11, fontWeight: 700, color: '#475569', display: 'block', marginBottom: 4 }}>
                      Cidade de Retirada
                    </label>
                    <input 
                      required
                      type="text"
                      placeholder="Ex: São Paulo, Contagem, etc."
                      value={formData.cidade}
                      onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        borderRadius: 8,
                        border: '1px solid #cbd5e1',
                        fontSize: 13,
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#d98e04',
                      color: '#ffffff',
                      border: 'none',
                      padding: '12px',
                      borderRadius: 20,
                      fontSize: 13,
                      fontWeight: 800,
                      cursor: 'pointer',
                      marginTop: 6
                    }}
                  >
                    Confirmar Solicitação de Aluguel
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '16px 6px' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                  <Check size={28} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#0f0b33', marginBottom: 8 }}>
                  Pedido Enviado com Sucesso!
                </h3>
                <p style={{ color: '#475569', fontSize: 13, lineHeight: 1.5, marginBottom: 18 }}>
                  Obrigado, <strong>{formData.nome || 'Motorista'}</strong>! Nossos consultores de atendimento para motoristas entrarão em contato no WhatsApp informado para agendar a retirada do seu <strong>{selectedCar.nome}</strong>.
                </p>
                <button
                  onClick={() => setSelectedCar(null)}
                  style={{
                    background: '#e0a203',
                    color: '#ffffff',
                    border: 'none',
                    padding: '8px 24px',
                    borderRadius: 20,
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  OK, fechar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== MODAL DE INFORMAÇÕES (SEM NAVEGAR PARA FORA) ===== */}
      {activeModalInfo && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: 16,
            width: '100%',
            maxWidth: 380,
            padding: '22px 18px',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <button
              onClick={() => setActiveModalInfo(null)}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={16} color="#475569" />
            </button>

            <h3 style={{ fontSize: 16, fontWeight: 800, color: '#0f0b33', marginBottom: 10 }}>
              {activeModalInfo.title}
            </h3>

            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.5, whiteSpace: 'pre-line', marginBottom: 18 }}>
              {activeModalInfo.content}
            </p>

            <button
              onClick={() => setActiveModalInfo(null)}
              style={{
                width: '100%',
                background: '#e0a203',
                color: '#ffffff',
                border: 'none',
                padding: '10px',
                borderRadius: 10,
                fontSize: 13,
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
