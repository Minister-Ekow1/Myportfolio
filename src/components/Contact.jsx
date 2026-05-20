import PageWrapper from "./PageWrapper";

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Contact form submitted!");
    };

    return (
        <PageWrapper>
            <section
                id="contact"
                className="
          py-24
          px-6
          bg-slate-50
          dark:bg-slate-900/40
          transition-colors
          duration-300
        "
            >
                <div className="max-w-5xl mx-auto">

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
                        Contact Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Contact Info */}
                        <div
                            className="
                bg-white/80
                dark:bg-white/5
                backdrop-blur-lg
                border
                border-slate-200
                dark:border-white/10
                rounded-3xl
                p-8
                shadow-lg
                dark:shadow-none
                transition
              "
                        >

                            <h3
                                className="
                  text-2xl
                  font-semibold
                  mb-6
                  text-slate-900
                  dark:text-white
                "
                            >
                                Let’s Connect
                            </h3>

                            <div
                                className="
                  space-y-5
                  text-slate-600
                  dark:text-slate-300
                "
                            >

                                <p>
                                    📧 ekowessandoh8492@gmail.com
                                </p>

                                <p>
                                    💻 github.com/yourusername
                                </p>

                                <p>
                                    🔗 linkedin.com/in/yourusername
                                </p>

                                <p>
                                    📱 +233 XX XXX XXXX
                                </p>

                            </div>
                        </div>

                        {/* Contact Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="
                bg-white/80
                dark:bg-white/5
                backdrop-blur-lg
                border
                border-slate-200
                dark:border-white/10
                rounded-3xl
                p-8
                space-y-5
                shadow-lg
                dark:shadow-none
                transition
              "
                        >

                            {/* Name */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                className="
                  w-full
                  bg-white
                  dark:bg-slate-900
                  border
                  border-slate-300
                  dark:border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  text-slate-900
                  dark:text-white
                  placeholder:text-slate-400
                  focus:border-cyan-400
                  transition
                "
                            />

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                className="
                  w-full
                  bg-white
                  dark:bg-slate-900
                  border
                  border-slate-300
                  dark:border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  text-slate-900
                  dark:text-white
                  placeholder:text-slate-400
                  focus:border-cyan-400
                  transition
                "
                            />

                            {/* Message */}
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                required
                                className="
                  w-full
                  bg-white
                  dark:bg-slate-900
                  border
                  border-slate-300
                  dark:border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  text-slate-900
                  dark:text-white
                  placeholder:text-slate-400
                  focus:border-cyan-400
                  transition
                "
                            ></textarea>

                            {/* Button */}
                            <button
                                type="submit"
                                className="
                  w-full
                  py-3
                  rounded-xl
                  bg-cyan-500
                  hover:bg-cyan-400
                  text-white
                  transition
                  font-semibold
                  hover:scale-[1.02]
                "
                            >
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}

export default Contact;