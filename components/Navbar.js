"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="w-full p-4 bg-white dark:bg-gray-800 shadow-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#blogs" className="hover:text-blue-600">Blogs</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          <li>
            <a href="/resume.pdf" download className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Resume
            </a>
          </li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded-md">
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
