"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="bg-[#0b0b10] text-white min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="font-bold tracking-widest text-purple-400">
            AZRIX teste
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

  {/* EFEITO DE FUNDO */}
  <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />

  {/* CONTEÚDO */}
  <div className="relative z-10">

    <h1 className="text-7xl md:text-8xl font-extrabold tracking-[0.4em] text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
      AZRIX
    </h1>

    <p className="text-gray-300 max-w-2xl mt-6 text-lg leading-relaxed">
      Uma organização formada por moderadores e gestores de grandes comunidades de games e esports no Brasil.
    </p>

    <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center">

      <a
        href="#sobre"
        className="px-7 py-3 bg-purple-600 hover:bg-purple-700 rounded font-semibold transition shadow-lg shadow-purple-500/20"
      >
        Conhecer organização
      </a>

      <a
        href="#equipe"
        className="px-7 py-3 border border-purple-500 hover:bg-purple-500/20 rounded font-semibold transition"
      >
        Ver equipe
      </a>

    </div>

    {/* MINI INDICADOR */}
    <p className="text-gray-500 mt-10 text-sm tracking-widest">
      SCROLL PARA EXPLORAR
    </p>

  </div>

</section>
      {/* SOBRE */}
     <section id="sobre" className="max-w-6xl mx-auto px-6 py-28">

  <h2 className="text-4xl font-bold text-center text-purple-400 mb-14">
    Sobre a Azrix
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* CARD 1 */}
    <div className="bg-[#141420] border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold mb-3 text-white">Origem</h3>
      <p className="text-gray-300 leading-relaxed">
        A Azrix nasceu da experiência real dentro de uma das maiores comunidades de games e entretenimento do Brasil.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-[#141420] border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold mb-3 text-white">Equipe</h3>
      <p className="text-gray-300 leading-relaxed">
        Nossa equipe é composta por 6 profissionais com vasta experiência em gestão de comunidades, suporte e moderação em larga escala.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-[#141420] border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold mb-3 text-white">Fundadora</h3>
      <p className="text-gray-300 leading-relaxed">
        Atua há mais de 6 anos na comunidade de Esports, com experiência em moderação e administração de servidores oficiais.
      </p>
    </div>

    {/* CARD 4 */}
    <div className="bg-[#141420] border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold mb-3 text-white">Projetos</h3>
      <p className="text-gray-300 leading-relaxed">
        Donas do Jogo, Desafio PlayHard, Game Changers e operações de eventos ao vivo em comunidades competitivas.
      </p>
    </div>

  </div>

  {/* FRASE FINAL */}
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
              <p className="text-gray-400 mt-2">Gestão de comunidade</p>
            </div>

            <div className="bg-[#141420] p-6 rounded-xl border border-white/10">
              <h3 className="font-bold">Moderador</h3>
              <p className="text-gray-400 mt-2">Suporte e moderação</p>
            </div>

            <div className="bg-[#141420] p-6 rounded-xl border border-white/10">
              <h3 className="font-bold">Gestor</h3>
              <p className="text-gray-400 mt-2">Eventos e organização</p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-5xl mx-auto px-6 py-24 text-center">

  <h2 className="text-3xl font-bold text-purple-400 mb-6">
    Contato
  </h2>

  <p className="text-gray-300 mb-8">
    Fale com a equipe Azrix pelo e-mail abaixo.
  </p>

  <a
    href="mailto:contato@azrix.com"
    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded inline-block"
  >
    contatoazrix@gmail.com
  </a>

</section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-10 border-t border-white/10">
        © {new Date().getFullYear()} Azrix
      </footer>

    </main>
  )
}