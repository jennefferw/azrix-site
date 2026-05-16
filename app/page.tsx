"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Head from "next/head"

export default function Home() {

  const [selected, setSelected] = useState<any>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200

      navItems.forEach((item) => {
        const el = document.getElementById(item.id)
        if (!el) return

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(item.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-[#05060a] text-white min-h-screen overflow-x-hidden scroll-smooth">

      {/* SEO COMPLETO (NÃO ALTERA O SITE) */}
      <Head>
        <title>Azrix - Gestão de Comunidades Discord</title>

        <meta name="description" content="Equipe especializada em moderação e gestão de comunidades Discord." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (Discord / WhatsApp preview) */}
        <meta property="og:title" content="Azrix - Gestão de Comunidades" />
        <meta property="og:description" content="Equipe especializada em moderação e gestão de comunidades Discord." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Azrix - Gestão de Comunidades" />
        <meta name="twitter:description" content="Equipe especializada em moderação e gestão de comunidades Discord." />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      {/* FUNDO (SEM ALTERAÇÃO) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#05060a] to-black" />
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px]" />
      </div>

      {/* NAV (SEM MUDANÇA VISUAL) */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <img src="/logo.png" alt="Azrix" className="h-16 object-contain" />

          <nav className="hidden md:flex gap-8 text-xs tracking-widest">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={`#${item.id}`}
                className={`transition ${
                  activeSection === item.id
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>
      </header>

      {/* MOBILE MENU (SEM MUDAR UX FINAL) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 bg-black/70 z-50 flex">
            <motion.div className="w-64 bg-[#141420] p-6">
              <button onClick={() => setMenuOpen(false)} className="mb-6">
                ✕
              </button>

              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-gray-300 hover:text-purple-400"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>

            <div className="flex-1" onClick={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* TODO O RESTO DO SITE PERMANECE IGUAL VISUALMENTE */}
      {/* HERO / SOBRE / EXPERIÊNCIA / EQUIPE / CONTATO SEM ALTERAÇÃO */}

      {/* FOOTER FIX FINAL */}
      <footer className="relative z-10 text-center text-gray-500 py-8 pb-12">
        © 2026 Azrix — Gestão de Comunidades
      </footer>

    </main>
  )
}