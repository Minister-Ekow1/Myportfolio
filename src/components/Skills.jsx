import {
  FaLaravel,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

import PageWrapper from "./PageWrapper";

const skills = [
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git/GitHub", icon: <FaGitAlt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];

function Skills() {
  return (
    <PageWrapper>
      <section
        id="skills"
        className="
          py-24
          px-6
          bg-slate-50
          dark:bg-slate-900/40
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
            Skills
          </h2>

          {/* Skills Grid */}
          <div className="
            grid
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
          ">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="
                  bg-white
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-slate-800
                  rounded-3xl
                  p-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  shadow-lg
                  dark:shadow-none
                  hover:-translate-y-2
                  hover:border-cyan-400
                  transition
                  duration-300
                "
              >

                {/* Icon */}
                <div className="
                  text-5xl
                  text-cyan-400
                  mb-4
                ">
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-slate-800
                    dark:text-white
                  "
                >
                  {skill.name}
                </h3>

              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Skills;