import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import PageWrapper from "./PageWrapper";

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "ekowessandoh8492@gmail.com",
    href: "mailto:ekowessandoh8492@gmail.com",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Minister-Ekow1",
    href: "https://github.com/Minister-Ekow1",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+233 54 121 9220",
    href: "tel:+233541219220",
  },
];

const inputClass = `
  w-full px-4 py-3.5 rounded-2xl text-sm
  bg-slate-50 dark:bg-slate-800/60
  border border-slate-200 dark:border-slate-700
  text-slate-900 dark:text-white
  placeholder:text-slate-400 dark:placeholder:text-slate-500
  outline-none
  focus:border-cyan-400 dark:focus:border-cyan-500
  focus:ring-2 focus:ring-cyan-400/10
  transition-all duration-200
`;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm]     = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    /* Swap this timeout for your real API call / EmailJS / Formspree */
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageWrapper>
      <section
        id="contact"
        className="py-28 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto">

          {/* Label */}
          <motion.div {...fadeUp(0)} className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-500">
              <span className="w-5 h-px bg-cyan-500" />
              Get in touch
              <span className="w-5 h-px bg-cyan-500" />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            {...fadeUp(0.08)}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-slate-900 dark:text-white mb-4"
          >
            Contact Me
          </motion.h2>

          <motion.p
            {...fadeUp(0.13)}
            className="text-center text-slate-500 dark:text-slate-400 text-base mb-16 max-w-md mx-auto"
          >
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* ── Left: contact info ── */}
            <motion.div {...fadeUp(0.18)} className="flex flex-col gap-5">

              {/* Tagline card */}
              <div className="
                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-800
                rounded-3xl p-7
              ">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Let's build something great
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  I'm open to freelance work, full-time roles, and interesting collaborations.
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact items */}
              <div className="flex flex-col gap-3">
                {contactItems.map(({ icon, label, value, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    {...fadeUp(0.22 + i * 0.06)}
                    className="
                      group flex items-center gap-4
                      bg-white dark:bg-slate-900
                      border border-slate-200 dark:border-slate-800
                      rounded-2xl px-5 py-4
                      hover:border-cyan-400/60 dark:hover:border-cyan-500/50
                      hover:shadow-md hover:shadow-cyan-500/5
                      transition-all duration-200
                    "
                  >
                    <span className="
                      w-10 h-10 flex items-center justify-center rounded-xl
                      bg-cyan-500/10 text-cyan-500
                      group-hover:bg-cyan-500 group-hover:text-white
                      transition-all duration-200 text-base flex-shrink-0
                    ">
                      {icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                        {value}
                      </p>
                    </div>
                    <span className="
                      ml-auto text-slate-300 dark:text-slate-600
                      group-hover:text-cyan-500 group-hover:translate-x-0.5
                      transition-all duration-200 text-sm
                    ">→</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ── Right: form ── */}
            <motion.div {...fadeUp(0.22)}>
              <form
                onSubmit={handleSubmit}
                className="
                  bg-white dark:bg-slate-900
                  border border-slate-200 dark:border-slate-800
                  rounded-3xl p-8 flex flex-col gap-4
                "
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="
                    w-full py-3.5 rounded-2xl
                    bg-cyan-500 hover:bg-cyan-400
                    disabled:opacity-70 disabled:cursor-not-allowed
                    text-white font-semibold text-sm tracking-wide
                    transition-all duration-200 hover:scale-[1.02]
                    shadow-lg shadow-cyan-500/20
                    flex items-center justify-center gap-2
                  "
                >
                  {status === "sending" && (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  )}
                  {status === "idle"    && "Send Message →"}
                  {status === "sending" && "Sending…"}
                  {status === "sent"    && "✓ Message sent!"}
                  {status === "error"   && "Failed — try again"}
                </button>

                {status === "sent" && (
                  <p className="text-center text-xs text-emerald-500 mt-1">
                    Thanks! I'll get back to you as soon as possible.
                  </p>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Contact;