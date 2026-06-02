import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Figma",
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center px-6"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-12">
        Skills Galaxy
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            className="bg-slate-800 border border-cyan-500 p-6 rounded-xl text-center shadow-lg"
          >
            <h3 className="text-lg font-semibold">{skill}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;