"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {

  const [selected, setSelected] = useState<any>(null)

  const members = [
    {
      name: "Jenne",
      role: "Administração e Estrutura",
      desc: "Possui experiência em moderação e administração de comunidades Discord, com atuação em ambientes de grande atividade. Trabalha com organização, suporte e manutenção de comunidades, garantindo fluidez e bom funcionamento geral."
    },
    {
      name: "LC",
      role: "Suporte e Moderação",
      desc: "Possui experiência em moderação de comunidades Discord, com foco no suporte a membros e na resolução de problemas em ambientes ativos."
    },
    {
      name: "Camisa 7",
      role: "Moderação e Estratégia",
      desc: "Possui experiência em moderação e suporte em comunidades Discord, atuando em interações com membros e organização de atividades da comunidade."
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

      {/* FUNDO (IDENTIDADE FORTE) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#05060a]" />

        {/* GRID PREMIUM */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* GLOW CENTRAL */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[140px]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 w-full bg-black/40 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="font-black tracking-[0.35em] text-purple-400">
            AZRIX
          </h1>

          <nav className="hidden md:flex gap-8 text-xs text-gray-300 tracking-widest">
            <a className="hover:text-purple-400 transition" href="#inicio">INÍCIO</a>
            <a className="hover:text-purple-400 transition" href="#sobre">SOBRE</a>
            <a className="hover:text-purple-400 transition" href="#oquefazemos">O QUE FAZEMOS</a>
            <a className="hover:text-purple-400 transition" href="#experiencia">EXPERIÊNCIA</a>
            <a className="hover:text-purple-400 transition" href="#equipe">EQUIPE</a>
            <a className="hover:text-purple-400 transition" href="#contato">CONTATO</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">

        <div className="max-w-4xl">

          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Azrix <span className="text-purple-400">Gestão de Comunidades</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Atuamos na moderação e suporte de comunidades Discord, mantendo ambientes organizados,
            estruturados e funcionais em projetos de grande atividade.
          </p>

        </div>

      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-black text-center text-purple-400 mb-12">
          Sobre a Azrix
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: "Estrutura",
              text: "A Azrix é formada por pessoas com experiência em moderação de comunidades ativas, focando em organização, suporte e estabilidade."
            },
            {
              title: "Atuação",
              text: "Trabalhamos em ambientes de grande atividade, garantindo fluidez na comunicação e suporte eficiente aos membros."
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#0f111a] border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition">

              <h3 className="font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>

            </div>
          ))}

        </div>

      </section>

      {/* O QUE FAZEMOS */}
      <section id="oquefazemos" className="relative z-10 max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-black text-center text-purple-400 mb-12">
          O que fazemos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Moderação de comunidades Discord em ambientes ativos",
            "Suporte a membros e organização de interações",
            "Manutenção de ambientes estruturados e funcionais"
          ].map((item, i) => (
            <div key={i} className="bg-[#0f111a] border border-white/5 rounded-2xl p-6 text-gray-300 hover:border-purple-500/30 transition">
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="relative z-10 max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-black text-center text-purple-400 mb-12">
          Experiência
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Atuação em moderação de comunidades de grande atividade",
            "Suporte operacional e organização de ambientes digitais",
            "Gestão de interações em tempo real",
            "Manutenção de comunidades estruturadas"
          ].map((item, i) => (
            <div key={i} className="bg-[#0f111a] border border-white/5 rounded-2xl p-6 text-gray-300 hover:border-purple-500/30 transition">
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* EQUIPE */}
      <section id="equipe" className="relative z-10 py-24 text-center">

        <h2 className="text-4xl font-black text-purple-400 mb-10">
          Equipe Azrix
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 px-6">
          A equipe Azrix trabalha de forma colaborativa na moderação e suporte de comunidades Discord.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

          {members.map((m, i) => (
            <div
              key={i}
              onClick={() => setSelected(m)}
              className="cursor-pointer bg-[#0f111a] border border-white/5 rounded-2xl p-6 text-left hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition"
            >
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="text-purple-300 text-sm mt-2">{m.role}</p>
            </div>
          ))}

        </div>

        {/* MODAL */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6"
            onClick={() => setSelected(null)}
          >

            <div
              className="bg-[#0f111a] max-w-md w-full rounded-2xl p-6 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >

              <h3 className="text-2xl text-purple-400 mb-2">
                {selected.name}
              </h3>

              <p className="text-purple-300 mb-4">
                {selected.role}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {selected.desc}
              </p>

            </div>

          </div>
        )}

      </section>

      {/* CONTATO */}
      <section id="contato" className="text-center py-24">

        <h2 className="text-4xl font-black text-purple-400 mb-6">
          Contato
        </h2>

        <p className="text-gray-400 mb-6">
          Entre em contato para parcerias ou suporte em comunidades Discord.
        </p>

        <button className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-500 transition">
          Entrar em contato
        </button>

      </section>

    </main>
  )
}