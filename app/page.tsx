"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function TeamSection() {

  const [selected, setSelected] = useState<any>(null)

  const members = [
    {
      name: "Jenne",
      role: "Administração e Estrutura",
      desc: "Organização de servidores, regras, equipes, planilhas e bots. Também contribui na coordenação geral da equipe."
    },
    {
      name: "LC",
      role: "Suporte e Moderação",
      desc: "Auxílio a membros, resolução de problemas e organização interna da equipe e comunidade."
    },
    {
      name: "Camisa 7",
      role: "Moderação e Estratégia",
      desc: "Participação em reuniões, suporte em calls e contribuição em decisões operacionais."
    },
    {
      name: "Bruxo",
      role: "Engajamento e Suporte",
      desc: "Moderação e interação com membros, apoio em dinâmicas e colaboração com a equipe."
    },
    {
      name: "Baiano",
      role: "Interação e Moderação",
      desc: "Foco em interações com membros e suporte à organização da comunidade."
    },
    {
      name: "Juleas",
      role: "Suporte Comunitário",
      desc: "Moderação e suporte geral, colaborando com a organização e funcionamento das comunidades."
    }
  ]

  return (
    <section id="equipe" className="relative z-10 py-24 text-center">

      <h2 className="text-3xl font-bold text-purple-400 mb-10">
        Equipe Azrix
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-12 px-6">
        A equipe Azrix trabalha de forma colaborativa e autogerida, atuando em moderação,
        suporte e organização de comunidades Discord em diferentes ambientes e projetos.
      </p>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

        {members.map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(m)}
            className="cursor-pointer relative bg-[#141420] border border-white/5 rounded-2xl p-6 text-left overflow-hidden transition-all"
          >

            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-purple-600/10 blur-2xl" />

            <div className="relative z-10">

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{m.name}</h3>
                <span className="text-xs text-purple-400 border border-purple-500/30 px-2 py-1 rounded-full">
                  AZRIX
                </span>
              </div>

              <p className="text-sm text-purple-300">
                {m.role}
              </p>

            </div>
          </motion.div>
        ))}

      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6"
          onClick={() => setSelected(null)}
        >

          <div
            className="bg-[#141420] max-w-md w-full rounded-2xl p-6 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >

            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              {selected.name}
            </h3>

            <p className="text-purple-300 mb-4">
              {selected.role}
            </p>

            <p className="text-gray-300 leading-relaxed">
              {selected.desc}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 px-4 py-2 bg-purple-600 rounded hover:bg-purple-500 transition w-full"
            >
              Fechar
            </button>

          </div>

        </div>
      )}

    </section>
  )
}