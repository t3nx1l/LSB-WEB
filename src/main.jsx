import React from 'react';
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
  Star,
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

const services = [
  { icon: Croissant, title: 'Padaria', text: 'Paes frescos todos os dias.' },
  { icon: Salad, title: 'Hortifruti', text: 'Frutas, verduras e legumes fresquinhos.' },
  { icon: Utensils, title: 'Comida pronta', text: 'Rotisserie para facilitar a rotina.' },
  { icon: Beef, title: 'Acougue', text: 'Cortes para semana, mes e churrasco.' },
  { icon: ShoppingBasket, title: 'Mercearia', text: 'Bebidas, frios, limpeza e perfumaria.' },
  { icon: Truck, title: 'Delivery', text: 'Praticidade para comprar melhor.' },
];

const appItems = ['Descontos exclusivos', 'Lista de compras', 'Favoritos', 'Ofertas da semana'];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="LSB Supermercado">
          <img src="/lsb-logo-oficial.png" alt="LSB Supermercado" />
          <span>LSB Supermercado</span>
        </a>
        <nav aria-label="Navegacao principal">
          <a href="#servicos">Servicos</a>
          <a href="#clube">Clube</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-action" href={links.whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </header>

      <section id="inicio" className="hero">
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

      <section className="intro glass">
        <div>
          <p className="eyebrow">Institucional</p>
          <h2>Mercado de bairro com estrutura completa.</h2>
        </div>
        <p>
          O LSB atende familias, moradores do centro e quem busca resolver compras
          do mes ou do dia com economia, praticidade e bom atendimento.
        </p>
      </section>

      <section id="servicos" className="services">
        <div className="section-heading">
          <p className="eyebrow">Servicos</p>
          <h2>Essenciais do dia a dia</h2>
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

      <section id="clube" className="club glass">
        <div className="club-copy">
          <p className="eyebrow">Clube de Desconto LSB</p>
          <h2>Ofertas no celular.</h2>
          <p>
            Acesse descontos exclusivos, crie listas de compras e acompanhe ofertas
            direto pelo app oficial.
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

      <section className="proof">
        <div className="glass">
          <Sparkles size={24} />
          <strong>Ofertas semanais</strong>
          <span>Acompanhe no Instagram e Facebook.</span>
        </div>
        <div className="glass">
          <Salad size={24} />
          <strong>Hortifruti fresquinho</strong>
          <span>Produtos para a rotina da familia.</span>
        </div>
        <div className="glass">
          <Clock size={24} />
          <strong>Aberto ate 20h</strong>
          <span>Segunda a sabado. Domingo ate 13h.</span>
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="contact-info glass">
          <p className="eyebrow">Localizacao</p>
          <h2>Av. Sete de Setembro, 1446</h2>
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
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
