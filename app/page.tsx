"use client"

import { motion } from "framer-motion"

export default function Home() {

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <main className="relative bg-[#05060a] text-white min-h-screen overflow-x-hidden scroll-smooth">

      {/* FUNDO MAIS LEVE (MENOS OVERHEAD VISUAL) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#05060a] to-black" />
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px]" />
      </div>

      {/* NAV BAR */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">

          <h1 className="font-bold tracking-[0.35em] text-purple-400">
            AZRIX
          </h1>

          <nav className="hidden md:flex gap-8 text-xs text-gray-300 tracking-widest">
            <a href="#inicio" className="hover:text-white transition">INÍCIO</a>
            <a href="#sobre" className="hover:text-white transition">SOBRE</a>
            <a href="#experiencia" className="hover:text-white transition">EXPERIÊNCIA</a>
            <a href="#equipe" className="hover:text-white transition">EQUIPE</a>
            <a href="#contato" className="hover:text-white transition">CONTATO</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">

        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
          className="max-w-4xl"
        >

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black tracking-tight"
          >
            Azrix <span className="text-purple-400">Gestão de Comunidades</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 text-gray-300 text-lg leading-relaxed"
          >
            Equipe especializada em moderação e gestão de comunidades Discord,
            focada em organização, suporte e estruturação de servidores de grande porte.
          </motion.p>

        </motion.div>

      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative z-10 max-w-6xl mx-auto px-5 py-24">

        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          Sobre a Azrix
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: "Origem",
              text: "A Azrix nasce da experiência prática em comunidades Discord ativas, com foco em organização e suporte em ambientes de grande porte."
            },
            {
              title: "Estrutura",
              text: "Equipe formada por moderadores com experiência em ambientes de alta demanda, especialmente na comunidade da LOUD."
            },
            {
              title: "Atuação",
              text: "Experiência individual em projetos como Donas do Jogo, Desafio PlayHard e Game Changers."
            },
            {
              title: "Foco",
              text: "Gestão de comunidades, moderação ativa e manutenção de ambientes organizados e consistentes."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="bg-[#141420] border border-white/5 rounded-xl p-6 hover:scale-[1.02] transition-transform"
            >
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="relative z-10 max-w-6xl mx-auto px-5 pb-24">

        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          Experiência
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "LOUD — suporte e moderação em ambiente de alta atividade",
            "Donas do Jogo — suporte operacional e organização de interações",
            "Desafio PlayHard — moderação em tempo real e controle de chat",
            "Game Changers — suporte e estabilidade de comunidade"
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-[#141420] border border-white/5 rounded-xl p-6 hover:scale-[1.02] transition-transform"
            >
              {c}
            </motion.div>
          ))}

        </div>

      </section>

      {/* EQUIPE */}
      <section id="equipe" className="relative z-10 py-24 text-center">

        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          Equipe Azrix
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 px-5">
          Equipe formada por moderadores com experiência em comunidades de grande porte,
          especialmente na LOUD, atuando em organização e suporte.
        </p>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto px-5">

          {["Jenne", "LC", "Camisa 7", "Bruxo", "Baiano", "Juleas"].map((name) => (
            <div
              key={name}
              className="bg-[#141420] p-5 rounded-xl border border-white/5 hover:scale-105 transition-transform"
            >
              <h3 className="font-bold">{name}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Moderação / Gestão de Comunidades
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CONTATO */}
      <section id="contato" className="relative z-10 text-center py-24">

        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          Contato
        </h2>

        <p className="text-gray-300 mb-6">
          Entre em contato para gestão ou suporte de comunidades Discord.
        </p>

        <a
          href="mailto:contatoazrix@gmail.com"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 transition rounded"
        >
          Entrar em contato
        </a>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 text-center text-gray-500 py-8 border-t border-white/5">
        © {new Date().getFullYear()} Azrix — Gestão de Comunidades Discord
      </footer>

    </main>
  )
}