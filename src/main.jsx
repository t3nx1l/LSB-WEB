import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Apple,
  BadgePercent,
  Beef,
  ChevronRight,
  Clock,
  Croissant,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Salad,
  ShoppingBasket,
  Smartphone,
  Sparkles,
  TicketPercent,
  Truck,
  Utensils,
} from 'lucide-react';
import './styles.css';

const links = {
  whatsapp: 'https://wa.me/5519971516555',
  phone: 'tel:+551934391263',
  instagram: 'https://www.instagram.com/lsb_supermercado/',
  facebook: 'https://www.facebook.com/supermercadolsb',
  android:
    'https://play.google.com/store/apps/details?id=inovatech.mercafacil.clube.de.descontolsb',
  ios: 'https://apps.apple.com/br/app/clube-de-desconto-lsb/id1640148704',
  maps:
    'https://www.google.com/maps/search/?api=1&query=LSB+Supermercado+Av.+Sete+de+Setembro+1446+Saltinho+SP',
};

const routes = [
  { path: '/', label: 'Inicio' },
  { path: '/servicos', label: 'Servicos' },
  { path: '/clube', label: 'Clube' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/contato', label: 'Contato' },
];

const services = [
  { icon: Croissant, title: 'Padaria', text: 'Paes frescos, frios e itens para cafe da manha.' },
  { icon: Salad, title: 'Hortifruti', text: 'Frutas, verduras e legumes com giro rapido.' },
  { icon: Utensils, title: 'Comida pronta', text: 'Rotisserie para almoco, jantar e rotina corrida.' },
  { icon: Beef, title: 'Acougue', text: 'Cortes para semana, mes e churrasco.' },
  { icon: ShoppingBasket, title: 'Mercearia', text: 'Bebidas, limpeza, perfumaria e essenciais.' },
  { icon: Truck, title: 'Delivery', text: 'Praticidade para comprar melhor em Saltinho.' },
];

const appItems = ['Descontos exclusivos', 'Lista de compras', 'Favoritos', 'Ofertas da semana'];

function useRoute() {
  const [path, setPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const go = (nextPath) => {
    if (nextPath === path) return;
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { path, go };
}

function NavLink({ path, current, go, children }) {
  return (
    <a
      className={current === path ? 'active' : ''}
      href={path}
      onClick={(event) => {
        event.preventDefault();
        go(path);
      }}
    >
      {children}
    </a>
  );
}

function Header({ current, go }) {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="/"
        aria-label="LSB Supermercado"
        onClick={(event) => {
          event.preventDefault();
          go('/');
        }}
      >
        <img src="/lsb-logo-oficial.png" alt="LSB Supermercado" />
        <span>LSB Supermercado</span>
      </a>
      <nav aria-label="Navegacao principal">
        {routes.slice(1).map((route) => (
          <NavLink key={route.path} path={route.path} current={current} go={go}>
            {route.label}
          </NavLink>
        ))}
      </nav>
      <a className="header-action" href={links.whatsapp} target="_blank" rel="noreferrer">
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </header>
  );
}

function Home({ go }) {
  return (
    <>
      <section className="hero">
        <div className="hero-bg-mark">LSB</div>
        <div className="hero-copy glass">
          <p className="eyebrow">Desde 1978 | Saltinho/SP</p>
          <img className="hero-logo" src="/lsb-logo-oficial.png" alt="LSB Supermercado" />
          <h1>Leve Sempre Barato</h1>
          <p className="lead">
            Supermercado tradicional no Centro de Saltinho com preco baixo, variedade,
            padaria, hortifruti fresquinho e comida pronta para o dia a dia.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={links.android} target="_blank" rel="noreferrer">
              <Smartphone size={20} />
              Baixar app
              <ChevronRight size={18} />
            </a>
            <a className="button secondary" href={links.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
          <div className="contact-strip">
            <a href={links.phone}>
              <Phone size={17} />
              19 3439-1263
            </a>
            <a href={links.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={17} />
              19 97151-6555
            </a>
            <a href={links.instagram} target="_blank" rel="noreferrer">
              <Instagram size={17} />
              @lsb_supermercado
            </a>
          </div>
        </div>
      </section>

      <section className="route-cards">
        <button className="route-card glass" type="button" onClick={() => go('/servicos')}>
          <ShoppingBasket size={26} />
          <strong>Servicos da loja</strong>
          <span>Padaria, hortifruti, acougue, rotisserie e mercado completo.</span>
        </button>
        <button className="route-card glass" type="button" onClick={() => go('/clube')}>
          <TicketPercent size={26} />
          <strong>Clube de Desconto</strong>
          <span>Ofertas no app, listas de compras e descontos exclusivos.</span>
        </button>
        <button className="route-card glass" type="button" onClick={() => go('/contato')}>
          <MapPin size={26} />
          <strong>Como chegar</strong>
          <span>Av. Sete de Setembro, 1446, Centro, Saltinho/SP.</span>
        </button>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <section className="page-section">
      <div className="page-hero glass">
        <p className="eyebrow">Servicos</p>
        <h1>Mercado completo para a rotina.</h1>
        <p className="lead">
          Do pao fresco ao hortifruti, do acougue a comida pronta: tudo pensado para
          compra do mes e do dia a dia.
        </p>
      </div>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, text }) => (
          <article className="service-card glass" key={title}>
            <Icon size={28} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClubPage() {
  return (
    <section className="club glass page-club">
      <div className="club-copy">
        <p className="eyebrow">Clube de Desconto LSB</p>
        <h1>Ofertas no celular.</h1>
        <p>
          Acesse descontos exclusivos, crie listas de compras, favorite produtos e
          acompanhe ofertas do LSB pelo app oficial.
        </p>
        <div className="store-actions">
          <a className="button primary" href={links.android} target="_blank" rel="noreferrer">
            <Smartphone size={20} />
            Google Play
          </a>
          <a className="button dark" href={links.ios} target="_blank" rel="noreferrer">
            <Apple size={20} />
            App Store
          </a>
        </div>
      </div>
      <div className="phone-frame">
        <div className="phone-top" />
        <div className="coupon">
          <TicketPercent size={30} />
          <span>Clube LSB</span>
          <strong>Descontos exclusivos</strong>
        </div>
        {appItems.map((item) => (
          <div className="app-line" key={item}>
            <BadgePercent size={18} />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <img className="club-logo" src="/lsb-clube-oficial.png" alt="Clube LSB Descontos" />
    </section>
  );
}

function AboutPage() {
  return (
    <section className="page-section">
      <div className="page-hero glass">
        <p className="eyebrow">Institucional</p>
        <h1>Tradicao local desde 1978.</h1>
        <p className="lead">
          O LSB Supermercado atende familias de Saltinho com preco baixo, variedade,
          bom atendimento e servicos essenciais para a rotina.
        </p>
      </div>
      <div className="proof">
        <div className="glass">
          <Sparkles size={24} />
          <strong>Leve Sempre Barato</strong>
          <span>Posicionamento claro: economia e praticidade.</span>
        </div>
        <div className="glass">
          <Clock size={24} />
          <strong>Todos os dias</strong>
          <span>Compras de rotina, mes, almoco e reposicao.</span>
        </div>
        <div className="glass">
          <MapPin size={24} />
          <strong>Centro de Saltinho</strong>
          <span>Localizacao facil na Av. Sete de Setembro.</span>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="contact page-contact">
      <div className="contact-info glass">
        <p className="eyebrow">Contato</p>
        <h1>Av. Sete de Setembro, 1446</h1>
        <div className="contact-list">
          <a href={links.maps} target="_blank" rel="noreferrer">
            <MapPin size={22} />
            Centro, Saltinho - SP, 13440-013
          </a>
          <a href={links.phone}>
            <Phone size={22} />
            (19) 3439-1263
          </a>
          <a href={links.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={22} />
            (19) 97151-6555
          </a>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={links.maps} target="_blank" rel="noreferrer">
            <MapPin size={20} />
            Como chegar
          </a>
          <a className="button secondary" href={links.facebook} target="_blank" rel="noreferrer">
            <Facebook size={20} />
            Facebook
          </a>
        </div>
      </div>
      <div className="map-wrap glass">
        <iframe
          title="Mapa do LSB Supermercado"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=LSB%20Supermercado%20Av.%20Sete%20de%20Setembro%201446%20Saltinho%20SP&output=embed"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <span>LSB Supermercado</span>
      <span>Leve Sempre Barato</span>
      <div>
        <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href={links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
          <Facebook size={20} />
        </a>
      </div>
    </footer>
  );
}

function App() {
  const { path, go } = useRoute();
  const Page = useMemo(() => {
    if (path === '/servicos') return <ServicesPage />;
    if (path === '/clube') return <ClubPage />;
    if (path === '/sobre') return <AboutPage />;
    if (path === '/contato') return <ContactPage />;
    return <Home go={go} />;
  }, [path]);

  return (
    <main>
      <Header current={path} go={go} />
      {Page}
      <Footer />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
