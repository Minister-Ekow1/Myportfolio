import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const stats = [
  { value: "3+", label: "Years experience", icon: "⚡" },
  { value: "5+", label: "Projects completed", icon: "🚀" },
  { value: "3", label: "Core frameworks", icon: "🛠" },
  { value: "100%", label: "Passion for craft", icon: "🎯" },
];

const skills = [
  { name: "Laravel", level: 90 },
  { name: "React", level: 70 },
  { name: "Django", level: 80 },
  { name: "MySQL", level: 75 },
];

function About() {
  return (
    <PageWrapper>
      <section
        id="about"
        className="
          py-28 px-6
          bg-slate-50 dark:bg-slate-950
          transition-colors duration-300
        "
      >
        <div className="max-w-6xl mx-auto">

          {/* Section label */}
          <motion.div {...fadeUp(0)} className="flex justify-center mb-4">
            <span className="
              inline-flex items-center gap-2
              text-xs font-semibold tracking-widest uppercase
              text-cyan-500
            ">
              <span className="w-5 h-px bg-cyan-500" />
              Get to know me
              <span className="w-5 h-px bg-cyan-500" />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            {...fadeUp(0.08)}
            className="
              text-4xl md:text-5xl font-extrabold tracking-tight
              text-center text-slate-900 dark:text-white mb-16
            "
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-5 gap-8">

            {/* ── Left: bio + skills ── */}
            <motion.div
              {...fadeUp(0.12)}
              className="lg:col-span-3 flex flex-col gap-6"
            >
              {/* Bio card */}
              <div className="
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                rounded-3xl p-8 shadow-sm
              ">
                <p className="
                  text-slate-600 dark:text-slate-300
                  text-lg leading-relaxed
                ">
                  I'm a passionate{" "}
                  <span className="text-slate-900 dark:text-white font-semibold">
                    Full Stack Developer
                  </span>{" "}
                  focused on creating scalable, responsive, and user-friendly
                  applications. I enjoy solving real-world problems through
                  clean code, modern UI design, and efficient backend systems.
                </p>

                <p className="
                  text-slate-500 dark:text-slate-400
                  text-base leading-relaxed mt-4
                ">
                  Whether it's an API in Laravel, a data-driven view in Django,
                  or a polished React interface. I care about every layer of
                  the stack and the experience it creates for the end user.
                </p>
              </div>

              {/* Skill bars */}
              <div className="
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                rounded-3xl p-8 shadow-sm
              ">
                <h3 className="
                  text-sm font-semibold uppercase tracking-widest
                  text-slate-400 mb-6
                ">
                  Core skills
                </h3>
                <div className="flex flex-col gap-5">
                  {skills.map(({ name, level }, i) => (
                    <div key={name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {name}
                        </span>
                        <span className="text-sm text-slate-400">{level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.2 + i * 0.08,
                          }}
                          className="h-full bg-cyan-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Right: stats grid ── */}
            <motion.div
              {...fadeUp(0.2)}
              className="lg:col-span-2 grid grid-cols-2 gap-4 content-start"
            >
              {stats.map(({ value, label, icon }, i) => (
                <motion.div
                  key={label}
                  {...fadeUp(0.22 + i * 0.07)}
                  className="
                    bg-white dark:bg-slate-900
                    border border-slate-200 dark:border-slate-800
                    rounded-3xl p-6 shadow-sm
                    flex flex-col justify-between
                    hover:border-cyan-500/40 dark:hover:border-cyan-500/40
                    transition-colors duration-200
                  "
                >
                  <span className="text-2xl mb-3">{icon}</span>
                  <div>
                    <p className="text-4xl font-extrabold text-cyan-500 leading-none mb-1">
                      {value}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                      {label}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* CTA card */}
              <motion.a
                href="#contact"
                {...fadeUp(0.5)}
                className="
                  col-span-2
                  bg-cyan-500 hover:bg-cyan-400
                  rounded-3xl p-6 shadow-sm
                  flex items-center justify-between
                  transition-all duration-200
                  group
                "
              >
                <div>
                  <p className="text-white font-semibold text-base">
                    Let's work together
                  </p>
                  <p className="text-cyan-100 text-sm mt-0.5">
                    Open for freelance & full-time roles
                  </p>
                </div>
                <span className="
                  text-white text-xl
                  transition-transform duration-200
                  group-hover:translate-x-1
                ">
                  →
                </span>
              </motion.a>
            </motion.div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default About;