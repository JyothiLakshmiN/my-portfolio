"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";

const projects = [
  { title: "AI Bug Prediction", description: "A tool to predict bugs using AI.", image: "/bug.jpg", link: "#" },
  { title: "Health & Diet AI", description: "Personalized diet recommendations.", image: "/diet.jpg", link: "#" },
  { title: "E-commerce Dashboard", description: "A modern admin panel.", image: "/dashboard.jpg", link: "#" },
];

const blogs = [
  { title: "AI in Software Testing", excerpt: "How AI is revolutionizing testing.", link: "#" },
  { title: "Future of LLMs", excerpt: "Understanding the next-gen AI models.", link: "#" },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-6">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
          className="text-4xl font-extrabold">
          Welcome to My Portfolio
        </motion.h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          I'm a passionate developer working on innovative AI projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-10 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="mt-10 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-10 w-full max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <form className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md border dark:bg-gray-700 mb-4" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md border dark:bg-gray-700 mb-4" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded-md border dark:bg-gray-700 mb-4"></textarea>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-gray-500 text-center text-sm">
        &copy; 2025 My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
