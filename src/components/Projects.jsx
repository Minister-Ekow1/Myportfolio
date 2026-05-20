import PageWrapper from "./PageWrapper";

const projects = [
  {
    title: "BondMate",
    description:
      "A web platform for strengthening group relationships through weekly pairings, member engagement, gallery management, events, and announcements.",
    tech: ["Laravel", "MySQL", "Blade"],
  },

  {
    title: "University Learning Portal",
    description:
      "A smart academic portal for tracking online lessons, recordings, attendance, analytics, and student performance.",
    tech: ["Laravel", "React", "Tailwind"],
  },
];

function Projects() {
  return (
    <PageWrapper>
      <section
        id="projects"
        className="
          py-24
          px-6
          bg-white
          dark:bg-slate-950
          transition-colors
          duration-300
        "
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h2
            className="
              text-4xl
              font-bold
              text-center
              mb-14
              text-slate-900
              dark:text-white
            "
          >
            Projects
          </h2>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  bg-white
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-slate-800
                  rounded-3xl
                  overflow-hidden
                  shadow-lg
                  dark:shadow-none
                  hover:-translate-y-2
                  hover:border-cyan-400
                  transition
                  duration-300
                "
              >

                {/* Project Image Placeholder */}
                <div
                  className="
                    h-56
                    bg-slate-200
                    dark:bg-slate-800
                    flex
                    items-center
                    justify-center
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Project Image
                </div>

                {/* Content */}
                <div className="p-8">

                  {/* Title */}
                  <h3
                    className="
                      text-2xl
                      font-bold
                      mb-4
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-slate-600
                      dark:text-slate-300
                      mb-6
                      leading-relaxed
                    "
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1
                          rounded-full
                          bg-cyan-500/10
                          text-cyan-500
                          text-sm
                          font-medium
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">

                    <button
                      className="
                        px-5
                        py-2
                        rounded-xl
                        bg-cyan-500
                        hover:bg-cyan-400
                        text-white
                        transition
                        hover:scale-105
                      "
                    >
                      Live Demo
                    </button>

                    <button
                      className="
                        px-5
                        py-2
                        rounded-xl
                        border
                        border-cyan-500
                        text-slate-900
                        dark:text-white
                        hover:bg-cyan-500/10
                        transition
                        hover:scale-105
                      "
                    >
                      GitHub
                    </button>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Projects;