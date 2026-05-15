"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  function handleMouseMove(e: React.MouseEvent) {
    const x = (e.clientX / window.innerWidth) * 100
    const y = (e.clientY / window.innerHeight) * 100
    setMouse({ x, y })
  }

  return (
    <main
      onMouseMove={handleMouseMove}
      translate="no"
      className="relative bg-[#07070c] text-white min-h-screen overflow-x-hidden w-full"
    >

      {/* FUNDO PREMIUM FIXO (SEM OVERFLOW) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden w-full">
        <div className="absolute inset-0 bg-[#07070c]" />

        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-600/10 blur-[90px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-600/10 blur-[90px]" />
      </div>

      {/* LIGHT DO MOUSE (PREMIUM) */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-25 pointer-events-none transition-all duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.35), transparent 60%)",
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
          transform: "translate(-50%, -50%)"
        }}
      />

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">

          <h1 className="font-bold tracking-[0.35em] text-purple-400">
            AZRIX
          </h1>

          <nav className="hidden md:flex gap-8 text-xs tracking-widest text-gray-300">
            <a href="#home">INÍCIO</a>
            <a href="#cases">EXPERIÊNCIA</a>
            <a href="#servicos">ATUAÇÃO</a>
            <a href="#equipe">EQUIPE</a>
            <a href="#contato">CONTATO</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center text-center px-4"
      >

        <div className="max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="text-6xl md:text-8xl font-black tracking-[0.25em] text-purple-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]"
          >
            AZRIX
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-200 text-sm md:text-lg leading-relaxed"
          >
            A Azrix é uma equipe de moderação e gestão de comunidades Discord,
            especializada em organização, suporte e administração de servidores de grande porte dentro da cena digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col md:flex-row gap-3 justify-center"
          >

            <a
              href="#cases"
              className="px-7 py-3 bg-purple-600 hover:bg-purple-500 rounded font-semibold transition"
            >
              Ver experiência
            </a>

            <a
              href="#contato"
              className="px-7 py-3 border border-purple-500/40 hover:border-purple-400 rounded font-semibold transition"
            >
              Falar com a equipe
            </a>

          </motion.div>

        </div>

      </section>

      {/* EXPERIÊNCIA */}
      <section id="cases" className="relative z-10 max-w-5xl mx-auto px-4 py-24 space-y-10">

        <h2 className="text-3xl font-bold text-center text-purple-400">
          Experiência em Moderação
        </h2>

        {[
          {
            title: "Origem",
            text:
              "A Azrix nasce da vivência de moderadores e administradores que atuam em comunidades Discord de grande porte, com foco em organização, suporte e gestão de servidores altamente ativos."
          },
          {
            title: "Equipe de Moderação",
            text:
              "Jenne, LC, Camisa 7, Bruxo, Baiano e Juleas compõem a equipe, todos com experiência prática em moderação, administração e suporte em comunidades digitais."
          },
          {
            title: "Experiência em Comunidades",
            text:
              "Atuação em servidores como a comunidade da LOUD, além de projetos como Donas do Jogo, Desafio PlayHard e Game Changers."
          },
          {
            title: "Foco de Atuação",
            text:
              "Gestão de comunidades Discord, moderação ativa, suporte ao usuário e manutenção de ambientes organizados e estruturados."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#141420] border border-white/5 rounded-xl p-6"
          >
            <h3 className="font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-200 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}

      </section>

      {/* ATUAÇÃO */}
      <section id="servicos" className="relative z-10 bg-black/40 py-24 text-center">

        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          Atuação
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          <div className="bg-[#141420] p-6 rounded-xl border border-white/5">
            Moderação de Discord
          </div>

          <div className="bg-[#141420] p-6 rounded-xl border border-white/5">
            Administração de Comunidades
          </div>

          <div className="bg-[#141420] p-6 rounded-xl border border-white/5">
            Suporte Operacional
          </div>

        </div>

      </section>

      {/* EQUIPE */}
      <section id="equipe" className="relative z-10 py-24 text-center">

        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          Equipe de Moderação
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto px-4">

          {["Jenne", "LC", "Camisa 7", "Bruxo", "Baiano", "Juleas"].map((name, i) => (
            <div
              key={i}
              className="bg-[#141420] p-5 rounded-xl border border-white/5 hover:scale-105 transition"
            >
              <h3 className="font-bold">{name}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Moderação / Community Staff
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
          Entre em contato para suporte ou gestão de comunidades Discord.
        </p>

        <a
          href="mailto:contatoazrix@gmail.com"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded"
        >
          contatoazrix@gmail.com
        </a>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 text-center text-gray-500 py-8 border-t border-white/5">
        © {new Date().getFullYear()} Azrix — Moderação & Community Management
      </footer>

    </main>
  )
}