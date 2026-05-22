import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const links = [
  { name: "Home",     href: "#home"     },
  { name: "About",    href: "#about"    },
  { name: "Skills",   href: "#skills"   },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact"  },
];

function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("home");
  const { darkMode, toggleTheme } = useTheme();

  /* Shrink border + shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300
        ${scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800/70 shadow-sm shadow-slate-200/50 dark:shadow-none py-0"
          : "bg-transparent py-2"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span className="
            w-8 h-8 rounded-xl bg-cyan-500
            flex items-center justify-center
            text-white text-sm font-black
            group-hover:bg-cyan-400 transition-colors duration-200
          ">
            E
          </span>
          <span className="
            text-lg font-bold
            text-slate-900 dark:text-white
            group-hover:text-cyan-500 dark:group-hover:text-cyan-400
            transition-colors duration-200
          ">
            The Emmanuel Ekow Essandoh<span className="text-cyan-500">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`
                  relative px-4 py-2 rounded-xl text-sm font-medium
                  transition-all duration-200
                  ${isActive
                    ? "text-cyan-500 bg-cyan-500/8"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  }
                `}
              >
                {link.name}
                {isActive && (
                  <span className="
                    absolute bottom-1 left-1/2 -translate-x-1/2
                    w-1 h-1 rounded-full bg-cyan-500
                  " />
                )}
              </a>
            );
          })}

          {/* Divider */}
          <span className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-2" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              w-9 h-9 flex items-center justify-center
              rounded-xl text-base
              bg-slate-100 dark:bg-slate-800
              text-slate-600 dark:text-slate-400
              hover:text-cyan-500 dark:hover:text-cyan-400
              hover:bg-slate-200 dark:hover:bg-slate-700
              transition-all duration-200 hover:scale-105
            "
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              w-9 h-9 flex items-center justify-center rounded-xl
              bg-slate-100 dark:bg-slate-800
              text-slate-600 dark:text-slate-400
              hover:text-cyan-500 transition-colors duration-200
            "
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="
              w-9 h-9 flex items-center justify-center rounded-xl
              bg-slate-100 dark:bg-slate-800
              text-slate-700 dark:text-slate-300
              hover:text-cyan-500 transition-colors duration-200 text-lg
            "
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="
          bg-white dark:bg-slate-900
          border-t border-slate-100 dark:border-slate-800
          px-6 py-4 flex flex-col gap-1
        ">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  px-4 py-3 rounded-xl text-sm font-medium
                  transition-colors duration-200
                  ${isActive
                    ? "text-cyan-500 bg-cyan-500/8"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                  }
                `}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;