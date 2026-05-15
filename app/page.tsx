"use client"

import { motion } from "framer-motion"

export default function Home() {

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <main className="bg-[#05060a] text-white min-h-screen overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#05060a] to-black" />
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">

        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
          className="max-w-4xl"
        >

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black"
          >
            Azrix <span className="text-purple-400">Gestão de Comunidades</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-300 text-lg leading-relaxed"
          >
            A Azrix é uma equipe especializada em moderação e gestão de comunidades Discord,
            focada na organização, suporte e estruturação de servidores de grande porte dentro da cena digital.
            A estrutura nasce de experiências reais em ambientes de alta atividade.
          </motion.p>

        </motion.div>

      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative z-10 max-w-6xl mx-auto px-6 py-24">

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
              text: "A equipe é formada por moderadores com experiência em ambientes de alta demanda, especialmente na comunidade da LOUD."
            },
            {
              title: "Atuação Individual",
              text: "Experiência em projetos como Donas do Jogo, Desafio PlayHard e Game Changers, atuando em moderação e suporte operacional."
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
              viewport={{ once: true }}
              className="bg-[#141420] border border-white/5 rounded-xl p-6"
            >
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="relative z-10 max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          Experiência
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "LOUD — atuação em suporte e moderação dentro da comunidade, com foco na organização do chat, controle de interações em alto volume e manutenção de um ambiente estável para usuários em períodos de grande atividade.",
            "Donas do Jogo — suporte operacional e moderação durante o projeto, garantindo fluidez na comunicação, organização das interações e consistência no ambiente.",
            "Desafio PlayHard — moderação em tempo real durante o evento, com foco no controle de comportamento no chat e na manutenção da dinâmica entre participantes.",
            "Game Changers — suporte à comunidade com atuação em organização e moderação, contribuindo para um ambiente estruturado e funcional."
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#141420] border border-white/5 rounded-xl p-6"
            >
              {item}
            </motion.div>
          ))}

        </div>

      </section>

      {/* EQUIPE */}
      <section id="equipe" className="relative z-10 py-24 text-center">

        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          Equipe Azrix
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 px-6">
          Equipe formada por moderadores com experiência em comunidades de grande porte,
          especialmente na LOUD, atuando em organização e suporte.
        </p>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto px-6">

          {["Jenne", "LC", "Camisa 7", "Bruxo", "Baiano", "Juleas"].map((name) => (
            <div
              key={name}
              className="bg-[#141420] p-5 rounded-xl border border-white/5"
            >
              <h3 className="font-bold">{name}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Moderação / Comunidades
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
          className="px-6 py-3 bg-purple-600 rounded hover:bg-purple-500 transition"
        >
          Entrar em contato
        </a>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-8 border-t border-white/5">
        © {new Date().getFullYear()} Azrix — Gestão de Comunidades Discord
      </footer>

    </main>
  )
}