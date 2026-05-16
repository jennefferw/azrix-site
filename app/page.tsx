"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {

  const [selected, setSelected] = useState<any>(null)
  const [menuOpen, setMenuOpen] = useState(false)

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

  const navItems = [
    { label: "INÍCIO", id: "inicio" },
    { label: "SOBRE", id: "sobre" },
    { label: "EXPERIÊNCIA", id: "experiencia" },
    { label: "EQUIPE", id: "equipe" },
    { label: "CONTATO", id: "contato" },
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
            <img
              src="/logo.png"
              alt="Azrix"
              className="h-16 object-contain"
            />
          </motion.h1>

          <nav className="hidden md:flex gap-8 text-xs text-gray-300 tracking-widest">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.id}`}
                whileHover={{ scale: 1.1 }}
                className="hover:text-purple-400 transition"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white text-2xl"
            >
              ☰
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex">

          <div className="w-64 bg-[#141420] p-6">

            <button
              onClick={() => setMenuOpen(false)}
              className="text-white mb-6"
            >
              ✕
            </button>

            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-300"
              >
                {item.label}
              </a>
            ))}

          </div>

          <div className="flex-1" onClick={() => setMenuOpen(false)} />

        </div>
      )}

      {/* HERO */}
      <section id="inicio" className="min-h-screen flex items-center justify-center text-center px-6">

        <div>
          <img src="/logo.png" className="w-72 md:w-96 mx-auto mb-10" />

          <h1 className="text-5xl md:text-7xl font-black">
            Azrix <span className="text-purple-400">Gestão de Comunidades</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            A Azrix é uma equipe especializada em moderação e gestão de comunidades Discord.
          </p>
        </div>

      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          Sobre a Azrix
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#141420] p-6 rounded-xl">
            Origem e estrutura
          </div>
          <div className="bg-[#141420] p-6 rounded-xl">
            Experiência e foco
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          Experiência
        </h2>

        <div className="bg-[#141420] p-6 rounded-xl text-gray-300">
          Atuação em moderação de comunidades de grande porte...
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="py-24 text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          Equipe Azrix
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {members.map((m, i) => (
            <div
              key={i}
              onClick={() => setSelected(m)}
              className="bg-[#141420] p-6 rounded-xl cursor-pointer"
            >
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="text-purple-300">{m.role}</p>
            </div>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#141420] p-6 rounded-xl max-w-md">
              <h3 className="text-2xl text-purple-400">{selected.name}</h3>
              <p className="text-purple-300">{selected.role}</p>
              <p className="text-gray-300 mt-4">{selected.desc}</p>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 bg-purple-600 w-full py-2 rounded"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

      </section>

      {/* CONTATO */}
      <section id="contato" className="text-center py-24">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          Contato
        </h2>

        <p className="text-gray-300 mb-6">
          Entre em contato para suporte ou gestão de comunidades.
        </p>

        <a
          href="mailto:contatoazrix@gmail.com"
          className="bg-purple-600 px-6 py-3 rounded"
        >
          Entrar em contato
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-8">
        © 2026 Azrix — Gestão de Comunidades
      </footer>

    </main>
  )
}