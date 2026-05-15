"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="bg-[#0b0b10] text-white min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">

          <h1 className="font-bold tracking-widest text-purple-400">
            AZRIX
          </h1>

          <nav className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="#home">Início</a>
            <a href="#cases">Experiência</a>
            <a href="#servicos">Atuação</a>
            <a href="#equipe">Equipe</a>
            <a href="#contato">Contato</a>
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
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-[0.35em] text-purple-400">
          AZRIX
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-sm md:text-lg leading-relaxed">
          A Azrix é uma equipe especializada em moderação, administração e gestão de comunidades Discord, atuando em servidores de grande porte e ambientes de alta atividade.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-3">
          <a
            href="#cases"
            className="px-7 py-3 bg-purple-600 hover:bg-purple-500 rounded font-semibold"
          >
            Ver experiência
          </a>

          <a
            href="#contato"
            className="px-7 py-3 border border-purple-500/40 hover:border-purple-400 rounded font-semibold"
          >
            Falar com a equipe
          </a>
        </div>

      </section>

      {/* CASES / EXPERIÊNCIA */}
      <section id="cases" className="max-w-5xl mx-auto px-4 py-28 space-y-16">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400">
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
                "A Azrix surge da experiência de moderadores e administradores que atuaram em comunidades Discord de grande porte, lidando com organização, suporte e estruturação de servidores."
            },
            {
              title: "Equipe de Moderação",
              text:
                "A equipe é formada por Jenne, LC, Camisa 7, Bruxo, Baiano e Juleas, todos com experiência prática em moderação e administração de comunidades ativas."
            },
            {
              title: "Atuação em Comunidades",
              text:
                "Os membros já atuaram em comunidades como o servidor da LOUD (comunidade), além de projetos como Donas do Jogo, Desafio PlayHard e Game Changers."
            },
            {
              title: "Foco de Trabalho",
              text:
                "A atuação é voltada para moderação, organização de servidores, suporte a usuários e manutenção de ambientes saudáveis e estruturados."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="bg-[#141420] border border-white/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}

        </motion.div>

      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-black/30 py-28">

        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold text-purple-400 mb-12">
            Atuação
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">

            <div className="bg-[#141420] p-6 rounded-xl border border-white/5">
              <h3 className="font-bold mb-2">Moderação de Discord</h3>
              <p className="text-gray-400 text-sm">
                Controle, organização e segurança de servidores.
              </p>
            </div>

            <div className="bg-[#141420] p-6 rounded-xl border border-white/5">
              <h3 className="font-bold mb-2">Administração de Comunidades</h3>
              <p className="text-gray-400 text-sm">
                Gestão de estrutura, cargos e fluxos internos.
              </p>
            </div>

            <div className="bg-[#141420] p-6 rounded-xl border border-white/5">
              <h3 className="font-bold mb-2">Suporte Operacional</h3>
              <p className="text-gray-400 text-sm">
                Atendimento e manutenção de comunidades ativas.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* EQUIPE */}
      <section id="equipe" className="py-28 text-center">

        <h2 className="text-3xl font-bold text-purple-400 mb-12">
          Equipe de Moderação
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto px-4">

          {["Jenne", "LC", "Camisa 7", "Bruxo", "Baiano", "Juleas"].map((name, i) => (
            <div
              key={i}
              className="bg-[#141420] border border-white/5 rounded-xl p-5"
            >
              <h3 className="font-bold">{name}</h3>
              <p className="text-gray-500 text-sm mt-2">
                Moderação / Community Staff
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CONTATO */}
      <section id="contato" className="text-center py-28">

        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          Contato
        </h2>

        <p className="text-gray-400 mb-6">
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
      <footer className="text-center text-gray-600 py-8 border-t border-white/5">
        © {new Date().getFullYear()} Azrix — Moderação & Community Management
      </footer>

    </main>
  )
}