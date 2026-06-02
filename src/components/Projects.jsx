import { motion } from "framer-motion";

const projects = [
  {
    title: "Weather Dashboard",
    description: "Real-time weather application using APIs.",
  },
  {
    title: "E-Commerce Store",
    description: "Modern shopping website with responsive UI.",
  },
  {
    title: "Portfolio Website",
    description: "Animated personal portfolio with Framer Motion.",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent text-white px-6 py-20"
    >
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-16">
        Project Universe
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className="bg-slate-800 rounded-2xl p-8 border border-cyan-500 shadow-xl"
          >
            <div className="text-5xl mb-4">🪐</div>

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-slate-300">
              {project.description}
            </p>

            <button className="mt-6 px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600">
              View Project
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;