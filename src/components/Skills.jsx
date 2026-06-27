import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 92 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Git", level: 85 },
  { name: "GitHub", level: 90 },
  { name: "Figma", level: 80 },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-cyan-400 mb-4 text-center"
      >
        Skills Galaxy
      </motion.h2>

      <p className="text-slate-300 text-center mb-14 max-w-2xl">
        Technologies and tools I use to build modern, scalable and
        responsive web applications.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(34,211,238,0.25)",
            }}
            className="bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-2xl p-6"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">
                {skill.name}
              </h3>

              <span className="text-cyan-400 font-bold">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${skill.level}%`,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                }}
                className="h-full bg-cyan-400 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;