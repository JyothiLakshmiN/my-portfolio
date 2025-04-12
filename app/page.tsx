"use client";
import { useState } from "react";
import Button  from "../components/Button";
import { Card, CardContent } from "../components/Card";
import ExperienceStepper from "../components/ExperienceStepper";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe";
import HomeSection from "../components/HomeSection";
import { FaFileDownload } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <nav className="fixed w-full z-50 transition-all z-100 bg-gray-900 text-white duration-30 flex justify-between items-center p-5 shadow-lg bg-black-500 text-white">
        <h1 className="text-2xl font-bold">Jyothi Lakshmi N</h1>
        <ul className="flex space-x-5">
          <li><a href="#home">Home</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <Button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</Button>
      </nav>
      
     <HomeSection/>
      <AboutMe />
      <ExperienceStepper />
      <section id="resume" className="text-center p-10">
        <h2 className="text-3xl font-bold">Resume</h2>
        <Button className="mt-5" href="/resume.pdf" download>
          <FaFileDownload className="mr-2" /> Download Resume
        </Button>
      </section>
      
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {[1, 2, 3].map((project) => (
            <Card key={project} className="p-5">
              <CardContent>
                <h3 className="text-xl font-semibold">Project {project}</h3>
                <p>Description of the project.</p>
                <Button className="mt-3">View Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section id="blogs" className="p-10">
        <h2 className="text-3xl font-bold text-center">Blogs</h2>
        <p className="text-center">Coming soon...</p>
      </section>
      
      <Contact />
    </div>
  );
}
