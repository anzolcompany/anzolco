import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Music2,
  Waves,
  SlidersHorizontal,
  Film,
  Eye,
  ImageIcon,
  Play,
  Type,
  ExternalLink,
  Instagram,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const WHATSAPP = "https://wa.me/5511945905422";
const INSTAGRAM = "https://instagram.com/anzolcompany";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
];

const SERVICES = [
  {
    Icon: Music2,
    title: "Produção Musical",
    desc: "Do zero à faixa finalizada, com direção sonora e identidade.",
  },
  {
    Icon: Waves,
    title: "Beats Exclusivos",
    desc: "Instrumentais autorais com personalidade e exclusividade garantida.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Mixing & Master",
    desc: "Tratamento de áudio profissional para faixas que soam grandes.",
  },
  {
    Icon: Film,
    title: "Videoclipes",
    desc: "Produção audiovisual com direção criativa e visual cinematográfico.",
  },
  {
    Icon: Eye,
    title: "Direção Criativa",
    desc: "Construção de identidade visual e posicionamento artístico.",
  },
  {
    Icon: ImageIcon,
    title: "Arte de Capa",
    desc: "Design editorial forte que representa o projeto de forma autêntica.",
  },
  {
    Icon: Play,
    title: "Visualizers",
    desc: "Conteúdo visual animado para plataformas e redes sociais.",
  },
  {
    Icon: Type,
    title: "Lyric Videos",
    desc: "Vídeos com letra tratados com estética tipográfica sofisticada.",
  },
];

const PORTFOLIO_ITEMS = [
  {
    num: "01",
    title: "Catálogo de Beats",
    desc: "Instrumentais exclusivos disponíveis para licenciamento.",
    url: "https://drive.google.com/drive/folders/1NPBG-kh66YXRr8pQvxVhUrDVLIvzcaAH?usp=sharing",
  },
  {
    num: "02",
    title: "Produções Musicais",
    desc: "Trabalhos de produção realizados para diferentes artistas.",
    url: "https://drive.google.com/drive/folders/1sqJ8hTo7ZMt9yqZT8fxvQuJpun2MgzTw?usp=sharing",
  },
  {
    num: "03",
    title: "Videoclipes",
    desc: "Direção e produção audiovisual completa.",
    url: "https://drive.google.com/drive/folders/18WIWOBBYg5PWPrOuIJjueKpULNiWuli3?usp=drive_link",
  },
  {
    num: "04",
    title: "Arte de Capa",
    desc: "Design editorial para singles, EPs e álbuns.",
    url: "https://drive.google.com/drive/folders/1PTFF0zhvswto4H9Ep-nXmhbIzELgm4B6?usp=sharing",
  },
  {
    num: "05",
    title: "Visualizers & Lyric Videos",
    desc: "Conteúdo visual animado com estética e tipografia.",
    url: "https://drive.google.com/drive/folders/1y5wiH2p9WFiMGlYP8eulJi8gt-8jnJle?usp=drive_link",
  },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#06050E]/95 backdrop-blur-md border-b border-[#2A1760]/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" aria-label="Anzol Company">
            <img
              src="/logo.png"
              alt="Anzol Company"
              className="h-8 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#8B7BAB] hover:text-[#F0EBFF] transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-[#7C3AED] text-white px-5 py-2.5 hover:bg-[#6D28D9] transition-colors duration-200 tracking-wide"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-[#8B7BAB] hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#06050E] flex flex-col items-center justify-center gap-10"
        >
          <button
            className="absolute top-5 right-6 text-[#8B7BAB] hover:text-white"
            onClick={close}
            aria-label="Fechar menu"
          >
            <X className="w-7 h-7" />
          </button>

          <img src="/logo.png" alt="Anzol Company" className="h-9 w-auto mb-4" />

          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="font-cormorant text-3xl text-[#F0EBFF] hover:text-[#A78BFA] transition-colors italic"
            >
              {l.label}
            </a>
          ))}

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-4 bg-[#7C3AED] text-white px-8 py-3 text-sm tracking-wide hover:bg-[#6D28D9] transition-colors"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      )}
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06050E]">
      <div className="absolute inset-0">
        <img
          src="/images/photo4.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.28 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06050E]/40 via-[#06050E]/50 to-[#06050E]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06050E]/60 via-transparent to-[#06050E]/60" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="text-[10px] md:text-xs tracking-[0.45em] text-[#9B6CF0] uppercase mb-7 font-inter font-light"
        >
          Anzol Company
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant font-medium text-[#F0EBFF] leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(3.2rem, 9.5vw, 8.5rem)" }}
        >
          Produção musical
          <br />
          <em className="text-[#C4B5FD]">com identidade.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.7 }}
          className="text-[#7B6B9E] text-base md:text-lg max-w-xl mx-auto mt-8 mb-12 font-inter font-light leading-relaxed"
        >
          Beats, videoclipes e direção sonora para artistas que valorizam
          estética e presença.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.92 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7C3AED] text-white px-9 py-3.5 text-sm tracking-widest uppercase font-inter hover:bg-[#6D28D9] transition-colors duration-200"
          >
            WhatsApp
          </a>
          <a
            href="#portfolio"
            className="border border-[#2A1760] text-[#9B6CF0] px-9 py-3.5 text-sm tracking-widest uppercase font-inter hover:border-[#7C3AED] hover:text-[#C4B5FD] transition-all duration-200"
          >
            Portfólio
          </a>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={() =>
          document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4A3A6A] hover:text-[#9B6CF0] transition-colors cursor-pointer"
        aria-label="Rolar para baixo"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-inter">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.button>
    </section>
  );
}

// ─── Stats bar ────────────────────────────────────────────────────────────────

function StatsBar() {
  return (
    <div className="border-y border-[#2A1760]/50 bg-[#0A0716] py-14 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center"
      >
        <span className="font-bebas text-[5.5rem] sm:text-[7rem] text-[#F0EBFF] leading-none tracking-tight">
          +1000
        </span>
        <div className="sm:text-left">
          <p className="font-cormorant italic text-2xl sm:text-3xl text-[#A78BFA]">
            artistas
          </p>
          <p className="text-[10px] tracking-[0.45em] text-[#4A3A6A] uppercase font-inter mt-0.5">
            atendidos
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section
      id="sobre"
      className="py-28 md:py-36 px-6 bg-[#06050E] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden aspect-[4/5] max-w-xs mx-auto lg:mx-0">
            <img
              src="/images/profile.png"
              alt="Anzol Company"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06050E]/70 via-transparent to-transparent" />
          </div>
          <div
            className="absolute bottom-0 right-0 lg:-right-5 border border-[#7C3AED]/20 pointer-events-none"
            style={{ width: "calc(100% - 12px)", height: "calc(100% - 12px)", bottom: "-12px", right: "-12px" }}
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fade}
            className="text-[10px] tracking-[0.45em] text-[#7C3AED] uppercase font-inter mb-5"
          >
            Sobre
          </motion.p>
          <motion.h2
            variants={fade}
            className="font-cormorant font-medium text-[#F0EBFF] leading-[0.95] mb-8"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
          >
            Uma produtora
            <br />
            <em className="text-[#C4B5FD]">com direção.</em>
          </motion.h2>
          <motion.div
            variants={fade}
            className="space-y-5 text-[#7B6B9E] font-inter font-light leading-relaxed text-[0.95rem]"
          >
            <p>
              A Anzol Company existe para dar forma sonora e visual à identidade
              dos artistas. Trabalhamos com produção musical, direção criativa e
              audiovisual, construindo uma linguagem única para cada projeto.
            </p>
            <p>
              Do beat ao videoclipe, cada entrega carrega intenção estética.
              Acreditamos que som e imagem precisam coexistir com coerência.
              Por isso, nossa abordagem une técnica, arte e identidade em um
              trabalho só.
            </p>
          </motion.div>
          <motion.a
            variants={fade}
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 text-sm text-[#9B6CF0] font-inter tracking-widest uppercase border-b border-[#7C3AED]/50 pb-1 hover:text-[#F0EBFF] hover:border-[#F0EBFF]/40 transition-all duration-200"
          >
            Iniciar um projeto
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="servicos" className="py-28 md:py-36 px-6 bg-[#0A0716]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.p
            variants={fade}
            className="text-[10px] tracking-[0.45em] text-[#7C3AED] uppercase font-inter mb-4"
          >
            O que fazemos
          </motion.p>
          <motion.h2
            variants={fade}
            className="font-cormorant font-medium text-[#F0EBFF] leading-tight"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
          >
            Serviços
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            borderTop: "1px solid rgba(42,23,96,0.3)",
            borderLeft: "1px solid rgba(42,23,96,0.3)",
          }}
        >
          {SERVICES.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fade}
              className="group p-8 bg-[#0A0716] hover:bg-[#0F0B20] transition-colors duration-300"
              style={{
                borderRight: "1px solid rgba(42,23,96,0.3)",
                borderBottom: "1px solid rgba(42,23,96,0.3)",
              }}
            >
              <Icon className="w-5 h-5 text-[#7C3AED] mb-6 group-hover:text-[#A78BFA] transition-colors duration-300" />
              <h3 className="text-[#F0EBFF] font-inter font-medium text-sm mb-3 tracking-wide">
                {title}
              </h3>
              <p className="text-[#4A3A6A] font-inter font-light text-sm leading-relaxed group-hover:text-[#6B5B8A] transition-colors duration-300">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Portfolio ────────────────────────────────────────────────────────────────

function Portfolio() {
  return (
    <section id="portfolio" className="py-28 md:py-36 px-6 bg-[#06050E]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.p
            variants={fade}
            className="text-[10px] tracking-[0.45em] text-[#7C3AED] uppercase font-inter mb-4"
          >
            Nosso trabalho
          </motion.p>
          <motion.h2
            variants={fade}
            className="font-cormorant font-medium text-[#F0EBFF] leading-tight"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
          >
            Portfólio
          </motion.h2>
          <motion.p
            variants={fade}
            className="text-[#4A3A6A] font-inter font-light text-[0.95rem] mt-4 max-w-md leading-relaxed"
          >
            Explore exemplos do nosso trabalho em cada área de atuação.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            borderTop: "1px solid rgba(42,23,96,0.35)",
            borderLeft: "1px solid rgba(42,23,96,0.35)",
          }}
        >
          {PORTFOLIO_ITEMS.map(({ num, title, desc, url }) => (
            <motion.a
              key={title}
              variants={fade}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-8 md:p-10 bg-[#06050E] hover:bg-[#0A0716] transition-colors duration-300 min-h-[200px]"
              style={{
                borderRight: "1px solid rgba(42,23,96,0.35)",
                borderBottom: "1px solid rgba(42,23,96,0.35)",
              }}
            >
              <div>
                <p className="font-bebas text-[#2A1760] text-2xl mb-4 group-hover:text-[#3D2580] transition-colors">
                  {num}
                </p>
                <h3 className="text-[#F0EBFF] font-inter font-medium text-base mb-2 group-hover:text-white transition-colors">
                  {title}
                </h3>
                <p className="text-[#4A3A6A] font-inter font-light text-sm leading-relaxed group-hover:text-[#6B5B8A] transition-colors">
                  {desc}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-[#2A1760] group-hover:text-[#9B6CF0] transition-colors mt-6 self-end" />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[11px] text-[#2A1760] font-inter mt-10 tracking-wide leading-relaxed max-w-lg mx-auto"
        >
          Os materiais exibidos representam apenas alguns exemplos de trabalhos
          realizados pela Anzol Company.
        </motion.p>
      </div>
    </section>
  );
}

// ─── CTA band ─────────────────────────────────────────────────────────────────

function CTABand() {
  return (
    <div className="bg-[#0F0B20] border-y border-[#2A1760]/50 py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-[10px] tracking-[0.45em] text-[#7C3AED] uppercase font-inter mb-6">
          Vamos trabalhar juntos
        </p>
        <h2
          className="font-cormorant font-medium text-[#F0EBFF] leading-[0.92] mb-10"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
        >
          Seu projeto
          <br />
          <em className="text-[#C4B5FD]">merece identidade.</em>
        </h2>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#7C3AED] text-white px-10 py-4 text-sm tracking-widest uppercase font-inter hover:bg-[#6D28D9] transition-colors duration-200"
        >
          Falar no WhatsApp
        </a>
      </motion.div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#06050E] pt-20 pb-10 px-6 border-t border-[#2A1760]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Anzol Company" className="h-8 w-auto mb-5" />
            <p className="text-[#4A3A6A] font-inter font-light text-sm leading-relaxed max-w-xs">
              Produção musical, audiovisual e direção criativa para artistas
              que valorizam identidade sonora e visual.
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.4em] text-[#7C3AED] uppercase font-inter mb-5">
              Navegação
            </p>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[#4A3A6A] hover:text-[#F0EBFF] font-inter transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.4em] text-[#7C3AED] uppercase font-inter mb-5">
              Contato
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#4A3A6A] hover:text-[#F0EBFF] font-inter transition-colors duration-200"
              >
                WhatsApp
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#4A3A6A] hover:text-[#F0EBFF] font-inter transition-colors duration-200 flex items-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5 flex-shrink-0" />
                @anzolcompany
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2A1760]/25 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#2A1760] font-inter tracking-wide">
            &copy; {new Date().getFullYear()} Anzol Company. Todos os direitos reservados.
          </p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#2A1760] hover:text-[#9B6CF0] font-inter transition-colors duration-200 tracking-wide"
          >
            instagram.com/anzolcompany
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-[#06050E] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Portfolio />
      <CTABand />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
