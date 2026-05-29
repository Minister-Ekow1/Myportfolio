import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
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
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+233 54 121 9220",
    href: "https://wa.me/233541219220",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+233 54 121 9220",
    href: "tel:+233541219220",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.6,
    delay,
  },
});

const inputClass = `
  w-full
  px-4
  py-3.5
  rounded-2xl
  text-sm
  bg-slate-50
  dark:bg-slate-800/60
  border
  border-slate-200
  dark:border-slate-700
  text-slate-900
  dark:text-white
  placeholder:text-slate-400
  dark:placeholder:text-slate-500
  outline-none
  focus:border-cyan-400
  dark:focus:border-cyan-500
  focus:ring-2
  focus:ring-cyan-400/10
  transition-all
`;

function Contact() {
  const formRef = useRef();

  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");

      formRef.current.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <PageWrapper>
      <section
        id="contact"
        className="
          py-28
          px-6
          bg-slate-50
          dark:bg-slate-950
          transition-colors
          duration-300
        "
      >
        <div className="max-w-5xl mx-auto">

          {/* Section Label */}
          <motion.div
            {...fadeUp()}
            className="flex justify-center mb-4"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-500">
              <span className="w-5 h-px bg-cyan-500" />
              Get In Touch
              <span className="w-5 h-px bg-cyan-500" />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            {...fadeUp(0.1)}
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-center
              text-slate-900
              dark:text-white
              mb-4
            "
          >
            Contact Me
          </motion.h2>

          <motion.p
            {...fadeUp(0.15)}
            className="
              text-center
              text-slate-500
              dark:text-slate-400
              max-w-md
              mx-auto
              mb-16
            "
          >
            Have a project in mind or want to work together?
            I'd love to hear from you.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Contact Info */}
            <motion.div
              {...fadeUp(0.2)}
              className="flex flex-col gap-5"
            >
              <div
                className="
                  bg-white
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-slate-800
                  rounded-3xl
                  p-7
                "
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Let's Build Something Great
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Open to freelance projects, collaborations,
                  and full-time opportunities.
                </p>
              </div>

              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  {...fadeUp(0.25 + index * 0.05)}
                  className="
                    flex items-center gap-3
                    bg-white
                    dark:bg-slate-900
                    border
                    border-slate-200
                    dark:border-slate-800
                    rounded-2xl
                    p-4
                    hover:border-cyan-400
                    transition
                  "
                >
                  <span className="text-cyan-500 text-lg">
                    {item.icon}
                  </span>

                  <div>
                    <p className="text-xs text-slate-400">
                      {item.label}
                    </p>

                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div {...fadeUp(0.25)}>
              <form
                ref={formRef}
                onSubmit={sendEmail}
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
                  gap-4
                "
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className={inputClass}
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className={inputClass}
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="
                    py-3.5
                    rounded-2xl
                    bg-cyan-500
                    hover:bg-cyan-400
                    disabled:opacity-70
                    text-white
                    font-semibold
                    transition
                  "
                >
                  {status === "idle" && "Send Message"}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && "✓ Message Sent"}
                  {status === "error" && "Failed to Send"}
                </button>

                {status === "sent" && (
                  <p className="text-center text-sm text-green-500">
                    Thank you! Your message has been sent.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-center text-sm text-red-500">
                    Something went wrong. Please try again.
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