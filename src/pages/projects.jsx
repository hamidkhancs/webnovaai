import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";

// Animation variants for parent container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // stagger cards
    },
  },
};

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animated Project Card
const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="bg-dark-300 rounded-3xl overflow-hidden shadow-md border border-white/10 flex flex-col transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="h-44 md:h-48 w-full overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-lg md:text-xl font-semibold text-gray-300 mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-3 flex-1 text-sm md:text-base">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-2 py-1 bg-dark-400 rounded-full text-xs text-gray-300">{tech}</span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple text-dark-100 px-3 py-1 rounded-md text-sm hover:bg-purple/80 transition"
        >
          Demo
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm hover:bg-gray-600 transition"
        >
          Code
        </a>
      </div>
    </div>
  </motion.div>
);

// Projects Section
const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => setVisibleCount(prev => prev + 3);

  return (
    <section id="projects" className="min-h-screen py-24 bg-dark-100 flex flex-col justify-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          My <span className="text-purple">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg">
          A collection of projects demonstrating my skills in frontend, backend, mobile, and cloud development.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.slice(0, visibleCount).map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>

        {visibleCount < projects.length && (
          <div className="text-center mt-10">
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple text-dark-100 px-6 py-2 rounded-full font-semibold hover:bg-purple/80 transition"
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
