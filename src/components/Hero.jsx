import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-transparent flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-20 right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <TypeAnimation
          sequence={[
            "NOVA REED",
            2000,
            "Creative Developer",
            2000,
            "Motion Designer",
            2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-5xl md:text-8xl font-bold text-cyan-400"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl text-slate-300 mt-6"
        >
          Building immersive digital experiences with creativity and code.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(34,211,238,0.7)",
          }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-8 py-3 bg-cyan-500 text-white rounded-xl font-semibold"
        >
          Explore Universe 🚀
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;