import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Car, Users, UserCircle } from 'lucide-react';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>


      {/* ===== MENU PRODUCTS OVERLAY ===== */}
      <div className={`menu-products ${productsMenuOpen ? 'active' : ''}`}>
        <div className="menu-products-content">
          <div className="topo-products">
            <Link to="/" className="logo" onClick={() => setProductsMenuOpen(false)}>
              <img
                src="https://lmmobilidade.com.br/wp-content/uploads/2025/05/LM-Logo-Bco-lm-mobilidade-BRANCA-154x28.png"
                alt="LM Mobilidade"
                width="154" height="28"
              />
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
                <path d="M8.445 7.75l-7.5 7.5v-15l7.5 7.5z" fill="currentColor"/>
              </svg>
            </Link>
            <div className="menu-icon-close" onClick={() => setProductsMenuOpen(false)}>
              <span>Fechar</span>
            </div>
          </div>
          <nav className="nav-products">
            <span>Navegue entre os nossos produtos</span>
            <div className="list">
              <a className="item" href="https://lmmobilidade.com.br/lmfrotas">
                <img src="https://lmmobilidade.com.br/wp-content/uploads/sites/2/2022/08/LM_frotas.svg" alt="LM Frotas" width="123" height="29" />
              </a>
              <a className="item" href="https://lmmobilidade.com.br/lmassinecar">
                <img src="https://lmmobilidade.com.br/wp-content/uploads/sites/3/2022/08/LM_assine.svg" alt="LM AssineCar" width="149" height="30" />
              </a>
              <a className="item" href="https://lmmobilidade.com.br/lmveiculosapps">
                <img src="https://lmmobilidade.com.br/wp-content/uploads/sites/4/2022/08/LM_apps.svg" alt="LM Apps" width="146" height="31" />
              </a>
              <a className="item" href="https://lmmobilidade.com.br/lmseminovos">
                <img src="https://lmmobilidade.com.br/wp-content/uploads/sites/6/2023/01/Seminovos-cor.png" alt="LM Seminovos" width="150" height="28" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* ===== MENU MOBILE OVERLAY ===== */}
      <div className={`menu-mobile ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="menu-mobile-layer" onClick={() => setMobileMenuOpen(false)} />
        <div className="menu-mobile-content">
          <div className="topo-mobile">
            <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="https://lmmobilidade.com.br/wp-content/uploads/2025/05/LM-Logo-Bco-lm-mobilidade-BRANCA-154x28.png"
                alt="LM Mobilidade"
                width="154" height="28"
              />
              <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
                <path d="M8.445 7.75l-7.5 7.5v-15l7.5 7.5z" fill="currentColor"/>
              </svg>
            </Link>
            <div className="menu-icon-close" onClick={() => setMobileMenuOpen(false)}>
              <span>Fechar</span>
            </div>
          </div>
          <div className="nav">
            <ul>
              <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Início</Link></li>
              <li><Link to="/quem-somos" onClick={() => setMobileMenuOpen(false)}>Quem somos</Link></li>
              <li><a href="https://lmmobilidade.com.br/nossa-historia/" target="_blank" rel="noreferrer">Nossa história</a></li>
              <li><a href="https://lmmobilidade.com.br/onde-estamos/" target="_blank" rel="noreferrer">Onde estamos</a></li>
              <li><a href="https://lmmobilidade.com.br/blog/" target="_blank" rel="noreferrer">Blog</a></li>
              <li><a href="https://portalcliente.lmmobilidade.com.br/" target="_blank" rel="noreferrer">Portal do cliente</a></li>
              <li><Link to="/#contato-mobilidade-home" onClick={() => setMobileMenuOpen(false)}>Contato</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* ===== FOOTER OFICIAL (apenas em rotas de conteúdo) ===== */}
      {!location.pathname.startsWith('/meu') && <footer id="footer">
        <div className="footer-primary">
          <div className="container">
            <div className="left">
              <div className="box-phones">
                <div className="phones-alt" />
                <div className="b">
                  <p style={{ marginBottom:0 }}>Segunda a sexta-feira, das 7h às 18h.</p>
                </div>
                <div className="box-disclaimer">
                  <p>
                    Dentro dos nossos meios de atendimento, você precisará fornecer seus dados pessoais para prosseguir no atendimento.
                    Para entender como tratamos essas informações, leia o{' '}
                    <a href="https://lmmobilidade.com.br/aviso-de-privacidade" target="_blank" rel="noopener noreferrer">
                      Aviso de Privacidade
                    </a>.
                  </p>
                </div>
                <div className="box-aviso">
                  <p className="title-aviso">Atenção:</p>
                  Ao receber um boleto, verifique se o domínio do remetente do{' '}
                  <span style={{ display:'inline-flex' }}>e-mail</span>{' '}
                  termina em @lmmobilidade.com.br e se consta a razão social da LM como beneficiária do documento.
                </div>
              </div>
            </div>
            <div className="right">
              <div className="nav">
                <ul className="menu">
                  <li>
                    <a href="#">Produtos</a>
                    <ul className="sub-menu">
                      <li className="lm-mobilidade"><a href="https://lmmobilidade.com.br">LM Mobilidade</a></li>
                      <li className="lm-frotas"><a href="https://lmmobilidade.com.br/lmfrotas">LM Frotas</a></li>
                      <li className="lm-assinecar"><a href="https://lmmobilidade.com.br/assinecarlm">LM AssineCar</a></li>
                      <li className="lm-veículos-para-apps"><a href="https://lmmobilidade.com.br/lmveiculosapps">LM Veículos para Apps</a></li>
                      <li className="lm-seminovos"><a href="https://lmmobilidade.com.br/lmseminovos">LM Seminovos</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Institucional</a>
                    <ul className="sub-menu">
                      <li><Link to="/quem-somos">Quem somos</Link></li>
                      <li><a href="https://lmmobilidade.com.br/nossa-historia/">Nossa história</a></li>
                      <li><a href="https://lmmobilidade.com.br/onde-estamos/">Onde estamos</a></li>
                      <li><a href="https://lmmobilidade.com.br/blog/">Blog</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Acesso rápido</a>
                    <ul className="sub-menu">
                      <li><a href="https://portalcliente.lmmobilidade.com.br/" target="_blank" rel="noreferrer">Portal do cliente</a></li>
                      <li><a href="https://lmmobilidade.com.br/aviso-de-privacidade">Aviso de Privacidade</a></li>
                      <li><a href="https://lmmobilidade.com.br/politica-de-cookies">Política de Cookies</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-secondary">
          <div className="container">
            <div className="logo">
              <img
                src="https://lmmobilidade.com.br/wp-content/uploads/2025/05/LM-Logo-Bco-lm-mobilidade-BRANCA.png"
                className="img-responsive"
                alt="Logo LM Mobilidade"
                style={{ maxHeight:48, width:'auto' }}
              />
            </div>
            <div className="copyright">
              <p>© {new Date().getFullYear()} LM Mobilidade. Todos os direitos reservados.</p>
            </div>
            <div className="social" style={{ display:'flex', gap:12, marginTop:12 }}>
              <a href="https://www.instagram.com/lmmobilidade/" target="_blank" rel="noopener noreferrer" style={{ color:'#fff' }}>
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none"><path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm0 10.435c4.497 0 5.027.018 6.8.098 1.64.075 2.531.35 3.124.58a5.21 5.21 0 0 1 1.933 1.258 5.21 5.21 0 0 1 1.258 1.933c.23.593.505 1.484.58 3.124.08 1.773.098 2.303.098 6.8 0 4.497-.018 5.027-.098 6.8-.075 1.64-.35 2.531-.58 3.124a5.21 5.21 0 0 1-1.258 1.933 5.21 5.21 0 0 1-1.933 1.258c-.593.23-1.484.505-3.124.58-1.773.08-2.303.098-6.8.098-4.497 0-5.027-.018-6.8-.098-1.64-.075-2.531-.35-3.124-.58a5.21 5.21 0 0 1-1.933-1.258 5.21 5.21 0 0 1-1.258-1.933c-.23-.593-.505-1.484-.58-3.124C10.453 29.027 10.435 28.497 10.435 24c0-4.497.018-5.027.098-6.8.075-1.64.35-2.531.58-3.124a5.21 5.21 0 0 1 1.258-1.933 5.21 5.21 0 0 1 1.933-1.258c.593-.23 1.484-.505 3.124-.58 1.773-.08 2.303-.098 6.8-.098zm0 2.889c-4.42 0-4.945.017-6.682.096-1.612.073-2.487.343-3.07.568a4.324 4.324 0 0 0-2.483 2.483c-.225.583-.495 1.458-.568 3.07C11.12 21.278 11.1 21.8 11.1 24c0 2.2.017 2.722.096 6.459.073 1.612.343 2.487.568 3.07a4.324 4.324 0 0 0 2.483 2.483c.583.225 1.458.495 3.07.568 1.737.079 2.262.096 6.682.096s4.945-.017 6.682-.096c1.612-.073 2.487-.343 3.07-.568a4.324 4.324 0 0 0 2.483-2.483c.225-.583.495-1.458.568-3.07.079-1.737.096-2.262.096-6.459 0-2.2-.017-2.722-.096-6.459-.073-1.612-.343-2.487-.568-3.07a4.324 4.324 0 0 0-2.483-2.483c-.583-.225-1.458-.495-3.07-.568-1.737-.079-2.262-.096-6.682-.096zm0 4.912a6.764 6.764 0 1 1 0 13.528A6.764 6.764 0 0 1 24 18.236zm0 2.889a3.875 3.875 0 1 0 0 7.75 3.875 3.875 0 0 0 0-7.75zm7.072-4.908a1.58 1.58 0 1 1 0 3.16 1.58 1.58 0 0 1 0-3.16z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.facebook.com/lmmobilidade" target="_blank" rel="noopener noreferrer" style={{ color:'#fff' }}>
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none"><path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm5.89 16.635h-2.964c-.35 0-.738.46-.738 1.074v2.14h3.704l-.56 3.75h-3.144v10.805h-3.87V23.6h-3.162v-3.75h3.162v-1.77c0-2.567 1.782-4.654 4.608-4.654h2.964v3.21z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/lmmobilidade" target="_blank" rel="noopener noreferrer" style={{ color:'#fff' }}>
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none"><path d="M24 0C10.747 0 0 10.747 0 24s10.747 24 24 24 24-10.747 24-24S37.253 0 24 0zm-6.974 36.281H11.18V18.696h5.845v17.585zm-2.922-19.986h-.039c-1.961 0-3.23-1.35-3.23-3.038 0-1.725 1.308-3.038 3.307-3.038 2 0 3.23 1.313 3.268 3.038 0 1.688-1.268 3.038-3.306 3.038zM38.102 36.28h-5.844v-9.407c0-2.365-.847-3.977-2.962-3.977-1.614 0-2.576 1.088-2.998 2.138-.155.375-.193.9-.193 1.426v9.82h-5.844s.076-15.935 0-17.585h5.844v2.49c.777-1.198 2.167-2.903 5.268-2.903 3.845 0 6.73 2.514 6.73 7.915V36.28z" fill="currentColor"/></svg>
              </a>
            </div>
            <div className="partners" style={{ display:'flex', gap:16, alignItems:'center', marginTop:16, flexWrap:'wrap' }}>
              <a href="https://www.bureauveritas.com.br/pt-br" target="_blank" rel="noopener noreferrer">
                <img src="https://lmmobilidade.com.br/wp-content/uploads/2025/08/Logo-Certificao-BUREAU-ISO-90012015-e1755265665335-1.png" className="img-responsive" width="97" height="40" alt="ISO 9001" />
              </a>
              <a href="https://www.sindlocba.com.br/" target="_blank" rel="noopener noreferrer">
                <img src="https://lmmobilidade.com.br/wp-content/uploads/2022/08/logo_sindloc-1.svg" className="img-responsive" width="93" height="26" alt="SINDLOC" />
              </a>
              <a href="https://gptw.com.br/" target="_blank" rel="noopener noreferrer">
                <img src="https://lmmobilidade.com.br/wp-content/uploads/2022/08/logo_great_place-1.svg" className="img-responsive" width="34" height="58" alt="Great Place to Work" />
              </a>
            </div>
          </div>
        </div>
      </footer>}

      {/* ===== BOTTOM TAB BAR MOBILE ===== */}
      <div className="mobile-app-tabbar">
        <Link
          to="/"
          className={`app-tab-item ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
        >
          <Home size={22} />
          <span>página inicial</span>
        </Link>
        <Link
          to="/aluguel"
          className={`app-tab-item ${location.pathname === '/aluguel' || location.pathname === '/produtos' ? 'active' : ''}`}
        >
          <Car size={22} />
          <span>aluguel</span>
        </Link>
        <Link
          to="/equipe"
          className={`app-tab-item ${location.pathname === '/equipe' || location.pathname === '/quem-somos' ? 'active' : ''}`}
        >
          <Users size={22} />
          <span>equipe</span>
        </Link>
        <Link
          to="/meu"
          className={`app-tab-item ${location.pathname === '/meu' ? 'active' : ''}`}
        >
          <UserCircle size={22} />
          <span>meu</span>
        </Link>
      </div>
    </div>
  );
}
