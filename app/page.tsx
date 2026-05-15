"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main
      translate="no"
      className="bg-[#07070c] text-white min-h-screen overflow-x-hidden"
    >

      {/* FUNDO LIMPO (SEM EFEITO DE SUMIR) */}
      <div className="fixed inset-0 pointer-events-none bg-[#07070c]">
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-600/15 blur-[90px]" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-600/10 blur-[90px]" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/5 z-50">
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

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center px-4"
      >

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-6xl md:text-8xl font-black tracking-[0.25em] text-purple-400">
            AZRIX
          </h1>

          <p className="mt-6 text-gray-200 text-sm md:text-lg leading-relaxed">
            A Azrix é uma equipe especializada em <span className="text-white font-semibold">moderação</span>,
            <span className="text-white font-semibold"> administração</span> e gestão de comunidades Discord,
            atuando em servidores de grande porte e ambientes de alta atividade.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-3 justify-center">
            <a className="px-7 py-3 bg-purple-600 hover:bg-purple-500 rounded font-semibold">
              Ver experiência
            </a>
            <a className="px-7 py-3 border border-purple-500/40 hover:border-purple-400 rounded font-semibold">
              Falar com equipe
            </a>
          </div>

        </div>

      </section>

      {/* CASES */}
      <section id="cases" className="max-w-5xl mx-auto px-4 py-24 space-y-12">

        <h2 className="text-3xl font-bold text-center text-purple-400">
          Experiência em Moderação
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
          className="space-y-10"
        >

          {[
            {
              title: "Origem",
              text:
                "A Azrix nasce da vivência de moderadores e administradores que atuaram em comunidades Discord de grande porte, lidando diretamente com organização, suporte e estruturação de servidores ativos com alto volume de usuários."
            },
            {
              title: "Equipe de Moderação",
              text:
                "A equipe é formada por Jenne, LC, Camisa 7, Bruxo, Baiano e Juleas, todos com experiência prática em moderação, administração e suporte em comunidades digitais de grande escala."
            },
            {
              title: "Atuação em Comunidades",
              text:
                "Os membros já atuaram em comunidades como o servidor da LOUD (comunidade), além de projetos como Donas do Jogo, Desafio PlayHard e Game Changers, sempre focando em suporte e organização estrutural."
            },
            {
              title: "Foco de Trabalho",
              text:
                "A atuação é voltada para moderação, gestão de comunidades Discord, suporte ao usuário e manutenção de ambientes organizados, saudáveis e estáveis."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="bg-[#141420] border border-white/5 rounded-xl p-6"
            >
              <h3 className="font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}

        </motion.div>

      </section>

      {/* ATUAÇÃO */}
      <section id="servicos" className="bg-black/40 py-24 text-center">

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
      <section id="equipe" className="py-24 text-center">

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
      <section id="contato" className="text-center py-24">

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
      <footer className="text-center text-gray-500 py-8 border-t border-white/5">
        © {new Date().getFullYear()} Azrix — Moderação & Community Management
      </footer>

    </main>
  )
}