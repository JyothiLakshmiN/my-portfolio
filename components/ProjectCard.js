"use client";

import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <a
        href={link}
        className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        View Project
      </a>
    </motion.div>
  );
}

export default ProjectCard;