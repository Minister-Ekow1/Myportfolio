import { motion } from "framer-motion";
import {
  FaLaravel, FaPhp, FaReact, FaNodeJs, FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiMysql,
} from "react-icons/si";
import PageWrapper from "./PageWrapper";

const skills = [
  { name: "Laravel", icon: <FaLaravel />, category: "Backend" },
  { name: "PHP", icon: <FaPhp />, category: "Backend" },
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend" },
  { name: "MySQL", icon: <SiMysql />, category: "Database" },
  { name: "Git / GitHub", icon: <FaGitAlt />, category: "Tooling" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
];

const categoryColor = {
  Backend: "bg-violet-500/10 text-violet-500 dark:text-violet-400 border-violet-500/20",
  Frontend: "bg-cyan-500/10   text-cyan-600   dark:text-cyan-400   border-cyan-500/20",
  Database: "bg-amber-500/10  text-amber-600  dark:text-amber-400  border-amber-500/20",
  Tooling: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

function Skills() {
  return (
    <PageWrapper>
      <section
        id="skills"
        className="
          py-28 px-6
          bg-slate-50 dark:bg-slate-950
          transition-colors duration-300
        "
      >
        <div className="max-w-6xl mx-auto">

          {/* Label */}
          <motion.div {...fadeUp(0)} className="flex justify-center mb-4">
            <span className="
              inline-flex items-center gap-2
              text-xs font-semibold tracking-widest uppercase text-cyan-500
            ">
              <span className="w-5 h-px bg-cyan-500" />
              What I work with
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
            Skills
          </motion.h2>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                {...fadeUp(0.1 + i * 0.05)}
                className="
                  group
                  bg-white dark:bg-slate-900
                  border border-slate-200 dark:border-slate-800
                  rounded-3xl p-7
                  flex flex-col items-center justify-center gap-4
                  shadow-sm
                  hover:-translate-y-1.5
                  hover:border-cyan-400/60 dark:hover:border-cyan-500/50
                  hover:shadow-xl hover:shadow-cyan-500/5
                  transition-all duration-300
                  cursor-default
                "
              >
                {/* Icon */}
                <div className="
                  text-4xl text-cyan-400
                  group-hover:text-cyan-500
                  group-hover:scale-110
                  transition-all duration-300
                ">
                  {skill.icon}
                </div>

                {/* Name */}
                <h3 className="
                  text-base font-semibold
                  text-slate-800 dark:text-white
                  text-center
                ">
                  {skill.name}
                </h3>

                {/* Category badge */}
                <span className={`
                  px-2.5 py-0.5 rounded-full
                  text-[11px] font-semibold tracking-wide
                  border
                  ${categoryColor[skill.category]}
                `}>
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            {...fadeUp(0.55)}
            className="
              text-center text-sm text-slate-400 dark:text-slate-600
              mt-12
            "
          >
            Always learning — currently exploring Django REST Framework &amp; TypeScript.
          </motion.p>

        </div>
      </section>
    </PageWrapper>
  );
}

export default Skills;