import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../assets/assets';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="min-h-screen py-24 bg-dark-100 flex flex-col justify-center"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          My <span className="text-purple">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg">
          I use modern tools and technologies to create clean, responsive, and user-friendly web experiences.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-300 rounded-3xl p-8 shadow-lg border border-white/10 transition-transform duration-300"
              >
                {/* Icon & Title */}
                <div className="flex flex-col items-center mb-4">
                  <Icon className="text-5xl mb-4 text-purple" />
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">{skill.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-center mb-4">{skill.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {skill.tags.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
