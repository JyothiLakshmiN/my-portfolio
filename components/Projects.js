"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "AI Bug Predictor", description: "A tool for predicting code bugs using AI." },
  { title: "Health & Diet Recommender", description: "AI-powered personalized diet plans." },
  { title: "Code Review Assistant", description: "Automated AI code reviews with insights." }
];

const Projects = () => {
  return (
    <section id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg transition-transform duration-300 dark:bg-gray-800 dark:text-white"
        >
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-gray-300">{project.description}</p>
        </motion.div>
      ))}
    </section>
  );
}

export default  Projects;