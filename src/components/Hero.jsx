import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center justify-center
        px-6 pt-24 overflow-hidden
        bg-white dark:bg-slate-950
        transition-colors duration-300
      "
    >
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--tw-color-slate-900,#0f172a) 1px, transparent 1px), linear-gradient(90deg, var(--tw-color-slate-900,#0f172a) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow — top-right */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-15"
        style={{
          background:
            "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT CONTENT ── */}
        <div>
          <motion.p
            {...fadeUp(0.05)}
            className="
              inline-flex items-center gap-2
              text-sm font-semibold tracking-widest uppercase
              text-cyan-500 mb-6
            "
          >
            <span className="w-6 h-px bg-cyan-500" />
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="
              text-5xl md:text-[4.25rem] font-extrabold
              leading-[1.08] tracking-tight mb-6
              text-slate-900 dark:text-white
            "
          >
            Hi, I'm{" "}
            <span className="text-cyan-500">
              Emmanuel<br />Ekow Essandoh
            </span>
          </motion.h1>

          <motion.h2
            {...fadeUp(0.25)}
            className="text-xl md:text-2xl font-medium mb-6"
          >
            <span className="text-slate-500 dark:text-slate-400">I build as a </span>
            <span className="text-cyan-500 font-semibold">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Laravel Developer",
                  "Django Developer",
                  "React Developer",
                  "Frontend Engineer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.3)}>
            <code
                  className="
    block text-base md:text-lg
    font-mono bg-slate-100 dark:bg-slate-800
    text-cyan-700 dark:text-cyan-400
    rounded-lg px-4 py-3 mb-2
    whitespace-pre-line
  "
                >
            {'<I craft modern web applications using Laravel, Django, and React. I am focused on clean architecture, performance, and interfaces people actually enjoy using./>'}'
            </code>
          </motion.p>

          {/* BUTTONS */}
          <motion.div {...fadeUp(0.38)} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="
                group relative px-7 py-3.5 rounded-2xl
                bg-cyan-500 hover:bg-cyan-400
                text-white font-semibold text-sm tracking-wide
                transition-all duration-200 hover:scale-[1.03]
                shadow-lg shadow-cyan-500/20
              "
            >
              View Projects
              <span className="
                ml-2 inline-block transition-transform
                group-hover:translate-x-1
              ">→</span>
            </a>

            <a
              href="#contact"
              className="
                px-7 py-3.5 rounded-2xl
                border border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-slate-300
                hover:border-cyan-500 dark:hover:border-cyan-500
                hover:text-cyan-500 dark:hover:text-cyan-400
                font-semibold text-sm tracking-wide
                transition-all duration-200 hover:scale-[1.03]
                bg-white dark:bg-slate-900
              "
            >
              Contact Me
            </a>
          </motion.div>

          {/* Subtle tech tags */}
          {/* <motion.div
            {...fadeUp(0.46)}
            className="flex flex-wrap gap-2 mt-10"
          >
            {["Laravel", "Django", "React", "TypeScript", "MySQL"].map((t) => (
              <span
                key={t}
                className="
                  px-3 py-1 rounded-full text-xs font-medium
                  bg-slate-100 dark:bg-slate-800
                  text-slate-500 dark:text-slate-400
                  border border-slate-200 dark:border-slate-700
                "
              >
                {t}
              </span>
            ))}
          </motion.div> */}
        </div>

        {/* ── RIGHT IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="
              absolute -inset-4 rounded-[2rem]
              border border-cyan-500/20
            " />

            {/* Glow */}
            <div className="
              absolute inset-0 bg-cyan-500
              blur-[60px] opacity-15 rounded-3xl
            " />

            {/* Image */}
            <img
              src={profile}
              alt="Emmanuel Ekow Essandoh"
              className="
                relative w-72 md:w-80
                rounded-3xl object-cover aspect-[3/4]
                border border-slate-200 dark:border-slate-700
                shadow-2xl
              "
            />

            {/* Floating badge */}
            <div className="
              absolute -bottom-4 -left-4
              bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-700
              rounded-2xl px-4 py-3 shadow-xl
              flex items-center gap-3
            ">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Open to opportunities
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;