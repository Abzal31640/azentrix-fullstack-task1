import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-32 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Small Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block mb-6 px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-500/10 text-cyan-300 text-sm"
        >
          🚀 Frontend Developer & UI Engineer
        </motion.div>

        {/* Animated Name */}
        <TypeAnimation
          sequence={[
            "JOHN SMITH",
            2000,
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
            "UI Engineer",
            2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-cyan-400 leading-tight"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-xl text-slate-300 mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting modern, responsive and engaging web experiences with
          React, JavaScript and creative UI design. Passionate about building
          seamless digital experiences that users love.
        </motion.p>

        {/* Center Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-10"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34,211,238,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="
              px-10
              py-4
              bg-cyan-500
              text-white
              rounded-xl
              font-semibold
              text-lg
              shadow-lg
              shadow-cyan-500/30
            "
          >
            Explore Universe 🚀
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-10 flex flex-col items-center text-slate-400"
      >
        <span className="text-sm mb-2">Scroll Down</span>

        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;