import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AzrixLogo } from "../components/AzrixLogo";
import heroSetup from "../assets/hero-setup.jpg";
import liveModeration from "../assets/live-moderation.jpg";
import aboutGuardian from "../assets/about-guardian.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Azrix — Tecnologia para comunidades que querem evoluir" },
      { name: "description", content: "A Azrix desenvolve soluções para comunidades digitais: moderação de Discord, moderação de lives, bots e consultoria estratégica." },
      { property: "og:title", content: "Azrix — Tecnologia para comunidades que querem evoluir" },
      { property: "og:description", content: "Desenvolvemos soluções para comunidades digitais crescerem de forma organizada e sustentável." },
    ],
  }),
  component: Index,
});

function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header scrolled={scrolled} />
      <HeroSection />
      <CredentialsSection />
      <ServicesSection />
      <DiscordSection />
      <LiveSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Header({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <AzrixLogo showWordmark />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#servicos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Serviços
          </a>
          <a href="#discord" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Discord
          </a>
          <a href="#lives" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Lives
          </a>
          <a href="#sobre" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Sobre
          </a>
          <a
            href="#contato"
            className="bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Contratar
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroSetup}
          alt=""
          width={1600}
          height={1200}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute top-32 right-10 h-40 w-40 border border-primary/30 md:right-20 md:h-64 md:w-64" />
      <div className="pointer-events-none absolute bottom-32 left-10 h-24 w-24 bg-primary/10 md:left-20 md:h-40 md:w-40" />
      <div className="pointer-events-none absolute top-1/3 right-1/3 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-1">
            <div className="mb-6 inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1">
              <span className="h-2 w-2 animate-pulse bg-primary" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Discord · Twitch · Kick · YouTube
              </span>
            </div>

           <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tight text-foreground uppercase">
  <span className="block">AZRIX</span>
</h1>


            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              <span className="text-foreground">Tecnologia para comunidades que querem evoluir.</span>{" "}
              Desenvolvemos soluções para comunidades digitais crescerem de forma
              organizada, participativa e sustentável.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="group relative inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-bold tracking-wider uppercase text-primary-foreground transition-all hover:bg-primary/90 shadow-[0_0_40px_rgba(192,132,252,0.45)]"
              >
                Contratar Agora
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 border border-border px-8 py-4 text-sm font-semibold tracking-wider uppercase text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Ver Serviços
              </a>
            </div>
          </div>

          <div className="relative hidden lg:col-span-5 lg:col-start-8 lg:block">
            <div className="relative">
              <div className="absolute -top-8 -left-8 h-full w-full border-2 border-primary/40" />
              <div className="relative bg-azrix-gray p-8">
                <div className="font-display text-[8rem] leading-none text-primary opacity-30">24</div>
                <div className="-mt-4 font-display text-4xl text-foreground">HORAS</div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Monitoramento contínuo em Discord e streams. Reação em segundos.
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary px-6 py-3 shadow-[0_0_30px_rgba(192,132,252,0.5)]">
                <span className="font-display text-2xl text-primary-foreground">0%</span>
                <span className="ml-2 text-xs font-bold uppercase text-primary-foreground">TOLERÂNCIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialsSection() {
  const projects = [
    "Discord da LOUD · 700k+ membros",
    "Desafios PlayHard",
    "Donas do Jogo",
    "Game Changer",
    "Projeto Genesis",
  ];

  return (
    <section className="relative border-y border-border bg-azrix-dark px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Bastidores</span>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] text-foreground md:text-5xl">
              JÁ ESTIVEMOS
              <br />
              <span className="text-primary">ONDE IMPORTA</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A base da Azrix vem da experiência adquirida na moderação de comunidades e na
              colaboração com projetos de grande relevância no cenário brasileiro — experiência
              que hoje guia a forma como trabalhamos.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              {projects.map((p) => (
                <li
                  key={p}
                  className="bg-background px-5 py-5 text-sm font-semibold uppercase tracking-widest text-foreground"
                >
                  <span className="mr-3 font-display text-primary">·</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "Desenvolvimento de Soluções",
      desc: "Criamos soluções alinhadas às necessidades de cada comunidade, unindo simplicidade, eficiência e uma experiência de qualidade para seus membros.",
    },
    {
      num: "02",
      title: "Moderação de Discord",
      desc: "Estrutura de servidor, regras, cargos, bots e uma equipe humana monitorando em tempo real. Comunidade saudável, sem dor de cabeça.",
    },
    {
      num: "03",
      title: "Moderação de Lives",
      desc: "Chat de Twitch, Kick, YouTube e TikTok sob controle. Triagem, timeouts e bans em tempo real enquanto você foca em criar conteúdo.",
    },
    {
      num: "04",
      title: "Bots & Automação",
      desc: "Configuração e personalização de bots, AutoMod, logs detalhados, comandos, cargos automáticos e integrações para tornar seu servidor mais organizado e eficiente.",
    },
    {
      num: "05",
      title: "Consultoria Estratégica",
      desc: "Apoiamos comunidades na identificação de desafios, no planejamento de soluções e na definição de estratégias para um crescimento organizado e sustentável.",
    },
  ];

  return (
    <section id="servicos" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">O que fazemos</span>
            <h2 className="mt-4 font-display text-6xl text-foreground md:text-8xl">SERVIÇOS</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Cada comunidade possui desafios e objetivos diferentes. Por isso, boas soluções
            começam entendendo a realidade de quem faz parte dela.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative bg-background p-8 transition-colors hover:bg-azrix-gray md:p-12 ${
                i === 1 ? "md:translate-y-12" : ""
              } ${i === 2 ? "md:-translate-y-12" : ""} ${
                i === 4 ? "md:col-span-2" : ""
              }`}
            >
              <span className="font-display text-6xl text-primary/30 transition-colors group-hover:text-primary/60">
                {service.num}
              </span>
              <h3 className="mt-4 font-display text-3xl text-foreground">{service.title}</h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              <div className="mt-8 h-px w-12 bg-primary transition-all group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscordSection() {
  const features = [
    "Criação e estruturação de servidores do zero",
    "Definição de regras, cargos e canais",
    "Configuração de bots, AutoMod e logs",
    "Moderação humana 24/7 com equipe treinada",
    "Anti-raid, anti-spam e proteção contra ataques em massa",
  ];

  return (
    <section id="discord" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-48 w-48 border border-primary/20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Discord</span>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] text-foreground md:text-7xl">
              MODERAÇÃO
              <br />
              DE <span className="text-primary">DISCORD</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Do primeiro canal ao último cargo: cuidamos da criação, da estrutura e do
              dia a dia do seu servidor. Regras claras, bots bem configurados e uma equipe
              humana para manter a comunidade organizada — <span className="text-foreground">proteção 24/7, sem dor de cabeça.</span>
            </p>

            <ul className="mt-10 space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-5 lg:col-start-8">
            <div className="absolute -top-6 -right-6 h-full w-full border-2 border-primary/40" />
            <div className="relative aspect-[4/5] w-full bg-azrix-gray p-10">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="font-display text-[6rem] leading-none text-primary opacity-30">#</div>
                  <div className="-mt-6 font-display text-4xl text-foreground">SERVIDOR</div>
                  <div className="mt-1 font-display text-4xl text-primary">SOB CONTROLE</div>
                </div>
                <div className="space-y-3">
                  {["#regras", "#anúncios", "#chat-geral", "#suporte", "#logs-mods"].map((c) => (
                    <div
                      key={c}
                      className="flex items-center justify-between border-l-2 border-primary/60 bg-background px-4 py-3 text-sm"
                    >
                      <span className="font-mono text-muted-foreground">{c}</span>
                      <span className="text-xs font-bold uppercase text-primary">ativo</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary px-5 py-3 shadow-[0_0_30px_rgba(192,132,252,0.5)]">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground">
                24/7 · MODERADO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveSection() {
  const platforms = ["Twitch", "Kick", "YouTube", "TikTok Live", "Instagram Live"];
  return (
    <section id="lives" className="relative overflow-hidden border-y border-border bg-azrix-dark px-6 py-32">
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="absolute -top-6 -left-6 h-full w-full border-2 border-primary/40" />
            <img
              src={liveModeration}
              alt="Moderação de live em tempo real"
              width={1408}
              height={1600}
              loading="lazy"
              className="relative aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 flex items-center gap-2 bg-primary px-5 py-3 shadow-[0_0_30px_rgba(192,132,252,0.5)]">
              <span className="h-2 w-2 animate-pulse bg-primary-foreground rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground">AO VIVO</span>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Streams</span>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] text-foreground md:text-7xl">
              MODERAÇÃO
              <br />
              DE <span className="text-primary">LIVE</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Sua stream merece um chat que não vira caos. Nossa equipe assume a moderação do
              chat ao vivo — bans, timeouts, triagem de mensagens e proteção contra hate raids
              em tempo real, enquanto você foca em criar conteúdo.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="border border-primary/40 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground"
                >
                  {p}
                </span>
              ))}
            </div>

            <ul className="mt-10 space-y-4">
              {[
                "Moderadores humanos durante toda a stream",
                "Configuração de AutoMod, bots e comandos",
                "Proteção contra hate raids e follow bots",
                "Relatórios pós-live com métricas e incidentes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const values = [
    "Comunidade em primeiro lugar",
    "Tecnologia com propósito",
    "Transparência",
    "Colaboração",
    "Evolução contínua",
    "Qualidade em cada detalhe",
  ];

  return (
    <section id="sobre" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 bg-primary/5" />
      <div className="pointer-events-none absolute bottom-20 left-10 h-48 w-48 border border-primary/10" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Quem somos</span>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] text-foreground md:text-7xl">
              A FORÇA
              <br />
              POR TRÁS
              <br />
              <span className="text-primary">DA ORDEM</span>
            </h2>

            <div className="relative mt-10">
              <div className="absolute -top-4 -left-4 h-full w-full border-2 border-primary/40" />
              <img
                src={aboutGuardian}
                alt="Guardião Azrix"
                width={1200}
                height={1504}
                loading="lazy"
                className="relative aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                A <strong className="text-foreground">Azrix</strong> nasceu da vontade de gerar
                impacto positivo nas comunidades digitais. Acreditamos que comunidades fortes
                são construídas por pessoas — e que a tecnologia é a ferramenta que ajuda a
                organizar, conectar e potencializar essas relações.
              </p>
              <p>
                Estamos construindo uma empresa baseada em inovação, transparência,
                colaboração e evolução contínua, sempre buscando desenvolver soluções que
                façam sentido para as pessoas.
              </p>
            </div>

            <div className="mt-10 border-l-2 border-primary bg-azrix-gray p-6">
              <p className="font-display text-xl italic text-foreground">
                "A ordem não se impõe. Ela se constrói com presença constante."
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
              <div className="bg-background p-6">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Missão</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Fortalecer comunidades por meio do uso estratégico da tecnologia, da
                  organização e da colaboração.
                </p>
              </div>
              <div className="bg-background p-6">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Visão</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Ser reconhecida pela criação de soluções que contribuam para o crescimento
                  e fortalecimento de comunidades digitais.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Valores</span>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contato" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden border border-primary/30 bg-azrix-dark p-12 md:p-20">
          <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 font-display text-[20vw] leading-none text-primary/[0.04] select-none whitespace-nowrap">
            AZRIX
          </div>
          <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="font-display text-5xl text-foreground md:text-7xl">
              PRONTO PARA
              <br />
              <span className="text-primary">EVOLUIR?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Vamos conversar sobre como a Azrix pode fortalecer sua comunidade — com
              tecnologia, estratégia e uma equipe que entende do assunto.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:contatoazrix@gmail.com"
                className="inline-flex w-full items-center justify-center gap-2 bg-primary px-10 py-5 text-sm font-bold tracking-wider uppercase text-primary-foreground transition-all hover:bg-primary/90 shadow-[0_0_40px_rgba(192,132,252,0.45)] sm:w-auto"
              >
                Solicitar Orçamento
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-azrix-dark px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <AzrixLogo showWordmark />
            <p className="mt-3 text-sm text-muted-foreground">
              Tecnologia para comunidades que querem evoluir.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Discord</a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Twitch</a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Twitter/X</a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Instagram</a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Azrix. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Construído com disciplina. Operado com precisão.
          </p>
        </div>
      </div>
    </footer>
  );
}
