"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="bg-[#0b0b10] text-white min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="font-bold tracking-widest text-purple-400">
            AZRIX
          </h1>

          <nav className="flex gap-6 text-sm text-gray-300">
            <a href="#home" className="hover:text-white">Início</a>
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#equipe" className="hover:text-white">Equipe</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      >

        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />

        <div className="relative z-10">

          <h1 className="text-7xl md:text-8xl font-extrabold tracking-[0.4em] text-purple-400">
            AZRIX
          </h1>

          <p className="text-gray-300 max-w-2xl mt-6 text-lg">
            Uma organização formada por moderadores e gestores de grandes comunidades de games e esports no Brasil.
          </p>

        </div>
      </section>

      {/* SOBRE (ANIMADO) */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-28">

        <h2 className="text-4xl font-bold text-center text-purple-400 mb-14">
          Sobre a Azrix
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid md:grid-cols-2 gap-8"
        >

          {[
            {
              title: "Origem",
              text: "A Azrix nasceu da experiência real dentro de comunidades de games e entretenimento do Brasil."
            },
            {
              title: "Equipe",
              text: "Nossa equipe é composta por 6 profissionais com vasta experiência em gestão de comunidades, suporte e moderação."
            },
            {
              title: "Fundadora",
              text: "Atua há mais de 6 anos na comunidade de Esports, com experiência em moderação e administração."
            },
            {
              title: "Projetos",
              text: "Administração e moderação no servidor da LOUD (comunidade), Donas do Jogo, Desafio PlayHard e Game Changers."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#141420] border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300">
                {item.text}
              </p>
            </motion.div>
          ))}

        </motion.div>

        <div className="text-center mt-16">
          <p className="text-purple-300 text-lg font-medium">
            Comunidades fortes são construídas com estrutura, presença e experiência real.
          </p>
        </div>

      </section>

      {/* EQUIPE */}
      <section id="equipe" className="bg-black/40 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-purple-400 mb-12 text-center">
            Equipe
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#141420] p-6 rounded-xl border border-white/10">
              <h3 className="font-bold">Admin</h3>
            </div>

            <div className="bg-[#141420] p-6 rounded-xl border border-white/10">
              <h3 className="font-bold">Moderador</h3>
            </div>

            <div className="bg-[#141420] p-6 rounded-xl border border-white/10">
              <h3 className="font-bold">Gestor</h3>
            </div>

          </div>

        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="text-center py-24">

        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          Contato
        </h2>

        <a
          href="mailto:contatoazrix@gmail.com"
          className="px-6 py-3 bg-purple-600 rounded"
        >
          contatoazrix@gmail.com
        </a>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-10">
        © {new Date().getFullYear()} Azrix
      </footer>

    </main>
  )
}