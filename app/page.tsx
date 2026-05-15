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
      className="relative bg-[#05060a] text-white min-h-screen overflow-x-hidden"
    >

      {/* FUNDO SAAS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#05060a] to-black" />

        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[140px]" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />
      </div>

      {/* MOUSE LIGHT */}
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

      {/* NAV */}
      <header className="fixed top-0 w-full bg-black/60 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">

          <h1 className="font-bold tracking-[0.3em] text-purple-400">
            AZRIX
          </h1>

          <nav className="hidden md:flex gap-8 text-xs text-gray-300 tracking-widest">
            <a href="#home">INÍCIO</a>
            <a href="#sobre">SOBRE</a>
            <a href="#equipe">EQUIPE</a>
            <a href="#contato">CONTATO</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">

        <div className="max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tight"
          >
            Gestão de Comunidades <span className="text-purple-400">Discord</span>
          </motion.h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            A Azrix é uma equipe de moderação e gestão de comunidades Discord,
            especializada em organização, suporte e administração de servidores de grande porte.
            Atuamos com experiência em comunidades como LOUD e projetos como Donas do Jogo,
            Desafio PlayHard e Game Changers.
          </p>

        </div>

      </section>

      {/* SOBRE (CARDS QUE VOCÊ QUERIA MANTER) */}
      <section id="sobre" className="relative z-10 max-w-6xl mx-auto px-5 py-24">

        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          Sobre a Azrix
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: "Origem",
              text:
                "A Azrix nasce da vivência de moderadores e administradores que atuam em comunidades Discord de grande porte, com foco em organização, suporte e gestão de servidores altamente ativos."
            },
            {
              title: "Equipe",
              text:
                "Equipe formada por Jenne, LC, Camisa 7, Bruxo, Baiano e Juleas, todos com experiência em moderação, administração e suporte em comunidades digitais."
            },
            {
              title: "Experiência",
              text:
                "Atuação em comunidades como LOUD e projetos como Donas do Jogo, Desafio PlayHard e Game Changers."
            },
            {
              title: "Foco",
              text:
                "Gestão de comunidades Discord, moderação ativa, suporte e manutenção de ambientes organizados e estruturados."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-[#141420] border border-white/5 rounded-xl p-6 hover:scale-[1.02] transition"
            >
              <h3 className="font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* EQUIPE */}
      <section id="equipe" className="relative z-10 py-24 text-center">

        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          Equipe de Moderação
        </h2>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto px-5">

          {["Jenne", "LC", "Camisa 7", "Bruxo", "Baiano", "Juleas"].map((name, i) => (
            <div key={i} className="bg-[#141420] p-5 rounded-xl border border-white/5">
              <h3 className="font-bold">{name}</h3>
              <p className="text-gray-400 text-sm">
                Moderação / Gestão Discord
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