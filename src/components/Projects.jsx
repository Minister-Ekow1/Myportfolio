import profileImg from "../assets/wedpreview.png";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

const projects = [
  {
    title: "Wedding Site",
    description:
      "A web platform for managing wedding events, guest lists, RSVPs, and sharing details with attendees.",
    tech: ["Django", "Python", "Tailwind", "SQLite"],
    accent: "from-cyan-500/10 to-teal-500/10",
    dot: "bg-cyan-400",
    number: "01",
    live: "https://django-wedding-site.onrender.com/",
    github: "https://github.com/Minister-Ekow1/django_wedding_site",
    image: profileImg,
  },
  {
    title: "University Learning Portal",
    description:
      "A smart academic portal for tracking online lessons, recordings, attendance, analytics, and student performance.",
    tech: ["Laravel", "React", "Tailwind"],
    accent: "from-violet-500/10 to-cyan-500/10",
    dot: "bg-violet-400",
    number: "02",
    live: "#",
    github: "#",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

function Projects() {
  return (
    <PageWrapper>
      <section
        id="projects"
        className="
          py-28 px-6
          bg-white dark:bg-slate-950
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
              Selected work
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
            Projects
          </motion.h2>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                {...fadeUp(0.12 + i * 0.1)}
                className="
                  group relative
                  bg-white dark:bg-slate-900
                  border border-slate-200 dark:border-slate-800
                  rounded-3xl overflow-hidden
                  shadow-sm
                  hover:-translate-y-1.5
                  hover:border-cyan-400/60 dark:hover:border-cyan-500/50
                  hover:shadow-xl hover:shadow-cyan-500/5
                  transition-all duration-300
                "
              >
                {/* Image placeholder with gradient */}
                <div
                  className={`
                    relative h-52 bg-gradient-to-br ${project.accent}
                    flex items-end p-6 overflow-hidden
                  `}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                  )}
                  <span className="
    absolute -right-3 -top-4
    text-[8rem] font-black leading-none select-none
    text-white/40 drop-shadow-lg
    z-10
    pointer-events-none
  ">
                    {project.number}
                  </span>
                  {/* Status dot and other content */}
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="
                    text-xl font-bold mb-3
                    text-slate-900 dark:text-white
                    group-hover:text-cyan-500 transition-colors duration-200
                  ">
                    {project.title}
                  </h3>

                  <p className="
                    text-slate-500 dark:text-slate-400
                    text-sm leading-relaxed mb-6
                  ">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3 py-1 rounded-full
                          text-xs font-semibold
                          bg-cyan-500/10 text-cyan-600 dark:text-cyan-400
                          border border-cyan-500/20
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-slate-100 dark:border-slate-800 mb-6" />

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      className="
                        group/btn flex-1 flex items-center justify-center gap-1.5
                        px-4 py-2.5 rounded-xl
                        bg-cyan-500 hover:bg-cyan-400
                        text-white text-sm font-semibold
                        transition-all duration-200 hover:scale-[1.02]
                        shadow-md shadow-cyan-500/20
                      "
                    >
                      Live Demo
                      <span className="transition-transform group-hover/btn:translate-x-0.5">↗</span>
                    </a>

                    <a
                      href={project.github}
                      className="
                        flex-1 flex items-center justify-center gap-1.5
                        px-4 py-2.5 rounded-xl
                        border border-slate-200 dark:border-slate-700
                        text-slate-700 dark:text-slate-300
                        hover:border-cyan-400 dark:hover:border-cyan-500
                        hover:text-cyan-500 dark:hover:text-cyan-400
                        text-sm font-semibold
                        bg-white dark:bg-slate-900
                        transition-all duration-200 hover:scale-[1.02]
                      "
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Projects;