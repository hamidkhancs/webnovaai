import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // new state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    const SERVICE_ID = "service_k34efo8";    
    const TEMPLATE_ID = "template_27tmfnl";  
    const PUBLIC_KEY = "jqj4lf6bdtVRW4-GE"; 

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title: "Contact Form",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false); // stop loading
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send message. Try again later.");
          setLoading(false); // stop loading
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <motion.section
      id="hireme"
      className="min-h-screen bg-dark-100 flex items-center justify-center py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Get in <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.
        </p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-dark-300 p-8 md:p-10 rounded-3xl shadow-lg flex flex-col gap-6"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="flex-1 px-4 py-3 rounded-xl bg-dark-400 border border-gray-700 text-gray-200 focus:outline-none focus:border-purple transition"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-xl bg-dark-400 border border-gray-700 text-gray-200 focus:outline-none focus:border-purple transition"
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            className="px-4 py-3 rounded-xl bg-dark-400 border border-gray-700 text-gray-200 focus:outline-none focus:border-purple transition resize-none"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading} // disable during loading
            className={`bg-purple text-dark-100 font-semibold px-6 py-3 rounded-xl hover:bg-purple/80 transition flex items-center justify-center ${
              loading ? "cursor-not-allowed opacity-70" : ""
            }`}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-t-white border-b-white border-l-transparent border-r-transparent rounded-full animate-spin"></div>
            ) : (
              "Send Message"
            )}
          </button>

          {status && (
            <p
              className={`mt-4 text-center font-medium ${
                status.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </motion.form>

        {/* Contact Info */}
        <div className="mt-12 text-center text-gray-400 space-y-3">
          <p>Email 1: <span className="text-purple">hamidkhancs@gmail.com</span></p>
          <p>Email 2: <span className="text-purple">webnovaai@gmail.com</span></p>
          <p>Phone: <span className="text-purple">03149290853</span></p>
          <div className="flex justify-center gap-6 mt-4 text-2xl text-gray-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition duration-300">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition duration-300">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition duration-300">Twitter</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
