import React, { useState } from "react";

const Icon = ({ name, size = 20 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6" />
        <path d="M10 14 20 4" />
        <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4c.1-.4.5-1.9-.1-3.8 0 0-1.2-.4-4 1.5a13.8 13.8 0 0 0-7.3 0C5.1-.2 3.9.2 3.9.2c-.6 1.9-.2 3.4-.1 3.8A5.4 5.4 0 0 0 2.3 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
        <path d="M8 18c-3 .9-3-1.5-4.2-1.5" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    menu: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    ),
    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    sparkle: (
      <>
        <path d="m12 3-1.5 5.5L5 10l5.5 1.5L12 17l1.5-5.5L19 10l-5.5-1.5L12 3Z" />
        <path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7L19 16Z" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
  };

  return <svg {...common}>{icons[name]}</svg>;
};

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
    <span className="h-px w-8 bg-violet-500/70" />
    {children}
  </div>
);

const Skill = ({ children }) => (
  <div className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-violet-500/[0.06]">
    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 transition group-hover:shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
    {children}
  </div>
);

const TechTag = ({ children }) => (
  <span className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400">
    {children}
  </span>
);

const Feature = ({ children }) => (
  <span className="flex items-center gap-2 text-xs text-slate-500">
    <span className="h-1 w-1 rounded-full bg-slate-600" />
    {children}
  </span>
);

const products = [
  {
    number: "PRODUCT 01",
    title: "SpendWiseFamily",
    subtitle: "AI-Powered Family Finance Tracker",
    description:
      "A family-focused finance platform designed to make shared expense tracking, budgeting, savings and financial insights simpler.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Finance planning workspace",
    accent: "violet",
    live: "https://spendwisefamily.vercel.app/",
    github: "https://github.com/jaswanthb509/spendwisefamily",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini AI",
    ],
    features: [
      "Expense Tracking",
      "Budget Management",
      "Family Collaboration",
      "AI Financial Insights",
      "Savings Goals",
      "Analytics Dashboard",
    ],
  },
  {
    number: "PRODUCT 02",
    title: "MockMate",
    subtitle: "AI Interview Practice Platform",
    description:
      "An AI-powered interview preparation platform that helps users create interviews, practice, review results and improve through structured feedback.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Professional interview workspace",
    accent: "cyan",
    live: "https://mockmate-n98tq64h2-jaswanthb509s-projects.vercel.app/#features",
    github: "https://github.com/jaswanthb509/Mockmate",
    technologies: [
      "React",
      "JavaScript",
      "React Router",
      "Node.js",
      "Express",
      "AI",
    ],
    features: [
      "AI Interviews",
      "Real-time Feedback",
      "Protected Routes",
      "Progress Tracking",
      "Interview History",
      "Result Analysis",
    ],
  },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070a12] text-white selection:bg-violet-500/30">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute left-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute right-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[35%] h-[400px] w-[400px] rounded-full bg-indigo-500/[0.05] blur-[130px]" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070a12]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#home"
            onClick={closeMobile}
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 font-bold text-violet-300 transition group-hover:border-violet-400/60 group-hover:bg-violet-500/20">
              BJ
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-tight">Jaswanth</p>
              <p className="text-[10px] tracking-[0.18em] text-slate-500">
                DEVELOPER
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#products"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Work
            </a>
            <a
              href="#stack"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Stack
            </a>
            <a
              href="#about"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#education"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Education
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Available
            </div>

            <a
              href="#contact"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium transition hover:border-violet-400/40 hover:bg-violet-500/10"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-slate-300 md:hidden"
            aria-label="Toggle menu"
          >
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/[0.06] bg-[#070a12] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#products"
                onClick={closeMobile}
                className="text-slate-300"
              >
                Work
              </a>
              <a
                href="#stack"
                onClick={closeMobile}
                className="text-slate-300"
              >
                Stack
              </a>
              <a
                href="#about"
                onClick={closeMobile}
                className="text-slate-300"
              >
                About
              </a>
              <a
                href="#education"
                onClick={closeMobile}
                className="text-slate-300"
              >
                Education
              </a>
              <a
                href="#contact"
                onClick={closeMobile}
                className="text-violet-300"
              >
                Let's Talk →
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <section id="home" className="relative">
          <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3.5 py-2 text-xs font-medium text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                FULL-STACK DEVELOPER
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                I build
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  software
                </span>
                <br />
                that ships.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                I'm{" "}
                <span className="font-medium text-slate-200">
                  Bhukya Jaswanth
                </span>
                , a Computer Science student and Full Stack MERN Developer
                focused on building practical, scalable web applications and
                AI-powered experiences.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="group flex items-center gap-3 rounded-xl bg-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(139,92,246,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-violet-400"
                >
                  Explore Products
                  <Icon name="arrow" size={17} />
                </a>

                <a
                  href="#contact"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3.5 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                <a
                  href="https://github.com/jaswanthb509"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Icon name="github" size={17} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/bjaswanth7/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Icon name="linkedin" size={17} />
                  LinkedIn
                </a>

                <a
                  href="mailto:bjaswanth6130@gmail.com"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Icon name="mail" size={17} />
                  Email
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-violet-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0c111d]/90 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  </div>

                  <span className="font-mono text-[10px] tracking-widest text-slate-600">
                    JASWANTH.DEV
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        System Overview
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">
                        Developer Console
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-[11px] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      ONLINE
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                      <div>
                        <p className="text-xs text-slate-500">
                          Products shipped
                        </p>
                        <p className="mt-1 text-2xl font-bold">02</p>
                      </div>
                      <span className="text-xs text-emerald-300">LIVE</span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                      <div>
                        <p className="text-xs text-slate-500">
                          Primary stack
                        </p>
                        <p className="mt-1 font-semibold text-slate-200">
                          MERN
                        </p>
                      </div>
                      <Icon name="code" size={20} />
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                      <div>
                        <p className="text-xs text-slate-500">Focus</p>
                        <p className="mt-1 font-semibold text-slate-200">
                          Full Stack + AI
                        </p>
                      </div>
                      <Icon name="sparkle" size={20} />
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/[0.06] pt-5">
                    <p className="font-mono text-xs leading-6 text-slate-500">
                      <span className="text-violet-400">$</span>{" "}
                      status --production
                      <br />
                      <span className="text-emerald-400">
                        ✓ All systems ready.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="products"
          className="border-t border-white/[0.06] py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionLabel>Shipped Products</SectionLabel>

            <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                  Real applications.
                  <br />
                  <span className="text-slate-500">
                    Real problems solved.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-slate-500">
                A selection of products I've designed, developed and deployed
                using modern full-stack technologies.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {products.map((product) => (
                <article
                  key={product.title}
                  className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b101b] transition duration-500 hover:-translate-y-1 ${
                    product.accent === "violet"
                      ? "hover:border-violet-500/30"
                      : "hover:border-cyan-500/30"
                  }`}
                >
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b] via-[#0b101b]/35 to-transparent" />

                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-md">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          product.accent === "violet"
                            ? "bg-violet-400"
                            : "bg-cyan-400"
                        }`}
                      />
                      {product.number}
                    </div>

                    <div className="absolute right-5 top-5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-medium text-emerald-300 backdrop-blur-md">
                      LIVE
                    </div>
                  </div>

                  <div className="relative p-7 sm:p-9">
                    <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-500/[0.05] blur-3xl" />

                    <div className="relative">
                      <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {product.title}
                      </h3>

                      <p
                        className={`mt-3 text-sm font-medium ${
                          product.accent === "violet"
                            ? "text-violet-300"
                            : "text-cyan-300"
                        }`}
                      >
                        {product.subtitle}
                      </p>

                      <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                        {product.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {product.technologies.map((technology) => (
                          <TechTag key={technology}>{technology}</TechTag>
                        ))}
                      </div>

                      <div className="mt-9 flex flex-wrap gap-3">
                        <a
                          href={product.live}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                            product.accent === "violet"
                              ? "bg-violet-500 text-white hover:bg-violet-400"
                              : "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                          }`}
                        >
                          Live Product
                          <Icon name="external" size={15} />
                        </a>

                        <a
                          href={product.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:text-white"
                        >
                          <Icon name="github" size={16} />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="relative border-t border-white/[0.06] bg-white/[0.015] px-7 py-4 sm:px-9">
                    <div className="flex flex-wrap gap-x-5 gap-y-3">
                      {product.features.map((feature) => (
                        <Feature key={feature}>{feature}</Feature>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="stack"
          className="border-t border-white/[0.06] py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionLabel>Technology Stack</SectionLabel>

            <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Tools I use
                  <br />
                  <span className="text-slate-500">to ship products.</span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                  A practical stack focused on building responsive interfaces,
                  reliable backends, data-driven applications and AI-powered
                  experiences.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Skill>React.js</Skill>
                <Skill>JavaScript</Skill>
                <Skill>HTML</Skill>
                <Skill>CSS</Skill>
                <Skill>Tailwind CSS</Skill>
                <Skill>Node.js</Skill>
                <Skill>Express.js</Skill>
                <Skill>MongoDB</Skill>
                <Skill>Git</Skill>
                <Skill>GitHub</Skill>
                <Skill>Postman</Skill>
                <Skill>AI Integration</Skill>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="border-t border-white/[0.06] py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionLabel>About Me</SectionLabel>

            <div className="mt-6 grid gap-12 lg:grid-cols-2">
              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Building is how
                <br />
                <span className="text-slate-500">I learn.</span>
              </h2>

              <div className="space-y-5 text-sm leading-8 text-slate-400">
                <p>
                  I'm a Computer Science student at IIIT Nagpur and a Full
                  Stack MERN Developer passionate about turning ideas into
                  working software.
                </p>

                <p>
                  My focus is on building applications that solve practical
                  problems — from family finance management to AI-powered
                  interview preparation.
                </p>

                <p>
                  I enjoy working across the stack, learning new technologies
                  through real projects and continuously improving the way I
                  design, build and deploy software.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="education"
          className="border-t border-white/[0.06] py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionLabel>Education</SectionLabel>

            <div className="mt-12 space-y-4">
              <div className="group grid gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-violet-500/30 lg:grid-cols-[180px_1fr_auto] lg:items-center">
                <span className="text-xs font-medium tracking-wider text-slate-500">
                  2023 — 2027
                </span>

                <div>
                  <h3 className="text-lg font-semibold">
                    Indian Institute of Information Technology, Nagpur
                  </h3>
                  <p className="mt-1 text-sm text-violet-300">
                    B.Tech — Computer Science and Engineering
                  </p>
                </div>

                <span className="text-xs text-slate-600">CURRENT</span>
              </div>

              <div className="grid gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 lg:grid-cols-[180px_1fr_auto] lg:items-center">
                <span className="text-xs font-medium tracking-wider text-slate-500">
                  2021 — 2023
                </span>

                <div>
                  <h3 className="text-lg font-semibold">
                    Narayana Junior College, Patancheruvu
                  </h3>
                  <p className="mt-1 text-sm text-violet-300">MPC — XII</p>
                </div>

                <span className="text-xs text-slate-600">COMPLETED</span>
              </div>

              <div className="grid gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 lg:grid-cols-[180px_1fr_auto] lg:items-center">
                <span className="text-xs font-medium tracking-wider text-slate-500">
                  2020 — 2021
                </span>

                <div>
                  <h3 className="text-lg font-semibold">
                    Vijetha Vidyalaya, Mothinagar
                  </h3>
                  <p className="mt-1 text-sm text-violet-300">CBSE — X</p>
                </div>

                <span className="text-xs text-slate-600">COMPLETED</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-white/[0.06] py-24 lg:py-32"
        >
          <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <Icon name="mail" size={21} />
            </div>

            <p className="mt-7 text-xs font-semibold tracking-[0.2em] text-violet-400">
              LET'S BUILD
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Have an idea?
              <br />
              <span className="text-slate-500">Let's build it.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-500">
              I'm open to internships, collaborations and opportunities where
              I can build useful products and grow as a developer.
            </p>

            <a
              href="mailto:bjaswanth6130@gmail.com"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
            >
              bjaswanth6130@gmail.com
              <Icon name="arrow" size={16} />
            </a>

            <div className="mt-8 flex justify-center gap-3">
              <a
                href="https://github.com/jaswanthb509"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-500 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <Icon name="github" size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/bjaswanth7/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-500 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <Icon name="linkedin" size={19} />
              </a>

              <a
                href="mailto:bjaswanth6130@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-500 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <Icon name="mail" size={19} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_0.8fr_1fr]">
            <div>
              <a href="#home" className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 font-bold text-violet-300">
                  BJ
                </div>

                <div>
                  <p className="font-semibold tracking-tight">Bhukya Jaswanth</p>
                  <p className="mt-0.5 text-[10px] tracking-[0.18em] text-slate-600">
                    FULL-STACK DEVELOPER
                  </p>
                </div>
              </a>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
                Building practical software, experimenting with AI and turning
                ideas into products that actually ship.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Open for opportunities
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Navigate
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
                <a href="#home" className="transition hover:text-white">
                  Home
                </a>
                <a href="#products" className="transition hover:text-white">
                  Work
                </a>
                <a href="#stack" className="transition hover:text-white">
                  Stack
                </a>
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
                <a href="#education" className="transition hover:text-white">
                  Education
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Products
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
                <a
                  href="https://spendwisefamily.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  SpendWiseFamily
                </a>
                <a
                  href="https://mockmate-n98tq64h2-jaswanthb509s-projects.vercel.app/#features"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  MockMate
                </a>
                <a
                  href="https://github.com/jaswanthb509/spendwisefamily"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Source Code
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Connect
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
                <a
                  href="mailto:bjaswanth6130@gmail.com"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Icon name="mail" size={15} />
                  Email
                </a>

                <a
                  href="https://github.com/jaswanthb509"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Icon name="github" size={15} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/bjaswanth7/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-white"
                >
                  <Icon name="linkedin" size={15} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/[0.06] pt-7 text-xs text-slate-600 sm:flex-row">
            <p>© 2026 Bhukya Jaswanth. All rights reserved.</p>

            <div className="flex items-center gap-2">
              <span>Designed & built with</span>
              <span className="text-violet-400">React</span>
              <span>·</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#home"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0c111d]/90 text-slate-400 shadow-xl backdrop-blur-md transition hover:border-violet-400/30 hover:text-white"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 15 6-6 6 6" />
        </svg>
      </a>
    </div>
  );
}

export default App;