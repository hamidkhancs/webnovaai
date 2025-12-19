import React from "react";
import { motion } from "framer-motion";
import ProfileIMG from "../assets/profile.avif";
import { skills } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-28 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="mt-8 text-gray-300 text-center  max-w-3xl mx-auto mb-20 leading-relaxed text-lg md:text-xl">
          I’m a passionate frontend developer building clean, responsive, and
  user-friendly web experiences using React, Tailwind CSS, and modern
  JavaScript tools.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Image */}
          <div className="md:w-2/5 w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-contain rounded-2xl"
              src={ProfileIMG}
              alt="Profile"
            />
          </div>

          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-2/5 w-full max-w-lg mx-auto"
          >
            <div className="rounded-2xl bg-dark-300 p-10 md:p-12 shadow-lg border border-white/10">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
                My <span className="text-purple">Journey</span>
              </h3>
              <p className="text-gray-300 text-center text-justify leading-relaxed text-lg md:text-lg">
                My journey into web development began with a curiosity about how
                websites are built and how ideas turn into interactive
                experiences. What started as learning basic HTML and CSS quickly
                grew into a passion for creating responsive, user-friendly
                interfaces. Over time, I’ve strengthened my skills in
                JavaScript, React, and modern frontend tools, focusing on clean
                code, smooth animations, and intuitive design. I enjoy
                continuously learning, solving problems, and improving my craft
                with every project, aiming to build meaningful digital
                experiences that make an impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
