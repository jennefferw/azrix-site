"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="bg-[#0b0b10] text-white min-h-screen">

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      >

        {/* FUNDO */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black" />
          <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10">

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
            className="text-gray-300 max-w-2xl mt-6 text-lg"
          >
            Uma organização formada por moderadores e gestores de grandes comunidades de games e esports no Brasil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 mt-10 justify-center"
          >
            <a
              href="#sobre"
              className="px-7 py-3 bg-purple-600 hover:bg-purple-700 rounded font-semibold"
            >
              Conhecer organização
            </a>

            <a
              href="#equipe"
              className="px-7 py-3 border border-purple-500 hover:bg-purple-500/20 rounded font-semibold"
            >
              Ver equipe
            </a>
          </motion.div>

        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-28">

        <h2 className="text-4xl font-bold text-center text-purple-400 mb-14">
          Sobre a Azrix
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#141420] p-6 rounded-2xl border border-white/10">
            Origem da Azrix...
          </div>

          <div className="bg-[#141420] p-6 rounded-2xl border border-white/10">
            Equipe experiente...
          </div>

          <div className="bg-[#141420] p-6 rounded-2xl border border-white/10">
            Fundadora...
          </div>

          <div className="bg-[#141420] p-6 rounded-2xl border border-white/10">
            Projetos...
          </div>

        </div>

      </section>

      {/* EQUIPE */}
      <section id="equipe" className="bg-black/40 py-24 text-center">
        <h2 className="text-3xl font-bold text-purple-400">Equipe</h2>
      </section>

      {/* CONTATO */}
      <section id="contato" className="text-center py-24">
        <h2 className="text-3xl font-bold text-purple-400">Contato</h2>
      </section>

    </main>
  )
}