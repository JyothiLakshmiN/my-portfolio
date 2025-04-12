
"use client";
import { motion } from "framer-motion";

const BlogCard = ({ title, excerpt, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{excerpt}</p>
      <a
        href={link}
        className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Read More
      </a>
    </motion.div>
  );
}

export default BlogCard;