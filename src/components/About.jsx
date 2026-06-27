import { motion } from "framer-motion";

function About() {
  const timeline = [
    "2022 - Started Learning Web Development",
    "2023 - Built First React Project",
    "2024 - Mastered Frontend Development",
    "2025 - Created Creative UI Projects",
    "2026 - Frontend Developer Intern",
  ];

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "3+", label: "Years Learning" },
    { number: "1000+", label: "Coding Hours" },
    { number: "10+", label: "Technologies" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-cyan-400 text-center mb-6"
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-center max-w-3xl mx-auto text-lg leading-relaxed mb-16"
        >
          I'm <span className="text-cyan-400 font-semibold">John Smith</span>,
          a passionate Frontend Developer focused on building modern,
          responsive and user-friendly web applications. I enjoy turning ideas
          into interactive digital experiences using React, JavaScript and
          creative UI design.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(34,211,238,0.2)",
              }}
              className="bg-slate-800/70 backdrop-blur-md p-6 rounded-2xl text-center border border-slate-700"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.number}
              </h3>

              <p className="text-slate-300 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Journey Heading */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          My Journey
        </motion.h3>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-cyan-400 hidden md:block"></div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  scale: 1.02,
                }}
                className="relative bg-slate-800/70 backdrop-blur-md p-6 rounded-2xl border border-slate-700 md:ml-12"
              >
                <div className="absolute -left-16 top-7 hidden md:block w-5 h-5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400"></div>

                <p className="text-lg text-slate-200">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;