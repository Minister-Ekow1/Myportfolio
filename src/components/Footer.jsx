import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import PageWrapper from "./PageWrapper";

const socials = [
  { icon: <FaGithub />,   href: "https://github.com/Minister-Ekow1",    label: "GitHub"   },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername",  label: "LinkedIn" },
  { icon: <FaWhatsapp />, href: "https://wa.me/233541219220",            label: "WhatsApp" },
];

const navLinks = [
  { name: "Home",     href: "#home"     },
  { name: "About",    href: "#about"    },
  { name: "Skills",   href: "#skills"   },
  { name: "Projects", href: "#projects" },
  { name: "Contact",  href: "#contact"  },
];

function Footer() {
  return (
    <PageWrapper>
      <footer className="
        bg-white dark:bg-slate-950
        border-t border-slate-200 dark:border-slate-800
        transition-colors duration-300
      ">
        <div className="max-w-6xl mx-auto px-6 py-14">

          {/* Top row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">

            {/* Brand */}
            <div>
              <a href="#home" className="flex items-center gap-2 group w-fit">
                <span className="
                  w-8 h-8 rounded-xl bg-cyan-500
                  flex items-center justify-center
                  text-white text-sm font-black
                  group-hover:bg-cyan-400 transition-colors duration-200
                ">E</span>
                <span className="
                  text-lg font-bold text-slate-900 dark:text-white
                  group-hover:text-cyan-500 transition-colors duration-200
                ">
                  Ekow<span className="text-cyan-500">.</span>
                </span>
              </a>
              <p className="text-slate-400 text-sm mt-3 max-w-xs leading-relaxed">
                Building thoughtful digital experiences one project at a time.
              </p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className="
                    text-sm text-slate-500 dark:text-slate-400
                    hover:text-cyan-500 dark:hover:text-cyan-400
                    transition-colors duration-200
                  "
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100 dark:border-slate-800 mb-8" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Emmanuel Ekow Essandoh. All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-9 h-9 flex items-center justify-center rounded-xl
                    bg-slate-100 dark:bg-slate-800
                    text-slate-500 dark:text-slate-400
                    hover:bg-cyan-500 hover:text-white
                    transition-all duration-200 hover:scale-105
                    text-base
                  "
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </PageWrapper>
  );
}

export default Footer;