import React from "react";
import { motion } from "framer-motion";
import profile from '../assets/Pic.png'; // Your professional photo

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gray-900"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I am <span className="text-indigo-500">Hamid Khan</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300 typewriter">
            Front-End Developer
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Building modern, high-performance websites with innovative design.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
          >
            <img
              src={profile}
              alt="Profile"
              className="relative rounded-2xl w-full h-full object-cover shadow-2xl "
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
