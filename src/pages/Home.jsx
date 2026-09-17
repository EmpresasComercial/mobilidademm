import React, { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const slides = [
    {
      title: 'LM Mobilidade',
      category: 'LM Mobilidade',
      text: 'Conectando você e seu negócio.',
      buttonText: 'saiba mais',
      color: '#0000ff',
      link: 'https://lmmobilidade.com.br/nossa-historia/',
      bg: 'https://lmmobilidade.com.br/wp-content/uploads/2022/08/lm-mobilidade-scaled.jpg',
      bgPos: '60% center',
    },
    {
      title: 'LM Frotas',
      category: 'LM Frotas',
      text: 'Soluções customizadas para a sua empresa.',
      buttonText: 'conheça as vantagens',
      color: '#5193cf',
      link: 'https://lmmobilidade.com.br/lmfrotas',
      bg: 'https://lmmobilidade.com.br/wp-content/uploads/2022/08/Design-sem-nome-2.jpg',
      bgPos: '10% center',
    },
    {
      title: 'LM AssineCar',
      category: 'LM AssineCar',
      text: 'Carro por assinatura: simples, prático e sem burocracia.',
      buttonText: 'escolha seu plano',
      color: '#9a39d3',
      link: 'https://lmmobilidade.com.br/lmassinecar',
      bg: 'https://lmmobilidade.com.br/wp-content/uploads/2022/08/lm-assinecar.jpg',
      bgPos: 'center center',
    },
    {
      title: 'LM Seminovos',
      category: 'LM Seminovos',
      text: 'Seminovos revisados, com garantia e procedência.',
      buttonText: 'ver estoque',
      color: '#d5246c',
      link: 'https://lmmobilidade.com.br/lmseminovos/',
      bg: 'https://lmmobilidade.com.br/wp-content/uploads/2022/08/lm-seminovos-scaled.jpg',
      bgPos: 'center center',
    },
    {
      title: 'LM Veículos para APPs',
      category: 'LM Veículos para APPs',
      text: 'Acelere seus ganhos com planos especiais para motoristas de app.',
      buttonText: 'alugar agora',
      color: '#e0a203',
      link: 'https://lmmobilidade.com.br/lmveiculosapps/',
      bg: 'https://lmmobilidade.com.br/wp-content/uploads/2022/08/lm-apps-scaled.jpg',
      bgPos: 'center center',
    },
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
      {/* ===== SECTION 1: SLIDE HOME ===== */}
      <section className="section-slide-home">
        <div className="slide">
          <div className="swiper-container" style={{ position:'relative', overflow:'hidden' }}>
            <div className="swiper-wrapper">
              {slides.map((s, index) =>
                index === currentSlide ? (
                  <div
                    key={index}
                    className="swiper-slide"
                    title={s.title}
                    style={{ color: s.color }}
                  >
                    <div
                      className="bg"
                      style={{
                        backgroundImage: `url(${s.bg})`,
                        backgroundPosition: s.bgPos,
                      }}
                    />
                  </div>
                ) : null
              )}
            </div>

            {/* Bullets */}
            <div className="slider-bullets">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`slider-bullet ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>

            {/* Prev/Next arrows */}
            <button
              className="slide-arrow slide-arrow-prev"
              onClick={() => setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1))}
              aria-label="anterior"
            >&#8249;</button>
            <button
              className="slide-arrow slide-arrow-next"
              onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
              aria-label="próximo"
            >&#8250;</button>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: BANNER LIBRAS ===== */}
      <section className="section-image-responsive-model">
        <div className="container">
          <picture className="image">
            <img
              src="https://lmmobilidade.com.br/wp-content/uploads/2026/07/Banner-1370x415_comtexto-768x233.jpg"
              alt="Atendimento em Libras - LM Mobilidade"
              style={{ width:'100%', height:'auto', display:'block', borderRadius:12 }}
            />
          </picture>
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
              />
            </div>
            <span className="button" title="Todas as unidades" data-button="current" style={{ cursor:'default' }}>
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
            <p style={{color:'#000', marginBottom:'12px', fontSize:'14px'}}>Soluções completas em mobilidade corporativa: Reduza custos, ganhe eficiência e mantenha sua operação rodando sem interrupções.</p>
            <p style={{color:'#000', marginBottom:'12px', fontSize:'14px'}}>Gestão completa da frota da sua empresa: Controle total do desempenho da sua operação, com manutenção preventiva e substituição ágil de veículos.</p>
            <p style={{color:'#000', marginBottom:'12px', fontSize:'14px'}}>Veículos disponíveis por assinatura: Tenha um carro novo sempre à mão, sem as preocupações e custos de compra e manutenção.</p>
            <p style={{color:'#000', marginBottom:'12px', fontSize:'14px'}}>Venda de carros seminovos com qualidade garantida: Escolha veículos com procedência comprovada, revisados e prontos para rodar com segurança.</p>
            <p style={{color:'#000', marginBottom:'12px', fontSize:'14px'}}>Veículos para aplicativos de transporte: Mais tempo na pista e menos paradas, com planos econômicos e manutenção inclusa para motoristas de app.</p>
            <p style={{color:'#000', marginBottom:'12px', fontSize:'14px'}}>Suporte em todo o trajeto: Atendimento humano e ágil para garantir tranquilidade em cada quilômetro percorrido.</p>
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
                        <path d={openFaq === idx ? 'M2 10l6-6 6 6' : 'M2 6l6 6 6-6'} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
                <div key={i} style={{ display:'flex', gap:10, alignItems:'center', marginBottom:12 }}>
                  <p style={{ margin:0, fontWeight:700, minWidth:130, color:'#0000ff' }}>{c.label}</p>
                  <p style={{ margin:0 }}>
                    <span style={{ display:'flex', gap:10, alignItems:'center', color:'inherit' }}>
                      <img
                        src="https://lmmobilidade.com.br/wp-content/themes/lmmobilidade-iwwa/img/icons/icon-phone-blue.svg"
                        alt="telefone"
                        style={{ width:20, height:20 }}
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
              <div style={{ display:'flex', alignItems:'center', gap:10, marginTop:16, padding:'12px 0', borderTop:'1px solid #e0e8f4' }}>
                <img
                  src="https://lmmobilidade.com.br/wp-content/uploads/2026/07/Representao-Atendimento-em-Libras-1-32x33.jpg"
                  width="32" height="33"
                  alt="Atendimento em libras"
                  style={{ borderRadius:4 }}
                />
                <span style={{ fontSize:13, color:'#555' }}>Atendimento em Libras disponível por videochamada</span>
              </div>

              {/* Terceiros sinistro */}
              <p style={{ fontSize:12, marginTop:12, color:'#888' }}>
                Atendimento de Terceiros envolvidos em Sinistro: entre em contato por um dos canais acima.
              </p>
            </div>

            {/* Imagem lateral */}
            <div className="box-image" style={{ marginTop:24 }}>
              <img
                src="https://lmmobilidade.com.br/wp-content/uploads/2022/07/slide-01-1-650x543.jpg"
                width="650" height="543"
                className="img-responsive"
                alt="Central de Atendimento"
                style={{ width:'100%', height:'auto', borderRadius:16, boxShadow:'0 8px 24px rgba(0,0,34,0.10)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
