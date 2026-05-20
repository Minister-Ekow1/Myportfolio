import PageWrapper from "./PageWrapper";

function About() {
  return (
    <PageWrapper>
      <section
        id="about"
        className="
          py-24
          px-6
          bg-slate-100
          dark:bg-slate-950
          transition-colors
          duration-300
        "
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h2 className="
            text-4xl
            font-bold
            mb-12
            text-center
            text-slate-900
            dark:text-white
          ">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* About Card */}
            <div
              className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-800
                rounded-3xl
                p-8
                shadow-lg
                dark:shadow-none
                transition
              "
            >
              <p
                className="
                  text-slate-600
                  dark:text-slate-300
                  leading-relaxed
                  text-lg
                "
              >
                I’m a passionate Full Stack Developer focused on creating
                scalable, responsive, and user-friendly applications.
                I enjoy solving real-world problems through clean code,
                modern UI design, and efficient backend systems.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">

              {/* Experience */}
              <div
                className="
                  bg-white
                  dark:bg-slate-900
                  rounded-3xl
                  p-8
                  border
                  border-slate-200
                  dark:border-slate-800
                  text-center
                  shadow-lg
                  dark:shadow-none
                  transition
                "
              >
                <h3 className="text-4xl font-bold text-cyan-400">
                  3+
                </h3>

                <p className="
                  text-slate-600
                  dark:text-slate-400
                  mt-2
                ">
                  Years Experience
                </p>
              </div>

              {/* Projects */}
              <div
                className="
                  bg-white
                  dark:bg-slate-900
                  rounded-3xl
                  p-8
                  border
                  border-slate-200
                  dark:border-slate-800
                  text-center
                  shadow-lg
                  dark:shadow-none
                  transition
                "
              >
                <h3 className="text-4xl font-bold text-cyan-400">
                  5+
                </h3>

                <p className="
                  text-slate-600
                  dark:text-slate-400
                  mt-2
                ">
                  Projects Completed
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default About;