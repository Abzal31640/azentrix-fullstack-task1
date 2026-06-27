import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (message.trim().length < 10) {
      alert("Message must be at least 10 characters");
      return;
    }

    setSuccess("🚀 Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setSuccess("");
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-5xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-cyan-400 text-center mb-4"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-slate-300 mb-12">
          Have a project in mind? Let's build something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/70 backdrop-blur-md p-6 rounded-2xl border border-slate-700">
              <h3 className="text-cyan-400 text-xl font-semibold mb-2">
                📧 Email
              </h3>

              <p className="text-slate-300">
                johnsmith@email.com
              </p>
            </div>

            <div className="bg-slate-800/70 backdrop-blur-md p-6 rounded-2xl border border-slate-700">
              <h3 className="text-cyan-400 text-xl font-semibold mb-2">
                📍 Location
              </h3>

              <p className="text-slate-300">
                India
              </p>
            </div>

            <div className="bg-slate-800/70 backdrop-blur-md p-6 rounded-2xl border border-slate-700">
              <h3 className="text-cyan-400 text-xl font-semibold mb-2">
                🚀 Availability
              </h3>

              <p className="text-slate-300">
                Open for internships and freelance projects.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="bg-slate-800/70 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-xl"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 mb-4 rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 mb-4 rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 mb-4 rounded-xl bg-slate-700 text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 0 25px rgba(34,211,238,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-cyan-500 py-4 rounded-xl font-semibold"
            >
              Send Message 🚀
            </motion.button>

            <AnimatePresence>
              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-400 mt-4 text-center"
                >
                  {success}
                </motion.p>
              )}
            </AnimatePresence>

          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;