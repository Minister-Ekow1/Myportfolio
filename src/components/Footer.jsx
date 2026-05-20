import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import PageWrapper from "./PageWrapper";

function Footer() {
  return (
    <PageWrapper>
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-slate-400 text-center">
          © 2026 Ekow. All rights reserved.
        </p>

        <div className="flex gap-5 text-xl">
          <a href="#" className="hover:text-cyan-400 transition">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            <FaLinkedin />
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
        </PageWrapper>
  );
}

export default Footer;