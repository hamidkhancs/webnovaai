import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 bg-dark-100 flex flex-col justify-center"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          My <span className="text-purple">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg">
          A collection of projects demonstrating my skills in frontend, backend, mobile, and cloud development.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-300 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Optional overlay for professional look */}
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Icons */}
                <div className="flex gap-3 text-gray-400 text-2xl mb-4">
                  {project.icons.map((IconComponent, i) => (
                    <IconComponent key={i} />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple text-dark-100 px-5 py-2 rounded-lg hover:bg-purple/80 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-gray-200 px-5 py-2 rounded-lg hover:bg-gray-600 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
