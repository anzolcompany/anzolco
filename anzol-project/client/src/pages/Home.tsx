import { motion } from "framer-motion";
import { Music, Video, Mic2, Star, ChevronDown, Instagram, Youtube, Mail, Phone } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/5">
        <img src="/anzol-logo.png" alt="Anzol Company" className="h-10 w-auto" />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
          <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>
        </div>
        <a
          href="https://wa.me/5511945905422"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white hover:opacity-90 transition-opacity"
        >
          Fale Conosco
        </a>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#A855F7]/10 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-[#06B6D4]/10 blur-[100px]" />
        </div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#A855F7] text-sm font-mono tracking-[0.3em] uppercase mb-4"
          >
            Produção Musical
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-white to-[#06B6D4]">
              ANZOL
            </span>
            <br />
            <span className="text-white">COMPANY</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Beats exclusivos, produção audiovisual cinematográfica e identidade sonora
            para artistas independentes que querem se destacar.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#servicos"
              className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white hover:opacity-90 transition-opacity text-sm"
            >
              Ver Serviços
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full font-semibold border border-white/20 text-white hover:bg-white/5 transition-colors text-sm"
            >
              Portfólio
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/30 animate-bounce" />
        </motion.div>
      </section>

      {/* ─── SERVIÇOS ─── */}
      <section id="servicos" className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#A855F7] text-sm font-mono tracking-[0.3em] uppercase mb-3">
              O que fazemos
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-white">
              NOSSOS SERVIÇOS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Music,
                title: "Produção de Beats",
                desc: "Beats exclusivos e personalizados para o seu estilo. Trap, drill, afrobeat, funk e muito mais.",
                color: "#A855F7",
              },
              {
                icon: Video,
                title: "Produção Audiovisual",
                desc: "Videoclipes cinematográficos, teasers e conteúdo visual que amplifica a sua identidade artística.",
                color: "#06B6D4",
              },
              {
                icon: Mic2,
                title: "Gravação & Mixagem",
                desc: "Estúdio profissional para gravação, mixagem e masterização com qualidade de nível internacional.",
                color: "#F59E0B",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-white/20"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon
                    className="w-6 h-6"
                    style={{ color: service.color }}
                  />
                </div>
                <h3 className="font-bebas text-2xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFÓLIO ─── */}
      <section id="portfolio" className="py-24 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#06B6D4] text-sm font-mono tracking-[0.3em] uppercase mb-3">
              Trabalhos recentes
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-white">
              PORTFÓLIO
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Beat Trap Exclusivo", genre: "Trap / Drill", bpm: "140 BPM" },
              { label: "Videoclipe Cinematográfico", genre: "Audiovisual", bpm: "4K" },
              { label: "Mixagem Profissional", genre: "R&B / Soul", bpm: "96 BPM" },
              { label: "Beat Afrobeat", genre: "Afrobeat", bpm: "108 BPM" },
              { label: "Identidade Sonora", genre: "Branding", bpm: "—" },
              { label: "Produção Completa", genre: "Funk / Trap", bpm: "150 BPM" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative aspect-square rounded-2xl bg-gradient-to-br from-[#A855F7]/20 to-[#06B6D4]/20 border border-white/10 overflow-hidden cursor-pointer hover:border-white/30 transition-all"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                    <Music className="w-8 h-8 text-white/60" />
                  </div>
                  <h4 className="font-bebas text-xl text-white mb-1">{item.label}</h4>
                  <p className="text-white/40 text-xs">{item.genre} · {item.bpm}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEPOIMENTOS ─── */}
      <section id="depoimentos" className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#A855F7] text-sm font-mono tracking-[0.3em] uppercase mb-3">
              O que dizem
            </p>
            <h2 className="font-bebas text-5xl md:text-6xl text-white">
              DEPOIMENTOS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "MC Vitão",
                role: "Artista independente",
                text: "A Anzol Company transformou minha carreira. Os beats são únicos e a produção audiovisual ficou incrível.",
              },
              {
                name: "DJ Kauã",
                role: "Produtor musical",
                text: "Profissionalismo e qualidade em cada detalhe. Recomendo para qualquer artista que quer crescer.",
              },
              {
                name: "Luana Beats",
                role: "Cantora & compositora",
                text: "Encontrei na Anzol a parceria que precisava. Eles entendem a visão do artista e entregam além do esperado.",
              },
            ].map((dep, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-8 rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  "{dep.text}"
                </p>
                <div>
                  <p className="font-semibold text-white text-sm">{dep.name}</p>
                  <p className="text-white/40 text-xs">{dep.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A855F7]/30 to-[#06B6D4]/30" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />
            <div className="relative z-10 text-center py-16 px-8">
              <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">
                PRONTO PARA DECOLAR?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Entre em contato agora e vamos criar juntos algo que o mundo vai ouvir.
              </p>
              <a
                href="https://wa.me/5511945905422"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-full font-semibold bg-gradient-to-r from-[#A855F7] to-[#06B6D4] text-white hover:opacity-90 transition-opacity text-base"
              >
                Iniciar Projeto
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTATO ─── */}
      <section id="contato" className="py-16 px-6 md:px-12 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-bebas text-4xl text-white mb-6">
                FALE COM A GENTE
              </h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5511945905422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#A855F7]" />
                  <span>(11) 94590-5422</span>
                </a>
                <a
                  href="mailto:contato@anzolcompany.com"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#06B6D4]" />
                  <span>contato@anzolcompany.com</span>
                </a>
              </div>
            </div>
            <div className="flex gap-6 md:justify-end">
              {[
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/anzolcompany" },
                { icon: Youtube, label: "YouTube", href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all text-sm"
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/anzol-logo.png" alt="Anzol Company" className="h-8 w-auto" />
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Anzol Company. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* ─── WHATSAPP FLOAT ─── */}
      <WhatsAppButton />
    </div>
  );
}
