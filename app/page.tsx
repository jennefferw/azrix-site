"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="bg-[#07070c] text-white min-h-screen overflow-hidden">

      {/* FUNDO MAIS PROFUNDO */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/10 blur-[140px]" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-black/60 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">

          <h1 className="font-bold tracking-[0.4em] text-purple-400">
            AZRIX
          </h1>

          <nav className="hidden md:flex gap-8 text-xs tracking-widest text-gray-400">
            <a href="#home">INÍCIO</a>
            <a href="#value">VALOR</a>
            <a href="#cases">CASES</a>
            <a href="#servicos">SERVIÇOS</a>
            <a href="#equipe">EQUIPE</a>
            <a href="#contato">CONTATO</a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
          </button>

        </div>
      </header>

      {/* HERO MAIS FORTE */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4">

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-6xl md:text-8xl font-black tracking-[0.25em] text-purple-400">
            AZRIX
          </h1>

          <p className="mt-6 text-gray-300 text-sm md:text-lg leading-relaxed">
            Equipe especializada em <span className="text-white font-semibold">moderação</span>,
            <span className="text-white font-semibold"> administração</span> e gestão de comunidades Discord.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-3 justify-center">
            <a className="px-7 py-3 bg-purple-600 hover:bg-purple-500 rounded font-semibold">
              Ver estrutura
            </a>
            <a className="px-7 py-3 border border-purple-500/40 hover:border-purple-400 rounded font-semibold">
              Falar com equipe
            </a>
          </div>

        </div>

      </section>

      {/* VALUE SECTION (NOVO) */}
      <section id="value" className="max-w-5xl mx-auto px-4 py-24">

        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          O que fazemos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Moderação",
              text: "Controle e organização de comunidades Discord de grande porte."
            },
            {
              title: "Administração",
              text: "Estruturação de servidores, cargos e fluxos internos."
            },
            {
              title: "Suporte",
              text: "Atendimento e manutenção de comunidades ativas."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#12121a] border border-white/5 rounded-xl p-6 hover:scale-[1.02] transition"
            >
              <h3 className="font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          ))}

        </div>

      </section>

      {/* CASES MAIS PREMIUM */}
      <section id="cases" className="max-w-5xl mx-auto px-4 py-24 space-y-12">

        <h2 className="text-3xl font-bold text-center text-purple-400">
          Experiência
        </h2>

        {[
          {
            title: "Origem",
            text: "A Azrix nasce da vivência de moderadores e administradores de comunidades Discord de grande porte."
          },
          {
            title: "Equipe",
            text: "Jenne, LC, Camisa 7, Bruxo, Baiano e Juleas — todos com experiência prática em moderação."
          },
          {
            title: "Comunidades",
            text: "Atuação em ambientes como LOUD (comunidade) e projetos da cena gamer."
          },
          {
            title: "Projetos",
            text: "Donas do Jogo, Desafio PlayHard e Game Changers."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#141420] border border-white/5 rounded-xl p-6"
          >
            <h3 className="font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.text}</p>
          </motion.div>
        ))}

      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-black/40 py-24 text-center">

        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          Serviços
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          <div className="bg-[#12121a] p-6 rounded-xl border border-white/5">
            Moderação Discord
          </div>

          <div className="bg-[#12121a] p-6 rounded-xl border border-white/5">
            Gestão de Comunidades
          </div>

          <div className="bg-[#12121a] p-6 rounded-xl border border-white/5">
            Suporte Operacional
          </div>

        </div>

      </section>

      {/* EQUIPE */}
      <section id="equipe" className="py-24 text-center">

        <h2 className="text-3xl font-bold text-purple-400 mb-10">
          Equipe
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto px-4">

          {["Jenne", "LC", "Camisa 7", "Bruxo", "Baiano", "Juleas"].map((name, i) => (
            <div key={i} className="bg-[#12121a] p-5 rounded-xl border border-white/5">
              {name}
            </div>
          ))}

        </div>

      </section>

      {/* CONTATO */}
      <section id="contato" className="text-center py-24">

        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          Contato
        </h2>

        <a className="px-6 py-3 bg-purple-600 rounded">
          contatoazrix@gmail.com
        </a>

      </section>

    </main>
  )
}