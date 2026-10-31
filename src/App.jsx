import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowDown,
  ArrowRight,
  Clock3,
  Instagram,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Phone,
  UtensilsCrossed,
  X,
  ChefHat,
  Heart,
} from "lucide-react";
import { menuItems, menuCategories } from "./data/menu";

const WHATSAPP_NUMBER = "917529071948";
const RESTAURANT_NAME = "Flavours by Lakshita";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Flavors+by+Lakshita/@26.0129564,79.4359848,627m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399d7f68e4644ea7:0x2d4635424854d608!8m2!3d26.0129564!4d79.4359848!16s%2Fg%2F11nw35qx4_?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D";

function whatsappLink(
  message = "Hello Flavours by Lakshita, I would like to know more about your menu.",
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["Menu", "#menu"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Flavours by Lakshita home">
        <span className="brand-mark">L</span>
        <span>
          <strong>Flavours</strong>
          <small>BY LAKSHITA</small>
        </span>
      </a>
      <button
        className="mobile-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <MenuIcon />}
      </button>
      <nav className={open ? "nav nav-open" : "nav"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-cta"
          href={whatsappLink("Hello! I would like to place an order.")}
          target="_blank"
          rel="noreferrer"
        >
          Order on WhatsApp <ArrowRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span /> A LITTLE TASTE OF HAPPINESS
        </div>
        <h1>
          Good food.
          <br />
          <em>Beautiful</em> moments.
        </h1>
        <p className="hero-description">
          Welcome to Flavours by Lakshita — where every bite is made to bring
          people together. Explore our menu and let something delicious find its
          way to you.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#menu">
            Explore the menu <ArrowDown size={16} />
          </a>
          <a
            className="text-link"
            href={whatsappLink(
              "Hello Flavours by Lakshita! I'd like to place an order.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> Order via WhatsApp
          </a>
        </div>
        <div className="hero-note">
          <span className="note-line" /> Made with care, served with love.
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1300&q=90"
            alt="A beautifully presented fresh meal"
            fetchpriority="high"
          />
        </div>
        <div className="image-stamp">
          <span>FRESH</span>
          <span>•</span>
          <span>LOVELY</span>
          <span>•</span>
          <span>DELICIOUS</span>
        </div>
        <div className="hero-caption">
          <span>01 /</span> A flavour to remember
        </div>
      </div>
      <div className="hero-bottom">
        <span>SCROLL TO DISCOVER</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section-pad">
      <div className="section-kicker">THE STORY BEHIND THE FLAVOUR</div>
      <div className="intro-grid">
        <h2>
          Food tastes better
          <br />
          when made with <em>love.</em>
        </h2>
        <p>
          At Flavours by Lakshita, we believe good food is more than a meal — it
          is a moment worth sharing. Discover thoughtfully prepared favourites
          and find your next feel-good bite.
        </p>
      </div>
      <div className="intro-rule">
        <span />
        <span>FBL</span>
        <span />
      </div>
    </section>
  );
}

function MenuSection() {
  const [active, setActive] = useState("All");
  const visibleItems = useMemo(
    () =>
      active === "All"
        ? menuItems
        : menuItems.filter((item) => item.category === active),
    [active],
  );
  return (
    <section className="menu-section section-pad" id="menu">
      <div className="section-heading">
        <div>
          <div className="section-kicker">FRESH FROM OUR KITCHEN</div>
          <h2>
            Explore Our <em>Menu</em>
          </h2>
        </div>
        <p>Find your favourites, freshly prepared and served with love.</p>
      </div>
      <div
        className="menu-filters"
        role="group"
        aria-label="Filter menu by category"
      >
        {menuCategories.map((category) => (
          <button
            key={category}
            className={active === category ? "filter active" : "filter"}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-list-grid">
        {visibleItems.map((item) => (
          <article className="menu-list-item" key={item.id}>
            <div className="menu-item-copy">
              <h3>{item.name}</h3>
              <span>{item.category}</span>
            </div>
            <strong>{item.price}</strong>
            <a
              href={whatsappLink(
                `Hello Flavours by Lakshita! I would like to order ${item.name}. Please confirm availability.`,
              )}
              target="_blank"
              rel="noreferrer"
              aria-label={`Order ${item.name} on WhatsApp`}
              title={`Order ${item.name} on WhatsApp`}
            >
              <MessageCircle size={17} />
            </a>
          </article>
        ))}
      </div>
      <div className="menu-note">
        <span>*</span> Prices are transcribed from the restaurant's supplied
        menu. Please confirm availability and final bill on WhatsApp.
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <div className="section-kicker light-kicker">
            LET'S MAKE IT DELICIOUS
          </div>
          <h2>
            Craving something
            <br />
            <em>wonderful?</em>
          </h2>
          <p>
            We'd love to hear from you. Message us on WhatsApp for orders, menu
            questions, or anything else.
          </p>
          <a
            className="button button-light"
            href={whatsappLink(
              "Hello Flavours by Lakshita! I'd like to enquire about placing an order.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> Chat with us on WhatsApp{" "}
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="contact-details">
          <div className="contact-detail">
            <span className="detail-icon">
              <Phone size={18} />
            </span>
            <div>
              <small>CALL / WHATSAPP</small>
              <a
                href="https://wa.me/917529071948"
                target="_blank"
                rel="noreferrer"
              >
                +91 75290 71948
              </a>
            </div>
          </div>
          <div className="contact-detail">
            <span className="detail-icon">
              <Clock3 size={18} />
            </span>
            <div>
              <small>OPENING HOURS</small>
              <p>Please message us for timings</p>
            </div>
          </div>
          <div className="contact-detail">
            <span className="detail-icon">
              <MapPin size={18} />
            </span>
            <div>
              <small>FIND US</small>
              <a
                className="maps-link"
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={15} aria-hidden="true" />
                <span>Open in Google Maps</span>
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="contact-social">
            <span>FOLLOW OUR JOURNEY</span>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark">L</span>
        <span>
          <strong>Flavours</strong>
          <small>BY LAKSHITA</small>
        </span>
      </a>
      <p>
        Good food, good mood. Made with <Heart size={13} fill="currentColor" />{" "}
        by Flavours by Lakshita.
      </p>
      <a href="#home" className="back-top">
        BACK TO TOP ↑
      </a>
    </footer>
  );
}

export default function App() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Flavours by Lakshita",
    telephone: "+917529071948",
    description:
      "Explore the vegetarian food menu at Flavours by Lakshita and contact us directly on WhatsApp.",
    url: "https://www.example.com/",
  };
  return (
    <>
      <Helmet>
        <title>Flavours by Lakshita | Restaurant Menu & WhatsApp Orders</title>
        <meta
          name="description"
          content="Explore the menu at Flavours by Lakshita. Discover delicious food and contact us directly on WhatsApp for orders and enquiries."
        />
        <meta
          name="keywords"
          content="Flavours by Lakshita, restaurant menu, food orders, WhatsApp restaurant orders"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Flavours by Lakshita | Good food, beautiful moments"
        />
        <meta
          property="og:description"
          content="Explore our menu and get in touch with Flavours by Lakshita on WhatsApp."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Intro />
        <MenuSection />
        <Contact />
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={whatsappLink("Hello Flavours by Lakshita!")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Flavours by Lakshita on WhatsApp"
      >
        <MessageCircle size={23} />
        <span>Chat with us</span>
      </a>
    </>
  );
}
