"use client"

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

      {/* FUNDO (mantido original premium) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#05060a]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[140px]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 w-full bg-black/40 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="font-black tracking-[0.35em] text-purple-400">
            AZRIX
          </h1>

          <nav className="hidden md:flex gap-8 text-xs text-gray-300">
            <a href="#inicio">INÍCIO</a>
            <a href="#sobre">SOBRE</a>
            <a href="#oquefazemos">O QUE FAZEMOS</a>
            <a href="#experiencia">EXPERIÊNCIA</a>
            <a href="#equipe">EQUIPE</a>
            <a href="#contato">CONTATO</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="min-h-screen flex items-center justify-center text-center px-6 relative z-10">

        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black">
            AZRIX <span className="text-purple-400">GESTÃO DE COMUNIDADES</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Atuamos na moderação e suporte de comunidades Discord,
            mantendo ambientes organizados e funcionais em projetos de grande atividade.
          </p>
        </div>

      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-24 relative z-10">

        <h2 className="text-4xl font-black text-purple-400 mb-12 text-center">
          Sobre a Azrix
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#0f111a] border border-white/5 rounded-2xl p-6">
            <h3 className="font-bold mb-3">Estrutura</h3>
            <p className="text-gray-300">
              A Azrix é formada por pessoas com experiência em moderação de comunidades ativas,
              focando em organização, suporte e estabilidade.
            </p>
          </div>

          <div className="bg-[#0f111a] border border-white/5 rounded-2xl p-6">
            <h3 className="font-bold mb-3">Atuação</h3>
            <p className="text-gray-300">
              Trabalhamos em ambientes de grande atividade, garantindo fluidez na comunicação e suporte eficiente aos membros.
            </p>
          </div>

        </div>

      </section>

      {/* O QUE FAZEMOS (RESTAURO 3 CARDS) */}
      <section id="oquefazemos" className="max-w-6xl mx-auto px-6 pb-24 relative z-10">

        <h2 className="text-4xl font-black text-purple-400 mb-12 text-center">
          O que fazemos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Moderação de comunidades Discord em ambientes ativos",
            "Suporte a membros e organização de interações",
            "Manutenção de ambientes estruturados e funcionais"
          ].map((item, i) => (
            <div key={i} className="bg-[#0f111a] border border-white/5 rounded-2xl p-6 text-gray-300">
              <span className="text-purple-400 font-bold block mb-2">AZRIX</span>
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* EXPERIÊNCIA (RESTAURO 4 CARDS) */}
      <section id="experiencia" className="max-w-6xl mx-auto px-6 pb-24 relative z-10">

        <h2 className="text-4xl font-black text-purple-400 mb-12 text-center">
          Experiência
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Atuação em moderação de comunidades de grande atividade com foco em suporte e organização.",
            "Suporte operacional em ambientes ativos garantindo fluidez na comunicação.",
            "Moderação em eventos e atividades em tempo real.",
            "Apoio na manutenção de comunidades estruturadas e organizadas."
          ].map((item, i) => (
            <div key={i} className="bg-[#0f111a] border border-white/5 rounded-2xl p-6 text-gray-300">
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* EQUIPE (MODAL RESTAURADO CORRETO) */}
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
              className="cursor-pointer bg-[#0f111a] border border-white/5 rounded-2xl p-6 text-left hover:border-purple-500/30 transition"
            >
              <span className="text-purple-400 text-xs">AZRIX</span>
              <h3 className="text-xl font-bold mt-2">{m.name}</h3>
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
              className="bg-[#0f111a] max-w-md w-full rounded-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >

              <h3 className="text-2xl text-purple-400 mb-2">{selected.name}</h3>
              <p className="text-purple-300 mb-4">{selected.role}</p>
              <p className="text-gray-300">{selected.desc}</p>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 w-full bg-purple-600 py-2 rounded-xl"
              >
                Fechar
              </button>

            </div>

          </div>
        )}

      </section>

      {/* CONTATO RESTAURADO */}
      <section id="contato" className="text-center py-24 relative z-10">

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