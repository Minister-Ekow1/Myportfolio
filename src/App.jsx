import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="
      relative
      min-h-screen
      bg-white
      text-slate-900
      dark:bg-slate-950
      dark:text-white
      transition-colors
      duration-300
      overflow-x-hidden
    ">
      <ParticlesBackground />

      <CustomCursor />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;