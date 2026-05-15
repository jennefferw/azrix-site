"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  function handleMouseMove(e: any) {
    const x = (e.clientX / window.innerWidth) * 100
    const y = (e.clientY / window.innerHeight) * 100
    setMouse({ x, y })
  }

  return (
    <main
      onMouseMove={handleMouseMove}
      className="bg-[#0b0b10] text-white min-h-screen relative overflow-hidden"
      translate="no"
    >

      {/* FUNDO DINÂMICO */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black" />

        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30 pointer-events-none transition-all duration-300"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4), transparent 60%)",
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse" />

      </div>

      {/* NAVBAR */}
      <header
        className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50"
        translate="no"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="font-bold tracking-widest text-purple-400">
            AZRIX
          </h1>

          <nav className="flex gap-6 text-sm text-gray-300">
            <a href="#home" className="hover:text-white">Início</a>
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#equipe" className="hover:text-white">Equipe</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10"
      >

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-8xl font-extrabold tracking-[0.4em] text-purple-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.8)]"
        >
          AZRIX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 max-w-2xl mt-6 text-lg leading-relaxed"
        >
          Organização formada por moderadores e gestores experientes em grandes comunidades de games e esports no Brasil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 mt-10 justify-center"
        >
          <a
            href="#sobre"
            className="px-7 py-3 bg-purple-600 hover:bg-purple-700 rounded font-semibold transition shadow-lg shadow-purple-500/20"
          >
            Conhecer organização
          </a>

          <a
            href="#equipe"
            className="px-7 py-3 border border-purple-500 hover:bg-purple-500/20 rounded font-semibold transition"
          >
            Ver equipe
          </a>
        </motion.div>

      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-28 relative z-10">

        <h2 className="text-4xl font-bold text-center text-purple-400 mb-14">
          Sobre a Azrix
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#141420] border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3 text-white">Origem</h3>
            <p className="text-gray-300">
              A Azrix nasceu da experiência real dentro de uma grande comunidade de games e esports no Brasil.  
              O projeto surgiu da vivência de moderadores e gestores que já atuaram em servidores de grande porte, lidando com organização, suporte e eventos dentro da cena gamer.
            </p>
          </div>

          <div className="bg-[#141420] border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3 text-white">Equipe</h3>
            <p className="text-gray-300">
              A equipe é formada por Jenne, LC, Camisa 7, Bruxo, Baiano e Juleas.  
              Todos possuem experiência em moderação, administração e gestão de comunidades de grande porte dentro do cenário de games e esports.
            </p>
          </div>

          <div className="bg-[#141420] border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3 text-white">Fundadora</h3>
            <p className="text-gray-300">
              A fundadora da Azrix atua há mais de 6 anos na comunidade de esports, com experiência em moderação, administração e gestão de servidores de grande porte.  
              Sua trajetória inclui participação ativa em projetos competitivos e organização de comunidades no cenário gamer.
            </p>
          </div>

          <div className="bg-[#141420] border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3 text-white">Projetos</h3>
            <p className="text-gray-300">
              A equipe da Azrix reúne experiência adquirida em diversos projetos dentro da cena de games e esports, incluindo Donas do Jogo, Desafio PlayHard e Game Changers.

Também há atuação em administração e moderação no servidor da LOUD (comunidade), com foco em organização, suporte e manutenção de ambientes de grande porte.
            </p>
          </div>

        </div>

      </section>

      {/* EQUIPE */}
      <section id="equipe" className="bg-black/40 py-24 relative z-10">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-purple-400 mb-12 text-center">
            Equipe
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {["Jenne", "LC", "Camisa 7", "Bruxo", "Baiano", "Juleas"].map((name, i) => (
              <div
                key={i}
                className="bg-[#141420] p-6 rounded-xl border border-white/10 hover:scale-105 transition"
              >
                <h3 className="font-bold">{name}</h3>
                <p className="text-gray-400 mt-2">
                  Membro da equipe Azrix
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTATO */}
      <section id="contato" className="text-center py-24 relative z-10">

        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          Contato
        </h2>

        <a
          href="mailto:contatoazrix@gmail.com"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded inline-block"
        >
          contatoazrix@gmail.com
        </a>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-10 border-t border-white/10 relative z-10">
        © {new Date().getFullYear()} Azrix
      </footer>

    </main>
  )
}