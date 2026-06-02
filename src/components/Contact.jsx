import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    setSuccess("🚀 Message launched successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent text-white flex items-center justify-center px-6"
    >
      <div className="w-full max-w-xl">
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-10">
          Contact Portal
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 rounded bg-slate-700"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 rounded bg-slate-700"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 mb-4 rounded bg-slate-700"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-cyan-500 py-3 rounded-lg font-semibold"
          >
            Launch Message 🚀
          </motion.button>

          {success && (
            <p className="text-green-400 mt-4 text-center">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;