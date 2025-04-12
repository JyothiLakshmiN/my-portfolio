"use client";
import { motion } from "framer-motion";
import { about_me_message } from "../all-texts";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
      <div className="text-center">
            <h2 className="section-title">About Me</h2>
            <div className="mt-8 max-w-3xl mx-auto">
                <p className="text-lg text-gray-300 leading-relaxed">{about_me_message}</p>
                <p className="mt-4 text-lg text-gray-300 leading-relaxed">With expertise in full-stack development and data
                    science, I specialize in building scalable applications and implementing machine learning models.
                    I'm particularly interested in the intersection of software engineering and artificial intelligence,
                    where I can leverage both skills to create impactful solutions.</p>
            </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-md border border-gray-800 bg-gray-900/50 p-6">
                <h3
                    className="text-xl font-semibold text-white mb-4 group-hover:text-blue-500 transition-colors duration-300">
                    Web Development</h3>
                <p className="text-gray-400">Building scalable web applications with modern technologies and best practices.
                </p>
            </div>
            <div className="rounded-md border border-gray-800 bg-gray-900/50 p-6">
                <h3
                    className="text-xl font-semibold text-white mb-4 group-hover:text-blue-500 transition-colors duration-300">
                    Machine Learning</h3>
                <p className="text-gray-400">Developing and deploying ML models to solve complex business problems.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
