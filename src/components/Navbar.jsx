import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-cyan-400 text-2xl md:text-3xl font-bold cursor-pointer"
        >
          JOHN SMITH
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">

          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{
                scale: 1.05,
                color: "#22d3ee",
              }}
              className="font-medium transition duration-300"
            >
              {link.name}
            </motion.a>
          ))}

          <motion.a
            href="/resume.pdf"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34,211,238,0.4)",
            }}
            className="px-5 py-2 rounded-xl bg-cyan-500 text-white font-semibold"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-cyan-400 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-slate-900/95 backdrop-blur-xl"
        >
          <div className="flex flex-col px-6 py-4 gap-4 text-white">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              className="px-4 py-2 text-center bg-cyan-500 rounded-lg"
            >
              Resume
            </a>

          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;