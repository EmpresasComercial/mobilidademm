import React, { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const slides = [
    {
      bg: 'https://lmmobilidade.com.br/wp-content/uploads/2026/07/Banner-1370x415_comtexto-768x233.jpg',
      bgPos: 'center center',
    },
    {
      bg: 'https://lmmobilidade.com.br/lmveiculosapps/wp-content/uploads/sites/4/2026/04/apps1.png',
      bgPos: 'center center',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const contacts = [
    {
      label: 'LM Frotas:',
      phone: '0800 775 5566',
      waLink: 'https://api.whatsapp.com/send?phone=5508007755566',
      telLink: 'tel:08007755566',
    },
    {
      label: 'LM AssineCar:',
      phone: '0800 075 5050',
      waLink: 'https://api.whatsapp.com/send?phone=5508000755050',
      telLink: 'tel:08000755050',
    },
    {
      label: 'LM Seminovos:',
      phone: '(71) 4020 2221',
      waLink: 'https://api.whatsapp.com/send?phone=557140202221',
      telLink: 'tel:7140202221',
    },
    {
      label: 'LM Veículos Apps:',
      phone: '0800 075 5050',
      waLink: 'https://api.whatsapp.com/send?phone=5508000755050',
      telLink: 'tel:08000755050',
    },
  ];

  return (
    <>
      {/* ===== SECTION 1: SLIDE HOME (NOVO CARROSSEL LIMPO) ===== */}
      <section className="new-simple-carousel" style={{ position: 'relative', width: '100%', overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >
          {slides.map((s, index) => (
            <img
              key={index}
              src={s.bg}
              alt="Slide"
              style={{
                minWidth: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          ))}
        </div>

        {/* Bullets */}
        <div style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: idx === currentSlide ? '24px' : '10px',
                height: '10px',
                borderRadius: '5px',
                backgroundColor: idx === currentSlide ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </section>



      {/* ===== SECTION 3: ONDE ESTAMOS ===== */}
      <section className="section-map-model" id="unidades-mobilidade">
        <div className="container">
          <div className="image image-desktop">
            <img
              src="https://lmmobilidade.com.br/wp-content/uploads/2024/03/mapa-mobilidade-1-1-490x490.png"
              className="img-responsive"
              width="490" height="490"
              alt="Mapa de onde encontrar os escritórios comerciais LM Mobilidade no Brasil"
              style={{ height: '14px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div className="text">
            <h2 data-font-size="h3">Onde Estamos</h2>
            <p>Conheça nossas unidades</p>
            <div className="image image-mobile">
              <img
                src="https://lmmobilidade.com.br/wp-content/uploads/2024/03/mapa-mobilidade-1-1-490x490.png"
                className="img-responsive"
                width="490" height="490"
                alt="Mapa de onde encontrar os escritórios comerciais LM Mobilidade no Brasil"
                style={{ height: '14px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <span className="button" title="Todas as unidades" data-button="current" style={{ cursor: 'default' }}>
              <span>Todas as unidades</span>
            </span>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: VOCÊ NO CONTROLE DA SUA MOBILIDADE (01-06) ===== */}
      <section className="section-numeric-list-model">
        <div className="container">
          <div className="box-title">
            <h2 className="title">Você no controle da sua mobilidade</h2>
            <p className="subtitle">
              Escolha entre carro por assinatura, seminovo revisado ou gestão total da sua frota
            </p>
          </div>
          <div className="text-list-normal">
            {[
              ['01', 'Mobilidade sob medida', 'Planos e veículos personalizados para cada perfil e necessidade.'],
              ['02', 'Veículos sempre disponíveis', 'Carros revisados e prontos para rodar, onde e quando você precisar.'],
              ['03', 'Cobertura nacional', 'Presença em todo o Brasil com entregas rápidas e suporte eficiente.'],
              ['04', 'Autonomia e praticidade', 'Liberdade para dirigir do seu jeito, com soluções flexíveis e sem burocracia.'],
              ['05', 'Controle financeiro e transparência', 'Custos previsíveis e gestão clara para você ou sua empresa economizarem.'],
              ['06', 'Suporte 24 horas', 'Assistência em todo o país, garantindo segurança e tranquilidade na estrada.'],
            ].map(([num, title, desc]) => (
              <div className="text-item-normal" key={num}>
                <h3 className="text-item-title">{num}. {title}</h3>
                <p className="text-item-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: PRINCIPAIS BENEFÍCIOS ===== */}
      <section className="section-numeric-list-model list-icons">
        <div className="container">
          <div className="box-title">
            <h2 className="title">Principais benefícios da LM Mobilidade</h2>
            <p className="subtitle">
              Escolher a LM é se deslocar sem complicações: carros confiáveis, contratos flexíveis, custos sob controle e suporte completo para rodar com eficiência e tranquilidade.
            </p>
          </div>
          <div className="list">
            {/* Simplified benefit paragraphs */}
            <p style={{ color: '#000', marginBottom: '12px', fontSize: '14px' }}>Soluções completas em mobilidade corporativa: Reduza custos, ganhe eficiência e mantenha sua operação rodando sem interrupções.</p>
            <p style={{ color: '#000', marginBottom: '12px', fontSize: '14px' }}>Gestão completa da frota da sua empresa: Controle total do desempenho da sua operação, com manutenção preventiva e substituição ágil de veículos.</p>
            <p style={{ color: '#000', marginBottom: '12px', fontSize: '14px' }}>Veículos disponíveis por assinatura: Tenha um carro novo sempre à mão, sem as preocupações e custos de compra e manutenção.</p>
            <p style={{ color: '#000', marginBottom: '12px', fontSize: '14px' }}>Venda de carros seminovos com qualidade garantida: Escolha veículos com procedência comprovada, revisados e prontos para rodar com segurança.</p>
            <p style={{ color: '#000', marginBottom: '12px', fontSize: '14px' }}>Veículos para aplicativos de transporte: Mais tempo na pista e menos paradas, com planos econômicos e manutenção inclusa para motoristas de app.</p>
            <p style={{ color: '#000', marginBottom: '12px', fontSize: '14px' }}>Suporte em todo o trajeto: Atendimento humano e ágil para garantir tranquilidade em cada quilômetro percorrido.</p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: FAQ ACCORDION ===== */}
      <section className="section-custom-accordion-model" id="faq">
        <div className="container">
          <div className="box-title">
            <h2 className="title">LM Mobilidade: dúvidas frequentes</h2>
          </div>
          <div className="box-text">
            <div className="accordion">
              {[
                {
                  q: 'Como funciona o carro por assinatura?',
                  a: 'No carro por assinatura, você escolhe o modelo desejado, define o prazo do contrato e a franquia de quilometragem. Pagando uma mensalidade fixa, você conta com documentação, seguro, manutenção preventiva, IPVA e assistência 24h inclusos, sem pagar entrada e sem desvalorização do veículo.',
                },
                {
                  q: 'Quais as vantagens da terceirização de frotas da LM?',
                  a: 'A terceirização com a LM Frotas libera capital de giro da sua empresa para focar no seu core business. Oferecemos gestão completa da frota, manutenção preventiva e corretiva, telemetria avançada, carros reserva e atendimento 24h em todo o Brasil.',
                },
                {
                  q: 'Em quais situações o cliente poderá solicitar a assistência 24 horas?',
                  a: 'A assistência 24h pode ser acionada em casos de colisão, pane mecânica ou elétrica, problemas com pneus, falta de combustível, reboque/guincho e serviço de chaveiro em todo o território nacional.',
                },
              ].map((faq, idx) => (
                <div key={idx} className={`item ${openFaq === idx ? 'active' : ''}`}>
                  <div className="question" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    <div className="icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d={openFaq === idx ? 'M2 10l6-6 6 6' : 'M2 6l6 6 6-6'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="response">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: CENTRAL DE ATENDIMENTO ===== */}
      <section className="section-text-with-image" id="contato-mobilidade-home">
        <div className="container">
          <div className="row">
            <div className="box-text">
              <h2 className="title">Central de Atendimento</h2>
              <p>Caso seja necessário, utilize os nossos canais oficiais para atendimento por telefone ou whatsapp.</p>

              {contacts.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                  <p style={{ margin: 0, fontWeight: 700, minWidth: 130, color: '#0000ff' }}>{c.label}</p>
                  <p style={{ margin: 0 }}>
                    <span style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'inherit' }}>
                      <img
                        src="https://lmmobilidade.com.br/wp-content/themes/lmmobilidade-iwwa/img/icons/icon-phone-blue.svg"
                        alt="telefone"
                        style={{ width: 20, height: 20 }}
                      />
                      <img
                        src="https://lmmobilidade.com.br/wp-content/uploads/2025/04/whatsapp.png"
                        width="24" height="24"
                        alt="whatsapp"
                      />
                      <strong>{c.phone}</strong>
                    </span>
                  </p>
                </div>
              ))}

              {/* Libras atendimento */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16, padding: '12px 0', borderTop: '1px solid #e0e8f4' }}>
                <img
                  src="https://lmmobilidade.com.br/wp-content/uploads/2026/07/Representao-Atendimento-em-Libras-1-32x33.jpg"
                  width="32" height="33"
                  alt="Atendimento em libras"
                  style={{ borderRadius: 4 }}
                />
                <span style={{ fontSize: 13, color: '#555' }}>Atendimento em Libras disponível por videochamada</span>
              </div>

              {/* Terceiros sinistro */}
              <p style={{ fontSize: 12, marginTop: 12, color: '#888' }}>
                Atendimento de Terceiros envolvidos em Sinistro: entre em contato por um dos canais acima.
              </p>
            </div>

            {/* Imagem lateral */}
            <div className="box-image" style={{ marginTop: 24 }}>
              <img
                src="https://lmmobilidade.com.br/wp-content/uploads/2022/07/slide-01-1-650x543.jpg"
                width="650" height="543"
                className="img-responsive"
                alt="Central de Atendimento"
                style={{ width: '100%', height: 'auto', borderRadius: 16, boxShadow: '0 8px 24px rgba(0,0,34,0.10)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
