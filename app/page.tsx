"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {

  const [selected, setSelected] = useState<any>(null)

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  }

  const members = [
    {
      name: "Jenne",
      role: "Administração e Estrutura",
      desc: "Possui experiência em moderação e administração de comunidades Discord, com atuação em ambientes de grande atividade. Trabalha com organização, suporte e manutenção de comunidades, garantindo fluidez e bom funcionamento geral."
    },
    {
      name: "LC",
      role: "Suporte e Moderação",
      desc: "Possui experiência em moderação de comunidades Discord, com foco no suporte a membros e na resolução de problemas em ambientes ativos. Também contribui de forma colaborativa nas decisões da equipe."
    },
    {
      name: "Camisa 7",
      role: "Moderação e Estratégia",
      desc: "Possui experiência em moderação e suporte em comunidades Discord, atuando em interações com membros e contribuindo para a organização das atividades internas."
    },
    {
      name: "Bruxo",
      role: "Engajamento e Suporte",
      desc: "Possui experiência em moderação de comunidades Discord, com foco em interações com membros e suporte às atividades da comunidade."
    },
    {
      name: "Baiano",
      role: "Interação e Moderação",
      desc: "Possui experiência em moderação de comunidades Discord, com atuação em interações com membros e apoio à organização do ambiente."
    },
    {
      name: "Juleas",
      role: "Suporte Comunitário",
      desc: "Possui experiência em moderação de comunidades Discord, com foco em suporte e acompanhamento de interações dentro da comunidade."
    }
  ]

  return (
    <main className="bg-[#05060a] text-white min-h-screen overflow-x-hidden scroll-smooth">

      {/* FUNDO */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#05060a] to-black" />
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-bold tracking-[0.35em] text-purple-400"
          >
            AZRIX
          </motion.h1>

          <nav className="hidden md:flex gap-8 text-xs text-gray-300 tracking-widest">
            {["INÍCIO", "SOBRE", "EXPERIÊNCIA", "EQUIPE", "CONTATO"].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="hover:text-purple-400 transition"
              >
                {item}
              </motion.a>
            ))}
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">

        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
          className="max-w-4xl"
        >

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black">
            Azrix <span className="text-purple-400">Gestão de Comunidades</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-gray-300 text-lg leading-relaxed">
            A Azrix é uma equipe especializada em moderação e gestão de comunidades Discord,
            focada na organização, suporte e estruturação de servidores de grande porte.
          </motion.p>

        </motion.div>

      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-purple-400 mb-12"
        >
          Sobre a Azrix
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: "Origem e Estrutura",
              text: "A Azrix nasce da experiência prática em comunidades Discord ativas, com foco em organização, suporte e estruturação de ambientes de grande porte."
            },
            {
              title: "Experiência e Foco",
              text: "A equipe atua com moderação e suporte operacional em comunidades, garantindo ambientes organizados e funcionais."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-[#141420] border border-white/5 rounded-xl p-6"
            >
              <h3 className="font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="relative z-10 max-w-6xl mx-auto px-6 pb-24">

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-purple-400 mb-12"
        >
          Experiência
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#141420] border border-white/5 rounded-xl p-6 text-gray-300 leading-relaxed"
        >

          Atuação em moderação de comunidades de grande porte com foco em suporte e organização. Suporte operacional em
          ambientes ativos garantindo fluidez na comunicação.<br />
          Moderação em eventos e atividades em tempo real.<br />
          Apoio na manutenção de comunidades estruturadas e organizadas.

        </motion.div>

      </section>

      {/* EQUIPE */}
      <section id="equipe" className="relative z-10 py-24 text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-purple-400 mb-10"
        >
          Equipe Azrix
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 px-6">
          A equipe Azrix trabalha de forma colaborativa na moderação e suporte de comunidades Discord.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

          {members.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setSelected(m)}
              className="cursor-pointer bg-[#141420] border border-white/5 rounded-2xl p-6 text-left"
            >
              <h3 className="text-xl font-bold text-white">{m.name}</h3>
              <p className="text-sm text-purple-300 mt-2">{m.role}</p>
            </motion.div>
          ))}

        </div>

        {/* MODAL */}
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6"
            onClick={() => setSelected(null)}
          >

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-[#141420] max-w-md w-full rounded-2xl p-6 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >

              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                {selected.name}
              </h3>

              <p className="text-purple-300 mb-4">
                {selected.role}
              </p>

              <p className="text-gray-300">
                {selected.desc}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 w-full bg-purple-600 py-2 rounded hover:bg-purple-500 transition"
              >
                Fechar
              </button>

            </motion.div>

          </motion.div>
        )}

      </section>

      {/* CONTATO (MELHORADO) */}
      <section id="contato" className="text-center py-24">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-purple-400 mb-6"
        >
          Contato
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-300 mb-6"
        >
          Entre em contato para suporte ou gestão de comunidades.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-3 bg-purple-600 rounded hover:bg-purple-500 transition"
        >
          Entrar em contato
        </motion.a>

      </section>

    </main>
  )
}