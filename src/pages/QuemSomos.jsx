import React from 'react';

export default function QuemSomos() {
  return (
    <>
      <div className="container" style={{ marginTop: 40, padding: '0 16px' }}>
        <p id="breadcrumbs" style={{ fontSize: 13, color: '#555', marginBottom: 20 }}>
          <span>
            <span><a href="/" style={{ color: '#555', textDecoration: 'none' }}>Início</a></span>
            {' / '}
            <span className="breadcrumb_last" aria-current="page"><strong>Quem Somos</strong></span>
          </span>
        </p>
      </div>

      <section className="section-content-model" style={{ padding: '0 16px 40px' }}>
        <div className="container">
          <div className="box-text">
            <h1 style={{ marginBottom: 25, fontSize: 24, fontWeight: 800, color: '#0000ff' }}>Quem Somos</h1>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: '#020c2b', marginBottom: 16 }}>
              <strong>LM Mobilidade: conectando você e seu negócio</strong>
            </h2>
            <p style={{ fontSize: 14, color: '#444', lineHeight: 1.6, marginBottom: 16 }}>
              Há 50 anos trabalhamos com foco em ser a melhor solução de mobilidade para pessoas e empresas. A LM Frotas nasceu na Bahia através da veia empreendedora do seu fundador, Luiz Mendonça Filho, que transformou a empresa em uma das principais referências no setor, com atuação em todo o Brasil.
            </p>
            <p style={{ fontSize: 14, color: '#444', lineHeight: 1.6, marginBottom: 16 }}>
              Em 2022 demos um grande passo rumo a expansão das nossas operações, através da combinação de negócios com a Volkswagen Financial Services, passamos a ser parte do Grupo Volkswagen. Além da experiência e domínio da operação, tão característica da LM ao longo dos anos, temos a segurança e a solidez de uma das marcas mais valiosas do mundo.
            </p>
            <p style={{ fontSize: 14, color: '#444', lineHeight: 1.6, marginBottom: 16 }}>
              Hoje com a LM Mobilidade oferecemos produtos e serviços totalmente personalizados para atender a necessidade de cada cliente, seja em terceirização de frotas, assinatura de veículos, venda de seminovos, aluguel para motorista de aplicativo ou mesmo assinatura de caminhões.
            </p>
            <p style={{ fontSize: 14, color: '#444', lineHeight: 1.6, marginBottom: 16 }}>
              Com a LM, levamos pessoas e negócios de um lugar para outro com qualidade e eficiência, atributos que são os maiores desafios da mobilidade no Brasil.
            </p>
            <blockquote style={{ borderLeft: '4px solid #0000ff', paddingLeft: 16, margin: '20px 0', fontStyle: 'italic', color: '#555' }}>
              <p style={{ margin: 0 }}>Uma jornada de 50 anos inovando o setor de mobilidade no país.</p>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
