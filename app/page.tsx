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

  // 🔥 DETECTA SEÇÃO ATIVA (SEM MEXER NO SITE VISUAL)
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item =>
        document.getElementById(item.id)
      )

      const scrollPos = window.scrollY + 200

      sections.forEach((section, i) => {
        if (!section) return

        const offsetTop = section.offsetTop
        const offsetHeight = section.offsetHeight

        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(navItems[i].id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-[#05060a] text-white min-h-screen overflow-x-hidden scroll-smooth">

      <Head>
        <title>Azrix - Gestão de Comunidades Discord</title>
        <meta name="description" content="Equipe especializada em moderação e gestão de comunidades Discord." />
      </Head>

      {/* FUNDO */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#05060a] to-black" />
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <motion.h1 className="font-bold tracking-[0.35em] text-purple-400">
            <img src="/logo.png" alt="Azrix" className="h-16 object-contain" />
          </motion.h1>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-xs tracking-widest">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.id}`}
                whileHover={{ scale: 1.1 }}
                className={`transition ${
                  activeSection === item.id
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* MOBILE BTN */}
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

      {/* MOBILE MENU (ANIMADO) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex"
          >

            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              exit={{ x: -200 }}
              className="w-64 bg-[#141420] p-6"
            >

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
                  className="block py-3 text-gray-300 hover:text-purple-400"
                >
                  {item.label}
                </a>
              ))}

            </motion.div>

            <div
              className="flex-1"
              onClick={() => setMenuOpen(false)}
            />

          </motion.div>
        )}
      </AnimatePresence>

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

      {/* SOBRE / EXPERIÊNCIA / EQUIPE / CONTATO (PERMANECE IGUAL) */}
      {/* 👉 TODO O RESTO DO SEU SITE FOI MANTIDO 100% IGUAL ABAIXO */}

      {/* SOBRE */}
      <section id="sobre" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          Sobre a Azrix
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[{
            title: "Origem e Estrutura",
            text: "A Azrix nasce da experiência prática em comunidades Discord ativas, com foco em organização, suporte e estruturação de ambientes de grande porte."
          },{
            title: "Experiência e Foco",
            text: "A equipe atua com moderação e suporte operacional em comunidades, garantindo ambientes organizados e funcionais."
          }].map((item, i) => (
            <motion.div key={i} className="bg-[#141420] border border-white/5 rounded-xl p-6">
              <h3 className="font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <motion.h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          Experiência
        </motion.h2>

        <div className="max-w-3xl mx-auto bg-[#141420] border border-white/5 rounded-xl p-6 text-gray-300">
          Atuação em moderação de comunidades de grande porte com foco em suporte e organização.
        </div>
      </section>

      {/* EQUIPE + MODAL (SEM ALTERAÇÃO DE TEXTO) */}
      <section id="equipe" className="relative z-10 py-24 text-center">

        <motion.h2 className="text-3xl font-bold text-purple-400 mb-10">
          Equipe Azrix
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

          {members.map((m, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected(m)}
              className="cursor-pointer bg-[#141420] border border-white/5 rounded-2xl p-6 text-left"
            >
              <h3 className="text-xl font-bold text-white">{m.name}</h3>
              <p className="text-sm text-purple-300 mt-2">{m.role}</p>
            </motion.div>
          ))}

        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-[#141420] max-w-md w-full rounded-2xl p-6"
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
                  className="mt-6 w-full bg-purple-600 py-2 rounded"
                >
                  Fechar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* CONTATO */}
      <section id="contato" className="relative z-10 text-center py-24">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          Contato
        </h2>

        <p className="text-gray-300 mb-6">
          Entre em contato para suporte ou gestão de comunidades.
        </p>

        <a
          href="mailto:contatoazrix@gmail.com"
          className="inline-block px-6 py-3 bg-purple-600 rounded"
        >
          Entrar em contato
        </a>
      </section>

      <footer className="text-center text-gray-500 py-8">
        © 2026 Azrix — Gestão de Comunidades
      </footer>

    </main>
  )
}