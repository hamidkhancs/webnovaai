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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-dark-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 md:h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-300 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3 flex-1 text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-dark-400 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Icons */}
                <div className="flex gap-2 text-gray-400 text-xl mb-3">
                  {project.icons.map((IconComponent, i) => (
                    <IconComponent key={i} />
                  ))}
                </div>

                {/* Buttons */}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
