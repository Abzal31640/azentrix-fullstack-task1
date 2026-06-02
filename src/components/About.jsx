import { motion } from "framer-motion";

function About() {
  const timeline = [
    "2022 - Started Learning Web Development",
    "2023 - Built First React Project",
    "2024 - Mastered Frontend Development",
    "2025 - Created Creative UI Projects",
    "2026 - Frontend Developer Intern",
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-transparent text-white flex items-center justify-center px-6"
    >
      <div className="max-w-4xl">
        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12">
          My Journey
        </h2>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800 p-6 rounded-xl border-l-4 border-cyan-400"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;