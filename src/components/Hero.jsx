import profile from "../assets/profile.png";

import { motion } from "framer-motion";

import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        pt-24
        bg-white
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-500 mb-4 text-lg font-medium">
            Welcome to my portfolio
          </p>

          <h1 className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            mb-6
            text-slate-900
            dark:text-white
          ">
            Hi, I’m{" "}
            <span className="text-cyan-500">
              Emmanuel Ekow Essandoh
            </span>
          </h1>

          <h2 className="
            text-2xl
            md:text-4xl
            font-semibold
            mb-6
          ">
            <span className="text-slate-700 dark:text-slate-300">
              I'm a{" "}
            </span>

            <span className="text-cyan-500">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Laravel Developer",
                  "Django Developer",
                  "React Developer",
                  "Frontend Engineer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="
            text-slate-600
            dark:text-slate-300
            text-lg
            leading-relaxed
            mb-8
            max-w-xl
          ">
            I build modern web applications and digital solutions
            using Laravel, django, React, and scalable architectures.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="
                px-6
                py-3
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-400
                text-white
                transition
                font-semibold
                hover:scale-105
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-6
                py-3
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
              Contact Me
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="
              absolute
              inset-0
              bg-cyan-500
              blur-3xl
              opacity-20
              rounded-full
            "></div>

            {/* Image */}
            <img
              src={profile}
              alt="Profile"
              className="
                relative
                w-80
                rounded-3xl
                border
                border-slate-300
                dark:border-slate-700
                shadow-2xl
              "
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;