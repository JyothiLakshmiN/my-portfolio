"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center flex flex-col justify-center items-center min-h-screen px-6"
    >
      <h1 className="text-5xl font-bold text-indigo-500 dark:text-indigo-300">Welcome to My Portfolio</h1>
      <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-lg">
        Building innovative applications using AI & ML.
      </p>
    </motion.section>
  );
}
export default Hero;
