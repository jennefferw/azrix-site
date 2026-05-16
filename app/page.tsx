"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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

  /* 🔧 REFINO 1 — fechar menu no ESC */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  /* 🔧 REFINO 2 — scroll suave reforçado */
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

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

          {/* DESKTOP MENU (REFINADO HOVER VISUAL) */}
          <nav className="hidden md:flex gap-8 text-xs text-gray-300 tracking-widest">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.id}`}
                whileHover={{ scale: 1.08 }}
                className="hover:text-purple-400 transition duration-200"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white text-2xl active:scale-95 transition"
            >
              ☰
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU (REFINADO ANIMAÇÃO SEM MUDAR ESTRUTURA) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex animate-in fade-in duration-200">

          <div className="w-64 bg-[#141420] p-6 animate-in slide-in-from-left duration-200">

            <button
              onClick={() => setMenuOpen(false)}
              className="text-white mb-6 active:scale-95 transition"
            >
              ✕
            </button>

            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-purple-400 transition"
              >
                {item.label}
              </a>
            ))}

          </div>

          <div
            className="flex-1"
            onClick={() => setMenuOpen(false)}
          />

        </div>
      )}

      {/* HERO */}
      <section id="inicio" className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">

        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
          className="max-w-4xl"
        >

          <img
            src="/logo.png"
            alt="Azrix Logo"
            className="w-72 md:w-96 mx-auto mb-10 object-contain"
          />

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black">
            Azrix <span className="text-purple-400">Gestão de Comunidades</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-gray-300 text-lg leading-relaxed">
            A Azrix é uma equipe especializada em moderação e gestão de comunidades Discord,
            focada na organização, suporte e estruturação de servidores de grande porte.
          </motion.p>

        </motion.div>

      </section>

      {/* ⚠️ resto do teu código continua exatamente igual */}
      {/* não alterei NADA das tuas seções */}

    </main>
  )
}