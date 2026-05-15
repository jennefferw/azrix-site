{/* EXPERIÊNCIA */}
<section id="experiencia" className="relative z-10 max-w-6xl mx-auto px-5 pb-24">

  <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
    Experiência
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      "LOUD — atuação em suporte e moderação dentro da comunidade, com foco na organização do chat, controle de interações em alto volume e manutenção de um ambiente estável para usuários em períodos de grande atividade.",
      
      "Donas do Jogo — suporte operacional e moderação durante o projeto, garantindo fluidez na comunicação, organização das interações e consistência no ambiente durante toda a execução.",
      
      "Desafio PlayHard — moderação em tempo real durante o evento, com foco no controle de comportamento no chat e na manutenção da dinâmica entre os participantes.",
      
      "Game Changers — suporte à comunidade com atuação em organização e moderação, contribuindo para um ambiente estruturado e funcional ao longo do projeto."
    ].map((c, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-[#141420] border border-white/5 rounded-xl p-6 hover:scale-[1.02] transition-transform"
      >
        {c}
      </motion.div>
    ))}

  </div>

</section>