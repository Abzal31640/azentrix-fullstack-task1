import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered platform that analyzes resumes and provides smart suggestions to improve ATS scores.",
    tech: ["React", "OpenAI", "Tailwind"],
    icon: "🤖",
  },
  {
    title: "DevOps Monitoring Dashboard",
    description:
      "Real-time infrastructure monitoring dashboard using Docker, Prometheus and Grafana.",
    tech: ["Docker", "Prometheus", "Grafana"],
    icon: "📊",
  },
  {
    title: "Realtime Chat Application",
    description:
      "Modern messaging platform with real-time communication and responsive UI.",
    tech: ["React", "Socket.io", "Firebase"],
    icon: "💬",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen text-white px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-cyan-400 text-center mb-4"
      >
        Project Universe
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-slate-300 mb-16 max-w-2xl mx-auto"
      >
        A collection of projects showcasing my passion for modern web
        development, creative UI design and problem solving.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
              rotateX: 3,
              boxShadow: "0 0 40px rgba(34,211,238,0.2)",
            }}
            className="
              bg-slate-800/70
              backdrop-blur-md
              border
              border-slate-700
              rounded-3xl
              p-8
              transition-all
              duration-300
            "
          >
            {/* Icon */}
            <div className="text-6xl mb-6">
              {project.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="
                    px-3
                    py-1
                    text-sm
                    rounded-full
                    bg-cyan-500/20
                    text-cyan-300
                    border
                    border-cyan-500/30
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                className="
                  flex-1
                  py-2
                  rounded-xl
                  bg-cyan-500
                  font-semibold
                  hover:bg-cyan-600
                  transition
                "
              >
                Live Demo
              </button>

              <button
                className="
                  flex-1
                  py-2
                  rounded-xl
                  border
                  border-cyan-400
                  text-cyan-400
                  hover:bg-cyan-500/10
                  transition
                "
              >
                GitHub
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;